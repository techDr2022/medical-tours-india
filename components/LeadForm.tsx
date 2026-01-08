"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, FileText, ArrowRight, Shield } from "lucide-react"

const countries = ["USA", "UK", "UAE", "Africa", "Other"]

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    whatsapp: "",
    email: "",
    condition: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      // Convert files to base64 for sending
      // Limit file size to 10MB per file (Resend limit is 25MB total)
      const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
      
      // Validate file sizes first
      for (const file of files) {
        if (file.size > MAX_FILE_SIZE) {
          throw new Error(`File "${file.name}" is too large. Maximum size is 10MB per file.`)
        }
      }
      
      const fileAttachments = await Promise.all(
        files.map(async (file) => {
          return new Promise<{ name: string; content: string; type: string }>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
              try {
                const base64 = (reader.result as string).split(',')[1] // Remove data:type;base64, prefix
                resolve({
                  name: file.name,
                  content: base64,
                  type: file.type,
                })
              } catch (err) {
                reject(new Error(`Failed to process file: ${file.name}`))
              }
            }
            reader.onerror = () => reject(new Error(`Failed to read file: ${file.name}`))
            reader.readAsDataURL(file)
          })
        })
      )

      // Send email via Resend API
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          country: formData.country,
          whatsapp: formData.whatsapp,
          email: formData.email,
          condition: formData.condition,
          filesCount: files.length,
          attachments: fileAttachments,
        }),
      })

      const emailResult = await emailResponse.json()

      // If Resend is not configured, use mailto fallback
      if (emailResult.useMailto) {
        const emailTo = "info@techdr.in"
        const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailResult.emailSubject)}&body=${encodeURIComponent(emailResult.emailBody)}`
        window.location.href = mailtoLink
      } else if (!emailResult.success) {
        console.error("Email sending failed:", emailResult.message)
        // Fallback to mailto if Resend fails
        const emailTo = "info@techdr.in"
        const emailSubject = `New Medical Guidance Request - ${formData.name}`
        const emailBody = `New Medical Guidance Request\n\nPatient: ${formData.name}\nCountry: ${formData.country}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email || "Not provided"}\n\nCondition: ${formData.condition}\n\nFiles: ${files.length} file(s)`
        const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        window.location.href = mailtoLink
      }

      // Prepare WhatsApp message with form details
      const whatsappNumber = "+919032292171"
      const whatsappMessage = `*New Medical Guidance Request*

*Patient Details:*
Name: ${formData.name}
Country: ${formData.country}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || "Not provided"}

*Medical Condition:*
${formData.condition}

Files: ${files.length} file(s) attached
Submitted via: cost.medicaltoursindia.com`
      
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
      
      // Open WhatsApp
      window.open(whatsappUrl, "_blank")
      
      // Show success message
      setSubmitted(true)
      setIsSubmitting(false)

    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
      setError(error instanceof Error ? error.message : "An error occurred. Please try again.")
      // Don't show success if there's an error
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  if (submitted) {
    return (
      <Card className="shadow-soft-lg border-0 bg-white">
        <CardContent className="pt-8 pb-8">
          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
              <p className="text-lg text-gray-600">
                We&apos;ve received your information.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <p className="font-semibold text-gray-900">What Happens Next?</p>
              </div>
              <ul className="text-left space-y-2 text-sm text-gray-600 max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>A medical coordinator will review your case within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>You&apos;ll receive a personalized cost estimate and treatment guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>We&apos;ll discuss hospital and doctor options that match your needs</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Your details have been sent to our team. Opening WhatsApp for immediate assistance...
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-soft-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Before We Share Your Estimate, We Review Your Case Carefully
          </CardTitle>
        </div>
        <CardDescription className="text-base mt-2 text-gray-600">
          Every enquiry is reviewed by a medical coordinator to ensure guidance is relevant, safe, and realistic.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="h-12 border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-country" className="text-sm font-semibold text-gray-700">
                Country <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
                required
              >
                <SelectTrigger id="form-country" className="h-12 border-2 focus:border-primary">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-semibold text-gray-700">
                WhatsApp Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+1 234 567 8900"
                className="h-12 border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email <span className="text-gray-400 font-normal">(optional)</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="h-12 border-2 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="condition" className="text-sm font-semibold text-gray-700">
              Brief Description of Condition <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="condition"
              required
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              placeholder="Please describe your medical condition or treatment needs..."
              rows={4}
              className="resize-none border-2 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files" className="text-sm font-semibold text-gray-700">
              Upload Medical Reports (PDF / JPG / PNG)
            </Label>
            <div className="relative">
              <Input
                id="files"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={handleFileChange}
                className="cursor-pointer h-12 border-2 border-dashed focus:border-primary"
              />
              {files.length > 0 && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">{files.length} file(s) selected</span>
                  </div>
                  <ul className="text-xs text-gray-600 ml-6 list-disc">
                    {files.map((file, idx) => (
                      <li key={idx}>
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Maximum 10MB per file. Files will be attached to the email.
              </p>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 text-base font-semibold gradient-primary hover:opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Get Free Medical Guidance"}
            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>

          <div className="flex items-start gap-2 pt-2 bg-gray-50 rounded-lg p-4">
            <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-semibold">Your privacy is protected.</span> We never share your medical information with third parties. All data is encrypted and securely stored.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
