import Image from "next/image";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import { projects } from "@/projects/data";

export default function ProjectPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Our Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional construction projects that showcase our commitment to quality, innovation, and client satisfaction.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          {/* Desktop: ScrollableBar */}
          <div className="hidden md:block">
            <ScrollableBar>
              {projects.map((project) => (
                <div key={project.id} className="p-4">
                  <Link href={`/projects/${project.id}`} className="group block">
                    <div className="card overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <Image
                          alt={project.title}
                          src={project.image}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={85}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">View Details</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {project.description || "A stunning construction project showcasing our expertise and attention to detail."}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {project.category === 'commercial' ? 'Commercial' : 'Residential'}
                          </span>
                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            Learn More
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </ScrollableBar>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {projects.slice(0, 2).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                <div className="card overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      alt={project.title}
                      src={project.image}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">View Details</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.description || "A stunning construction project showcasing our expertise and attention to detail."}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.category === 'commercial' ? 'Commercial' : 'Residential'}</span>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-gradient p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See More of Our Work
            </h3>
            <p className="text-gray-600 mb-6">
              Discover our complete portfolio and see how we can bring your vision to life.
            </p>
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
