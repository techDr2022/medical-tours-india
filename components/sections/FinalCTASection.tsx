"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "+919032292171"

const benefits = [
  "Free medical guidance",
  "No hidden fees",
  "24-hour response time",
  "Personal coordinator",
]

export function FinalCTASection() {
  const scrollToLeadForm = () => {
    const element = document.getElementById("lead-form")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'd like free medical guidance.")}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="border-0 shadow-soft-lg bg-white">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Your health journey deserves <span className="text-primary">care, not confusion</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you are considering treatment in India and want clear answers before making a decision, start with free medical guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={scrollToLeadForm}
                className="h-14 px-10 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl"
              >
                Get Free Medical Guidance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="h-14 px-10 text-base font-semibold border-2 hover:bg-primary/5"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
