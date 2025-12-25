'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector('a') as HTMLElement;
      firstLink?.focus();
    } else if (!isMobileMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      
      // Update isScrolled (Top vs Scrolled) status
      setIsScrolled(currentScrollY > 80);

      // Handle "isScrolling" state for dynamic resizing
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set timeout to detect scroll stop
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800); // 800ms debounce for "scroll stop" to reduce jitter
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isMobileMenuOpen]);

  // Dynamic Styles Calculation
  const getHeaderStyle = () => {
    if (!isScrolled) {
      // Top of page: Large, Transparent
      return 'bg-gradient-to-b from-black/60 to-transparent py-5 md:py-6';
    } 
    
    if (isScrolling) {
      // Scrolling actively: Compact, Glass
      return 'bg-white/80 backdrop-blur-md shadow-sm py-2 border-b border-gray-200/50';
    }
    
    // Scrolled but stopped: Standard Sticky, Glass
    return 'bg-white/95 backdrop-blur-md shadow-lg py-3 md:py-4 border-b border-gray-200';
  };

  const getLogoStyle = () => {
    if (!isScrolled) return 'text-2xl md:text-3xl lg:text-4xl'; // Large at top
    if (isScrolling) return 'text-xl md:text-2xl'; // Compact when moving
    return 'text-xl md:text-2xl lg:text-3xl'; // Medium when stopped
  };

  const getLinkStyle = (isActive: boolean) => {
    const baseStyle = "relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
    
    if (!isScrolled) {
      return `${baseStyle} text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-md`;
    }
    return `${baseStyle} text-gray-900 hover:text-blue-700 hover:bg-blue-50`;
  };

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${getHeaderStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-500">
          {/* Logo */}
          <Link href="/" className="group">
            <div className={`transition-all duration-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <h1 className={`font-bold group-hover:scale-[1.02] transition-transform duration-300 ${getLogoStyle()}`}>
                <span className={`font-extrabold transition-all duration-500 ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-xl'
                }`}>
                  Hwang J&S Construction
                </span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={getLinkStyle(pathname === '/')}
            >
              Home
            </Link>
            <Link
              href="/services"
              aria-current={pathname === '/services' ? 'page' : undefined}
              className={getLinkStyle(pathname === '/services')}
            >
              Services
            </Link>
            <Link
              href="/projects"
              aria-current={pathname === '/projects' ? 'page' : undefined}
              className={getLinkStyle(pathname === '/projects')}
            >
              Projects
            </Link>
            <Link
              href="/why-us"
              aria-current={pathname === '/why-us' ? 'page' : undefined}
              className={getLinkStyle(pathname === '/why-us')}
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === '/contact' ? 'page' : undefined}
              className={`relative px-6 rounded-xl font-bold transition-all duration-500 flex items-center gap-2 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-xl hover:shadow-blue-500/40 shadow-lg shadow-blue-500/25' 
                  : 'bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white border-2 border-white/50 shadow-lg hover:shadow-xl'
              } ${isScrolling && isScrolled ? 'py-1.5 text-sm' : 'py-2.5 text-base'}`}
            >
              <span className="relative z-10">Contact</span>
              <svg className={`transition-transform duration-300 group-hover:translate-x-1 relative z-10 ${
                isScrolling && isScrolled ? 'w-3 h-3' : 'w-4 h-4'
              } ${isScrolled ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Click to Call for Mobile */}
            <a href="tel:5551234567" className={`flex items-center gap-2 font-bold ${isScrolled ? 'text-blue-600' : 'text-white'} transition-colors`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
            
            <button 
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu" 
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-2 p-4">
              <Link
                href="/"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/why-us"
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
