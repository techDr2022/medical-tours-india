"use client"

import { useState } from "react"
import { CostEstimator } from "@/components/CostEstimator"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LeadForm } from "@/components/LeadForm"
import { Button } from "@/components/ui/button"
import { MessageCircle, Shield, Users, Clock } from "lucide-react"
import { AnimatedHeadline } from "@/components/AnimatedHeadline"

const WHATSAPP_NUMBER = "+919032292171"

export function HeroSection() {
  const [showLeadForm, setShowLeadForm] = useState(false)

  const handleEstimateSubmit = () => {
    setShowLeadForm(true)
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'm interested in medical treatment guidance in India.")}`
    window.open(url, "_blank")
  }

  const trustBadges = [
    { icon: Users, text: "500+ Patients Assisted" },
    { icon: Shield, text: "100% Free Guidance" },
    { icon: Clock, text: "24hr Response Time" },
  ]

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden" itemScope itemType="https://schema.org/MedicalBusiness">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft border border-gray-100">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="space-y-6">
              <AnimatedHeadline />
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                When treatment decisions involve your health, your family, and another country, you deserve <span className="font-semibold text-gray-900">clarity, honesty, and human guidance</span> — not sales pressure.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Medical Tours India helps international patients understand treatment options in India, estimate realistic costs, and plan care confidently in <span className="font-semibold">Hyderabad</span>.
              </p>
            </div>

            {/* Quick CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => {
                  const element = document.getElementById("lead-form")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
                className="h-14 px-8 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl"
              >
                Get Free Medical Guidance
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="h-14 px-8 text-base font-semibold border-2 hover:bg-primary/5"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Column - Cost Estimator */}
          <div className="md:sticky md:top-8 animate-slide-up">
            <CostEstimator onEstimateSubmit={handleEstimateSubmit} />
          </div>
        </div>
      </div>

      {/* Lead Form Modal */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <LeadForm />
        </DialogContent>
      </Dialog>
    </section>
  )
}
