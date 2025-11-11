import Image from "next/image";
import Link from "next/link";
import image1 from '../../public/new building.webp'
import image2 from '../../public/Home addition.webp';
import renovationImage from '../../public/renovation.png';
import remodelImage from '../../public/remodel.webp';

export default function Introduction() {
  const services = [
    {
      image: image1,
      title: "New Custom Build",
      subtitle: "Where your vision becomes architecture.",
      description: "From the first sketch to the final inspection, we craft homes tailored to your lifestyle — built with precision, integrity, and timeless design.",
      features: ["Architectural Design Collaboration", "Premium Materials & Detailing", "On-schedule Delivery"]
    },
    {
      image: image2,
      title: "Home Addition (ADU)",
      subtitle: "Expand your living, not just your space.",
      description: "We design and build additions that look and feel like they've always belonged — blending seamlessly with your existing home while enhancing comfort and value.",
      features: ["Smart Space Planning", "Full Permit Coordination", "Seamless Structural Integration"]
    },
    {
      image: renovationImage,
      title: "Renovation",
      subtitle: "Transform outdated into outstanding.",
      description: "For properties needing major upgrades, we handle every phase — from engineering and structural changes to high-end finishes — ensuring lasting value and compliance.",
      features: ["Structural Reinforcement", "Large-Scale Upgrades", "Expert Project Management"]
    },
    {
      image: remodelImage,
      title: "Remodel",
      subtitle: "Revive, refresh, and reimagine your space.",
      description: "Whether it's a kitchen, bath, or full interior update, we modernize your home with functional layouts and refined aesthetics.",
      features: ["Interior Redesigns", "Fixture & Equipment Upgrades", "Elegant Finishing Touches"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Services We Provide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We handle both commercial and residential projects, specializing in custom builds, remodels, tenant improvements, and structural upgrades.
          Every project is completed with precision, craftsmanship, and a commitment to quality.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="card p-4 md:p-6 lg:p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-4 md:mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  alt={`${service.title} service illustration`}
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

              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-xs md:text-sm text-blue-600 font-medium mb-3 md:mb-4 italic">
                {service.subtitle}
              </p>

              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-1 md:space-y-2 text-left" aria-label={`${service.title} key features`}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-500">
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
              <Link href="/contact" className="btn-primary" aria-label="Request a free construction consultation">
                Get Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary" aria-label="Learn more about our construction services">
                Learn More About Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
