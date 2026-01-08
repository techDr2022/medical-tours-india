"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MobileCTA() {
  const scrollToLeadForm = () => {
    const element = document.getElementById("lead-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-primary/20 p-4 md:hidden shadow-soft-lg">
      <Button
        onClick={scrollToLeadForm}
        className="w-full h-14 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg"
      >
        Get Free Medical Guidance
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  )
}
