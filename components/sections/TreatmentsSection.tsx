"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const treatments = [
  { name: "IVF & Fertility", slug: "ivf-fertility", svg: "/svg/ivf.svg", color: "bg-pink-50" },
  { name: "Heart Procedures", slug: "heart-procedures", svg: "/svg/heart.svg", color: "bg-red-50" },
  { name: "Cancer Care", slug: "cancer-care", svg: "/svg/cancer-cell.svg", color: "bg-purple-50" },
  { name: "Joint Replacement", slug: "joint-replacement", svg: "/svg/joint-bones.svg", color: "bg-blue-50" },
  { name: "Spine & Neuro", slug: "spine-neuro", svg: "/svg/neuro.svg", color: "bg-indigo-50" },
  { name: "Cosmetic & Reconstructive", slug: "cosmetic-reconstructive", svg: "/svg/cosmetic-face-marking.svg", color: "bg-rose-50" },
  { name: "Dental Care", slug: "dental-care", svg: "/svg/dental.svg", color: "bg-teal-50" },
  { name: "Organ Transplant Support", slug: "organ-transplant-support", svg: "/svg/organ-transplant.svg", color: "bg-green-50" },
]

export function TreatmentsSection() {
  const scrollToEstimator = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="treatments" className="py-20 md:py-28 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Treatments We Commonly <span className="text-primary">Assist With</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on matching the right expertise to your condition, not overwhelming you with endless choices.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <Link key={index} href={`/treatments/${treatment.slug}`}>
              <Card className="border-2 border-gray-100 hover:border-primary/30 transition-all hover:shadow-soft-lg bg-white group cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center p-4 ${treatment.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Image
                      src={treatment.svg}
                      alt={treatment.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-primary transition-colors">{treatment.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToEstimator} 
            className="h-14 px-10 text-base font-semibold gradient-primary hover:opacity-90 shadow-lg hover:shadow-xl"
          >
            Check Treatment Cost
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
