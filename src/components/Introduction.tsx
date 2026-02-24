import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Building2, Store, Accessibility, Trees, Hammer, Home, PenTool, LayoutTemplate, CheckCircle2, ArrowRight } from "lucide-react";
import image1 from '../../public/custom_build_la.png'
import image2 from '../../public/home_addition_la.png';
import renovationImage from '../../public/renovation.png';
import remodelImage from '../../public/remodel.webp';
import mallImage19 from '../../public/Mall Renovation Project/20250724_101856.jpg';
import lobbyImage from '../../public/Mall Office Lobby/20250715_130946.jpg';
import adaImage1 from '../../public/ada project/20250520_092908.jpg';
import aduImage1 from '../../public/adu_la.png';
import bgImage from '../../public/architectural-bg.png';

// Service Icon Component
const ServiceIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, React.ReactElement> = {
    commercial: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
    tenant: <Store className="w-6 h-6 md:w-8 md:h-8" />,
    ada: <Accessibility className="w-6 h-6 md:w-8 md:h-8" />,
    site: <Trees className="w-6 h-6 md:w-8 md:h-8" />,
    remodel: <Hammer className="w-6 h-6 md:w-8 md:h-8" />,
    addition: <LayoutTemplate className="w-6 h-6 md:w-8 md:h-8" />,
    custom: <PenTool className="w-6 h-6 md:w-8 md:h-8" />,
    adu: <Home className="w-6 h-6 md:w-8 md:h-8" />,
  };
  return icons[icon] || <Building2 className="w-6 h-6 md:w-8 md:h-8" />;
};

export default function Introduction() {
  const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('commercial');
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const commercialServices = [
    {
      image: mallImage19,
      icon: "commercial",
      title: "Commercial Renovation",
      subtitle: "Transform your commercial space for success.",
      description: "Complete commercial building renovations including retail spaces, offices, and mixed-use properties. We handle everything from facade modernization to interior upgrades, ensuring compliance and maximizing your property value.",
      features: ["Facade Modernization", "Interior Space Optimization", "Code Compliance & Permits"]
    },
    {
      image: lobbyImage,
      icon: "tenant",
      title: "Tenant Improvement (TI)",
      subtitle: "Custom spaces that work for your business.",
      description: "Professional tenant improvement services tailored to your business needs. From office layouts to retail configurations, we create functional spaces that enhance productivity and customer experience.",
      features: ["Space Planning & Design", "Fast-Track Construction", "Minimal Business Disruption"]
    },
    {
      image: adaImage1,
      icon: "ada",
      title: "ADA Compliance Upgrades",
      subtitle: "Accessibility that meets all standards.",
      description: "Full ADA compliance upgrades for commercial properties. We ensure your building meets all accessibility requirements with ramps, handrails, accessible restrooms, and proper signage.",
      features: ["ADA Code Compliance", "City Standards Verification", "Complete Accessibility Solutions"]
    },
    {
      image: renovationImage,
      icon: "site",
      title: "Site Work / Utility / Exterior Improvements",
      subtitle: "Building from the ground up.",
      description: "Comprehensive site work including utility installations, exterior improvements, parking lot upgrades, and landscaping. We handle all aspects of site development and infrastructure.",
      features: ["Utility Installation", "Exterior Improvements", "Site Infrastructure"]
    }
  ];

  const residentialServices = [
    {
      image: remodelImage,
      icon: "remodel",
      title: "Remodel",
      subtitle: "Revive, refresh, and reimagine your space.",
      description: "Whether it's a kitchen, bath, or full interior update, we modernize your home with functional layouts and refined aesthetics.",
      features: ["Interior Redesigns", "Fixture & Equipment Upgrades", "Elegant Finishing Touches"]
    },
    {
      image: image2,
      icon: "addition",
      title: "Home Addition",
      subtitle: "Expand your living, not just your space.",
      description: "We design and build additions that look and feel like they've always belonged — blending seamlessly with your existing home while enhancing comfort and value.",
      features: ["Smart Space Planning", "Full Permit Coordination", "Seamless Structural Integration"]
    },
    {
      image: image1,
      icon: "custom",
      title: "Custom Build",
      subtitle: "Where your vision becomes architecture.",
      description: "From the first sketch to the final inspection, we craft homes tailored to your lifestyle — built with precision, integrity, and timeless design.",
      features: ["Architectural Design Collaboration", "Premium Materials & Detailing", "On-schedule Delivery"]
    },
    {
      image: aduImage1,
      icon: "adu",
      title: "ADU",
      subtitle: "Maximize your property's potential.",
      description: "Accessory Dwelling Units (ADUs) that add value and functionality to your property. Perfect for rental income, multi-generational living, or home offices.",
      features: ["ADU Design & Planning", "Permit Acquisition", "Complete Construction"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-[120%] -left-[10%] h-[130%] -top-[15%]"
          style={{ y: backgroundY }}
          aria-hidden="true"
        >
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Our Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From commercial complexes to dream homes, we bring decades of experience and precision to every project.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-12 max-w-5xl mx-auto">
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">2011</span>
               <span className="text-gray-600 font-medium text-sm md:text-base">Established</span>
             </div>
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <span className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">50+</span>
               <span className="text-gray-600 font-medium text-sm md:text-base">Projects Completed</span>
             </div>
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">100%</span>
               <span className="text-gray-600 font-medium text-sm md:text-base">Client Satisfaction</span>
             </div>
             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
               <span className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-2">A+</span>
               <span className="text-gray-600 font-medium text-sm md:text-base">Grade Quality</span>
             </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-200/80 backdrop-blur-sm rounded-full">
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'commercial'
                  ? 'bg-white text-blue-700 shadow-md scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                activeTab === 'residential'
                  ? 'bg-white text-emerald-700 shadow-md scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Content Area - Animated Transition */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === 'commercial' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fadeIn">
              {commercialServices.map((service, index) => (
                <div key={`comm-${index}`} className="card bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:p-8 group h-full flex flex-col hover:bg-white transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-2 md:p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                      <ServiceIcon icon={service.icon} />
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative mb-4 md:mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-blue-600 font-medium mb-3 md:mb-4 text-center italic">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1 md:space-y-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fadeIn">
              {residentialServices.map((service, index) => (
                <div key={`res-${index}`} className="card bg-white/90 backdrop-blur-sm p-4 md:p-6 lg:p-8 group h-full flex flex-col hover:bg-white transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-2 md:p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-300">
                      <ServiceIcon icon={service.icon} />
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="relative mb-4 md:mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-emerald-600 font-medium mb-3 md:mb-4 text-center italic">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-1 md:space-y-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss your vision and bring it to life with our expert construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                <span>Get Free Consultation</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/projects" className="btn-secondary group">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>View Our Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
