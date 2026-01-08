"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Users, Clock, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const WHATSAPP_NUMBER = "+919032292171"
const PHONE_NUMBER = "+919032292171"

const supportFeatures = [
  "Review medical reports personally",
  "Explain treatment steps clearly",
  "Plan travel timelines",
  "Set recovery expectations",
  "Single point of contact throughout",
]

export function HumanSupportSection() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'd like to speak with a medical coordinator.")}`
    window.open(url, "_blank")
  }

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Human Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                You Will Speak to a <span className="text-primary">Person, Not a System</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Behind this platform is a real coordination team that assists international patients every day.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From reviewing reports to explaining treatment steps, travel timelines, and recovery expectations, our coordinators remain your single point of contact.
            </p>

            <div className="space-y-3 pt-4">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={handleWhatsApp}
                className="h-14 px-8 text-base font-semibold bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: {WHATSAPP_NUMBER}
              </Button>
              
              <Button
                onClick={handleCall}
                variant="outline"
                className="h-14 px-8 text-base font-semibold border-2 hover:bg-primary/5"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Card */}
          <div className="relative">
            <Card className="border-0 shadow-soft-lg bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">Medical Coordinator</div>
                      <div className="text-sm text-gray-600">Available 24/7</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-primary/20">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">Average response time: 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">Personal case review</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">WhatsApp support included</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
