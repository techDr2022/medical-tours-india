import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cost.medicaltoursindia.com"),
  title: {
    default: "Medical Tours India - Free Medical Guidance for International Patients",
    template: "%s | Medical Tours India",
  },
  description: "Get 100% free medical treatment guidance in Hyderabad, India. Expert medical coordinators help international patients from USA, UK, UAE, and Africa understand treatment options, estimate costs, compare hospitals, and plan care. No obligation, no hidden fees. Trusted medical tourism services with JCI-accredited hospitals.",
  keywords: [
    "medical tourism India",
    "medical treatment India",
    "medical guidance India",
    "Hyderabad medical tourism",
    "international patients India",
    "medical cost estimate India",
    "IVF treatment India",
    "heart surgery India",
    "cancer treatment India",
    "joint replacement India",
    "medical travel India",
    "affordable healthcare India",
    "medical coordinator India",
    "medical tourism Hyderabad",
    "best hospitals India",
    "medical tourism cost",
    "cheap medical treatment India",
    "medical tourism packages",
    "India medical tourism",
    "medical tourism services",
    "international medical travel",
    "medical tourism guide",
    "India healthcare",
    "medical treatment cost India",
    "medical tourism agency",
    "medical tourism company",
    "medical tourism consultant",
    "medical tourism facilitator",
    "medical tourism broker",
    "medical tourism coordinator",
    "medical tourism assistance",
    "medical tourism support",
    "medical tourism planning",
    "medical tourism booking",
    "medical tourism services India",
    "medical tourism Hyderabad Telangana",
    "medical tourism for Americans",
    "medical tourism for UK patients",
    "medical tourism for UAE patients",
    "medical tourism for African patients",
    "medical tourism USA to India",
    "medical tourism UK to India",
    "medical tourism UAE to India",
    "medical tourism Africa to India",
    "free medical consultation India",
    "free medical guidance",
    "medical cost calculator India",
    "treatment cost estimate",
    "hospital cost India",
    "surgery cost India",
    "medical procedure cost India",
    "affordable surgery India",
    "cheap surgery India",
    "low cost medical treatment",
    "medical tourism benefits",
    "medical tourism advantages",
    "why medical tourism India",
    "medical tourism safety",
    "medical tourism quality",
    "JCI accredited hospitals India",
    "NABH accredited hospitals",
    "best doctors India",
    "experienced surgeons India",
    "medical tourism success stories",
    "medical tourism testimonials",
    "medical tourism reviews",
    "medical tourism ratings",
  ],
  authors: [{ name: "Medical Tours India" }],
  creator: "Medical Tours India",
  publisher: "Medical Tours India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cost.medicaltoursindia.com",
    siteName: "Medical Tours India",
    title: "Medical Tours India - Free Medical Guidance for International Patients",
    description: "Get free, honest medical treatment guidance in India. We help international patients from USA, UK, UAE, and Africa understand treatment options and estimate costs in Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Tours India - Trusted Medical Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Tours India - Free Medical Guidance for International Patients",
    description: "Get free, honest medical treatment guidance in India. We help international patients understand treatment options and estimate costs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com",
  },
  category: "Medical Tourism",
  other: {
   "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    ICBM: "17.3850, 78.4867",
    language: "English",
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    author: "Medical Tours India",
    copyright: "Medical Tours India",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <body className={`${inter.variable} font-sans`} itemScope itemType="https://schema.org/WebPage">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Medical Tours India",
              url: "https://cost.medicaltoursindia.com",
              logo: "https://www.medicaltoursindia.com/assets/images/color-logo-3.svg",
              image: "https://cost.medicaltoursindia.com/og-image.jpg",
              description:
                "Medical Tours India provides free, honest medical guidance for international patients seeking treatment in India. We assist patients from the USA, UK, UAE, and Africa with cost estimation, hospital selection, and treatment planning in Hyderabad.",
              telephone: "+91-90322-92171",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Continent", name: "Africa" },
              ],
              availableService: {
                "@type": "MedicalProcedure",
                name: "Medical Tourism Guidance and Treatment Planning",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-90322-92171",
                contactType: "customer support",
                availableLanguage: ["English"],
              },
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
