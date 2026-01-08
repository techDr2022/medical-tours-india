import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    if (!formData.name || !formData.country || !formData.whatsapp || !formData.condition) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email content
    const emailSubject = `New Medical Guidance Request - ${formData.name}`
    const emailBody = `
New Medical Guidance Request - cost.medicaltoursindia.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATIENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Country: ${formData.country}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MEDICAL CONDITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.condition}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Files Attached: ${formData.filesCount || 0} file(s)
${formData.attachments && formData.attachments.length > 0 
  ? formData.attachments.map((f: { name: string }) => `  - ${f.name}`).join('\n')
  : '  (No files attached)'}
Submitted: ${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'long'
})}
Source: cost.medicaltoursindia.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim()

    // HTML version for better formatting
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #0ea5e9; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .section { margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #0ea5e9; }
    .label { font-weight: bold; color: #0ea5e9; }
    .footer { margin-top: 30px; padding: 15px; background: #f9f9f9; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Medical Guidance Request</h2>
    <p>cost.medicaltoursindia.com</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h3>Patient Details</h3>
      <p><span class="label">Name:</span> ${formData.name}</p>
      <p><span class="label">Country:</span> ${formData.country}</p>
      <p><span class="label">WhatsApp:</span> ${formData.whatsapp}</p>
      <p><span class="label">Email:</span> ${formData.email || "Not provided"}</p>
    </div>
    
    <div class="section">
      <h3>Medical Condition</h3>
      <p>${formData.condition.replace(/\n/g, '<br>')}</p>
    </div>
    
    <div class="section">
      <h3>Additional Information</h3>
      <p><span class="label">Files Attached:</span> ${formData.filesCount || 0} file(s)</p>
      ${formData.attachments && formData.attachments.length > 0 
        ? `<ul style="margin: 10px 0; padding-left: 20px;">
            ${formData.attachments.map((f: { name: string }) => `<li>${f.name}</li>`).join('')}
          </ul>`
        : '<p style="color: #999;">(No files attached)</p>'}
      <p><span class="label">Submitted:</span> ${new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })}</p>
      <p><span class="label">Source:</span> cost.medicaltoursindia.com</p>
    </div>
  </div>
  
  <div class="footer">
    <p>This email was automatically generated from the Medical Tours India contact form.</p>
  </div>
</body>
</html>
    `.trim()

    // Prepare attachments from files
    // Resend accepts attachments as base64 strings or Buffers
    const attachments = formData.attachments && Array.isArray(formData.attachments) && formData.attachments.length > 0
      ? formData.attachments.map((file: { name: string; content: string; type: string }) => {
          // Convert base64 to Buffer for Resend
          const buffer = Buffer.from(file.content, 'base64')
          return {
            filename: file.name,
            content: buffer,
          }
        })
      : []

    // Send email using Resend if configured
    if (!resend) {
      // Fallback: Return email content for client-side handling
      console.warn("Resend API key not configured. Email will be sent via mailto fallback.")
      return NextResponse.json({ 
        success: true, 
        message: "Email prepared (Resend not configured)",
        emailSubject,
        emailBody,
        useMailto: true
      })
    }

    const emailPayload: any = {
      from: process.env.RESEND_FROM_EMAIL || 'Medical Tours India <noreply@cost.medicaltoursindia.com>',
      to: 'info@techdr.in',
      subject: emailSubject,
      text: emailBody,
      html: emailHtml,
      replyTo: formData.email || 'noreply@cost.medicaltoursindia.com',
    }

    // Add attachments if any
    if (attachments.length > 0) {
      emailPayload.attachments = attachments
    }

    const { data, error } = await resend.emails.send(emailPayload)

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { success: false, message: "Failed to send email", error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully to info@techdr.in",
      emailId: data?.id
    })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
