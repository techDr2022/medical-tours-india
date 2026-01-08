import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, FileCheck, Clock, MapPin, CheckCircle2 } from "lucide-react"

const trustPoints = [
  {
    icon: Heart,
    title: "Honest Guidance, Not Sales",
    description: "We are not a hospital and we do not push treatments. Our role is to help you understand your options clearly.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: FileCheck,
    title: "Medical Review Before Recommendation",
    description: "We review reports first. Hospitals are suggested only after understanding your condition.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Clock,
    title: "No Pressure to Decide",
    description: "You are never rushed. Take time, ask questions, and decide at your pace.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: MapPin,
    title: "Hyderabad-Focused Expertise",
    description: "We work with experienced specialists and established hospitals in Hyderabad.",
    color: "bg-purple-50 text-purple-600",
  },
]

export function WhyTrustSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Patients from the <span className="text-primary">US, UK, UAE & Africa</span> Trust Medical Tours India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re different because we put your needs first, not our bottom line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <Card key={index} className="border-2 border-gray-100 shadow-soft hover:shadow-soft-lg transition-all hover:border-primary/20 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 ${point.color} rounded-xl`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Patients Assisted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24hr</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600">Free Guidance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-gray-600">Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  )
}
