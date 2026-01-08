import { Card, CardContent } from "@/components/ui/card"
import { FileText, Calculator, MessageSquare, Calendar, Heart, ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Share your medical details",
    description: "Fill out our simple form with your condition and medical history.",
  },
  {
    number: 2,
    icon: Calculator,
    title: "Receive cost range & guidance",
    description: "Get a personalized cost estimate within 24 hours from our medical coordinator.",
  },
  {
    number: 3,
    icon: MessageSquare,
    title: "Discuss hospital & doctor options",
    description: "Review recommended hospitals and specialists that match your needs.",
  },
  {
    number: 4,
    icon: Calendar,
    title: "Plan travel & treatment",
    description: "We help coordinate your travel, accommodation, and treatment schedule.",
  },
  {
    number: 5,
    icon: Heart,
    title: "Continue follow-up support",
    description: "Ongoing support throughout your treatment journey and recovery.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            A Clear, <span className="text-primary">Transparent Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps from enquiry to treatment, with support at every stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-2 border-gray-100 hover:border-primary/30 transition-all hover:shadow-soft-lg bg-white h-full">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full"></div>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Heart className="h-5 w-5 text-primary" />
            <p className="text-gray-700 font-semibold">
              No obligation at any stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
