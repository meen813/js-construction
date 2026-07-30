import Link from 'next/link';
import { ArrowRight, LayoutTemplate } from 'lucide-react';
import { HERO_KEYWORDS, HERO_REVEAL_DELAYS_MS } from './heroConstants';

/**
 * Static hero copy. Deliberately a server component: the markup ships in the
 * initial HTML and the entrance animation runs from CSS, so the LCP heading
 * paints without waiting for a JS bundle to hydrate.
 */

const revealDelay = (delayMs: number) =>
  ({ '--hero-reveal-delay': `${delayMs}ms` }) as React.CSSProperties;

export default function HeroContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
      <div className="text-white text-center max-w-4xl mx-auto px-4 pt-16">
        <h1
          style={revealDelay(HERO_REVEAL_DELAYS_MS.heading)}
          className="hero-reveal text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-xl mb-6"
        >
          <span className="text-white">Building Your Vision</span>
        </h1>

        <div
          style={revealDelay(HERO_REVEAL_DELAYS_MS.keywords)}
          className="hero-reveal-scale flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-3xl mx-auto"
        >
          {HERO_KEYWORDS.map((keyword) => (
            <span
              key={keyword}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-semibold tracking-wider shadow-lg"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div
          style={revealDelay(HERO_REVEAL_DELAYS_MS.divider)}
          className="hero-reveal-divider w-32 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg"
        />

        <div
          style={revealDelay(HERO_REVEAL_DELAYS_MS.trustBadge)}
          className="hero-reveal inline-block bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-8"
        >
          <p className="text-sm md:text-base text-gray-100 font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Serving LA &amp; Orange County Since 2011
          </p>
        </div>

        <p
          style={revealDelay(HERO_REVEAL_DELAYS_MS.description)}
          className="hero-reveal text-base sm:text-lg md:text-xl font-medium text-gray-100 tracking-wide leading-relaxed max-w-3xl mx-auto drop-shadow-md px-4"
        >
          Your trusted partner for modern Commercial Renovations, Custom New Builds, and Home
          Additions.
        </p>

        <div
          style={revealDelay(HERO_REVEAL_DELAYS_MS.actions)}
          className="hero-reveal mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
        >
          <Link
            href="/contact"
            className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <LayoutTemplate className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
