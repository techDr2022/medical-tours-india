"use client"

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

const WHATSAPP_NUMBER = "+919032292171"

export function Footer() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'm interested in medical treatment guidance.")}`
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MedicalToursIndia.com</h3>
            <p className="text-gray-400 leading-relaxed">
              Assisting international patients with treatment guidance in India. We provide honest, transparent support for your medical journey.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </button>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Serving Patients From</h4>
            <div className="space-y-2 text-gray-400">
              <div>🇺🇸 United States</div>
              <div>🇬🇧 United Kingdom</div>
              <div>🇦🇪 United Arab Emirates</div>
              <div>🌍 Africa</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Medical Tours India. All rights reserved.</p>
          <p className="mt-2">100% Free Medical Guidance • No Hidden Fees • Trusted by International Patients</p>
        </div>
      </div>
    </footer>
  )
}
