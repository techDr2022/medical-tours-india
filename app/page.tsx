import { Metadata } from "next"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { LeadFormSection } from "@/components/sections/LeadFormSection"
import { WhyTrustSection } from "@/components/sections/WhyTrustSection"
import { HumanSupportSection } from "@/components/sections/HumanSupportSection"
import { TreatmentsSection } from "@/components/sections/TreatmentsSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { ReassuranceSection } from "@/components/sections/ReassuranceSection"
import { BlogSection } from "@/components/sections/BlogSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { MobileCTA } from "@/components/MobileCTA"
import { StructuredData } from "@/components/StructuredData"
import { EnhancedStructuredData } from "@/components/EnhancedStructuredData"

export const metadata: Metadata = {
  title: "Free Medical Guidance for International Patients | Medical Tours India | Cost Estimate",
  description: "Get 100% free medical treatment guidance in Hyderabad, India. Expert medical coordinators help patients from USA, UK, UAE, and Africa understand treatment options, estimate costs, compare hospitals, and plan care. No obligation, no hidden fees. Trusted medical tourism services.",
  keywords: [
    "medical tourism India",
    "medical treatment Hyderabad",
    "free medical guidance",
    "medical cost estimate India",
    "international patients India",
    "Hyderabad hospitals",
    "medical travel India",
    "medical tourism cost",
    "medical tourism Hyderabad",
    "best hospitals Hyderabad",
    "medical tourism services",
    "medical coordinator India",
    "medical tourism consultant",
    "medical tourism facilitator",
    "medical tourism agency",
    "medical tourism company",
    "medical tourism assistance",
    "medical tourism support",
    "medical tourism planning",
    "medical cost calculator",
    "treatment cost estimate",
    "hospital cost India",
    "surgery cost India",
    "affordable healthcare India",
    "cheap medical treatment",
    "low cost medical treatment",
    "medical tourism for Americans",
    "medical tourism for UK patients",
    "medical tourism for UAE patients",
    "medical tourism for African patients",
    "medical tourism USA to India",
    "medical tourism UK to India",
    "medical tourism UAE to India",
    "medical tourism Africa to India",
    "JCI accredited hospitals Hyderabad",
    "NABH accredited hospitals",
    "best doctors Hyderabad",
    "experienced surgeons India",
    "medical tourism benefits",
    "medical tourism advantages",
    "why medical tourism India",
    "medical tourism safety",
    "medical tourism quality",
    "medical tourism success stories",
    "medical tourism reviews",
    "medical tourism ratings",
    "IVF treatment India cost",
    "heart surgery India cost",
    "cancer treatment India cost",
    "knee replacement India cost",
    "hip replacement India cost",
    "spine surgery India cost",
    "cosmetic surgery India cost",
    "dental treatment India cost",
    "organ transplant India cost",
    "fertility treatment India cost",
    "medical visa India",
    "medical tourism visa",
    "medical tourism process",
    "medical tourism guide",
    "how to plan medical tourism",
    "medical tourism checklist",
    "medical tourism preparation",
    "post treatment care India",
    "medical tourism recovery",
    "medical tourism follow up",
  ],
  openGraph: {
    title: "Free Medical Guidance for International Patients | Medical Tours India",
    description: "Get free medical treatment guidance in Hyderabad, India. We help international patients understand treatment options and estimate costs.",
    url: "https://cost.medicaltoursindia.com",
    siteName: "Medical Tours India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Tours India - Free Medical Guidance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com",
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <EnhancedStructuredData />
      <main className="min-h-screen pb-20 md:pb-0">
        <Header />
        <MobileCTA />
        <HeroSection />
        <LeadFormSection />
        <WhyTrustSection />
        <HumanSupportSection />
        <TreatmentsSection />
        <HowItWorksSection />
        <ReassuranceSection />
        <BlogSection />
        <FinalCTASection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
