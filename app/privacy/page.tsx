import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Medical Tours India - How we collect, use, and protect your personal information",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                Medical Tours India ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cost.medicaltoursindia.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and contact information (email, phone number, WhatsApp number)</li>
                <li>Country of residence</li>
                <li>Medical condition or treatment inquiry details</li>
                <li>Medical reports or documents (when submitted)</li>
                <li>Any other information you choose to provide in forms or communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide medical guidance and consultation services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Provide cost estimates and treatment information</li>
                <li>Connect you with healthcare providers in India (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Send you updates or communications related to your inquiry</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 With Healthcare Providers</h3>
              <p>
                With your explicit consent, we may share your medical information and inquiries with hospitals, clinics, or healthcare providers in India to help facilitate your medical treatment consultation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Providers</h3>
              <p>
                We may share information with third-party service providers who assist us in operating our website and conducting our business, such as email service providers and hosting services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 Business Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Medical Information</h2>
              <p>
                Medical information you share with us is considered sensitive personal data. We handle such information with extra care and only use it to provide you with medical guidance services. We do not share your medical information with third parties without your explicit consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
              <p className="mt-4">
                For more information about our use of cookies, please see our <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the contact information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your country of residence. By using our services, you consent to the transfer of your information to India and other countries where we operate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
