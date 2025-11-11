'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Project } from '../projects/types';

type Props = {
  projects: Project[];
}

type FilterType = 'all' | 'residential' | 'commercial';
type ProjectFilterType = 'all' | 'new-build' | 'remodel' | 'renovation' | 'ada-upgrade' | 'addition';

export default function ProjectGrid({ projects }: Props) {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all');
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectFilterType>('all');
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = categoryFilter === 'all' || project.category === categoryFilter;
    const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
    return categoryMatch && projectTypeMatch;
  });

  const projectListId = 'projects-result-grid';

  const handleCategoryFilter = (filter: FilterType) => {
    setCategoryFilter(filter);
    // Focus management: announce change to screen readers
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.focus();
      }
    }, 100);
  };

  const handleProjectTypeFilter = (filter: ProjectFilterType) => {
    setProjectTypeFilter(filter);
    // Focus management: announce change to screen readers
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className="container mx-auto px-4 py-10" aria-labelledby="project-filter-heading">
      <h2 id="project-filter-heading" className="sr-only">Filter construction projects</h2>
      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-6" role="group" aria-labelledby="category-filter-label">
          {/* Category Filters */}
          <div className="flex gap-2">
            <span id="category-filter-label" className="sr-only">Filter projects by category</span>
            <button
              type="button"
              onClick={() => handleCategoryFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                categoryFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-pressed={categoryFilter === 'all'}
              aria-current={categoryFilter === 'all' ? 'true' : undefined}
              aria-controls={projectListId}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => handleCategoryFilter('residential')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                categoryFilter === 'residential'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-pressed={categoryFilter === 'residential'}
              aria-current={categoryFilter === 'residential' ? 'true' : undefined}
              aria-controls={projectListId}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => handleCategoryFilter('commercial')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                categoryFilter === 'commercial'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              aria-pressed={categoryFilter === 'commercial'}
              aria-current={categoryFilter === 'commercial' ? 'true' : undefined}
              aria-controls={projectListId}
            >
              Commercial
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2" role="group" aria-labelledby="project-type-filter-label">
          {/* Project Type Filters */}
          <span id="project-type-filter-label" className="sr-only">Filter projects by construction type</span>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'all'}
            aria-current={projectTypeFilter === 'all' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            All Types
          </button>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('new-build')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'new-build'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'new-build'}
            aria-current={projectTypeFilter === 'new-build' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            New Build
          </button>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('remodel')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'remodel'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'remodel'}
            aria-current={projectTypeFilter === 'remodel' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            Remodel
          </button>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('renovation')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'renovation'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'renovation'}
            aria-current={projectTypeFilter === 'renovation' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            Renovation
          </button>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('addition')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'addition'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'addition'}
            aria-current={projectTypeFilter === 'addition' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            Addition
          </button>
          <button
            type="button"
            onClick={() => handleProjectTypeFilter('ada-upgrade')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${
              projectTypeFilter === 'ada-upgrade'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            aria-pressed={projectTypeFilter === 'ada-upgrade'}
            aria-current={projectTypeFilter === 'ada-upgrade' ? 'true' : undefined}
            aria-controls={projectListId}
          >
            ADA Upgrade
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div 
        id={projectListId} 
        ref={resultsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
        role="list"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
        aria-label={`${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} found`}
      >
        {filteredProjects.map(project => (
          <article key={project.id} role="listitem">
            <Link href={`/projects/${project.id}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-lg" aria-label={`View project ${project.title}`}>
              <div className="group cursor-pointer">
                {/* Image Container with Uniform Aspect Ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={project.image}
                    alt={`${project.title} project cover image`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center" aria-hidden="true">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-white font-semibold text-lg bg-blue-600/90 px-4 py-2 rounded-full backdrop-blur-sm">
                        View Details →
                      </span>
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.projectType.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-medium">
                    {project.shortDescription}
                  </p>

                  <p className="text-xs text-gray-500 italic">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12" role="status" aria-live="polite" aria-atomic="true">
          <div className="text-gray-500 text-lg">
            No projects found matching your filters.
          </div>
          <button
            type="button"
            onClick={() => {
              setCategoryFilter('all');
              setProjectTypeFilter('all');
              setTimeout(() => {
                if (resultsRef.current) {
                  resultsRef.current.focus();
                }
              }, 100);
            }}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded"
            aria-controls={projectListId}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

