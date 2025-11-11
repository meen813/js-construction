'use client';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';
import Introduction from '@/components/Introduction';
import StructuredData, { organizationSchema, servicesSchema } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={servicesSchema} />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            tabIndex={-1}
          >
            <source src="/video/5501.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" style={{ zIndex: 1 }} aria-hidden="true" />
        
        {/* Hero content with enhanced styling */}
        <div className='absolute inset-0 flex items-center justify-center' style={{ zIndex: 2 }}>
               <div className='text-white text-center max-w-4xl mx-auto px-4'>
                 <div className="fade-in">
                   <h1 id="hero-heading" className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-shadow mb-4 sm:mb-6'>
                     <span className="text-white">Hwang J&S Construction</span>
                   </h1>
                   <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6 sm:mb-8 rounded-full" aria-hidden="true"></div>
                   <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed max-w-3xl mx-auto'>
                     Premier General Contractor in Orange County and Los Angeles County, California. We specialize in delivering 
                     <span className="text-blue-300 font-semibold"> exceptional construction services</span> with 
                     unmatched quality and customer satisfaction.
                   </p>
                   <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                     <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl" aria-label="Request a free quote">
                       Get Free Quote
                     </Link>
                     <Link href="/projects" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl" aria-label="Browse completed construction projects">
                       View Projects
                     </Link>
                   </div>
                 </div>
               </div>
        </div>

        {/* Enhanced bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent" style={{ zIndex: 2 }} aria-hidden="true"></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" style={{ zIndex: 3 }} aria-hidden="true">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Enhanced sections with better spacing */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <ProjectPreview />
      </div>
      
      <div className="bg-white">
        <Introduction />
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <ContactForm />
      </div>
    </>
  );
}
