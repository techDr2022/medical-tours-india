"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CheckCircle2, ArrowRight } from "lucide-react"

const treatments = [
  "IVF / Fertility",
  "Heart Surgery",
  "Cancer Treatment",
  "Joint Replacement",
  "Spine / Neuro",
  "Cosmetic Surgery",
  "Dental",
  "Other",
]

const countries = ["USA", "UK", "UAE", "Africa"]

const budgets = [
  "Under $5,000",
  "$5,000–$10,000",
  "$10,000–$20,000",
  "$20,000+",
]

interface CostEstimatorProps {
  onEstimateSubmit: (data: {
    treatment: string
    country: string
    budget?: string
  }) => void
}

export function CostEstimator({ onEstimateSubmit }: CostEstimatorProps) {
  const [treatment, setTreatment] = useState("")
  const [country, setCountry] = useState("")
  const [budget, setBudget] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (treatment && country) {
      onEstimateSubmit({ treatment, country, budget })
    }
  }

  return (
    <Card className="shadow-soft-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Free Cost Estimate
          </CardTitle>
        </div>
        <p className="text-sm text-gray-600">
          Get an accurate estimate in 24 hours
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="treatment" className="text-sm font-semibold text-gray-700">
              Select Treatment
            </Label>
            <Select value={treatment} onValueChange={setTreatment} required>
              <SelectTrigger id="treatment" className="h-12 border-2 focus:border-primary">
                <SelectValue placeholder="Choose treatment type" />
              </SelectTrigger>
              <SelectContent>
                {treatments.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-semibold text-gray-700">
              Select Your Country
            </Label>
            <Select value={country} onValueChange={setCountry} required>
              <SelectTrigger id="country" className="h-12 border-2 focus:border-primary">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-semibold text-gray-700">
              Preferred City
            </Label>
            <Select value="Hyderabad" disabled>
              <SelectTrigger id="city" className="h-12 border-2 bg-gray-50">
                <SelectValue />
              </SelectTrigger>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-semibold text-gray-700">
              Budget Expectation <span className="text-gray-400 font-normal">(optional)</span>
            </Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger id="budget" className="h-12 border-2 focus:border-primary">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-base font-semibold gradient-primary hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Cost Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-start gap-2 pt-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-semibold">No obligation.</span> Reviewed by a medical coordinator within 24 hours.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
