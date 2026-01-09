export interface Treatment {
  slug: string
  name: string
  shortName: string
  description: string
  svg: string
  color: string
  overview: string
  whyChooseIndia: {
    title: string
    points: string[]
  }
  costComparison: {
    india: string
    usa: string
    uk: string
    savings: string
  }
  treatmentTypes: {
    name: string
    description: string
    cost?: string
    recovery?: string
    duration?: string
  }[]
  costBreakdown: {
    item: string
    cost: string
  }[]
  bestHospitals: string[]
  process: {
    step: string
    description: string
  }[]
  recovery: {
    phase: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  seoKeywords: string[]
}

export const treatments: Treatment[] = [
  {
    slug: "ivf-fertility-india",
    name: "IVF & Fertility",
    shortName: "IVF & Fertility",
    description: "Comprehensive fertility treatment including IVF, IUI, and advanced reproductive technologies in India with world-class success rates at affordable costs.",
    svg: "/svg/ivf.svg",
    color: "bg-pink-50",
    overview: "India has become a leading destination for fertility treatments, offering advanced IVF and reproductive technologies at a fraction of Western costs. With experienced fertility specialists, state-of-the-art laboratories, and high success rates, India provides excellent fertility care for international patients.",
    whyChooseIndia: {
      title: "Why Choose India for IVF & Fertility Treatment?",
      points: [
        "Advanced reproductive technologies including ICSI, IMSI, and PGD",
        "Experienced fertility specialists with international training",
        "High success rates comparable to Western countries",
        "Affordable treatment costs - save up to 70-80%",
        "Comprehensive care including counseling and support",
        "Modern fertility clinics with cutting-edge equipment",
        "Flexible treatment packages and payment options"
      ]
    },
    costComparison: {
      india: "$3,000 - $5,000",
      usa: "$12,000 - $20,000",
      uk: "$8,000 - $12,000",
      savings: "70-80%"
    },
    treatmentTypes: [
      {
        name: "In Vitro Fertilization (IVF)",
        description: "Standard IVF procedure with egg retrieval and embryo transfer",
        cost: "$3,000 - $5,000",
        recovery: "2-3 days",
        duration: "2-3 weeks per cycle"
      },
      {
        name: "Intracytoplasmic Sperm Injection (ICSI)",
        description: "Advanced technique for male infertility issues",
        cost: "$3,500 - $5,500",
        recovery: "2-3 days",
        duration: "2-3 weeks per cycle"
      },
      {
        name: "Intrauterine Insemination (IUI)",
        description: "Less invasive fertility treatment option",
        cost: "$500 - $1,000",
        recovery: "1 day",
        duration: "1-2 weeks per cycle"
      },
      {
        name: "Frozen Embryo Transfer (FET)",
        description: "Transfer of previously frozen embryos",
        cost: "$1,500 - $2,500",
        recovery: "1-2 days",
        duration: "1-2 weeks"
      },
      {
        name: "Egg Donation Program",
        description: "IVF with donor eggs",
        cost: "$4,000 - $6,000",
        recovery: "2-3 days",
        duration: "3-4 weeks"
      },
      {
        name: "Surrogacy Program",
        description: "Complete surrogacy services with legal support",
        cost: "$15,000 - $25,000",
        recovery: "N/A",
        duration: "9-12 months"
      }
    ],
    costBreakdown: [
      { item: "Initial Consultation & Tests", cost: "$200 - $400" },
      { item: "IVF Procedure", cost: "$2,500 - $4,000" },
      { item: "Medications", cost: "$500 - $1,000" },
      { item: "Embryo Freezing (if needed)", cost: "$300 - $500" },
      { item: "Follow-up Consultations", cost: "$100 - $200" }
    ],
    bestHospitals: [
      "Apollo Fertility Centers",
      "Cloudnine Hospitals",
      "Nova IVF Fertility",
      "Indira IVF",
      "Milann Fertility Center"
    ],
    process: [
      {
        step: "Initial Consultation",
        description: "Comprehensive fertility assessment, medical history review, and diagnostic tests to understand your specific situation."
      },
      {
        step: "Treatment Planning",
        description: "Personalized treatment plan developed based on your diagnosis, including medication protocols and timeline."
      },
      {
        step: "Ovarian Stimulation",
        description: "Hormonal medications to stimulate egg production, with regular monitoring through ultrasounds and blood tests."
      },
      {
        step: "Egg Retrieval",
        description: "Minor surgical procedure to collect eggs, performed under sedation with minimal discomfort."
      },
      {
        step: "Fertilization & Embryo Development",
        description: "Eggs are fertilized in the laboratory and monitored for 3-5 days until embryo transfer."
      },
      {
        step: "Embryo Transfer",
        description: "Selected embryos are transferred to the uterus, a simple procedure that takes just a few minutes."
      },
      {
        step: "Pregnancy Test & Follow-up",
        description: "Blood test after 10-14 days to confirm pregnancy, followed by ongoing support and monitoring."
      }
    ],
    recovery: [
      {
        phase: "Immediate (Day 1-2)",
        description: "Rest and light activities. Some mild cramping or bloating is normal after egg retrieval."
      },
      {
        phase: "First Week",
        description: "Continue medications as prescribed. Avoid strenuous activities and heavy lifting."
      },
      {
        phase: "Two Weeks Post-Transfer",
        description: "Pregnancy test scheduled. Continue medications if positive, with regular monitoring."
      },
      {
        phase: "Ongoing Care",
        description: "Regular checkups and ultrasounds to monitor pregnancy progress and ensure healthy development."
      }
    ],
    faq: [
      {
        question: "What is the success rate of IVF in India?",
        answer: "Success rates vary by age and specific circumstances, but typically range from 40-60% for women under 35, which is comparable to international standards."
      },
      {
        question: "How long does the IVF process take?",
        answer: "A complete IVF cycle typically takes 4-6 weeks from initial consultation to embryo transfer, with pregnancy test results available 10-14 days after transfer."
      },
      {
        question: "Are fertility medications included in the cost?",
        answer: "Basic medications are typically included, but some advanced medications may incur additional costs. Your treatment plan will detail all costs upfront."
      },
      {
        question: "Can I bring frozen embryos from my home country?",
        answer: "Yes, many clinics in India accept frozen embryos from other countries. You'll need to coordinate logistics and ensure proper documentation."
      },
      {
        question: "Is surrogacy legal in India?",
        answer: "Surrogacy regulations in India have specific requirements. We can help you understand current legal requirements and connect you with appropriate legal support."
      }
    ],
    seoKeywords: [
      "IVF treatment India",
      "fertility treatment India",
      "IVF cost India",
      "IVF success rate India",
      "fertility clinic India",
      "ICSI treatment India",
      "egg donation India",
      "surrogacy India"
    ]
  },
  {
    slug: "heart-procedures-india",
    name: "Heart Procedures",
    shortName: "Heart Procedures",
    description: "Comprehensive cardiac care including bypass surgery, angioplasty, valve replacement, and advanced heart procedures with experienced cardiologists in India.",
    svg: "/svg/heart.svg",
    color: "bg-red-50",
    overview: "India offers world-class cardiac care with highly skilled cardiologists and cardiac surgeons. With advanced technology, modern facilities, and affordable costs, India has become a preferred destination for international patients seeking heart procedures.",
    whyChooseIndia: {
      title: "Why Choose India for Heart Procedures?",
      points: [
        "Experienced cardiac surgeons with thousands of successful procedures",
        "Advanced cardiac technology including robotic surgery",
        "JCI and NABH accredited cardiac centers",
        "Significant cost savings - up to 85% compared to Western countries",
        "Minimally invasive procedures for faster recovery",
        "Comprehensive cardiac rehabilitation programs",
        "24/7 cardiac care and emergency services"
      ]
    },
    costComparison: {
      india: "$5,000 - $12,000",
      usa: "$50,000 - $150,000",
      uk: "$25,000 - $60,000",
      savings: "80-90%"
    },
    treatmentTypes: [
      {
        name: "Coronary Artery Bypass Grafting (CABG)",
        description: "Open heart surgery to bypass blocked arteries",
        cost: "$8,000 - $12,000",
        recovery: "6-8 weeks",
        duration: "4-6 hours surgery"
      },
      {
        name: "Angioplasty & Stenting",
        description: "Minimally invasive procedure to open blocked arteries",
        cost: "$3,000 - $6,000",
        recovery: "1-2 weeks",
        duration: "1-2 hours procedure"
      },
      {
        name: "Heart Valve Replacement",
        description: "Surgical replacement of damaged heart valves",
        cost: "$10,000 - $15,000",
        recovery: "6-8 weeks",
        duration: "3-5 hours surgery"
      },
      {
        name: "Pacemaker Implantation",
        description: "Device implantation to regulate heart rhythm",
        cost: "$4,000 - $7,000",
        recovery: "1-2 weeks",
        duration: "1-2 hours procedure"
      },
      {
        name: "Cardiac Ablation",
        description: "Procedure to correct irregular heart rhythms",
        cost: "$5,000 - $8,000",
        recovery: "1-2 weeks",
        duration: "2-4 hours procedure"
      },
      {
        name: "Heart Transplant",
        description: "Complete heart transplantation",
        cost: "$50,000 - $80,000",
        recovery: "3-6 months",
        duration: "6-8 hours surgery"
      }
    ],
    costBreakdown: [
      { item: "Pre-operative Tests & Consultation", cost: "$500 - $1,000" },
      { item: "Surgery/Procedure Cost", cost: "$4,000 - $10,000" },
      { item: "Hospital Stay (3-7 days)", cost: "$300 - $800" },
      { item: "Medications", cost: "$200 - $500" },
      { item: "Post-operative Care", cost: "$200 - $400" }
    ],
    bestHospitals: [
      "Apollo Hospitals",
      "Fortis Escorts Heart Institute",
      "Medanta - The Medicity",
      "Narayana Health",
      "Max Healthcare"
    ],
    process: [
      {
        step: "Cardiac Evaluation",
        description: "Comprehensive assessment including ECG, echocardiogram, stress tests, and cardiac catheterization to determine the best treatment approach."
      },
      {
        step: "Treatment Planning",
        description: "Multidisciplinary team review to develop personalized treatment plan, considering your specific condition and medical history."
      },
      {
        step: "Pre-operative Preparation",
        description: "Medical optimization, medication adjustments, and lifestyle modifications to ensure best surgical outcomes."
      },
      {
        step: "Surgery/Procedure",
        description: "Performed by experienced cardiac surgeons using advanced techniques, with continuous monitoring throughout the procedure."
      },
      {
        step: "ICU Recovery",
        description: "24-48 hours in specialized cardiac ICU with continuous monitoring and expert nursing care."
      },
      {
        step: "Hospital Recovery",
        description: "Gradual mobilization and monitoring in cardiac care unit, typically 3-7 days depending on procedure."
      },
      {
        step: "Cardiac Rehabilitation",
        description: "Structured rehabilitation program including exercise, diet counseling, and medication management for optimal recovery."
      }
    ],
    recovery: [
      {
        phase: "Immediate Post-Surgery (Week 1)",
        description: "ICU monitoring, pain management, and gradual mobilization. Focus on wound healing and preventing complications."
      },
      {
        phase: "Early Recovery (Week 2-4)",
        description: "Continued medication management, wound care, and beginning cardiac rehabilitation exercises under supervision."
      },
      {
        phase: "Mid-Recovery (Month 2-3)",
        description: "Progressive increase in activities, regular follow-up appointments, and continued rehabilitation program."
      },
      {
        phase: "Long-term Care",
        description: "Lifestyle modifications, medication adherence, regular cardiac checkups, and ongoing monitoring for optimal heart health."
      }
    ],
    faq: [
      {
        question: "How safe are heart procedures in India?",
        answer: "India's top cardiac centers have success rates comparable to international standards, with mortality rates for common procedures like CABG at less than 1-2%."
      },
      {
        question: "What is the recovery time after heart surgery?",
        answer: "Recovery varies by procedure. Minimally invasive procedures may allow return to normal activities in 2-4 weeks, while open heart surgery typically requires 6-8 weeks for full recovery."
      },
      {
        question: "Do I need a visa for heart treatment in India?",
        answer: "Yes, you'll need a medical visa. We can assist with the visa application process and provide necessary medical documentation."
      },
      {
        question: "Can family members stay with me during treatment?",
        answer: "Yes, hospitals provide accommodation options for family members and offer support services to make your stay comfortable."
      },
      {
        question: "What follow-up care is provided?",
        answer: "Comprehensive follow-up includes regular checkups, medication management, rehabilitation guidance, and coordination with your home country doctors if needed."
      }
    ],
    seoKeywords: [
      "heart surgery India",
      "cardiac surgery India",
      "bypass surgery India",
      "angioplasty India",
      "heart valve replacement India",
      "cardiac treatment India",
      "heart procedure cost India"
    ]
  },
  {
    slug: "cancer-care-india",
    name: "Cancer Care",
    shortName: "Cancer Care",
    description: "Comprehensive oncology services including chemotherapy, radiation therapy, surgical oncology, immunotherapy, and targeted therapy with leading cancer specialists.",
    svg: "/svg/cancer-cell.svg",
    color: "bg-purple-50",
    overview: "India has emerged as a leading destination for cancer treatment, offering world-class oncology care with advanced technology, experienced oncologists, and comprehensive cancer management at significantly lower costs than Western countries.",
    whyChooseIndia: {
      title: "Why Choose India for Cancer Treatment?",
      points: [
        "Advanced treatment options including immunotherapy and targeted therapy",
        "Experienced oncologists with international training and high patient volumes",
        "State-of-the-art radiation therapy including IMRT, IGRT, and SBRT",
        "Comprehensive cancer care from diagnosis to survivorship",
        "Significant cost savings - up to 80-90% compared to Western countries",
        "Multidisciplinary tumor boards for personalized treatment",
        "Access to latest clinical trials and research protocols"
      ]
    },
    costComparison: {
      india: "$5,000 - $15,000",
      usa: "$100,000 - $200,000+",
      uk: "$40,000 - $80,000",
      savings: "80-90%"
    },
    treatmentTypes: [
      {
        name: "Chemotherapy",
        description: "Systemic cancer treatment using anti-cancer drugs",
        cost: "$500 - $1,500 per cycle",
        recovery: "Varies",
        duration: "3-6 months (4-8 cycles)"
      },
      {
        name: "Radiation Therapy",
        description: "High-energy radiation to destroy cancer cells",
        cost: "$2,000 - $4,000",
        recovery: "2-4 weeks",
        duration: "4-7 weeks (20-35 sessions)"
      },
      {
        name: "Surgical Oncology",
        description: "Surgical removal of tumors and cancerous tissue",
        cost: "$5,000 - $15,000",
        recovery: "2-8 weeks",
        duration: "Varies by procedure"
      },
      {
        name: "Immunotherapy",
        description: "Advanced treatment using immune system to fight cancer",
        cost: "$3,000 - $8,000 per cycle",
        recovery: "Varies",
        duration: "3-12 months"
      },
      {
        name: "Targeted Therapy",
        description: "Precision treatment targeting specific cancer cells",
        cost: "$2,000 - $6,000 per month",
        recovery: "Varies",
        duration: "Ongoing"
      },
      {
        name: "Bone Marrow Transplant",
        description: "Stem cell transplant for blood cancers",
        cost: "$25,000 - $40,000",
        recovery: "3-6 months",
        duration: "2-4 weeks hospitalization"
      }
    ],
    costBreakdown: [
      { item: "Initial Diagnosis & Staging", cost: "$500 - $1,500" },
      { item: "Treatment (varies by type)", cost: "$5,000 - $15,000" },
      { item: "Hospital Stay", cost: "$200 - $500 per day" },
      { item: "Medications", cost: "$500 - $2,000" },
      { item: "Follow-up Care", cost: "$200 - $500" }
    ],
    bestHospitals: [
      "Tata Memorial Hospital",
      "Apollo Hospitals",
      "AIIMS Delhi",
      "Medanta - The Medicity",
      "Fortis Healthcare"
    ],
    process: [
      {
        step: "Diagnosis & Staging",
        description: "Comprehensive evaluation including imaging studies, biopsies, and molecular testing to determine cancer type, stage, and characteristics."
      },
      {
        step: "Multidisciplinary Review",
        description: "Tumor board discussion with medical, surgical, and radiation oncologists to develop personalized treatment plan."
      },
      {
        step: "Treatment Planning",
        description: "Detailed treatment protocol including chemotherapy schedules, radiation planning, or surgical approach tailored to your specific cancer."
      },
      {
        step: "Treatment Execution",
        description: "Begin treatment with regular monitoring, side effect management, and adjustments as needed based on response."
      },
      {
        step: "Response Assessment",
        description: "Regular imaging and tests to evaluate treatment effectiveness and make necessary modifications."
      },
      {
        step: "Supportive Care",
        description: "Comprehensive support including pain management, nutritional support, psychological counseling, and rehabilitation."
      },
      {
        step: "Follow-up & Survivorship",
        description: "Long-term monitoring, surveillance scans, and survivorship care to ensure continued health and early detection of any recurrence."
      }
    ],
    recovery: [
      {
        phase: "During Treatment",
        description: "Active treatment phase with regular monitoring, side effect management, and supportive care to maintain quality of life."
      },
      {
        phase: "Immediate Post-Treatment (Month 1-3)",
        description: "Recovery from treatment effects, gradual return to normal activities, and initial follow-up assessments."
      },
      {
        phase: "Short-term Follow-up (Month 3-12)",
        description: "Regular checkups, surveillance scans, and monitoring for treatment response and potential side effects."
      },
      {
        phase: "Long-term Survivorship",
        description: "Ongoing surveillance, health maintenance, and support for long-term cancer survivorship with regular follow-up appointments."
      }
    ],
    faq: [
      {
        question: "Is cancer treatment quality good in India?",
        answer: "Yes, top cancer centers in India match international standards with experienced oncologists, advanced technology, and comprehensive care protocols."
      },
      {
        question: "How long does cancer treatment take?",
        answer: "Treatment duration varies by cancer type and stage. Chemotherapy typically takes 3-6 months, radiation therapy 4-7 weeks, while surgical procedures may require 2-8 weeks recovery."
      },
      {
        question: "Can I get second opinions in India?",
        answer: "Absolutely. We encourage second opinions and can arrange consultations with multiple specialists to ensure you're confident in your treatment plan."
      },
      {
        question: "What about follow-up care after returning home?",
        answer: "Hospitals provide detailed treatment summaries and can coordinate with your home country doctors. We also assist with arranging follow-up care and monitoring."
      },
      {
        question: "Are clinical trials available?",
        answer: "Many leading cancer centers in India participate in international clinical trials, providing access to cutting-edge treatments and research protocols."
      }
    ],
    seoKeywords: [
      "cancer treatment India",
      "oncology India",
      "chemotherapy India",
      "radiation therapy India",
      "cancer surgery India",
      "cancer hospital India",
      "cancer treatment cost India"
    ]
  },
  {
    slug: "joint-replacement-india",
    name: "Joint Replacement",
    shortName: "Joint Replacement",
    description: "Advanced orthopedic procedures including hip replacement, knee replacement, and shoulder replacement with experienced surgeons and modern implants.",
    svg: "/svg/joint-bones.svg",
    color: "bg-blue-50",
    overview: "India offers excellent joint replacement surgery with highly skilled orthopedic surgeons, modern surgical techniques, and advanced implants. With high success rates and affordable costs, India has become a preferred destination for joint replacement procedures.",
    whyChooseIndia: {
      title: "Why Choose India for Joint Replacement?",
      points: [
        "Experienced orthopedic surgeons with thousands of successful procedures",
        "Modern minimally invasive techniques for faster recovery",
        "Advanced implants from leading international manufacturers",
        "High success rates - 98%+ patient satisfaction",
        "Significant cost savings - up to 85-90% compared to Western countries",
        "Comprehensive rehabilitation and physiotherapy programs",
        "Quick recovery with expert post-operative care"
      ]
    },
    costComparison: {
      india: "$4,000 - $8,000",
      usa: "$50,000 - $70,000",
      uk: "$15,000 - $20,000",
      savings: "85-90%"
    },
    treatmentTypes: [
      {
        name: "Total Knee Replacement",
        description: "Complete replacement of knee joint",
        cost: "$4,500 - $6,500",
        recovery: "6-8 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Total Hip Replacement",
        description: "Complete replacement of hip joint",
        cost: "$5,000 - $7,000",
        recovery: "6-8 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Partial Knee Replacement",
        description: "Replacement of only damaged part of knee",
        cost: "$3,500 - $5,500",
        recovery: "4-6 weeks",
        duration: "1 hour surgery"
      },
      {
        name: "Shoulder Replacement",
        description: "Replacement of shoulder joint",
        cost: "$6,000 - $8,000",
        recovery: "6-12 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Ankle Replacement",
        description: "Replacement of ankle joint",
        cost: "$5,500 - $7,500",
        recovery: "8-12 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Revision Joint Replacement",
        description: "Replacement of previous implant",
        cost: "$7,000 - $10,000",
        recovery: "8-12 weeks",
        duration: "2-3 hours surgery"
      }
    ],
    costBreakdown: [
      { item: "Pre-operative Tests & Consultation", cost: "$300 - $600" },
      { item: "Surgery Cost", cost: "$3,500 - $5,000" },
      { item: "Implant Cost", cost: "$1,000 - $2,000" },
      { item: "Hospital Stay (3-5 days)", cost: "$300 - $600" },
      { item: "Medications", cost: "$200 - $400" },
      { item: "Physiotherapy", cost: "$200 - $400" }
    ],
    bestHospitals: [
      "Apollo Hospitals",
      "Fortis Healthcare",
      "Max Healthcare",
      "Narayana Health",
      "Medanta"
    ],
    process: [
      {
        step: "Orthopedic Evaluation",
        description: "Comprehensive assessment including X-rays, MRI if needed, and physical examination to determine the extent of joint damage and best treatment approach."
      },
      {
        step: "Pre-operative Preparation",
        description: "Medical optimization, weight management if needed, and preparation for surgery including pre-operative tests and anesthesia evaluation."
      },
      {
        step: "Surgery",
        description: "Joint replacement performed using advanced techniques, typically taking 1-2 hours with modern anesthesia for comfort."
      },
      {
        step: "Immediate Post-Surgery",
        description: "Recovery room monitoring, pain management, and initial mobilization on the same day or next day after surgery."
      },
      {
        step: "Hospital Recovery",
        description: "3-5 days in hospital with daily physiotherapy, pain management, and preparation for discharge with walking aids if needed."
      },
      {
        step: "Rehabilitation",
        description: "Structured physiotherapy program starting in hospital and continuing after discharge to restore mobility and strength."
      },
      {
        step: "Follow-up Care",
        description: "Regular checkups to monitor recovery, adjust rehabilitation, and ensure optimal joint function and long-term success."
      }
    ],
    recovery: [
      {
        phase: "Immediate (Day 1-3)",
        description: "Hospital stay with pain management, initial mobilization, and beginning of physiotherapy exercises."
      },
      {
        phase: "Early Recovery (Week 1-4)",
        description: "Gradual increase in activities, continued physiotherapy, use of walking aids, and wound care."
      },
      {
        phase: "Mid-Recovery (Week 4-8)",
        description: "Progressive strengthening exercises, reduced dependence on walking aids, and return to light daily activities."
      },
      {
        phase: "Full Recovery (Month 3-6)",
        description: "Return to normal activities, continued exercises for optimal function, and long-term joint care."
      }
    ],
    faq: [
      {
        question: "How long does joint replacement surgery take?",
        answer: "The actual surgery typically takes 1-2 hours, with total time in the operating room including preparation and recovery being 3-4 hours."
      },
      {
        question: "When can I return to normal activities?",
        answer: "Most patients can return to light activities in 4-6 weeks and normal activities in 6-8 weeks, though full recovery may take 3-6 months."
      },
      {
        question: "How long will the implant last?",
        answer: "Modern joint implants typically last 15-20 years or longer with proper care and use, with many patients enjoying their implants for 20+ years."
      },
      {
        question: "Will I need assistance after surgery?",
        answer: "Yes, initially you'll need help with daily activities. Assistance needs decrease as you recover, typically requiring help for the first 2-4 weeks."
      },
      {
        question: "Can both joints be replaced at the same time?",
        answer: "Bilateral joint replacement is possible in selected cases, but is typically done in stages 3-6 months apart for optimal recovery and safety."
      }
    ],
    seoKeywords: [
      "joint replacement India",
      "knee replacement India",
      "hip replacement India",
      "orthopedic surgery India",
      "joint replacement cost India",
      "knee surgery India",
      "hip surgery India"
    ]
  },
  {
    slug: "spine-neuro-india",
    name: "Spine & Neuro",
    shortName: "Spine & Neuro",
    description: "Advanced neurosurgical and spine procedures including spinal fusion, disc replacement, brain surgery, and minimally invasive neurosurgery with expert neurosurgeons.",
    svg: "/svg/neuro.svg",
    color: "bg-indigo-50",
    overview: "India offers world-class neurosurgical and spine care with highly skilled neurosurgeons and spine specialists. With advanced technology including robotic surgery, minimally invasive techniques, and comprehensive neurological care, India provides excellent treatment options for complex neurological and spinal conditions.",
    whyChooseIndia: {
      title: "Why Choose India for Spine & Neuro Procedures?",
      points: [
        "Experienced neurosurgeons with international training and expertise",
        "Advanced technology including robotic surgery and navigation systems",
        "Minimally invasive techniques for faster recovery and less pain",
        "Comprehensive neurological care from diagnosis to rehabilitation",
        "Significant cost savings - up to 80-85% compared to Western countries",
        "High success rates for complex procedures",
        "Multidisciplinary approach with neurologists, neurosurgeons, and rehabilitation specialists"
      ]
    },
    costComparison: {
      india: "$6,000 - $15,000",
      usa: "$80,000 - $150,000",
      uk: "$30,000 - $60,000",
      savings: "80-85%"
    },
    treatmentTypes: [
      {
        name: "Spinal Fusion",
        description: "Surgical fusion of vertebrae to stabilize spine",
        cost: "$8,000 - $12,000",
        recovery: "3-6 months",
        duration: "2-4 hours surgery"
      },
      {
        name: "Discectomy",
        description: "Removal of herniated disc material",
        cost: "$5,000 - $8,000",
        recovery: "4-8 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Spinal Decompression",
        description: "Relief of pressure on spinal nerves",
        cost: "$6,000 - $10,000",
        recovery: "6-12 weeks",
        duration: "2-3 hours surgery"
      },
      {
        name: "Brain Tumor Surgery",
        description: "Surgical removal of brain tumors",
        cost: "$10,000 - $18,000",
        recovery: "4-8 weeks",
        duration: "3-6 hours surgery"
      },
      {
        name: "Minimally Invasive Spine Surgery",
        description: "Advanced keyhole techniques for spine procedures",
        cost: "$7,000 - $12,000",
        recovery: "2-4 weeks",
        duration: "1-3 hours surgery"
      },
      {
        name: "Deep Brain Stimulation",
        description: "Device implantation for movement disorders",
        cost: "$20,000 - $30,000",
        recovery: "2-4 weeks",
        duration: "4-6 hours procedure"
      }
    ],
    costBreakdown: [
      { item: "Pre-operative Tests & Imaging", cost: "$500 - $1,000" },
      { item: "Surgery Cost", cost: "$5,000 - $12,000" },
      { item: "Hospital Stay (3-7 days)", cost: "$400 - $800" },
      { item: "Medications", cost: "$300 - $600" },
      { item: "Rehabilitation", cost: "$500 - $1,000" }
    ],
    bestHospitals: [
      "Apollo Hospitals",
      "Medanta - The Medicity",
      "Fortis Healthcare",
      "Max Healthcare",
      "Narayana Health"
    ],
    process: [
      {
        step: "Neurological Evaluation",
        description: "Comprehensive assessment including MRI, CT scans, neurological examination, and specialized tests to diagnose condition and plan treatment."
      },
      {
        step: "Treatment Planning",
        description: "Multidisciplinary team review with neurosurgeons, neurologists, and rehabilitation specialists to develop personalized treatment approach."
      },
      {
        step: "Pre-operative Preparation",
        description: "Medical optimization, medication adjustments, and preparation for surgery including anesthesia evaluation and pre-operative tests."
      },
      {
        step: "Surgery",
        description: "Performed using advanced techniques including navigation systems, microscopes, and minimally invasive approaches when appropriate."
      },
      {
        step: "ICU/Recovery",
        description: "Specialized neurological ICU monitoring for 24-48 hours, then transfer to regular ward with continued monitoring."
      },
      {
        step: "Hospital Recovery",
        description: "3-7 days in hospital with pain management, gradual mobilization, and beginning of rehabilitation program."
      },
      {
        step: "Rehabilitation & Follow-up",
        description: "Structured rehabilitation program including physical therapy, occupational therapy, and regular follow-up appointments for optimal recovery."
      }
    ],
    recovery: [
      {
        phase: "Immediate Post-Surgery (Week 1)",
        description: "ICU monitoring, pain management, and careful mobilization. Focus on preventing complications and ensuring stability."
      },
      {
        phase: "Early Recovery (Week 2-4)",
        description: "Gradual increase in activities, continued pain management, wound care, and beginning of rehabilitation exercises."
      },
      {
        phase: "Mid-Recovery (Month 2-3)",
        description: "Progressive rehabilitation, strengthening exercises, and return to light activities with regular follow-up monitoring."
      },
      {
        phase: "Long-term Recovery (Month 3-6+)",
        description: "Continued rehabilitation, return to normal activities, and long-term monitoring to ensure optimal outcomes and prevent complications."
      }
    ],
    faq: [
      {
        question: "How safe are spine and brain surgeries in India?",
        answer: "Top neurosurgical centers in India have excellent safety records with success rates comparable to international standards, with experienced surgeons and advanced technology."
      },
      {
        question: "What is the recovery time after spine surgery?",
        answer: "Recovery varies by procedure. Minimally invasive procedures may allow return to activities in 4-6 weeks, while complex fusion procedures may require 3-6 months for full recovery."
      },
      {
        question: "Will I need rehabilitation after surgery?",
        answer: "Yes, rehabilitation is an important part of recovery. Most patients benefit from structured physical therapy and rehabilitation programs to optimize outcomes."
      },
      {
        question: "Are minimally invasive techniques available?",
        answer: "Yes, many spine procedures can be performed using minimally invasive techniques, which typically result in faster recovery, less pain, and smaller incisions."
      },
      {
        question: "What about follow-up care after returning home?",
        answer: "Hospitals provide detailed treatment summaries and can coordinate with your home country doctors. We assist with arranging follow-up care and monitoring."
      }
    ],
    seoKeywords: [
      "spine surgery India",
      "neurosurgery India",
      "brain surgery India",
      "spinal fusion India",
      "discectomy India",
      "neurosurgeon India",
      "spine treatment cost India"
    ]
  },
  {
    slug: "cosmetic-reconstructive-india",
    name: "Cosmetic & Reconstructive",
    shortName: "Cosmetic & Reconstructive",
    description: "Comprehensive cosmetic and reconstructive surgery including facelifts, breast augmentation, rhinoplasty, liposuction, and reconstructive procedures with board-certified plastic surgeons.",
    svg: "/svg/cosmetic-face-marking.svg",
    color: "bg-rose-50",
    overview: "India offers excellent cosmetic and reconstructive surgery with highly skilled plastic surgeons, modern techniques, and state-of-the-art facilities. With affordable costs and high-quality results, India has become a popular destination for cosmetic and reconstructive procedures.",
    whyChooseIndia: {
      title: "Why Choose India for Cosmetic & Reconstructive Surgery?",
      points: [
        "Board-certified plastic surgeons with extensive experience",
        "Advanced techniques including minimally invasive procedures",
        "Modern facilities with state-of-the-art equipment",
        "Significant cost savings - up to 70-80% compared to Western countries",
        "Comprehensive pre and post-operative care",
        "Natural-looking results with attention to detail",
        "Privacy and confidentiality maintained throughout"
      ]
    },
    costComparison: {
      india: "$2,000 - $8,000",
      usa: "$10,000 - $30,000",
      uk: "$8,000 - $20,000",
      savings: "70-80%"
    },
    treatmentTypes: [
      {
        name: "Rhinoplasty (Nose Job)",
        description: "Surgical reshaping of the nose",
        cost: "$2,500 - $4,500",
        recovery: "2-4 weeks",
        duration: "2-3 hours surgery"
      },
      {
        name: "Breast Augmentation",
        description: "Enhancement of breast size and shape",
        cost: "$3,500 - $5,500",
        recovery: "2-4 weeks",
        duration: "1-2 hours surgery"
      },
      {
        name: "Liposuction",
        description: "Fat removal and body contouring",
        cost: "$2,000 - $4,000",
        recovery: "1-2 weeks",
        duration: "1-3 hours procedure"
      },
      {
        name: "Facelift",
        description: "Facial rejuvenation and wrinkle reduction",
        cost: "$4,000 - $7,000",
        recovery: "2-3 weeks",
        duration: "3-4 hours surgery"
      },
      {
        name: "Tummy Tuck (Abdominoplasty)",
        description: "Abdominal contouring and skin tightening",
        cost: "$3,500 - $6,000",
        recovery: "3-4 weeks",
        duration: "2-3 hours surgery"
      },
      {
        name: "Hair Transplant",
        description: "Surgical hair restoration",
        cost: "$2,000 - $5,000",
        recovery: "1-2 weeks",
        duration: "4-8 hours procedure"
      }
    ],
    costBreakdown: [
      { item: "Initial Consultation", cost: "$100 - $200" },
      { item: "Surgery Cost", cost: "$2,000 - $6,000" },
      { item: "Anesthesia", cost: "$300 - $600" },
      { item: "Hospital/Clinic Stay", cost: "$200 - $500" },
      { item: "Medications & Supplies", cost: "$200 - $400" },
      { item: "Follow-up Care", cost: "$100 - $300" }
    ],
    bestHospitals: [
      "Apollo Hospitals",
      "Fortis Healthcare",
      "Max Healthcare",
      "Medanta",
      "Private Cosmetic Clinics"
    ],
    process: [
      {
        step: "Initial Consultation",
        description: "Detailed discussion of your goals, medical history review, physical examination, and explanation of procedure options and expected outcomes."
      },
      {
        step: "Pre-operative Planning",
        description: "Photography, measurements, marking, and detailed planning of the procedure. Pre-operative tests and medical clearance if needed."
      },
      {
        step: "Surgery",
        description: "Procedure performed under appropriate anesthesia (local, sedation, or general) with careful attention to detail and aesthetic principles."
      },
      {
        step: "Immediate Recovery",
        description: "Recovery room monitoring, then discharge with detailed post-operative instructions and medications."
      },
      {
        step: "Post-operative Care",
        description: "Regular follow-up appointments for wound care, suture removal, and monitoring of healing progress."
      },
      {
        step: "Long-term Follow-up",
        description: "Continued monitoring to ensure optimal results, address any concerns, and provide guidance for maintaining results."
      }
    ],
    recovery: [
      {
        phase: "Immediate (Day 1-3)",
        description: "Rest, pain management, and careful wound care. Swelling and bruising are normal and expected."
      },
      {
        phase: "Early Recovery (Week 1-2)",
        description: "Gradual return to light activities, continued wound care, and follow-up appointments for monitoring."
      },
      {
        phase: "Mid-Recovery (Week 2-4)",
        description: "Most swelling subsides, return to normal activities, and continued healing with improved appearance."
      },
      {
        phase: "Final Results (Month 3-6)",
        description: "Final results become apparent as all swelling resolves and tissues settle into their final position."
      }
    ],
    faq: [
      {
        question: "How long do cosmetic surgery results last?",
        answer: "Results vary by procedure. Surgical procedures like facelifts and tummy tucks typically last 10-15 years, while procedures like liposuction provide permanent fat removal."
      },
      {
        question: "Will there be visible scars?",
        answer: "Surgeons use advanced techniques to minimize scarring, placing incisions in natural creases or hidden areas whenever possible. Scars typically fade significantly over time."
      },
      {
        question: "When can I return to work?",
        answer: "Return to work varies by procedure and individual healing. Most patients can return to desk work in 1-2 weeks, while physical jobs may require 3-4 weeks."
      },
      {
        question: "Is cosmetic surgery safe?",
        answer: "When performed by qualified, experienced surgeons in accredited facilities, cosmetic surgery is generally safe. We work only with board-certified surgeons and accredited facilities."
      },
      {
        question: "Can I combine multiple procedures?",
        answer: "Yes, many patients combine procedures for comprehensive results. Your surgeon will evaluate safety and recommend appropriate combinations during consultation."
      }
    ],
    seoKeywords: [
      "cosmetic surgery India",
      "plastic surgery India",
      "rhinoplasty India",
      "breast augmentation India",
      "liposuction India",
      "facelift India",
      "cosmetic surgery cost India"
    ]
  },
  {
    slug: "dental-care-india",
    name: "Dental Care",
    shortName: "Dental Care",
    description: "Comprehensive dental treatments including dental implants, crowns, bridges, root canals, cosmetic dentistry, and full mouth rehabilitation with experienced dentists.",
    svg: "/svg/dental.svg",
    color: "bg-teal-50",
    overview: "India offers world-class dental care with highly qualified dentists, modern dental technology, and comprehensive treatment options. With affordable costs and high-quality materials, India provides excellent dental care for international patients.",
    whyChooseIndia: {
      title: "Why Choose India for Dental Care?",
      points: [
        "Experienced dentists with international training and certifications",
        "Modern dental technology including digital imaging and CAD/CAM",
        "High-quality materials from leading international manufacturers",
        "Comprehensive dental care from routine to complex procedures",
        "Significant cost savings - up to 70-80% compared to Western countries",
        "Quick treatment timelines with efficient scheduling",
        "Comfortable facilities with modern amenities"
      ]
    },
    costComparison: {
      india: "$500 - $5,000",
      usa: "$2,000 - $20,000",
      uk: "$1,500 - $15,000",
      savings: "70-80%"
    },
    treatmentTypes: [
      {
        name: "Dental Implants",
        description: "Titanium implants for missing teeth replacement",
        cost: "$800 - $1,500 per implant",
        recovery: "3-6 months",
        duration: "1-2 hours per implant"
      },
      {
        name: "Dental Crowns",
        description: "Porcelain or ceramic crowns for damaged teeth",
        cost: "$200 - $500 per crown",
        recovery: "1-2 weeks",
        duration: "2 visits (1-2 weeks apart)"
      },
      {
        name: "Root Canal Treatment",
        description: "Treatment to save infected teeth",
        cost: "$150 - $400 per tooth",
        recovery: "3-5 days",
        duration: "1-2 visits"
      },
      {
        name: "Dental Bridges",
        description: "Fixed bridges for multiple missing teeth",
        cost: "$400 - $800 per unit",
        recovery: "2-3 weeks",
        duration: "2-3 visits"
      },
      {
        name: "Teeth Whitening",
        description: "Professional teeth whitening procedures",
        cost: "$200 - $500",
        recovery: "Immediate",
        duration: "1-2 visits"
      },
      {
        name: "Full Mouth Rehabilitation",
        description: "Comprehensive dental restoration",
        cost: "$5,000 - $15,000",
        recovery: "Varies",
        duration: "Multiple visits over weeks"
      }
    ],
    costBreakdown: [
      { item: "Initial Consultation & X-rays", cost: "$50 - $100" },
      { item: "Treatment Cost (varies by procedure)", cost: "$500 - $5,000" },
      { item: "Materials (implants, crowns, etc.)", cost: "Included in treatment" },
      { item: "Follow-up Visits", cost: "$50 - $100" }
    ],
    bestHospitals: [
      "Apollo Dental",
      "Fortis Dental",
      "Max Dental",
      "Private Dental Clinics",
      "Specialized Dental Centers"
    ],
    process: [
      {
        step: "Dental Examination",
        description: "Comprehensive oral examination including X-rays, digital scans, and assessment of dental health and treatment needs."
      },
      {
        step: "Treatment Planning",
        description: "Detailed treatment plan with options, costs, timeline, and expected outcomes. Discussion of materials and techniques."
      },
      {
        step: "Pre-treatment Preparation",
        description: "Any necessary preliminary treatments such as cleaning, fillings, or gum treatment to prepare for main procedure."
      },
      {
        step: "Main Treatment",
        description: "Performance of planned dental procedure using modern techniques and high-quality materials for optimal results."
      },
      {
        step: "Post-treatment Care",
        description: "Immediate post-treatment instructions, medications if needed, and scheduling of follow-up appointments."
      },
      {
        step: "Follow-up & Maintenance",
        description: "Regular follow-up visits to monitor healing, adjust if needed, and provide maintenance guidance for long-term success."
      }
    ],
    recovery: [
      {
        phase: "Immediate (Day 1)",
        description: "Rest, avoid hard foods, and follow post-treatment instructions. Some discomfort is normal and manageable with medications."
      },
      {
        phase: "Early Recovery (Day 2-7)",
        description: "Gradual return to normal diet, continued care, and healing. Follow-up appointment for monitoring."
      },
      {
        phase: "Short-term (Week 2-4)",
        description: "Continued healing and adaptation. For procedures like implants, osseointegration process continues."
      },
      {
        phase: "Long-term",
        description: "Regular dental hygiene and maintenance visits to ensure long-term success and oral health."
      }
    ],
    faq: [
      {
        question: "How long do dental implants last?",
        answer: "With proper care, dental implants can last a lifetime. The crown on the implant may need replacement after 10-15 years, but the implant itself is permanent."
      },
      {
        question: "Is dental treatment painful?",
        answer: "Modern dental techniques and anesthesia ensure procedures are comfortable. Most patients report minimal discomfort, and any post-treatment discomfort is manageable with medications."
      },
      {
        question: "How long do I need to stay in India for dental treatment?",
        answer: "Simple procedures may require 3-7 days, while complex treatments like full mouth rehabilitation may require 2-4 weeks with multiple visits."
      },
      {
        question: "What materials are used?",
        answer: "We use high-quality materials from leading international manufacturers including titanium implants, porcelain/ceramic crowns, and premium dental materials."
      },
      {
        question: "Can I get follow-up care in my home country?",
        answer: "Yes, we provide detailed treatment records and can coordinate with your home country dentist for follow-up care and maintenance."
      }
    ],
    seoKeywords: [
      "dental treatment India",
      "dental implants India",
      "dental surgery India",
      "cosmetic dentistry India",
      "dental crown India",
      "root canal India",
      "dental treatment cost India"
    ]
  },
  {
    slug: "organ-transplant-support-india",
    name: "Organ Transplant Support",
    shortName: "Organ Transplant",
    description: "Comprehensive organ transplant services including kidney transplant, liver transplant, heart transplant, and bone marrow transplant with experienced transplant teams.",
    svg: "/svg/organ-transplant.svg",
    color: "bg-green-50",
    overview: "India offers world-class organ transplantation with highly experienced transplant surgeons, comprehensive pre and post-transplant care, and advanced immunosuppression protocols. With excellent success rates and affordable costs, India provides life-saving transplant services for international patients.",
    whyChooseIndia: {
      title: "Why Choose India for Organ Transplantation?",
      points: [
        "Experienced transplant surgeons with hundreds of successful procedures",
        "Comprehensive transplant programs with multidisciplinary teams",
        "Advanced immunosuppression protocols and post-transplant care",
        "Excellent success rates comparable to international standards",
        "Significant cost savings - up to 75-85% compared to Western countries",
        "Organ availability through legal and ethical organ procurement",
        "Long-term follow-up care and monitoring programs"
      ]
    },
    costComparison: {
      india: "$15,000 - $80,000",
      usa: "$200,000 - $1,000,000+",
      uk: "$100,000 - $500,000",
      savings: "75-85%"
    },
    treatmentTypes: [
      {
        name: "Kidney Transplant",
        description: "Renal transplantation for end-stage kidney disease",
        cost: "$15,000 - $25,000",
        recovery: "2-3 months",
        duration: "3-4 hours surgery"
      },
      {
        name: "Liver Transplant",
        description: "Hepatic transplantation for liver failure",
        cost: "$35,000 - $50,000",
        recovery: "3-6 months",
        duration: "8-12 hours surgery"
      },
      {
        name: "Heart Transplant",
        description: "Cardiac transplantation for end-stage heart disease",
        cost: "$50,000 - $80,000",
        recovery: "3-6 months",
        duration: "6-8 hours surgery"
      },
      {
        name: "Bone Marrow Transplant",
        description: "Stem cell transplantation for blood disorders",
        cost: "$25,000 - $40,000",
        recovery: "3-6 months",
        duration: "2-4 weeks hospitalization"
      },
      {
        name: "Pancreas Transplant",
        description: "Pancreatic transplantation for diabetes",
        cost: "$30,000 - $45,000",
        recovery: "3-6 months",
        duration: "4-6 hours surgery"
      },
      {
        name: "Lung Transplant",
        description: "Pulmonary transplantation for lung failure",
        cost: "$45,000 - $70,000",
        recovery: "3-6 months",
        duration: "6-8 hours surgery"
      }
    ],
    costBreakdown: [
      { item: "Pre-transplant Evaluation", cost: "$1,000 - $2,000" },
      { item: "Organ Procurement", cost: "Varies by organ" },
      { item: "Transplant Surgery", cost: "$15,000 - $70,000" },
      { item: "Hospital Stay (2-4 weeks)", cost: "$2,000 - $5,000" },
      { item: "Immunosuppressant Medications (first year)", cost: "$3,000 - $6,000" },
      { item: "Follow-up Care", cost: "$1,000 - $2,000" }
    ],
    bestHospitals: [
      "Apollo Hospitals",
      "Medanta - The Medicity",
      "Fortis Healthcare",
      "Max Healthcare",
      "Narayana Health"
    ],
    process: [
      {
        step: "Transplant Evaluation",
        description: "Comprehensive medical evaluation including blood tests, imaging, cardiac assessment, and psychological evaluation to determine transplant candidacy."
      },
      {
        step: "Listing & Waiting",
        description: "Registration on transplant waiting list, regular monitoring, and maintaining health while waiting for suitable organ."
      },
      {
        step: "Organ Matching",
        description: "Notification when suitable organ becomes available, final compatibility testing, and preparation for surgery."
      },
      {
        step: "Transplant Surgery",
        description: "Complex surgical procedure performed by experienced transplant surgeons with specialized anesthesia and monitoring."
      },
      {
        step: "ICU Recovery",
        description: "Intensive care monitoring for 3-7 days with careful management of immunosuppression and prevention of complications."
      },
      {
        step: "Hospital Recovery",
        description: "2-4 weeks in hospital with gradual recovery, medication management, and education about post-transplant care."
      },
      {
        step: "Long-term Follow-up",
        description: "Lifelong monitoring with regular checkups, medication adjustments, and management of potential complications."
      }
    ],
    recovery: [
      {
        phase: "Immediate Post-Surgery (Week 1)",
        description: "ICU monitoring with careful management of immunosuppression, prevention of rejection, and monitoring for complications."
      },
      {
        phase: "Hospital Recovery (Week 2-4)",
        description: "Gradual recovery, medication management, education about post-transplant care, and preparation for discharge."
      },
      {
        phase: "Early Recovery (Month 1-3)",
        description: "Close monitoring, frequent checkups, medication adjustments, and gradual return to activities with precautions."
      },
      {
        phase: "Long-term (Month 3+)",
        description: "Regular monitoring, medication adherence, lifestyle modifications, and ongoing care to ensure long-term transplant success."
      }
    ],
    faq: [
      {
        question: "How long is the waiting time for organ transplant?",
        answer: "Waiting times vary by organ type and availability. Kidney transplants may have shorter wait times, while heart and liver transplants depend on organ availability and matching."
      },
      {
        question: "What is the success rate of organ transplants in India?",
        answer: "Success rates are excellent and comparable to international standards. Kidney transplants have 90-95% one-year survival, liver transplants 85-90%, and heart transplants 85-90%."
      },
      {
        question: "Can I bring a living donor?",
        answer: "Yes, living donor transplants are possible for kidney and liver (partial). Living donors must undergo comprehensive evaluation to ensure compatibility and safety."
      },
      {
        question: "What about long-term medication costs?",
        answer: "Immunosuppressant medications are required lifelong. First-year costs are typically $3,000-$6,000, with ongoing annual costs of $2,000-$4,000."
      },
      {
        question: "How long do I need to stay in India after transplant?",
        answer: "Initial stay is typically 2-3 months for close monitoring. Follow-up visits may be required at 6 months and 1 year, with coordination possible with home country doctors."
      }
    ],
    seoKeywords: [
      "organ transplant India",
      "kidney transplant India",
      "liver transplant India",
      "heart transplant India",
      "bone marrow transplant India",
      "transplant surgery India",
      "organ transplant cost India"
    ]
  }
]
