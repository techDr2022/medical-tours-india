import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Medical Tours India - Free Medical Guidance Service",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (cost.medicaltoursindia.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h2>
              <p>
                Medical Tours India provides free medical guidance and information services to international patients seeking medical treatment in India. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Free medical treatment guidance and consultation</li>
                <li>Cost estimation for medical procedures</li>
                <li>Hospital and doctor recommendations</li>
                <li>Information about medical tourism in India</li>
                <li>Assistance with understanding treatment options</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> We are not a medical provider, hospital, or clinic. We do not provide medical advice, diagnosis, or treatment. We are a medical tourism guidance service that provides information and connects patients with healthcare providers in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. No Medical Advice</h2>
              <p>
                The information provided on this website and through our services is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding a medical condition.
              </p>
              <p className="mt-4">
                We do not recommend or endorse any specific healthcare providers, treatments, or medical procedures. All medical decisions should be made in consultation with licensed medical professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Free Service</h2>
              <p>
                Our guidance and consultation services are provided free of charge to patients. We do not charge fees for providing information, cost estimates, or guidance. However, medical treatment costs, travel expenses, and other related expenses are the sole responsibility of the patient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. User Responsibilities</h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and truthful information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not misuse our services for any illegal or unauthorized purpose</li>
                <li>Respect the privacy and confidentiality of information shared</li>
                <li>Consult with qualified medical professionals before making medical decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                Medical Tours India, its employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use or inability to use our services</li>
                <li>Medical treatment received or not received based on our guidance</li>
                <li>Errors or omissions in the information provided</li>
                <li>Decisions made based on information from our website or services</li>
                <li>Any other matter relating to our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites, hospitals, clinics, or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services. Your interactions with third parties are solely between you and such third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Privacy</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Medical Tours India or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Medical Tours India</strong><br />
                Hyderabad, Telangana, India<br />
                WhatsApp: +91-90322-92171<br />
                Website: cost.medicaltoursindia.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
