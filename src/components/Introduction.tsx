import Image from "next/image";
import Link from "next/link";
import image1 from '../../public/new building.webp'
import image2 from '../../public/Home addition.webp';
import image3 from '../../public/renovation.webp';

export default function Introduction() {
  const services = [
    {
      image: image1,
      title: "New Custom Build",
      description: "From concept to completion, we build your dream home with precision and quality craftsmanship.",
      features: ["Custom Design", "Quality Materials", "Timely Delivery"]
    },
    {
      image: image2,
      title: "Home Addition (ADU)",
      description: "Expand your living space with expertly designed additions that seamlessly integrate with your existing home.",
      features: ["Space Planning", "Permit Handling", "Seamless Integration"]
    },
    {
      image: image3,
      title: "Renovation",
      description: "Transform your existing space with our comprehensive renovation services that breathe new life into your home.",
      features: ["Modern Updates", "Structural Integrity", "Value Enhancement"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Services We Provide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We excel in custom home building, general contracting, renovations and remodels, home additions, and outdoor living spaces. 
            Our expertise ensures that every project is executed with precision and attention to detail, delivering exceptional results that exceed client expectations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="card p-4 md:p-6 lg:p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="relative mb-4 md:mb-6">
                <Image
                  alt={service.title}
                  src={service.image}
                  width={200}
                  height={200}
                  className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-2xl shadow-lg mx-auto group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-1 md:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center text-xs md:text-sm text-gray-500">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
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
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More About Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
