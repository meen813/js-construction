'use client';

import Link from 'next/link';
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData';

export default function LicensesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Licenses & Certifications', url: '/licenses' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Licenses & Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Hwang J&S Construction is fully licensed, bonded, and insured. We maintain all required 
              certifications to provide professional construction services in California.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Primary License */}
          <section aria-labelledby="primary-license-heading">
            <h2 id="primary-license-heading" className="text-3xl font-bold text-gray-900 mb-6">
              California General Contractor License
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    License Number: #960757
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    California State License Board (CSLB) General Contractor License
                  </p>
                  <p className="text-gray-700 mb-4">
                    This license authorizes Hwang J&S Construction to perform general contracting work 
                    throughout the state of California, including commercial and residential construction, 
                    renovations, and tenant improvements.
                  </p>
                  <p className="text-gray-700">
                    <strong className="font-semibold text-gray-900">License Status:</strong> Active and in good standing
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* License Verification */}
          <section aria-labelledby="verification-heading">
            <h2 id="verification-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Verify Our License
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                You can verify our license status and view our license details through the California State 
                License Board (CSLB) website:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                <p className="text-gray-700 mb-2">
                  <strong className="font-semibold text-gray-900">CSLB License Search:</strong>
                </p>
                <p className="text-gray-700">
                  Visit{' '}
                  <a 
                    href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    cslb.ca.gov
                  </a>
                  {' '}and search for license number <strong className="font-semibold">960757</strong>
                </p>
              </div>
              <p className="text-gray-700">
                The CSLB website provides information about license status, expiration dates, bond information, 
                and any disciplinary actions.
              </p>
            </div>
          </section>

          {/* Insurance Coverage */}
          <section aria-labelledby="insurance-heading">
            <h2 id="insurance-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Insurance Coverage
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                Hwang J&S Construction maintains comprehensive insurance coverage to protect our clients, 
                employees, and projects:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    General Liability Insurance
                  </h3>
                  <p className="text-gray-700">
                    We carry general liability insurance to protect against property damage and bodily injury 
                    claims that may arise during construction projects. This coverage protects both our company 
                    and our clients.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Workers' Compensation Insurance
                  </h3>
                  <p className="text-gray-700">
                    As required by California law, we maintain workers' compensation insurance to cover our 
                    employees in case of work-related injuries or illnesses.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bonding
                  </h3>
                  <p className="text-gray-700">
                    We are bonded, which provides additional financial protection for our clients. Bonds help 
                    ensure that projects are completed according to contract terms.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong className="font-semibold text-gray-900">Note:</strong> Specific insurance policy 
                  details and coverage amounts can be provided upon request for project proposals and contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications and Training */}
          <section aria-labelledby="certifications-heading">
            <h2 id="certifications-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Certifications and Training
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                Our team maintains current knowledge and certifications in construction best practices:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">OSHA Safety Training</h3>
                    <p className="text-gray-700">
                      Our team members are trained in Occupational Safety and Health Administration (OSHA) 
                      safety standards and best practices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ADA Compliance Expertise</h3>
                    <p className="text-gray-700">
                      Specialized knowledge in Americans with Disabilities Act (ADA) requirements for 
                      commercial and public facilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Building Code Knowledge</h3>
                    <p className="text-gray-700">
                      Up-to-date knowledge of California Building Code (CBC) and local building codes 
                      for Orange County and Los Angeles County.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Continuing Education</h3>
                    <p className="text-gray-700">
                      Regular participation in continuing education programs to stay current with industry 
                      standards, new technologies, and best practices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Service Areas */}
          <section aria-labelledby="service-areas-heading">
            <h2 id="service-areas-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Licensed Service Areas
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Our California General Contractor License #960757 allows us to provide services throughout 
                the state of California. We primarily serve:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Orange County, California</li>
                <li>Los Angeles County, California</li>
                <li>Surrounding Southern California areas</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                We are familiar with local building codes, permit requirements, and regulations in these areas.
              </p>
            </div>
          </section>

          {/* License Renewal */}
          <section aria-labelledby="renewal-heading">
            <h2 id="renewal-heading" className="text-3xl font-bold text-gray-900 mb-6">
              License Maintenance
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                We maintain our license in good standing by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Renewing our license as required by the CSLB</li>
                <li>Maintaining required insurance and bonding</li>
                <li>Completing continuing education requirements</li>
                <li>Complying with all state and local regulations</li>
                <li>Paying all required fees and assessments</li>
              </ul>
            </div>
          </section>

          {/* Request Documentation */}
          <section aria-labelledby="documentation-heading">
            <h2 id="documentation-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Request License Documentation
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                If you need copies of our license, insurance certificates, or other documentation for your records 
                or project requirements, please contact us:
              </p>
              <div className="space-y-4">
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
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">
                    Please refer to our{' '}
                    <Link 
                      href="/contact" 
                      className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      contact page
                    </Link>
                    {' '}for phone contact information.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-700">
                  <strong className="font-semibold text-gray-900">Note:</strong> License and insurance 
                  documentation is typically provided as part of project proposals and contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section aria-labelledby="updated-heading">
            <h2 id="updated-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Last Updated
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700">
                This information was last updated on <time dateTime="2025-01-27">January 27, 2025</time>. 
                License status and information are subject to change. Please verify current license status 
                through the CSLB website.
              </p>
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
