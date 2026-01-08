import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { treatments } from "@/lib/treatments"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ArrowLeft, CheckCircle2, DollarSign, Clock, Users, Building2 } from "lucide-react"

interface TreatmentPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const treatment = treatments.find((t) => t.slug === params.slug)

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    }
  }

  const enhancedKeywords = [
    ...treatment.seoKeywords,
    "medical tourism India",
    "medical treatment India",
    "medical tourism Hyderabad",
    "affordable healthcare India",
    "medical cost India",
    "international patients India",
    "medical tourism for Americans",
    "medical tourism for UK patients",
    "medical tourism for UAE patients",
    "medical tourism for African patients",
    "free medical guidance",
    "medical cost estimate",
    "treatment cost estimate",
    "best hospitals India",
    "experienced doctors India",
    "JCI accredited hospitals",
    "NABH accredited hospitals",
  ]

  return {
    title: `${treatment.name} Treatment in India - Cost, Hospitals & Process | Medical Tours India`,
    description: `${treatment.description} Get free guidance on costs, best hospitals, treatment process, and recovery. Save up to ${treatment.costComparison.savings} compared to Western countries.`,
    keywords: enhancedKeywords,
    openGraph: {
      title: `${treatment.name} Treatment in India | Medical Tours India`,
      description: `${treatment.description} Free medical guidance and cost estimates available.`,
      url: `https://cost.medicaltoursindia.com/treatments/${treatment.slug}`,
      type: "website",
      siteName: "Medical Tours India",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${treatment.name} Treatment in India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${treatment.name} Treatment in India`,
      description: treatment.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://cost.medicaltoursindia.com/treatments/${treatment.slug}`,
    },
  }
}

export default function TreatmentPage({ params }: TreatmentPageProps) {
  const treatment = treatments.find((t) => t.slug === params.slug)

  if (!treatment) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.description,
    procedureType: treatment.name,
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: treatment.name,
    },
    provider: {
      "@type": "MedicalBusiness",
      name: "Medical Tours India",
      url: "https://cost.medicaltoursindia.com",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Continent", name: "Africa" },
    ],
    location: {
      "@type": "Place",
      name: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
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
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <Link href="/treatments">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Treatments
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className={`inline-flex items-center justify-center p-6 ${treatment.color} rounded-2xl`}>
                <Image
                  src={treatment.svg}
                  alt={treatment.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  {treatment.name} Treatment in India
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Cost Comparison
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">India</div>
                  <div className="text-2xl font-bold text-green-700">{treatment.costComparison.india}</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">USA</div>
                  <div className="text-2xl font-bold text-red-700">{treatment.costComparison.usa}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">UK</div>
                  <div className="text-2xl font-bold text-orange-700">{treatment.costComparison.uk}</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Savings</div>
                  <div className="text-2xl font-bold text-primary">{treatment.costComparison.savings}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {treatment.overview}
            </p>
          </section>

          {/* Why Choose India */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{treatment.whyChooseIndia.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.whyChooseIndia.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of {treatment.shortName} Treatments</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {treatment.treatmentTypes.map((type, index) => (
                <Card key={index} className="border-2 border-gray-100 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {type.cost && (
                        <div className="flex items-center gap-1 text-primary font-semibold">
                          <DollarSign className="h-4 w-4" />
                          {type.cost}
                        </div>
                      )}
                      {type.recovery && (
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          Recovery: {type.recovery}
                        </div>
                      )}
                      {type.duration && (
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          {type.duration}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cost Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Cost Breakdown</h2>
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {treatment.costBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 font-medium">{item.item}</span>
                      <span className="text-primary font-bold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Best Hospitals */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Best Hospitals for {treatment.shortName}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.bestHospitals.map((hospital, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{hospital}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Treatment Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Treatment Process</h2>
            
            <div className="space-y-6">
              {treatment.process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.step}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Recovery Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/30 hidden md:block"></div>
              
              <div className="space-y-8">
                {treatment.recovery.map((phase, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      {/* Pulse animation for first item */}
                      {index === 0 && (
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2 pb-8">
                      <Card className="border-2 border-gray-100 hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-xl font-bold text-primary">{phase.phase}</h3>
                            <div className="flex-shrink-0 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                              Phase {index + 1}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {treatment.faq.map((item, index) => (
                <Card key={index} className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="mb-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Explore {treatment.name} Treatment in India?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get free guidance from our medical coordinators to understand your options, estimate costs, compare hospitals, and plan your treatment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#lead-form">
                <Button className="gradient-primary hover:opacity-90 h-12 px-8 text-base">
                  Get Free Medical Guidance
                </Button>
              </Link>
              <Link href="/treatments">
                <Button variant="outline" className="h-12 px-8 text-base border-2">
                  View Other Treatments
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
