import { LeadForm } from "@/components/LeadForm"

export function LeadFormSection() {
  return (
    <section id="lead-form" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <LeadForm />
      </div>
    </section>
  )
}
