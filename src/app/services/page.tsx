'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import newBuilding from '../../../public/new building.webp';
import homeAddition from '../../../public/Home addition.webp';
import renovationImage from '../../../public/renovation.png';
import remodelImage from '../../../public/remodel.webp';
import mallImage19 from '../../../public/Mall Renovation Project/20250724_101856.jpg';
import lobbyImage from '../../../public/Mall Office Lobby/20250715_130946.jpg';
import adaImage1 from '../../../public/ada project/20250520_092908.jpg';
import aduImage1 from '../../../public/adu/adu.jpg';

// Service Icon Component
const ServiceIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, React.ReactElement> = {
    commercial: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tenant: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    ada: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    site: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    remodel: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    addition: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    custom: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    adu: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  };
  return icons[icon] || icons.commercial;
};

export default function ServicesPage() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const commercialServices = [
    {
      image: mallImage19,
      icon: "commercial",
      title: "Commercial Renovation",
      subtitle: "Transform your commercial space for success.",
      description: "Complete commercial building renovations for retail spaces, offices, and mixed-use properties. From facade modernization to interior upgrades, ensuring compliance and maximizing property value.",
      features: ["Facade Modernization", "Interior Space Optimization", "Code Compliance & Permits"],
      details: [
        "Complete commercial building renovations",
        "Retail space design and construction",
        "Office and mixed-use property upgrades",
        "Facade modernization and exterior improvements",
        "Interior space optimization and layout design",
        "Code compliance and permit acquisition",
        "Project management and coordination"
      ]
    },
    {
      image: lobbyImage,
      icon: "tenant",
      title: "Tenant Improvement (TI)",
      subtitle: "Custom spaces that work for your business.",
      description: "Custom tenant improvement services for offices and retail spaces. We create functional layouts that enhance productivity and customer experience with minimal business disruption.",
      features: ["Space Planning & Design", "Fast-Track Construction", "Minimal Business Disruption"],
      details: [
        "Custom space planning and design",
        "Office layout and configuration",
        "Retail space optimization",
        "Fast-track construction schedules",
        "Minimal business disruption",
        "Complete project management",
        "Quality finishes and fixtures"
      ]
    },
    {
      image: adaImage1,
      icon: "ada",
      title: "ADA Compliance Upgrades",
      subtitle: "Accessibility that meets all standards.",
      description: "Full ADA compliance upgrades for commercial properties. Ramps, handrails, accessible restrooms, and proper signage to meet all accessibility requirements and city standards.",
      features: ["ADA Code Compliance", "City Standards Verification", "Complete Accessibility Solutions"],
      details: [
        "ADA-compliant ramps and walkways",
        "Handrail installation and compliance",
        "Accessible restroom modifications",
        "Proper signage and wayfinding",
        "City standards verification",
        "Digital level inspection and verification",
        "Complete accessibility solutions"
      ]
    },
    {
      image: renovationImage,
      icon: "site",
      title: "Site Work / Utility / Exterior Improvements",
      subtitle: "Building from the ground up.",
      description: "Comprehensive site work including utility installations, exterior improvements, parking lot upgrades, and landscaping. Complete site development and infrastructure management.",
      features: ["Utility Installation", "Exterior Improvements", "Site Infrastructure"],
      details: [
        "Utility installation and upgrades",
        "Exterior improvements and facade work",
        "Parking lot construction and upgrades",
        "Landscaping and site development",
        "Drainage and grading",
        "Site infrastructure development",
        "Complete site management"
      ]
    }
  ];

  const residentialServices = [
    {
      image: remodelImage,
      icon: "remodel",
      title: "Remodel",
      subtitle: "Revive, refresh, and reimagine your space.",
      description: "Kitchen, bath, and full interior remodels. We modernize your home with functional layouts and refined aesthetics for lasting value.",
      features: ["Interior Redesigns", "Fixture & Equipment Upgrades", "Elegant Finishing Touches"],
      details: [
        "Kitchen and bathroom remodels",
        "Interior painting and finishes",
        "Flooring updates and repairs",
        "Lighting and fixture upgrades",
        "Custom millwork and finishes"
      ]
    },
    {
      image: homeAddition,
      icon: "addition",
      title: "Home Addition",
      subtitle: "Expand your living, not just your space.",
      description: "Seamless home additions that blend perfectly with your existing structure. Smart space planning and full permit coordination for enhanced comfort and value.",
      features: ["Smart Space Planning", "Full Permit Coordination", "Seamless Structural Integration"],
      details: [
        "Professional space planning and design",
        "Permit acquisition and compliance",
        "Seamless integration with existing structure",
        "Energy-efficient construction methods",
        "Complete project management"
      ]
    },
    {
      image: newBuilding,
      icon: "custom",
      title: "Custom Build",
      subtitle: "Where your vision becomes architecture.",
      description: "Custom homes tailored to your lifestyle. From architectural design to final inspection, built with precision, premium materials, and timeless design.",
      features: ["Architectural Design Collaboration", "Premium Materials & Detailing", "On-schedule Delivery"],
      details: [
        "Complete architectural design and planning",
        "High-quality materials and finishes",
        "Licensed and insured construction team",
        "Regular progress updates and communication",
        "Final walkthrough and warranty coverage"
      ]
    },
    {
      image: aduImage1,
      icon: "adu",
      title: "ADU",
      subtitle: "Maximize your property's potential.",
      description: "ADUs that maximize your property's potential. Perfect for rental income, multi-generational living, or home offices. Complete design, permits, and construction.",
      features: ["ADU Design & Planning", "Permit Acquisition", "Complete Construction"],
      details: [
        "ADU design and planning",
        "Permit acquisition and compliance",
        "Complete construction from foundation to finish",
        "Energy-efficient systems and materials",
        "Multi-functional space design",
        "Rental income optimization",
        "Complete project management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We specialize in commercial construction, tenant improvement, ADA compliance, and residential projects. Every project is handled with professionalism, accuracy, and a commitment to high-quality results.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Commercial Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Commercial Construction Services
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {commercialServices.map((service, index) => {
                const cardId = `commercial-${index}`;
                const isExpanded = expandedCards[cardId];
                return (
                <div key={index} className="card p-6 lg:p-8 group border-2 border-blue-50 hover:border-blue-200 transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                      <ServiceIcon icon={service.icon} />
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-blue-600 font-medium mb-4 text-center italic">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Detailed Features - Accordion */}
                  <div className="border-t border-blue-100 pt-4 mt-4">
                    <button
                      onClick={() => toggleCard(cardId)}
                      aria-expanded={isExpanded}
                      aria-controls={`details-${cardId}`}
                      className="w-full flex items-center justify-between text-left group/btn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover/btn:text-blue-600 transition-colors">
                        What&apos;s Included
                      </h4>
                      <svg
                        className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div id={`details-${cardId}`}>
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <svg className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>

          {/* Residential Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                Residential Construction Services
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {residentialServices.map((service, index) => {
                const cardId = `residential-${index}`;
                const isExpanded = expandedCards[cardId];
                return (
                <div key={index} className="card p-6 lg:p-8 group border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-2xl bg-gray-50 text-gray-600 group-hover:bg-gray-100 transition-colors duration-300">
                      <ServiceIcon icon={service.icon} />
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 font-medium mb-4 text-center italic">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Detailed Features - Accordion */}
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <button
                      onClick={() => toggleCard(cardId)}
                      aria-expanded={isExpanded}
                      aria-controls={`details-residential-${cardId}`}
                      className="w-full flex items-center justify-between text-left group/btn focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover/btn:text-gray-700 transition-colors">
                        What&apos;s Included
                      </h4>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div id={`details-residential-${cardId}`}>
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <svg className="w-4 h-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="card-gradient p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss your vision and bring it to life with our expert construction services. 
                We provide free consultations and detailed project estimates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Free Consultation
                </Link>
                <Link href="/projects" className="btn-secondary text-lg px-8 py-4">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to project completion, we follow a proven process that ensures quality results and client satisfaction.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet with you to understand your vision, needs, and budget for the project."
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Our team creates detailed plans and designs that bring your vision to life."
              },
              {
                step: "03",
                title: "Permits & Approvals",
                description: "We handle all necessary permits and approvals to ensure compliance."
              },
              {
                step: "04",
                title: "Construction",
                description: "Our skilled craftsmen execute the project with precision and quality."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
