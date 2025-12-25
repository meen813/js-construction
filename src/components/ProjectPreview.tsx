import Image from "next/image";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import { projects } from "@/projects/data";
import { Project } from "@/projects/types";
import { useState } from "react";

const formatProjectType = (projectType: string) => {
  return projectType.replace('-', ' ').split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

const formatLabel = (category: Project['category'], projectType: Project['projectType']) => {
  const categoryName = category === 'commercial' ? 'COMMERCIAL' : 'RESIDENTIAL';
  let typeName = '';
  
  switch(projectType) {
    case 'renovation':
      typeName = 'RENOVATION';
      break;
    case 'remodel':
      typeName = 'REMODEL';
      break;
    case 'ada-upgrade':
      typeName = 'ADA UPGRADE';
      break;
    case 'addition':
      typeName = 'ADDITION';
      break;
    case 'new-build':
      typeName = 'NEW BUILD';
      break;
    default:
      typeName = formatProjectType(projectType).toUpperCase();
  }
  
  return `${categoryName} ${typeName}`;
};

const getProjectTypeColor = (category: Project['category']) => {
  if (category === 'commercial') {
    return { bg: 'bg-blue-600', text: 'text-white' };
  } else {
    return { bg: 'bg-emerald-600', text: 'text-white' };
  }
};

const cleanTitle = (title: string) => {
  return title
    .replace(/\s*Commercial\s*/gi, ' ')
    .replace(/\s*\([0-9]{4}\)\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export default function ProjectPreview() {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Our Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of exceptional construction projects that showcase our commitment to quality, innovation, and client satisfaction.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 bg-gray-100 rounded-full mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                filter === 'commercial'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                filter === 'residential'
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Residential
            </button>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          {/* Desktop: ScrollableBar - Only shows if we have enough items, otherwise grid */}
          <div className="hidden md:block">
            {filteredProjects.length > 0 ? (
               <ScrollableBar>
              {filteredProjects.map((project) => {
                const typeColor = getProjectTypeColor(project.category);
                const cleanedTitle = cleanTitle(project.title);
                
                return (
                  <div key={project.id} className="p-4">
                    <Link href={`/projects/${project.id}`} className="group block">
                      <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-gray-300/80">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
                          {/* Project Type Label - Top Left */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`inline-flex items-center px-3 py-1.5 ${typeColor.bg} ${typeColor.text} text-xs font-bold rounded-full shadow-lg backdrop-blur-sm uppercase tracking-wide`}>
                              {formatLabel(project.category, project.projectType)}
                            </span>
                          </div>

                          {/* Multiple Images Grid (if available) */}
                          {project.additionalImages && project.additionalImages.length >= 2 ? (
                            <div className="grid grid-cols-3 gap-0.5 h-full">
                              {/* Main Image - Takes 2 columns */}
                              <div className="col-span-2 relative">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  quality={90}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              </div>
                              {/* Additional Images - Stack vertically */}
                              <div className="flex flex-col gap-0.5">
                                {project.additionalImages.slice(0, 2).map((img, idx) => (
                                  <div key={idx} className="relative flex-1">
                                    <Image
                                      src={img}
                                      alt={`${project.title} - Detail ${idx + 1}`}
                                      fill
                                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      quality={90}
                                      loading="lazy"
                                      placeholder="blur"
                                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            /* Single Image */
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              quality={90}
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          )}
                          
                          {/* Subtle Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1">
                              {cleanedTitle}
                            </h3>
                            <span className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md whitespace-nowrap flex-shrink-0 min-w-[60px]">
                              {project.year}
                            </span>
                          </div>
                          
                          <p className="text-base text-gray-700 leading-relaxed">
                            {project.shortDescription}
                          </p>
                          
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {project.tagline}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </ScrollableBar> 
            ) : (
                  <div className="text-center py-10 text-gray-500">No projects found in this category.</div>
            )}
           
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {filteredProjects.slice(0, 3).map((project) => {
              const typeColor = getProjectTypeColor(project.category);
              const cleanedTitle = cleanTitle(project.title);
              
              return (
                <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all duration-500 ease-out group-hover:shadow-xl">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
                      {/* Project Type Label - Top Left */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center px-3 py-1.5 ${typeColor.bg} ${typeColor.text} text-xs font-bold rounded-full shadow-lg backdrop-blur-sm uppercase tracking-wide`}>
                          {formatLabel(project.category, project.projectType)}
                        </span>
                      </div>

                      {/* Multiple Images Grid (if available) */}
                      {project.additionalImages && project.additionalImages.length >= 2 ? (
                        <div className="grid grid-cols-3 gap-0.5 h-full">
                          <div className="col-span-2 relative">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="100vw"
                              quality={90}
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            {project.additionalImages.slice(0, 2).map((img, idx) => (
                              <div key={idx} className="relative flex-1">
                                <Image
                                  src={img}
                                  alt={`${project.title} - Detail ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="100vw"
                                  quality={90}
                                  loading="lazy"
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          quality={90}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1">
                          {cleanedTitle}
                        </h3>
                        <span className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md whitespace-nowrap flex-shrink-0 min-w-[60px]">
                          {project.year}
                        </span>
                      </div>
                      
                      <p className="text-base text-gray-700 leading-relaxed">
                        {project.shortDescription}
                      </p>
                      
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
