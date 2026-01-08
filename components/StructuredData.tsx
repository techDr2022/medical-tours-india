export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://cost.medicaltoursindia.com/#organization",
    name: "Medical Tours India",
    alternateName: "MTI",
    url: "https://cost.medicaltoursindia.com",
    logo: "https://cost.medicaltoursindia.com/logo.png",
    description: "Medical Tours India provides free medical guidance and treatment coordination services for international patients seeking medical care in Hyderabad, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-90322-92171",
      contactType: "Customer Service",
      areaServed: ["US", "GB", "AE", "ZA"],
      availableLanguage: ["English"],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "South Africa",
      },
    ],
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/medicaltoursindia",
      // "https://www.linkedin.com/company/medicaltoursindia",
    ],
  }

  const medicalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "@id": "https://cost.medicaltoursindia.com/#service",
    name: "Medical Treatment Guidance and Coordination",
    description: "Free medical guidance and treatment coordination for international patients seeking medical care in Hyderabad, India. Services include cost estimation, hospital recommendations, and treatment planning.",
    provider: {
      "@id": "https://cost.medicaltoursindia.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
      containedIn: {
        "@type": "State",
        name: "Telangana",
      },
    },
    serviceType: [
      "Medical Tourism",
      "Treatment Guidance",
      "Cost Estimation",
      "Hospital Coordination",
      "Medical Consultation",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free medical guidance and consultation",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is treatment quality safe in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we only work with JCI-accredited hospitals and experienced specialists in Hyderabad. All hospitals we recommend meet international quality standards with success rates matching Western countries.",
        },
      },
      {
        "@type": "Question",
        name: "Will costs change later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No hidden fees. The estimate you receive is transparent and includes all major costs. We provide upfront pricing with no surprises. All costs are discussed and agreed upon before treatment begins.",
        },
      },
      {
        "@type": "Question",
        name: "How long should I stay in India for treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide realistic timelines based on your specific treatment, including recovery period. This varies by treatment type and individual circumstances. Most patients stay 2-4 weeks including treatment and initial recovery.",
        },
      },
      {
        "@type": "Question",
        name: "What about follow-up care after returning home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We coordinate follow-up consultations and provide ongoing support even after you return home. Your medical coordinator remains available for questions. We provide detailed discharge summaries and can coordinate with your local doctor.",
        },
      },
      {
        "@type": "Question",
        name: "Is your medical guidance service really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% free. We provide medical guidance, cost estimates, and coordination services at no cost. There are no hidden fees or obligations. Our service is completely free with no strings attached.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I save on medical treatment in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Patients typically save 60-90% on medical treatment costs compared to Western countries. For example, heart bypass surgery costs $5,000-$8,000 in India versus $100,000+ in the USA. Knee replacement costs $4,000-$6,000 versus $50,000+ in the USA.",
        },
      },
      {
        "@type": "Question",
        name: "What treatments are available in Hyderabad, India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hyderabad offers world-class treatment for cardiac surgery, cancer treatment, IVF and fertility, joint replacement, spine surgery, cosmetic surgery, dental care, and organ transplants. All treatments are available at JCI-accredited hospitals with experienced doctors.",
        },
      },
      {
        "@type": "Question",
        name: "Do doctors speak English in Indian hospitals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most doctors and medical staff in top hospitals speak fluent English. Our medical coordinators also speak English and can assist with translation if needed. Communication is never a barrier.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get a medical visa for India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide guidance on obtaining a medical visa (M-Visa) for India. The process typically takes 5-7 business days. Medical visas allow stays up to 1 year and can include an accompanying person. We help with the entire visa application process.",
        },
      },
      {
        "@type": "Question",
        name: "What is the success rate of medical treatments in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Success rates in Indian hospitals match international standards. Cardiac surgeries have 95%+ success rates, joint replacements have 98%+ success rates, and IVF treatments have 40-50% success rates depending on age. All hospitals we work with maintain excellent track records.",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cost.medicaltoursindia.com",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
