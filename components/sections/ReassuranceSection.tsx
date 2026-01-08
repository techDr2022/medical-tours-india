import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Clock, DollarSign, Plane, MessageCircle } from "lucide-react"

const questions = [
  {
    question: "Is treatment quality safe?",
    answer: "We only work with JCI-accredited hospitals and experienced specialists in Hyderabad.",
    icon: Shield,
  },
  {
    question: "Will costs change later?",
    answer: "No hidden fees. The estimate you receive is transparent and includes all major costs.",
    icon: DollarSign,
  },
  {
    question: "How long should I stay?",
    answer: "We provide realistic timelines based on your treatment, including recovery period.",
    icon: Clock,
  },
  {
    question: "What about follow-up care?",
    answer: "We coordinate follow-up consultations and provide ongoing support even after you return home.",
    icon: MessageCircle,
  },
  {
    question: "Who supports me if I'm unsure?",
    answer: "Your dedicated medical coordinator is available via WhatsApp throughout your journey.",
    icon: CheckCircle2,
  },
]

export function ReassuranceSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            If You're Considering Treatment in India, <span className="text-primary">These Questions Are Normal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We address these concerns before you travel, not after you arrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-2 border-gray-100 hover:border-primary/30 transition-all hover:shadow-soft-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
