'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-black/40 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
                 {/* Logo */}
                 <Link href="/" className="group">
                   <div className={`transition-all duration-300 ${
                     isScrolled ? 'text-gray-900' : 'text-white'
                   }`}>
                     <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                       <span className={`font-extrabold ${
                         isScrolled 
                           ? 'text-gray-900' 
                           : 'text-white drop-shadow-2xl'
                       }`}>
                         Hwang J&S Construction
                       </span>
                     </h1>
                   </div>
                 </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Services
            </Link>
            {/* <Link
              href="/forum"
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Forum
            </Link> */}
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg' 
                  : 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-white shadow-lg'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
            <nav className="flex flex-col space-y-2 p-4">
              <Link
                href="/"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
