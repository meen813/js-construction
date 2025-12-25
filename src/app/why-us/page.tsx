
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us | HJS Construction',
  description: 'Trusted since 2011. 100% project completion, zero safety incidents, and expert commercial & residential construction services in Los Angeles.',
  openGraph: {
    title: 'Why Choose HJS Construction?',
    description: 'Reliable, code-compliant construction with a focus on safety and completion.',
    images: ['/logo/logo.png'],
  },
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trusted Since Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted Since 2011
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
              Why Choose<br /> HJS Construction?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
              We deliver reliable, code-compliant construction with a focus on safety, completion, and long-term client relationships.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full fade-in" style={{ animationDelay: '0.3s' }}></div>
            
            <Link 
              href="/contact" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-blue-300/50 fade-in"
              style={{ animationDelay: '0.4s' }}
              aria-label="Request a consultation"
            >
              <span>Request a Consultation</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Trust Points - 3 Column Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="trust-points-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="trust-points-heading" className="sr-only">Key Trust Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: 100% Project Completion */}
            <div className="card-gradient p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Project Completion</h3>
              <p className="text-gray-600 leading-relaxed">
                Since 2011, we have never abandoned or walked away from a project. Every job is carried through to completion.
              </p>
            </div>

            {/* Card 2: Zero Safety Incidents */}
            <div className="card-gradient p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Safety Incidents</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain clean, organized job sites and strict safety protocols. Our record: 15+ years with zero safety incidents.
              </p>
            </div>

            {/* Card 3: Reliable After-Service */}
            <div className="card-gradient p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable After-Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our responsibility doesn&apos;t end at project completion. We provide responsive after-service and warranty support when clients need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us - Strengths Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="strengths-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="strengths-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients Trust Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Item 1: Commercial Construction Expertise */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Construction Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience with mall renovations, tenant improvements, façade upgrades, and occupied-site work.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2: ADA & City Compliance */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ADA & City Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Skilled in ADA ramps, slopes, sidewalks, drainage, and coordination with city inspectors and public works.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3: Clear Communication */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Communication</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We keep owners updated with schedules, progress photos, and clear expectations throughout the project.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4: On-Schedule Execution */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">On-Schedule Execution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We plan carefully around business hours, inspections, and field conditions to keep projects on track.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5: Quality Craftsmanship */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We focus on durable, clean, and professional results that reflect well on our clients&apos; properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6: Local Experience */}
            <div className="card p-6 lg:p-8 group hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Local Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Serving Los Angeles and Orange County with long-term relationships in the local construction community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Highlight Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="safety-heading">
        <div className="max-w-7xl mx-auto">
          <div className="card-gradient p-8 lg:p-12 max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
              Safety & Compliance
            </div>
            
            <h2 id="safety-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built With Safety, ADA, and City Standards in Mind
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From ADA upgrades and concrete ramps to entrance remodels and site work, we plan each project to meet or exceed local codes. We coordinate closely with cities, inspectors, and utility companies to avoid delays and ensure smooth inspections.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Experience with ADA ramps, handrails, slopes, and path-of-travel corrections</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Coordination with city public works and building inspectors</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Clean and organized job sites that reduce risk and disruption</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* After-Service & Long-Term Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="after-service-heading">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="after-service-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We&apos;re Still Here After the Work Is Done
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              We don&apos;t disappear after the final inspection. If something needs adjustment or follow-up, we respond quickly and take responsibility for our work. Many of our clients call us back for additional phases because they trust how we stand behind our projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-medium">Responsive follow-up for punch list and warranty items</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <svg className="w-10 h-10 text-emerald-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-gray-700 font-medium">Long-term relationships with repeat commercial clients</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gray-50">
                <svg className="w-10 h-10 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-gray-700 font-medium">Honest recommendations for maintenance and future upgrades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Footer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto">
          <div className="card-gradient p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Next Project?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you&apos;re planning a mall renovation, ADA improvements, or a residential addition, we&apos;re here to help you build with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                aria-label="Contact us to start your project"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/projects" 
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-gray-300/50"
                aria-label="View our projects portfolio"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>View Our Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

