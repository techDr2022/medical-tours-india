export function EnhancedStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cost.medicaltoursindia.com/#localbusiness",
    name: "Medical Tours India",
    image: "https://cost.medicaltoursindia.com/og-image.jpg",
    telephone: "+91-90322-92171",
    priceRange: "Free Consultation",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3850,
      longitude: 78.4867,
    },
    url: "https://cost.medicaltoursindia.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "Ghana" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Tourism Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Medical Treatment Guidance",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Free Medical Consultation",
                description: "Free medical guidance and treatment planning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cost Estimation",
                description: "Free medical treatment cost estimates",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospital Selection",
                description: "Hospital and doctor recommendations",
              },
            },
          ],
        },
      ],
    },
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cost.medicaltoursindia.com/#website",
    url: "https://cost.medicaltoursindia.com",
    name: "Medical Tours India - Free Medical Guidance",
    description: "Free medical treatment guidance and cost estimation for international patients seeking medical care in India",
    publisher: {
      "@id": "https://cost.medicaltoursindia.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://cost.medicaltoursindia.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical Tourism Services in India",
    description: "Comprehensive list of medical tourism services and treatments available in India",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "IVF Treatment in India",
        url: "https://cost.medicaltoursindia.com/blog/ivf-treatment-india-cost-success-rates",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Heart Surgery in India",
        url: "https://cost.medicaltoursindia.com/blog/heart-surgery-india-cost-quality",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cancer Treatment in India",
        url: "https://cost.medicaltoursindia.com/blog/cancer-treatment-india-cost-options",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Knee Replacement in India",
        url: "https://cost.medicaltoursindia.com/blog/knee-replacement-surgery-india-cost-recovery",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Medical Tourism Guide",
        url: "https://cost.medicaltoursindia.com/blog/complete-guide-medical-tourism-india-2026",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  )
}
