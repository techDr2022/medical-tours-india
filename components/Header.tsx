"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "+919032292171"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'm interested in medical treatment guidance in India.")}`
    window.open(url, "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const scrollToLeadForm = () => {
    scrollToSection("lead-form")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-12 md:w-40 md:h-14 flex-shrink-0">
                <Image
                  src="https://www.medicaltoursindia.com/assets/images/color-logo-3.svg"
                  alt="Medical Tours India Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("lead-form")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Get Estimate
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="h-10 border-2 hover:bg-primary/5"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={scrollToLeadForm}
              className="h-10 gradient-primary hover:opacity-90 shadow-md"
            >
              Free Guidance
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("lead-form")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              Get Estimate
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              How It Works
            </button>
            <Link
              href="/blog"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              Blog
            </Link>
            <div className="pt-2 space-y-2 border-t">
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full h-11 border-2"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp: {WHATSAPP_NUMBER}
              </Button>
              <Button
                onClick={scrollToLeadForm}
                className="w-full h-11 gradient-primary hover:opacity-90"
              >
                Get Free Medical Guidance
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
