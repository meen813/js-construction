'use client';

import Link from 'next/link';
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData';

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how Hwang J&S Construction collects, 
              uses, and protects your personal information.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Effective Date */}
          <section aria-labelledby="effective-date-heading">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
              <h2 id="effective-date-heading" className="text-2xl font-bold text-gray-900 mb-2">
                Effective Date
              </h2>
              <p className="text-lg text-gray-700">
                This Privacy Policy was last updated on <time dateTime="2025-01-27">January 27, 2025</time>.
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section aria-labelledby="introduction-heading">
            <h2 id="introduction-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Hwang J&S Construction ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our construction services.
              </p>
              <p className="text-lg text-gray-700">
                By using our website or services, you agree to the collection and use of information in 
                accordance with this policy. If you do not agree with our policies and practices, please 
                do not use our services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section aria-labelledby="information-collected-heading">
            <h2 id="information-collected-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Personal Information
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Contact us through our website contact form</li>
                <li>Request a quote or consultation for construction services</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Communicate with us via email, phone, or in person</li>
                <li>Engage our services for construction projects</li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Project details and requirements</li>
                <li>Property information and location</li>
                <li>Payment and billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Automatically Collected Information
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information and operating system</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section aria-labelledby="use-information-heading">
            <h2 id="use-information-heading" className="text-3xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>To provide, maintain, and improve our construction services</li>
                <li>To respond to your inquiries, requests, and provide customer support</li>
                <li>To process transactions and send related information</li>
                <li>To send you project updates, invoices, and service-related communications</li>
                <li>To send marketing communications (with your consent, where required)</li>
                <li>To comply with legal obligations and protect our legal rights</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section aria-labelledby="sharing-heading">
            <h2 id="sharing-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Information Sharing and Disclosure
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong className="font-semibold text-gray-900">Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as subcontractors, suppliers, and payment processors.</li>
                <li><strong className="font-semibold text-gray-900">Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                <li><strong className="font-semibold text-gray-900">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                <li><strong className="font-semibold text-gray-900">With Your Consent:</strong> We may share information with your explicit consent.</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Data Security
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
              <p className="text-lg text-gray-700">
                We maintain physical, electronic, and procedural safeguards to protect your information in accordance with 
                industry standards and applicable regulations.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section aria-labelledby="rights-heading">
            <h2 id="rights-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Your Privacy Rights
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong className="font-semibold text-gray-900">Access:</strong> Request access to your personal information</li>
                <li><strong className="font-semibold text-gray-900">Correction:</strong> Request correction of inaccurate information</li>
                <li><strong className="font-semibold text-gray-900">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="font-semibold text-gray-900">Opt-Out:</strong> Opt-out of marketing communications</li>
                <li><strong className="font-semibold text-gray-900">Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-lg text-gray-700">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>
          </section>

          {/* California Privacy Rights */}
          <section aria-labelledby="california-rights-heading">
            <h2 id="california-rights-heading" className="text-3xl font-bold text-gray-900 mb-6">
              California Privacy Rights
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>The right to know what personal information we collect, use, and disclose</li>
                <li>The right to delete personal information we have collected</li>
                <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-lg text-gray-700">
                California residents may request information about our disclosure of personal information to third parties 
                for their direct marketing purposes. We do not share personal information with third parties for their 
                direct marketing purposes.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Cookies and Tracking Technologies
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                Cookies are small data files stored on your device. You can control cookies through your browser settings.
              </p>
              <p className="text-lg text-gray-700">
                We use cookies for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Website functionality and user experience</li>
                <li>Analytics and performance monitoring</li>
                <li>Security and fraud prevention</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section aria-labelledby="children-heading">
            <h2 id="children-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Children's Privacy
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised 
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hwang J&S Construction</h3>
                  <p className="text-gray-700">
                    Orange County, California<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">
                    <Link 
                      href="/contact" 
                      className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Use our contact form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
