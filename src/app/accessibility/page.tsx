'use client';

import Link from 'next/link';
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData';

export default function AccessibilityPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Accessibility', url: '/accessibility' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Web Accessibility Statement</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Hwang J&S Construction is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Conformance Status */}
          <section aria-labelledby="conformance-heading">
            <h2 id="conformance-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Conformance Status
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers 
                to improve accessibility for people with disabilities. It defines three levels of conformance: 
                Level A, Level AA, and Level AAA.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong className="font-semibold text-gray-900">Hwang J&S Construction website is partially conformant with WCAG 2.1 Level AA.</strong> 
                Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
              <p className="text-lg text-gray-700">
                We are actively working to improve the accessibility of our website and aim to achieve full WCAG 2.1 Level AA conformance.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Accessibility Features
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Keyboard Navigation</h3>
                    <p className="text-gray-700">
                      All interactive elements can be accessed and operated using only a keyboard. 
                      Visible focus indicators are provided for all focusable elements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Screen Reader Support</h3>
                    <p className="text-gray-700">
                      Semantic HTML and ARIA attributes are used throughout the site to provide 
                      meaningful information to screen reader users.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alternative Text</h3>
                    <p className="text-gray-700">
                      All meaningful images include descriptive alternative text. 
                      Decorative images are marked appropriately to be ignored by assistive technologies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Form Accessibility</h3>
                    <p className="text-gray-700">
                      All form fields are properly labeled and associated with their labels. 
                      Error messages are clearly identified and associated with the relevant fields.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Color Contrast</h3>
                    <p className="text-gray-700">
                      Text and interactive elements meet WCAG Level AA contrast requirements 
                      (4.5:1 for normal text, 3:1 for large text).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reduced Motion</h3>
                    <p className="text-gray-700">
                      The website respects user preferences for reduced motion. 
                      Animations and auto-playing videos can be paused or disabled based on user settings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section aria-labelledby="keyboard-heading">
            <h2 id="keyboard-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Keyboard Shortcuts
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                The following keyboard shortcuts are available on this website:
              </p>
              <dl className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <dt className="font-semibold text-gray-900 sm:w-48 mb-1 sm:mb-0">
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Tab</kbd>
                  </dt>
                  <dd className="text-gray-700 flex-1">
                    Move forward through interactive elements
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <dt className="font-semibold text-gray-900 sm:w-48 mb-1 sm:mb-0">
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Shift + Tab</kbd>
                  </dt>
                  <dd className="text-gray-700 flex-1">
                    Move backward through interactive elements
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <dt className="font-semibold text-gray-900 sm:w-48 mb-1 sm:mb-0">
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Enter</kbd> or <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Space</kbd>
                  </dt>
                  <dd className="text-gray-700 flex-1">
                    Activate buttons and links
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <dt className="font-semibold text-gray-900 sm:w-48 mb-1 sm:mb-0">
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Esc</kbd>
                  </dt>
                  <dd className="text-gray-700 flex-1">
                    Close mobile menu or cancel actions
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <dt className="font-semibold text-gray-900 sm:w-48 mb-1 sm:mb-0">
                    <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Home</kbd>
                  </dt>
                  <dd className="text-gray-700 flex-1">
                    Jump to the top of the page (when available)
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Known Issues */}
          <section aria-labelledby="issues-heading">
            <h2 id="issues-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Known Accessibility Issues
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 md:p-8">
              <p className="text-lg text-gray-700 mb-4">
                We are aware of some accessibility issues and are working to address them. 
                If you encounter any accessibility barriers, please contact us using the information below.
              </p>
              <p className="text-lg text-gray-700">
                We welcome your feedback on the accessibility of our website. 
                Please let us know if you encounter accessibility barriers.
              </p>
            </div>
          </section>

          {/* Feedback Section */}
          <section aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Feedback & Contact
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                We welcome your feedback on the accessibility of Hwang J&S Construction website. 
                If you encounter accessibility barriers, please contact us:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a 
                      href="/contact" 
                      className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      Use our contact form
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">
                    Please refer to our <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">contact page</Link> for phone contact information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Postal Address</h3>
                  <p className="text-gray-700">
                    Hwang J&S Construction<br />
                    Orange County, California<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Approach */}
          <section aria-labelledby="assessment-heading">
            <h2 id="assessment-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Assessment Approach
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">
                Hwang J&S Construction assessed the accessibility of this website through the following approaches:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Self-evaluation using automated accessibility testing tools</li>
                <li>Manual testing with keyboard-only navigation</li>
                <li>Testing with screen reader software (NVDA, JAWS, VoiceOver)</li>
                <li>Review against WCAG 2.1 Level AA success criteria</li>
              </ul>
            </div>
          </section>

          {/* Last Updated */}
          <section aria-labelledby="updated-heading">
            <h2 id="updated-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Last Updated
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
              <p className="text-lg text-gray-700">
                This statement was last updated on <time dateTime="2025-01-27">January 27, 2025</time>.
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

