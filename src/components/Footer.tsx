import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              HJS Construction
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Trusted general contractor serving Orange County and Los Angeles County since 2011. We specialize in commercial renovation, tenant improvement, ADA upgrades, and residential construction — delivering every project with safety, quality, and reliability.
            </p>
            <p className="text-gray-400 text-sm">
              HJS Construction is a trade name of Hwang J&S Construction.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Home</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Projects</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Services</Link></li>
              <li><Link href="/why-us" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Why Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Contact</Link></li>
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
                ©2025 HJS Construction | All Rights Reserved
              </p>
              <p className="text-gray-400 text-sm mt-1">
                HJS Construction is a trade name of Hwang J&S Construction | CA CSLB License #960757
              </p>
            </div>
            <nav aria-label="Legal links">
              <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0">
                <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Accessibility</Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Terms of Service</Link>
                <Link href="/licenses" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Licenses</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

