import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Medical Disclaimer for Medical Tours India - Important information about our medical guidance services",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/disclaimer",
  },
}

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-2">IMPORTANT MEDICAL DISCLAIMER</p>
              <p>
                The information provided on this website and through our services is for informational purposes only and does NOT constitute medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Not a Medical Provider</h2>
              <p>
                Medical Tours India is NOT a medical provider, hospital, clinic, or healthcare facility. We do NOT provide medical advice, diagnosis, treatment, or medical services. We are a medical tourism guidance and information service that helps international patients understand their options and connect with healthcare providers in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Informational Purpose Only</h2>
              <p>
                All information provided on this website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Cost estimates for medical procedures</li>
                <li>Information about treatments and medical conditions</li>
                <li>Hospital and doctor recommendations</li>
                <li>Medical tourism information</li>
                <li>Any guidance or consultation provided</li>
              </ul>
              <p className="mt-4">
                ...is provided for informational purposes only and should NOT be used as a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. No Medical Advice</h2>
              <p>
                We do NOT provide medical advice. The information we provide is general in nature and may not be appropriate for your specific medical condition. Always consult with qualified, licensed healthcare professionals before making any decisions about your medical care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. No Endorsement</h2>
              <p>
                Medical Tours India does NOT endorse or recommend any specific healthcare providers, hospitals, clinics, treatments, medications, or medical procedures. Any information we provide about healthcare providers is for informational purposes only and does not constitute an endorsement or recommendation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Medical Decisions</h2>
              <p>
                All medical decisions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Choosing a healthcare provider</li>
                <li>Selecting a treatment option</li>
                <li>Undergoing medical procedures</li>
                <li>Taking medications</li>
                <li>Any other healthcare-related decisions</li>
              </ul>
              <p className="mt-4">
                ...should be made in consultation with qualified healthcare professionals who have reviewed your medical history, current condition, and individual circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Medical Emergencies</h2>
              <p>
                If you have a medical emergency, call your local emergency services immediately or go to the nearest emergency room. Do NOT delay seeking emergency medical care based on information from this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cost Estimates</h2>
              <p>
                Cost estimates provided are approximate and for informational purposes only. Actual costs may vary significantly based on various factors including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Specific medical condition and complexity</li>
                <li>Chosen healthcare provider and facility</li>
                <li>Required tests and procedures</li>
                <li>Length of stay</li>
                <li>Additional treatments or complications</li>
                <li>Currency exchange rates</li>
                <li>Individual medical needs</li>
              </ul>
              <p className="mt-4">
                Final costs should be confirmed directly with your chosen healthcare provider before undergoing any treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Treatment Outcomes</h2>
              <p>
                We do NOT guarantee any specific treatment outcomes. Medical treatment results vary from person to person and depend on various factors including individual health conditions, medical history, and response to treatment. Past results or testimonials do not guarantee future outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Third-Party Healthcare Providers</h2>
              <p>
                When we connect you with healthcare providers, we are acting as an intermediary for informational purposes only. We are NOT responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The quality of medical care provided by healthcare facilities</li>
                <li>Medical decisions made by healthcare providers</li>
                <li>Treatment outcomes</li>
                <li>Any complications or adverse events</li>
                <li>The accuracy of information provided by healthcare providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
              <p>
                Medical Tours India, its employees, agents, and affiliates shall NOT be liable for any:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Medical complications, injuries, or adverse outcomes</li>
                <li>Incorrect or inaccurate information</li>
                <li>Decisions made based on information from our website or services</li>
                <li>Actions or omissions of healthcare providers</li>
                <li>Treatment outcomes or results</li>
                <li>Any damages, losses, or expenses related to medical treatment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Verification</h2>
              <p>
                While we strive to provide accurate information, we recommend that you verify all information independently with healthcare providers, including credentials, qualifications, facility accreditations, and treatment options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Your Responsibility</h2>
              <p>
                You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Consulting with qualified healthcare professionals</li>
                <li>Making informed medical decisions based on professional medical advice</li>
                <li>Verifying information provided</li>
                <li>Understanding risks and benefits of treatments</li>
                <li>All medical treatment decisions and outcomes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about this Medical Disclaimer, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Medical Tours India</strong><br />
                Hyderabad, Telangana, India<br />
                WhatsApp: +91-90322-92171<br />
                Website: cost.medicaltoursindia.com
              </p>
            </section>

            <section className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
              <p className="font-semibold text-gray-900 mb-2">ACKNOWLEDGMENT</p>
              <p>
                By using our website and services, you acknowledge that you have read, understood, and agree to this Medical Disclaimer. You understand that Medical Tours India is NOT a medical provider and does NOT provide medical advice, diagnosis, or treatment.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
