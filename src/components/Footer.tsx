import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Hwang J&S Construction
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Premier general contractor in Orange County and Los Angeles County, California. Since 2011, we have specialized in delivering exceptional construction services with unmatched quality and customer satisfaction.
            </p>
            <address className="text-gray-300 text-sm not-italic space-y-1" aria-label="Business contact information">
              <div>Email: <a className="underline hover:text-white" href="mailto:hjsconstructionca@gmail.com">hjsconstructionca@gmail.com</a></div>
              <div>Orange County & Los Angeles County, California</div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Custom Home Building</span></li>
              <li><span className="text-gray-300">Home Additions</span></li>
              <li><span className="text-gray-300">Renovations</span></li>
              <li><span className="text-gray-300">General Contracting</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                ©2024 Hwang J&S Construction | All Rights Reserved
              </p>
              <p className="text-gray-400 text-sm mt-1">
                License #960757
              </p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0" aria-label="Legal and policy links">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Accessibility</Link>
              <Link href="/licenses" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Licenses</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 