import Image from "next/image";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import { projects } from "@/projects/data";
import { Project } from "@/projects/types";

export default function ProjectPreview() {
  // Helper functions from ProjectGrid
  const getProjectTypeColor = (category: Project['category']) => {
    if (category === 'commercial') {
      return { bg: 'bg-blue-600', text: 'text-white' };
    } else {
      return { bg: 'bg-emerald-600', text: 'text-white' };
    }
  };

  const formatProjectType = (projectType: string) => {
    return projectType.replace('-', ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const formatLabel = (category: Project['category'], projectType: Project['projectType']) => {
    const categoryName = category === 'commercial' ? 'Commercial' : 'Residential';
    const typeName = formatProjectType(projectType);
    return `${categoryName} ${typeName}`;
  };

  const cleanTitle = (title: string) => {
    return title
      .replace(/\s*Commercial\s*/gi, ' ')
      .replace(/\s*\([0-9]{4}\)\s*/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    const typeColor = getProjectTypeColor(project.category);
    const cleanedTitle = cleanTitle(project.title);
    
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="group cursor-pointer">
          {/* Card Container with Modern Styling */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-gray-300/80">
            {/* Image Container with 16:9 Aspect Ratio */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
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
                      style={{
                        filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                      }}
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
                          style={{
                            filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                          }}
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
                /* Single Image with Enhanced Styling */
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              )}
              
              {/* Light overlay for consistent tone */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Project Type Label - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center px-3 py-1.5 ${typeColor.bg} ${typeColor.text} text-xs font-semibold rounded-lg shadow-md backdrop-blur-sm uppercase tracking-wider`}>
                  {formatLabel(project.category, project.projectType)}
                </span>
              </div>
            </div>

            {/* Project Info - Minimalist Style */}
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1 min-w-0">
                  {cleanedTitle}
                </h2>
                <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md whitespace-nowrap flex-shrink-0 ml-2">
                  {project.year}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
              
              <p className="text-xs text-gray-500 italic">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

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
                  <ProjectCard project={project} />
                </div>
              ))}
            </ScrollableBar>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
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
