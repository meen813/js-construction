'use client';

import Link from 'next/link';
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData';

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms-of-service' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Terms of Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Please read these terms carefully before using our website or engaging our construction services.
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
                These Terms of Service were last updated on <time dateTime="2025-01-27">January 27, 2025</time>.
              </p>
            </div>
          </section>

          {/* Agreement to Terms */}
          <section aria-labelledby="agreement-heading">
            <h2 id="agreement-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Agreement to Terms
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                By accessing or using the website of Hwang J&S Construction (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) or by engaging 
                our construction services, you agree to be bound by these Terms of Service and all applicable laws 
                and regulations. If you do not agree with any of these terms, you are prohibited from using or 
                accessing this site or our services.
              </p>
              <p className="text-lg text-gray-700">
                These terms apply to all visitors, users, and others who access or use our website or services.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Services Description
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Hwang J&S Construction provides professional construction and renovation services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Commercial renovation and tenant improvements</li>
                <li>Residential construction and home additions</li>
                <li>ADA (Americans with Disabilities Act) upgrades and compliance</li>
                <li>Kitchen and bathroom remodeling</li>
                <li>ADU (Accessory Dwelling Unit) construction</li>
                <li>General contracting services</li>
                <li>Site improvements and maintenance</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                All services are subject to written contracts, permits, and applicable building codes and regulations.
              </p>
            </div>
          </section>

          {/* Use of Website */}
          <section aria-labelledby="website-use-heading">
            <h2 id="website-use-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Use of Website
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Permitted Use
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Use the website in any way that violates any applicable federal, state, or local law or regulation</li>
                <li>Transmit any malicious code, viruses, or harmful materials</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers connected to the website</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Reproduce, duplicate, copy, or resell any part of the website without our written permission</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Intellectual Property
              </h3>
              <p className="text-lg text-gray-700">
                All content on this website, including text, graphics, logos, images, and software, is the property 
                of Hwang J&S Construction or its content suppliers and is protected by copyright and other intellectual 
                property laws. You may not use, reproduce, or distribute any content from this website without our 
                prior written consent.
              </p>
            </div>
          </section>

          {/* Service Agreements */}
          <section aria-labelledby="service-agreements-heading">
            <h2 id="service-agreements-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Service Agreements and Contracts
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                All construction services are subject to separate written contracts that will include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Detailed scope of work and project specifications</li>
                <li>Project timeline and completion dates</li>
                <li>Payment terms and schedule</li>
                <li>Warranty information</li>
                <li>Change order procedures</li>
                <li>Dispute resolution procedures</li>
                <li>Applicable permits and regulatory compliance requirements</li>
              </ul>
              <p className="text-lg text-gray-700">
                The terms of any written service contract will supersede these Terms of Service with respect to 
                the specific services provided under that contract.
              </p>
            </div>
          </section>

          {/* Payment Terms */}
          <section aria-labelledby="payment-heading">
            <h2 id="payment-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Payment Terms
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Payment terms for construction services will be specified in your written contract. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Payments are typically due according to the schedule outlined in the contract</li>
                <li>Late payments may be subject to interest charges as specified in the contract</li>
                <li>We reserve the right to suspend work if payments are not received as agreed</li>
                <li>All prices are subject to change until a contract is signed</li>
                <li>Additional work beyond the original scope may require change orders and additional payment</li>
              </ul>
            </div>
          </section>

          {/* Warranties and Disclaimers */}
          <section aria-labelledby="warranties-heading">
            <h2 id="warranties-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Warranties and Disclaimers
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Workmanship Warranty
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                We stand behind our work and provide warranties as specified in your service contract. 
                Warranty terms vary by project type and will be detailed in your written agreement.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Website Disclaimer
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                THE INFORMATION ON THIS WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, 
                WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, 
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-lg text-gray-700">
                We do not warrant that the website will be available at all times or that it will be error-free, 
                secure, or free from viruses or other harmful components.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section aria-labelledby="liability-heading">
            <h2 id="liability-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Limitation of Liability
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HWANG J&S CONSTRUCTION SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER 
                INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-lg text-gray-700">
                Our total liability for any claims arising from or related to our services shall not exceed the 
                total amount paid by you for the specific services giving rise to the claim, as specified in your 
                service contract.
              </p>
            </div>
          </section>

          {/* Permits and Compliance */}
          <section aria-labelledby="permits-heading">
            <h2 id="permits-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Permits and Regulatory Compliance
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Construction projects may require various permits and approvals from local, state, and federal authorities. 
                We will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Obtain necessary permits as specified in your contract</li>
                <li>Comply with all applicable building codes and regulations</li>
                <li>Coordinate inspections as required</li>
                <li>Maintain appropriate licenses and insurance</li>
              </ul>
              <p className="text-lg text-gray-700">
                You are responsible for ensuring that you have the right to make the proposed changes to your property 
                and for any homeowner association approvals that may be required.
              </p>
            </div>
          </section>

          {/* Insurance */}
          <section aria-labelledby="insurance-heading">
            <h2 id="insurance-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Insurance
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Hwang J&S Construction maintains appropriate general liability insurance and workers&apos; compensation 
                insurance as required by law. Details of our insurance coverage can be provided upon request.
              </p>
              <p className="text-lg text-gray-700">
                We recommend that property owners maintain appropriate property and liability insurance for their projects.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section aria-labelledby="disputes-heading">
            <h2 id="disputes-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Dispute Resolution
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                In the event of any dispute arising from or relating to these Terms of Service or our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>We encourage direct communication to resolve issues amicably</li>
                <li>If a written service contract exists, the dispute resolution procedures in that contract will apply</li>
                <li>Disputes may be subject to mediation or arbitration as specified in your contract</li>
                <li>Any legal action must be brought in the courts of Orange County, California, or Los Angeles County, California</li>
              </ul>
              <p className="text-lg text-gray-700">
                California law will govern these Terms of Service and any disputes arising from them.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section aria-labelledby="modifications-heading">
            <h2 id="modifications-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Modifications to Terms
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material 
                changes by posting the updated terms on this page and updating the &quot;Effective Date&quot; at the top. 
                Your continued use of our website or services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
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
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">License</h3>
                  <p className="text-gray-700">
                    California General Contractor License #960757
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
