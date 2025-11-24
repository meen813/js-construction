'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management and trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      // Focus first link when menu opens
      const firstLink = mobileMenuRef.current.querySelector('a') as HTMLElement;
      firstLink?.focus();
      
      // Trap focus within mobile menu
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = mobileMenuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        
        if (!focusableElements || focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    } else if (!isMobileMenuOpen && menuButtonRef.current) {
      // Return focus to menu button when menu closes
      menuButtonRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
          const threshold = 80;

          // Always show navbar at the top
          if (currentScrollY <= 0) {
            setShowNavbar(true);
            lastScrollY.current = 0;
            setIsScrolled(false);
            ticking.current = false;
            return;
          }

          // Update isScrolled for styling
          setIsScrolled(currentScrollY > 50);

          // Hide/show logic with threshold
          if (currentScrollY < threshold) {
            // Below threshold - always show
            setShowNavbar(true);
          } else {
            // Above threshold - check scroll direction
            const scrollingDown = currentScrollY > lastScrollY.current;
            
            if (scrollingDown) {
              // Scrolling down - hide
              setShowNavbar(false);
              setIsMobileMenuOpen(false);
            } else {
              // Scrolling up - show
              setShowNavbar(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Handle ESC key to close mobile menu
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 w-full z-50 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-black/40 backdrop-blur-md'
      }`}
      style={{ 
        transform: showNavbar ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
                 {/* Logo */}
                 <Link href="/" className="group" aria-label="Hwang J&S Construction - Home">
                   <div className={`transition-all duration-300 ${
                     isScrolled ? 'text-gray-900' : 'text-white'
                   }`}>
                     <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300 block">
                       <span className={`font-extrabold ${
                         isScrolled 
                           ? 'text-gray-900' 
                           : 'text-white drop-shadow-2xl'
                       }`}>
                         Hwang J&S Construction
                       </span>
                     </span>
                   </div>
                 </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              aria-current={pathname === '/projects' ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/services"
              aria-current={pathname === '/services' ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Services
            </Link>
            <Link
              href="/why-us"
              aria-current={pathname === '/why-us' ? 'page' : undefined}
              className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === '/contact' ? 'page' : undefined}
              className={`relative px-6 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-xl hover:shadow-blue-500/40 shadow-lg shadow-blue-500/25' 
                  : 'bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white border-2 border-white/50 shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="relative z-10">Contact</span>
              <svg className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10 ${
                isScrolled ? 'text-white' : 'text-gray-900'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% 100%', backgroundPosition: '0% 50%' }}></div>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          >
            <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-2 p-4">
              <Link
                href="/"
                aria-current={pathname === '/' ? 'page' : undefined}
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                aria-current={pathname === '/projects' ? 'page' : undefined}
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/services"
                aria-current={pathname === '/services' ? 'page' : undefined}
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/why-us"
                aria-current={pathname === '/why-us' ? 'page' : undefined}
                className="px-4 py-3 rounded-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                className="px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
