import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { treatments } from "@/lib/treatments"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ArrowRight, Stethoscope } from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Treatments in India - Complete Guide | Medical Tours India",
  description: "Explore comprehensive medical treatments available in India including IVF, heart surgery, cancer care, joint replacement, spine surgery, cosmetic procedures, dental care, and organ transplants. Get free guidance on costs and best hospitals.",
  keywords: [
    "medical treatments India",
    "medical procedures India",
    "treatments in India",
    "medical tourism treatments",
    "IVF India",
    "heart surgery India",
    "cancer treatment India",
    "joint replacement India",
    "spine surgery India",
    "cosmetic surgery India",
    "dental treatment India",
    "organ transplant India",
    "medical treatment cost India",
    "best hospitals India",
    "medical tourism guide",
  ],
  openGraph: {
    title: "Medical Treatments in India - Complete Guide | Medical Tours India",
    description: "Explore comprehensive medical treatments available in India. Get free guidance on costs, hospitals, and treatment processes.",
    url: "https://cost.medicaltoursindia.com/treatments",
    type: "website",
    siteName: "Medical Tours India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Treatments in India",
      },
    ],
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/treatments",
  },
}

export default function TreatmentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Medical Treatments in India",
    description: "Comprehensive guide to medical treatments available in India",
    url: "https://cost.medicaltoursindia.com/treatments",
    provider: {
      "@type": "MedicalBusiness",
      name: "Medical Tours India",
      url: "https://cost.medicaltoursindia.com",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Treatments We Commonly <span className="text-primary">Assist With</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We focus on matching the right expertise to your condition, not overwhelming you with endless choices. 
              Explore our comprehensive treatment guides to understand costs, processes, and best hospitals in India.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {treatments.map((treatment) => (
              <Link key={treatment.slug} href={`/treatments/${treatment.slug}`}>
                <Card className="border-2 border-gray-100 hover:border-primary/30 transition-all hover:shadow-lg bg-white group cursor-pointer h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`inline-flex items-center justify-center p-4 ${treatment.color} rounded-xl mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                      <Image
                        src={treatment.svg}
                        alt={treatment.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                      {treatment.description}
                    </p>
                    <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Why Choose India for Medical Treatment?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80-90%</div>
                <p className="text-gray-700">Cost Savings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">JCI/NABH</div>
                <p className="text-gray-700">Accredited Hospitals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-700">Free Guidance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-white border-2 border-primary/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Need Help Choosing the Right Treatment?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our medical coordinators provide free, honest guidance to help you understand your options, 
              estimate costs, and find the best hospital for your specific condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#lead-form">
                <Button className="gradient-primary hover:opacity-90 h-12 px-8 text-base">
                  Get Free Medical Guidance
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="h-12 px-8 text-base border-2">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
