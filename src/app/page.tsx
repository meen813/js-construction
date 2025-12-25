'use client';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';
import Introduction from '@/components/Introduction';
import StructuredData, { organizationSchema, servicesSchema } from '@/components/StructuredData';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    '/video/5501.mp4',
    '/video/Modern_Retail_Building_Cinematic_Ending.mp4'
  ];

  useEffect(() => {
    // Check for prefers-reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Handle changes to the preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        // Pause video when reduced motion is preferred
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        // Play video when motion is allowed
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsVideoPlaying(false);
        });
      }
    }
  }, [prefersReducedMotion, currentVideoIndex]);

  const handleVideoEnd = () => {
    // Move to next video in sequence
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % videos.length;
      // Load and play next video
      if (videoRef.current) {
        videoRef.current.load();
        if (!prefersReducedMotion) {
          videoRef.current.play().catch(() => {
            setIsVideoPlaying(false);
          });
        }
      }
      return nextIndex;
    });
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          // Handle play restrictions
        });
        setIsVideoPlaying(true);
      }
    }
  };


  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={servicesSchema} />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <video
            ref={videoRef}
            key={currentVideoIndex}
            autoPlay={!prefersReducedMotion}
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label="Background video showing construction projects and building exteriors"
            aria-describedby="video-description"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={handleVideoEnd}
            poster="/architectural-bg.png"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span id="video-description" className="sr-only">
            Background video displaying construction projects including modern retail buildings and architectural exteriors showcasing HJS Construction's work
          </span>
          {/* Fallback static image for reduced motion */}
          {prefersReducedMotion && (
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/logo/logo.png)',
                backgroundColor: '#1f2937'
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Video Controls for Accessibility */}
        <div className="absolute bottom-4 right-4 z-50" role="group" aria-label="Video controls">
          <button
            onClick={toggleVideoPlay}
            aria-label={isVideoPlaying ? 'Pause background video' : 'Play background video'}
            className="bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            title={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" style={{ zIndex: 1 }} />
        
        {/* Hero content with enhanced styling */}
        <div className='absolute inset-0 flex items-center justify-center' style={{ zIndex: 2 }}>
               <div className='text-white text-center max-w-4xl mx-auto px-4'>
                 <div className={prefersReducedMotion ? '' : 'fade-in'}>
                   <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-xl mb-4 sm:mb-6'>
                     <span className="text-white">Building Your Vision</span>
                   </h1>
                   <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-6 sm:mb-8 tracking-wider uppercase sm:whitespace-nowrap'>
                     Commercial • Residential • New Build • ADU
                   </h2>
                   <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg"></div>
                   
                   {/* Trust Badge */}
                   <div className="inline-block bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-6">
                     <p className="text-sm md:text-base text-gray-100 font-semibold tracking-wide">
                       Serving LA & Orange County Since 2011
                     </p>
                   </div>

                   <p className='text-base sm:text-lg md:text-xl font-medium text-gray-100 tracking-wide leading-relaxed max-w-5xl mx-auto drop-shadow-md'>
                     Your trusted partner for Commercial Renovations, Custom New Builds, and Home Additions.
                   </p>
                   <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
                     <Link href="/contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                       <span>Get Free Quote</span>
                       <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                       </svg>
                     </Link>
                     <Link href="/projects" className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                       <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                       </svg>
                       <span>View Projects</span>
                     </Link>
                   </div>
                 </div>
               </div>
        </div>

        {/* Enhanced bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent" style={{ zIndex: 2 }}></div>
        
        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white ${prefersReducedMotion ? '' : 'animate-bounce'}`} 
          style={{ zIndex: 3 }} 
          aria-hidden="true"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Enhanced sections with better spacing */}
      {/* Enhanced sections with better spacing - Grid Background Applied */}
      <div className="bg-white bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]">
        <ProjectPreview />
        <Introduction />
        <ContactForm />
      </div>
    </>
  );
}

