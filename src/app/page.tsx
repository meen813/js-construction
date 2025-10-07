'use client';
import ContactForm from '../components/ContactForm';
import image1 from '../../public/image1.webp';
import image3 from '../../public/image3.webp';
import image4 from '../../public/image4.webp';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectPreview from '@/components/ProjectPreview';
import Introduction from '@/components/Introduction';
import StructuredData, { organizationSchema, servicesSchema } from '@/components/StructuredData';

const images = [image1, image3, image4];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={servicesSchema} />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Construction project image ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
              priority={index === 0}
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          ))}
        </div>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" style={{ zIndex: 1 }} />
        
        {/* Hero content with enhanced styling */}
        <div className='absolute inset-0 flex items-center justify-center' style={{ zIndex: 2 }}>
               <div className='text-white text-center max-w-4xl mx-auto px-4'>
                 <div className="fade-in">
                   <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-shadow mb-4 sm:mb-6'>
                     <span className="text-white">Hwang J&S Construction</span>
                   </h1>
                   <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
                   <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-relaxed max-w-3xl mx-auto'>
                     Premier General Contractor in Orange County and Los Angeles County, California. We specialize in delivering 
                     <span className="text-blue-300 font-semibold"> exceptional construction services</span> with 
                     unmatched quality and customer satisfaction.
                   </p>
                   <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                     <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl">
                       Get Free Quote
                     </Link>
                     <Link href="/projects" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl">
                       View Projects
                     </Link>
                   </div>
                 </div>
               </div>
        </div>

        {/* Enhanced bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent" style={{ zIndex: 2 }}></div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" style={{ zIndex: 3 }}>
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
