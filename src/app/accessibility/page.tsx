import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Hwang J&S Construction',
  description: 'Our commitment to web accessibility and ensuring our website is accessible to all users.',
};

export default function AccessibilityPage() {
  const lastUpdated = 'November 11, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Our Commitment to Digital Accessibility
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hwang J&S Construction is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            {/* Conformance Status */}
            <section aria-labelledby="conformance-heading">
              <h2 id="conformance-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Conformance Status
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a> defines 
                requirements for designers and developers to improve accessibility for people with disabilities. 
                It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-green-600">✓</span> WCAG 2.1 Level AA Conformance
                </p>
                <p className="text-gray-700">
                  Our website (hjsconstruction.com) is <strong>substantially conformant</strong> with WCAG 2.1 Level AA. 
                  &ldquo;Substantially conformant&rdquo; means that we meet all of the requirements of the standard or only minor 
                  issues may exist.
                </p>
              </div>
            </section>

            {/* Accessibility Features */}
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Accessibility Features
              </h2>
              <p className="text-gray-700 mb-4">
                Our website includes the following features to improve accessibility:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Keyboard Navigation:</strong> All interactive elements can be accessed and operated using only a keyboard (Tab, Enter, Escape, Arrow keys)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Screen Reader Compatibility:</strong> Proper ARIA labels, roles, and semantic HTML structure for assistive technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Clear Focus Indicators:</strong> Visible focus indicators on all interactive elements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Alternative Text:</strong> All images include descriptive alternative text</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Color Contrast:</strong> Text meets WCAG AA contrast ratio requirements (4.5:1 minimum)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Form Accessibility:</strong> All form fields have proper labels, error messages, and validation feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Reduced Motion Support:</strong> Respects user preferences for reduced motion (prefers-reduced-motion)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Responsive Design:</strong> Accessible on various devices and screen sizes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Skip Navigation Link:</strong> Allows keyboard users to skip directly to main content</span>
                </li>
              </ul>
            </section>

            {/* Technologies */}
            <section aria-labelledby="technologies-heading">
              <h2 id="technologies-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Compatible Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Screen readers (NVDA, JAWS, VoiceOver)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Keyboard-only navigation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Browser zoom and text resizing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Voice control software
                </li>
              </ul>
            </section>

            {/* Known Limitations */}
            <section aria-labelledby="limitations-heading">
              <h2 id="limitations-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Known Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                Despite our best efforts to ensure accessibility, there may be some limitations. 
                We are actively working to address these:
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Some third-party embedded content may not be fully accessible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Legacy browser compatibility may be limited (we recommend using the latest versions of Chrome, Firefox, Safari, or Edge)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Feedback */}
            <section aria-labelledby="feedback-heading">
              <h2 id="feedback-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Feedback and Contact Information
              </h2>
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <p className="text-lg text-gray-900 mb-4 font-semibold">
                  We welcome your feedback on the accessibility of our website.
                </p>
                <p className="text-gray-700 mb-4">
                  If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                    <p className="font-semibold text-gray-900 mb-2">📝 Preferred Method: Contact Form</p>
                    <p className="mb-3">
                      The fastest way to report accessibility issues is through our contact form. 
                      Please mention &ldquo;Accessibility&rdquo; in your message for priority handling.
                    </p>
                    <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Go to Contact Form →
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <p className="font-semibold text-gray-900 mb-2">📧 Alternative: Direct Email</p>
                    <p className="text-sm text-gray-600 mb-2">
                      If you prefer email or if our website is inaccessible, you can reach us at:
                    </p>
                    <p className="text-center py-2">
                      <a href="mailto:hjsconstructionca@gmail.com" className="text-blue-600 hover:text-blue-800 underline text-lg font-mono">
                        hjsconstructionca@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  We aim to respond to accessibility feedback within <strong>3 business days</strong> and to propose 
                  a solution within <strong>10 business days</strong>.
                </p>
              </div>
            </section>

            {/* Ongoing Efforts */}
            <section aria-labelledby="efforts-heading">
              <h2 id="efforts-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Ongoing Accessibility Efforts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Hwang J&S Construction is committed to continuous improvement of our website&apos;s accessibility. 
                Our efforts include:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Regular accessibility audits and testing with assistive technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Training our team on accessibility best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Monitoring and implementing updates to WCAG guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>Actively addressing user-reported accessibility issues</span>
                </li>
              </ul>
            </section>

            {/* Compliance */}
            <section aria-labelledby="compliance-heading">
              <h2 id="compliance-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Legal Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This website is designed to comply with:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Americans with Disabilities Act (ADA) Title III</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>California Unruh Civil Rights Act</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Section 508 of the Rehabilitation Act</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong></span>
                </li>
              </ul>
            </section>

            {/* Last Updated */}
            <section className="border-t pt-6">
              <p className="text-sm text-gray-500">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This accessibility statement is reviewed and updated regularly to reflect our ongoing commitment to accessibility.
              </p>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

