import { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Medical Tours India - Information about how we use cookies on our website",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/cookie-policy",
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
              <p>
                Medical Tours India uses cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are used for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics and understand how visitors interact with our website</li>
                <li>To improve user experience</li>
                <li>To remember your preferences and settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party services may set their own cookies on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Browser Settings</h3>
              <p>
                Most browsers allow you to refuse or delete cookies. The methods for doing so vary from browser to browser. You can usually find these settings in your browser&apos;s &quot;Privacy&quot; or &quot;Options&quot; menu. Here are links to cookie settings for major browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies We Use</h2>
              <p>The following table details the cookies we use on our website:</p>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Session Cookies</td>
                      <td className="border border-gray-300 px-4 py-2">Essential for website functionality</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
