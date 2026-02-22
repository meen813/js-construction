'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import StructuredData, { organizationSchema, servicesSchema } from '@/components/StructuredData';

const ContactForm = dynamic(() => import('../components/ContactForm'));
const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));
const Introduction = dynamic(() => import('@/components/Introduction'));
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate, Play, Pause, ChevronDown } from 'lucide-react';

const VIDEOS = [
  '/video/5501.mp4',
  '/video/Modern_Retail_Building_Cinematic_Ending.mp4'
];

export default function Home() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    VIDEOS.forEach((_, index) => {
      const video = videoRefs.current[index];
      if (!video) return;

      if (index === currentVideoIndex) {
        if (prefersReducedMotion) {
          video.pause();
          setIsVideoPlaying(false);
        } else {
          // Play video when motion is allowed
          if (video.paused) {
            video.currentTime = 0;
            video.play().catch(() => {
              setIsVideoPlaying(false);
            });
            setIsVideoPlaying(true);
          }
        }
      } else {
        video.pause();
      }
    });
  }, [prefersReducedMotion, currentVideoIndex]);

  const handleVideoEnd = () => {
    // Move to next video in sequence
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  const toggleVideoPlay = () => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      if (isVideoPlaying) {
        currentVideo.pause();
        setIsVideoPlaying(false);
      } else {
        currentVideo.play().catch(() => {
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
      <section className="h-screen relative overflow-hidden bg-black">
        <div className="absolute inset-0" aria-hidden="true">
          {VIDEOS.map((videoSrc, index) => (
            <video
              key={videoSrc}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              autoPlay={index === 0 && !prefersReducedMotion}
              muted
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-label="Background video showing construction projects and building exteriors"
              aria-describedby="video-description"
              onPlay={() => {
                if (index === currentVideoIndex) setIsVideoPlaying(true);
              }}
              onPause={() => {
                if (index === currentVideoIndex) setIsVideoPlaying(false);
              }}
              onEnded={() => {
                if (index === currentVideoIndex) handleVideoEnd();
              }}
              poster={index === 0 ? "/architectural-bg.png" : undefined}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          <span id="video-description" className="sr-only">
            Background video displaying construction projects including modern retail buildings and architectural exteriors showcasing HJS Construction&apos;s work
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
              <Pause className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" style={{ zIndex: 1 }} />
        
        {/* Hero content with enhanced styling */}
        <div className='absolute inset-0 flex items-center justify-center' style={{ zIndex: 2 }}>
               <div className='text-white text-center max-w-4xl mx-auto px-4 pt-16'>
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                 >
                   <motion.h1 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-xl mb-6'
                   >
                     <span className="text-white">Building Your Vision</span>
                   </motion.h1>
                   
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-3xl mx-auto'
                   >
                      {['Commercial', 'Residential', 'New Build', 'ADU'].map((keyword) => (
                        <span key={keyword} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-semibold tracking-wider shadow-lg">
                          {keyword}
                        </span>
                      ))}
                   </motion.div>

                   <motion.div 
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "var(--target-width)" }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                     style={{ '--target-width': '8rem' } as React.CSSProperties}
                     className="h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg"
                   />
                   
                   {/* Trust Badge */}
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="inline-block bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 mb-8"
                   >
                     <p className="text-sm md:text-base text-gray-100 font-semibold tracking-wide flex items-center justify-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                       Serving LA & Orange County Since 2011
                     </p>
                   </motion.div>

                   <motion.p 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.8 }}
                     className='text-base sm:text-lg md:text-xl font-medium text-gray-100 tracking-wide leading-relaxed max-w-3xl mx-auto drop-shadow-md px-4'
                   >
                     Your trusted partner for modern Commercial Renovations, Custom New Builds, and Home Additions.
                   </motion.p>
                   
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.0 }}
                     className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
                   >
                     <Link href="/contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                       <span>Get Free Quote</span>
                       <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                     </Link>
                     <Link href="/projects" className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                       <LayoutTemplate className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                       <span>View Projects</span>
                     </Link>
                   </motion.div>
                 </motion.div>
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
          <ChevronDown className="w-8 h-8 opacity-80" aria-hidden="true" />
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

