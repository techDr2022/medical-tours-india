import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const emailContent = `
New Medical Guidance Request - cost.medicaltoursindia.com

Patient Details:
-----------------
Name: ${formData.name}
Country: ${formData.country}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || "Not provided"}

Medical Condition:
------------------
${formData.condition}

Files Attached: ${formData.filesCount || 0} file(s)

Submitted: ${new Date().toLocaleString()}
Source: cost.medicaltoursindia.com
    `.trim()

    // Send email using mailto (for client-side) or you can integrate with email service
    // For production, integrate with Resend, SendGrid, or similar service
    
    // For now, we'll return success and the email can be sent client-side
    // Or you can integrate with an email service here
    
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully",
      emailContent // Return email content for client-side handling
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    )
  }
}
