'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Project } from '../projects/types';

type Props = {
  projects: Project[];
}

type ProjectFilterType = 'all' | 'new-build' | 'remodel' | 'renovation' | 'ada-upgrade' | 'addition';
type CategoryFilterType = 'all' | 'commercial' | 'residential';

export default function ProjectGrid({ projects }: Props) {
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectFilterType>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>('all');

  // Separate projects by category
  const commercialProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = categoryFilter === 'all' || categoryFilter === 'commercial';
      const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
      return project.category === 'commercial' && categoryMatch && projectTypeMatch;
    });
  }, [projects, projectTypeFilter, categoryFilter]);

  const residentialProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = categoryFilter === 'all' || categoryFilter === 'residential';
      const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
      return project.category === 'residential' && categoryMatch && projectTypeMatch;
    });
  }, [projects, projectTypeFilter, categoryFilter]);

  // Color mapping based on category
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

  const cleanTitle = (title: string) => {
    // Remove "Commercial" and "(YYYY)" pattern, trim whitespace
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
              {/* Project Type Label - Top Left (Above Images) */}
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
                /* Single Image with Enhanced Styling */
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

            {/* Project Info - Matching Image Style */}
            <div className="p-6 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1">
                  {cleanedTitle}
                </h2>
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
        </div>
      </Link>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Category Filters - Large Pill Buttons */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCategoryFilter('all')}
            aria-pressed={categoryFilter === 'all'}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              categoryFilter === 'all'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            <span>All</span>
          </button>
          <button
            onClick={() => setCategoryFilter('commercial')}
            aria-pressed={categoryFilter === 'commercial'}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              categoryFilter === 'commercial'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            <span className="text-lg" aria-hidden="true">🏢</span>
            <span>Commercial</span>
          </button>
          <button
            onClick={() => setCategoryFilter('residential')}
            aria-pressed={categoryFilter === 'residential'}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              categoryFilter === 'residential'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            <span className="text-lg" aria-hidden="true">🏠</span>
            <span>Residential</span>
          </button>
        </div>
      </div>

      {/* Project Type Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setProjectTypeFilter('all')}
            aria-pressed={projectTypeFilter === 'all'}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => setProjectTypeFilter('new-build')}
            aria-pressed={projectTypeFilter === 'new-build'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'new-build'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            New Build
          </button>
          <button
            onClick={() => setProjectTypeFilter('remodel')}
            aria-pressed={projectTypeFilter === 'remodel'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'remodel'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Remodel
          </button>
          <button
            onClick={() => setProjectTypeFilter('renovation')}
            aria-pressed={projectTypeFilter === 'renovation'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'renovation'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Renovation
          </button>
          <button
            onClick={() => setProjectTypeFilter('addition')}
            aria-pressed={projectTypeFilter === 'addition'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'addition'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Addition
          </button>
          <button
            onClick={() => setProjectTypeFilter('ada-upgrade')}
            aria-pressed={projectTypeFilter === 'ada-upgrade'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              projectTypeFilter === 'ada-upgrade'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            ADA Upgrade
          </button>
        </div>
      </div>

      {/* Commercial Projects Section */}
      {(categoryFilter === 'all' || categoryFilter === 'commercial') && (
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Commercial Projects
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
              Professional commercial construction and renovation services for retail, office, and mixed-use developments
            </p>
          </div>

          {commercialProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercialProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No commercial projects found matching your filters.
              </div>
            </div>
          )}
        </section>
      )}

      {/* Residential Projects Section */}
      {(categoryFilter === 'all' || categoryFilter === 'residential') && (
        <section>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Residential Projects
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            </div>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
              Custom home additions, ADUs, kitchen remodels, and residential renovations
            </p>
          </div>

          {residentialProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No residential projects found matching your filters.
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

