'use client';
import Image from "next/image";
import Link from "next/link";
import newBuilding from '../../../public/new building.webp';
import homeAddition from '../../../public/Home addition.webp';
import renovationImage from '../../../public/renovation.png';
import remodelImage from '../../../public/remodel.webp';

export default function ServicesPage() {

  const services = [
    {
      image: newBuilding,
      title: "New Custom Build",
      subtitle: "Where your vision becomes architecture.",
      description: "From the first sketch to the final inspection, we craft homes tailored to your lifestyle — built with precision, integrity, and timeless design.",
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
      image: homeAddition,
      title: "Home Addition (ADU)",
      subtitle: "Expand your living, not just your space.",
      description: "We design and build additions that look and feel like they've always belonged — blending seamlessly with your existing home while enhancing comfort and value.",
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
      image: renovationImage,
      title: "Renovation",
      subtitle: "Transform outdated into outstanding.",
      description: "For properties needing major upgrades, we handle every phase — from engineering and structural changes to high-end finishes — ensuring lasting value and compliance.",
      features: ["Structural Reinforcement", "Large-Scale Upgrades", "Expert Project Management"],
      details: [
        "Structural improvements and repairs",
        "Building expansions and additions",
        "Permit acquisition and compliance",
        "Seismic and safety upgrades",
        "Complete system overhauls"
      ]
    },
    {
      image: remodelImage,
      title: "Remodel",
      subtitle: "Revive, refresh, and reimagine your space.",
      description: "Whether it's a kitchen, bath, or full interior update, we modernize your home with functional layouts and refined aesthetics.",
      features: ["Interior Redesigns", "Fixture & Equipment Upgrades", "Elegant Finishing Touches"],
      details: [
        "Kitchen and bathroom remodels",
        "Interior painting and finishes",
        "Flooring updates and repairs",
        "Lighting and fixture upgrades",
        "Custom millwork and finishes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="services-hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We excel in custom home building, general contracting, remodels, home additions, and outdoor living spaces. 
              Our expertise ensures that every project is executed with precision and attention to detail.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-overview-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="services-overview-heading" className="sr-only">Detailed service offerings</h2>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    alt={`${service.title} service photo`}
                    src={service.image}
                    fill
                    className="object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-blue-600 font-medium mb-4 italic">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6 text-left" aria-label={`${service.title} differentiators`}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Detailed Features */}
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
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
            ))}
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
                <Link href="/contact" className="btn-primary text-lg px-8 py-4" aria-label="Request a consultation for construction services">
                  Get Free Consultation
                </Link>
                <Link href="/projects" className="btn-secondary text-lg px-8 py-4" aria-label="View our construction portfolio">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="services-process-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-process-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to project completion, we follow a proven process that ensures quality results and client satisfaction.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full" aria-hidden="true"></div>
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
              <div key={index} className="text-center" aria-label={`Step ${process.step}: ${process.title}`}>
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
