import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service | Privacy Policy | Disclaimer",
  description: "Terms of Service, Privacy Policy, and Disclaimer for Medical Tours India - Free Medical Guidance and Coordination Platform",
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
          {/* Terms of Service */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8"><strong>Effective Date:</strong> 9 January 2026</p>

          <p className="text-gray-700 mb-8">
            Welcome to Medical Tours India. By accessing or using our website, services, or communication channels, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. About Our Platform</h2>
              <p>
                Medical Tours India is a medical tourism facilitation and guidance platform that provides free medical information, treatment guidance, cost estimates, and coordination support for international and domestic patients seeking healthcare services in India.
              </p>
              <p className="mt-4 font-medium text-gray-800">
                We do not provide medical treatment, medical diagnosis, or medical advice directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Eligibility</h2>
              <p>By using our services, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You are at least 18 years old, or using the platform under parental or legal guardian supervision.</li>
                <li>You are legally permitted to use our services under applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Nature of Services</h2>
              <p>Medical Tours India:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Shares general medical information and treatment options</li>
                <li>Assists in connecting patients with hospitals, doctors, and healthcare providers</li>
                <li>Helps with treatment planning, travel guidance, and cost estimation</li>
                <li>Offers coordination support as a facilitator only</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                We do not guarantee medical outcomes, treatment success, pricing accuracy, or availability of specific doctors or hospitals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. No Doctor–Patient Relationship</h2>
              <p>
                Use of this website or communication with our team does not create a doctor–patient relationship. All medical decisions must be made directly between you and the treating healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and complete information</li>
                <li>Consult qualified medical professionals before making healthcare decisions</li>
                <li>Use the platform responsibly and lawfully</li>
                <li>Not misuse the website or attempt unauthorised access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Services</h2>
              <p>
                Our platform may include links or references to third-party hospitals, clinics, doctors, or service providers. We are not responsible for their services, conduct, outcomes, or policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>Medical Tours India shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Medical outcomes or complications</li>
                <li>Treatment delays or cancellations</li>
                <li>Financial losses or travel disruptions</li>
                <li>Errors or omissions in third-party information</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                All services are provided on an "as-is" and "as-available" basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and design, is the property of Medical Tours India and may not be copied, reproduced, or distributed without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access to our services at any time if terms are violated or misuse is detected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and interpreted under the laws of India, with jurisdiction subject to courts in Hyderabad, Telangana.
              </p>
            </section>
          </div>

          {/* Privacy Policy */}
          <div className="border-t border-gray-200 mt-16 pt-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8"><strong>Effective Date:</strong> 9 January 2026</p>

            <p className="text-gray-700 mb-8">
              Medical Tours India values your privacy and is committed to protecting your personal information.
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                <p>We may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name, email address, phone number</li>
                  <li>Country of residence</li>
                  <li>Medical condition details (shared voluntarily)</li>
                  <li>Treatment preferences</li>
                  <li>Communication history</li>
                  <li>Website usage data (cookies, IP address, browser type)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide medical guidance and coordination support</li>
                  <li>Communicate treatment options and updates</li>
                  <li>Connect you with relevant healthcare providers</li>
                  <li>Improve website performance and user experience</li>
                  <li>Respond to enquiries and support requests</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Medical Information Handling</h2>
                <p>
                  Medical information shared by users is treated as confidential and shared only with relevant healthcare providers upon user consent.
                </p>
                <p className="mt-4 font-medium text-gray-800">
                  We do not sell, rent, or misuse medical or personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
                <p>We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Hospitals, doctors, and healthcare providers (only for coordination)</li>
                  <li>Technology and communication partners (for service delivery)</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies & Tracking</h2>
                <p>
                  Our website uses cookies to enhance user experience and analyse traffic. You may disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect user data. However, no online transmission is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. International Users</h2>
                <p>
                  By using our platform, you consent to the processing of your data in India, in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
                <p>You may request:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Access to your data</li>
                  <li>Correction or deletion of your data</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="mt-4">
                  Requests can be sent to: <a href="mailto:contact@medicaltoursindia.com" className="text-teal-600 hover:underline">contact@medicaltoursindia.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Policy Updates</h2>
                <p>
                  We may update this Privacy Policy periodically. Continued use of the platform implies acceptance of updates.
                </p>
              </section>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-200 mt-16 pt-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

            <p className="text-gray-700 mb-8">
              The information provided on Medical Tours India is for general informational and coordination purposes only.
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Medical Disclaimer</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>We do not provide medical advice, diagnosis, or treatment.</li>
                  <li>Information on this website should not be considered a substitute for professional medical consultation.</li>
                  <li>Always consult a qualified doctor or healthcare provider before making medical decisions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Treatment & Outcome Disclaimer</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Medical outcomes vary based on individual conditions.</li>
                  <li>We do not guarantee treatment success, recovery timelines, or results.</li>
                  <li>Cost estimates are indicative and subject to change by healthcare providers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Disclaimer</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Medical Tours India is not responsible for the services, actions, or outcomes of hospitals, doctors, or third-party providers.</li>
                  <li>Any agreements for treatment or services are solely between the patient and the healthcare provider.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Warranty</h2>
                <p>
                  All content and services are provided without warranties of any kind, express or implied.
                </p>
              </section>
            </div>
          </div>

          {/* Footer Note */}
          <div className="border-t border-gray-200 mt-16 pt-8">
            <p className="text-gray-600 text-center italic">
              Medical Tours India is a medical tourism facilitation platform providing free medical guidance and coordination support. We do not offer medical treatment or diagnosis.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
