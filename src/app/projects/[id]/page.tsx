'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/projects/data';
import StructuredData, { generateProjectSchema, generateBreadcrumbSchema } from '@/components/StructuredData';
import ImageModal from '@/components/ImageModal';

export default function ProjectDetailPage() {
  const params = useParams();
  const { id } = params;
  const project = projects.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDetailImageIndex, setCurrentDetailImageIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  
  // 모든 이미지를 하나의 배열로 결합
  const allImages = project ? [project.image, ...(project.additionalImages || [])] : [];

  const openModal = (index: number) => {
    setModalInitialIndex(index);
    setIsModalOpen(true);
  };
  
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
    if (allImages.length > 1 && !prefersReducedMotion && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
      }, 4000); // 4초마다 전환
      
      return () => clearInterval(interval);
    }
  }, [allImages.length, prefersReducedMotion, isModalOpen]);
  
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
    project.id === 11 ? 'Santa Ana, California' : 
    project.id === 12 ? 'San Diego, California' : 'California';

  const projectCompletionDate =
    project.id === 1 ? '2025-12' :
    project.id === 2 ? '2024' :
    project.id === 3 ? '2024' :
    project.id === 4 ? '2025' :
    project.id === 5 ? '2022' :
    project.id === 6 ? '2025' :
    project.id === 7 ? '2019' :
    project.id === 8 ? '2016' :
    project.id === 9 ? '2017' :
    project.id === 10 ? '2017' :
    project.id === 11 ? '2016' : 
    project.id === 12 ? '2026' : undefined;

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
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {index === 0 && project.comparisonImages ? (
                <div className="relative w-full h-full flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/20">
                    <Image
                      src={project.comparisonImages.before}
                      alt={`${project.title} - Before`}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/60 px-3 py-1 md:px-4 md:py-1.5 rounded text-white text-xs md:text-sm font-bold tracking-wider backdrop-blur-sm uppercase">
                      Before
                    </div>
                  </div>
                  <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-black/90">
                    <Image
                      src={project.comparisonImages.after}
                      alt={`${project.title} - After`}
                      fill
                      className="object-contain"
                      priority={true}
                    />
                    <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-blue-600/80 px-3 py-1 md:px-4 md:py-1.5 rounded text-white text-xs md:text-sm font-bold tracking-wider backdrop-blur-sm uppercase">
                      After
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        
        {/* Image Indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2" role="group" aria-label="Image indicators" onClick={(e) => e.stopPropagation()}>
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1} of ${allImages.length}`}
                aria-pressed={index === currentImageIndex}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12 pointer-events-none bg-black/20 backdrop-blur-[5px] rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl mx-4 md:mx-auto">
          <div className="mb-4 md:mb-8 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
            <Link 
              href="/projects" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-4 md:mb-6 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight drop-shadow-xl">
            {project.title}
          </h1>
          
          <div className="w-16 h-1 md:w-24 md:h-1 bg-white mx-auto mb-6 md:mb-8 shadow-sm"></div>
          
          <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-2">
            {project.tagline}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 ${prefersReducedMotion ? '' : 'animate-bounce'}`} aria-hidden="true">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {/* Main Image Container */}
                <div 
                  className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl aspect-[3/2] bg-gray-100 cursor-pointer group"
                  onClick={() => openModal(currentDetailImageIndex)}
                >
                  {allImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentDetailImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      {index === 0 && project.comparisonImages ? (
                        <div className="relative w-full h-full flex">
                          <div className="relative w-1/2 h-full border-r border-white/20">
                            <Image
                              src={project.comparisonImages.before}
                              alt={`${project.title} - Before`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                              priority={true}
                            />
                            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/60 px-2 py-0.5 md:px-3 md:py-1 rounded text-white text-[10px] md:text-xs font-bold tracking-wider backdrop-blur-sm uppercase">
                              Before
                            </div>
                          </div>
                          <div className="relative w-1/2 h-full bg-black/5">
                            <Image
                              src={project.comparisonImages.after}
                              alt={`${project.title} - After`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                              priority={true}
                            />
                            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-blue-600/80 px-2 py-0.5 md:px-3 md:py-1 rounded text-white text-[10px] md:text-xs font-bold tracking-wider backdrop-blur-sm uppercase">
                              After
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          quality={85}
                          loading={index === 0 ? "eager" : "lazy"}
                          priority={index === 0}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      )}
                    </div>
                  ))}
                  
                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 backdrop-blur p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Manual Navigation Buttons - Stop Propagation */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevDetailImage(); }}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label={`Previous image (${currentDetailImageIndex + 1} of ${allImages.length})`}
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextDetailImage(); }}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        aria-label={`Next image (${currentDetailImageIndex + 1} of ${allImages.length})`}
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                    className={`flex gap-2 overflow-x-auto pb-2 px-1 ${prefersReducedMotion ? '' : 'scroll-smooth'} scrollbar-hide`}
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
                          className="w-20 h-14 md:w-24 md:h-18 object-cover"
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Project Overview
                </h2>
                
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 md:mb-2">Project Type</h3>
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
                      project.id === 11 ? 'Commercial Renovation' : 
                      project.id === 12 ? 'Commercial Asphalt Replacement' : 'Construction Project'}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 md:mb-2">Location</h3>
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
                      project.id === 11 ? 'Santa Ana, California' : 
                      project.id === 12 ? 'San Diego, California' : 'California'}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 md:mb-2">Timeline</h3>
                    <p className="text-gray-600">{project.id === 1 ? 'Completed in December 2025' :
                      project.id === 2 ? 'Completed 2024-2025' :
                      project.id === 3 ? 'Completed 2024' :
                      project.id === 4 ? 'Completed 2025' :
                      project.id === 5 ? 'Completed 2022' :
                      project.id === 6 ? 'Completed Early 2025' :
                      project.id === 7 ? 'Completed 2019' :
                      project.id === 8 ? 'Completed 2016' :
                      project.id === 9 ? 'Completed 2017' :
                      project.id === 10 ? 'Completed 2017' :
                      project.id === 11 ? 'Completed 2016' : 
                      project.id === 12 ? 'Completed in 2 Weeks (2026)' : 'Completed'}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary text-center">
                      Start Your Project
                    </Link>
                    <Link href="/projects" className="btn-secondary text-center">
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
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-gradient">Project Features</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail was carefully considered to create a space that perfectly balances form and function.
            </p>
            <div className="w-16 h-1 md:w-24 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
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
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-gradient p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Let&apos;s discuss your vision and bring it to life with our expert construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base md:text-lg px-6 py-3 md:px-8 md:py-4">
                Get Free Consultation
              </Link>
              <Link href="/projects" className="btn-secondary text-base md:text-lg px-6 py-3 md:px-8 md:py-4">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImages}
        initialIndex={modalInitialIndex}
        comparisonImages={project.comparisonImages}
        title={project.title}
      />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-fade-in-up">
        <Link 
          href="/contact" 
          className="block w-full bg-blue-600 text-white font-bold text-center py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}

