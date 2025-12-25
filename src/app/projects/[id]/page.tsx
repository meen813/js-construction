'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/projects/data';
import StructuredData, { generateProjectSchema, generateBreadcrumbSchema } from '@/components/StructuredData';

export default function ProjectDetailPage() {
  const params = useParams();
  const { id } = params;
  const project = projects.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDetailImageIndex, setCurrentDetailImageIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  
  // 모든 이미지를 하나의 배열로 결합
  const allImages = project ? [project.image, ...(project.additionalImages || [])] : [];
  
  // Check for prefers-reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
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
  
  // 자동 전환을 위한 useEffect (reduced motion일 때는 비활성화)
  useEffect(() => {
    if (allImages.length > 1 && !prefersReducedMotion) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 4000); // 4초마다 전환
      
      return () => clearInterval(interval);
    }
  }, [allImages.length, prefersReducedMotion]);
  
  // 썸네일 자동 스크롤
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnail = container.children[currentDetailImageIndex] as HTMLElement;
      
      if (thumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.offsetWidth;
        
        // 썸네일을 중앙에 배치
        const scrollPosition = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    }
  }, [currentDetailImageIndex, prefersReducedMotion]);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  const nextDetailImage = () => {
    setCurrentDetailImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevDetailImage = () => {
    setCurrentDetailImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  // Generate location based on project id
  const projectLocation = 
    project.id === 1 ? 'La Palma, California' :
    project.id === 2 ? 'Fountain Valley, California' :
    project.id === 3 ? 'Orange County, California' :
    project.id === 4 ? 'Manhattan Beach, California' :
    project.id === 5 ? 'Fullerton, California' :
    project.id === 6 ? 'Manhattan Beach, California' :
    project.id === 7 ? 'Garden Grove, California' :
    project.id === 8 ? 'Buena Park, California' :
    project.id === 9 ? 'Pomona, California' :
    project.id === 10 ? 'Lynwood, California' :
    project.id === 11 ? 'Santa Ana, California' : 'California';

  const projectCompletionDate =
    project.id === 1 ? '2025-11' :
    project.id === 2 ? '2024' :
    project.id === 3 ? '2024' :
    project.id === 4 ? '2025' :
    project.id === 5 ? '2022' :
    project.id === 6 ? '2025' :
    project.id === 7 ? '2019' :
    project.id === 8 ? '2016' :
    project.id === 9 ? '2017' :
    project.id === 10 ? '2017' :
    project.id === 11 ? '2016' : undefined;

  const projectSchema = generateProjectSchema({
    id: project.id,
    title: project.title,
    description: project.description,
    image: typeof project.image === 'string' ? project.image : project.image.src,
    location: projectLocation,
    completionDate: projectCompletionDate
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.id}` }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={projectSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {allImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        
        {/* Image Indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2" role="group" aria-label="Image indicators">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1} of ${allImages.length}`}
                aria-pressed={index === currentImageIndex}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-6 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white ${prefersReducedMotion ? '' : 'animate-bounce'}`} aria-hidden="true">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {allImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className={`w-full h-auto object-cover transition-opacity duration-500 ${
                        index === currentDetailImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      quality={85}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  ))}
                  
                  {/* Manual Navigation Buttons */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevDetailImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label={`Previous image (${currentDetailImageIndex + 1} of ${allImages.length})`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextDetailImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label={`Next image (${currentDetailImageIndex + 1} of ${allImages.length})`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Navigation - Outside Below Main Image */}
                {allImages.length > 1 && (
                  <div 
                    ref={thumbnailContainerRef}
                    className={`flex gap-2 overflow-x-auto pb-2 px-1 ${prefersReducedMotion ? '' : 'scroll-smooth'}`}
                    role="group"
                    aria-label="Image thumbnails"
                  >
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDetailImageIndex(index)}
                        aria-pressed={index === currentDetailImageIndex}
                        className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          index === currentDetailImageIndex 
                            ? 'ring-2 ring-blue-500 scale-105' 
                            : 'opacity-70 hover:opacity-100 hover:scale-105'
                        }`}
                        aria-label={`View image ${index + 1} of ${allImages.length}`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={100}
                          height={75}
                          className="w-24 h-18 object-cover"
                          sizes="100px"
                          quality={75}
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Type</h3>
                    <p className="text-gray-600">{project.id === 1 ? 'Commercial Mall Renovation' : 
                      project.id === 2 ? 'Accessory Dwelling Unit (ADU)' :
                      project.id === 3 ? 'Custom Staircase Design' :
                      project.id === 4 ? 'Mall Entrance Renovation' :
                      project.id === 5 ? 'Kitchen Remodel' :
                      project.id === 6 ? 'ADA Improvement' :
                      project.id === 7 ? 'Residential Backyard Patio' :
                      project.id === 8 ? 'Commercial Interior Renovation' :
                      project.id === 9 ? 'Commercial Roof Renovation' :
                      project.id === 10 ? 'Residential Renovation & Conversion' :
                      project.id === 11 ? 'Commercial Renovation' : 'Construction Project'}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">{project.id === 1 ? 'La Palma, California' :
                      project.id === 2 ? 'Fountain Valley, California' :
                      project.id === 3 ? 'Orange County, California' :
                      project.id === 4 ? 'Manhattan Beach, California' :
                      project.id === 5 ? 'Fullerton, California' :
                      project.id === 6 ? 'Manhattan Beach, California' :
                      project.id === 7 ? 'Garden Grove, California' :
                      project.id === 8 ? 'Buena Park, California' :
                      project.id === 9 ? 'Pomona, California' :
                      project.id === 10 ? 'Lynwood, California' :
                      project.id === 11 ? 'Santa Ana, California' : 'California'}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
                    <p className="text-gray-600">{project.id === 1 ? 'Will be Completed in November 2025' :
                      project.id === 2 ? 'Completed 2024-2025' :
                      project.id === 3 ? 'Completed 2024' :
                      project.id === 4 ? 'Completed 2025' :
                      project.id === 5 ? 'Completed 2022' :
                      project.id === 6 ? 'Completed Early 2025' :
                      project.id === 7 ? 'Completed 2019' :
                      project.id === 8 ? 'Completed 2016' :
                      project.id === 9 ? 'Completed 2017' :
                      project.id === 10 ? 'Completed 2017' :
                      project.id === 11 ? 'Completed 2016' : 'Completed'}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary">
                      Start Your Project
                    </Link>
                    <Link href="/projects" className="btn-secondary">
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Project Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail was carefully considered to create a space that perfectly balances form and function.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Materials",
                description: "Only the finest materials were selected to ensure durability and aesthetic appeal."
              },
              {
                title: "Expert Craftsmanship", 
                description: "Skilled artisans brought years of experience to every aspect of the construction."
              },
              {
                title: "Attention to Detail",
                description: "Every element was meticulously planned and executed to perfection."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-gradient p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let&apos;s discuss your vision and bring it to life with our expert construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <Link href="/projects" className="btn-secondary text-lg px-8 py-4">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

