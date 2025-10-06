'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '../projects/types';

type Props = {
  projects: Project[];
}

type FilterType = 'all' | 'residential' | 'commercial';
type ProjectFilterType = 'all' | 'remodel' | 'ada-upgrade' | 'addition';

export default function ProjectGrid({ projects }: Props) {
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all');
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectFilterType>('all');

  const filteredProjects = projects.filter(project => {
    const categoryMatch = categoryFilter === 'all' || project.category === categoryFilter;
    const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
    return categoryMatch && projectTypeMatch;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Filter Buttons */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* Category Filters */}
          <div className="flex gap-2">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                categoryFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setCategoryFilter('residential')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                categoryFilter === 'residential'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setCategoryFilter('commercial')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                categoryFilter === 'commercial'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {/* Project Type Filters */}
          <button
            onClick={() => setProjectTypeFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              projectTypeFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => setProjectTypeFilter('remodel')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              projectTypeFilter === 'remodel'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Remodel
          </button>
          <button
            onClick={() => setProjectTypeFilter('addition')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              projectTypeFilter === 'addition'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Addition
          </button>
          <button
            onClick={() => setProjectTypeFilter('ada-upgrade')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              projectTypeFilter === 'ada-upgrade'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            ADA Upgrade
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="group cursor-pointer">
              {/* Image Container with Uniform Aspect Ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white font-semibold text-lg bg-blue-600/90 px-4 py-2 rounded-full backdrop-blur-sm">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                    {project.projectType.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h2>
                
                <p className="text-sm text-gray-600 font-medium">
                  {project.shortDescription}
                </p>
                
                <p className="text-xs text-gray-500 italic">
                  {project.tagline}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            No projects found matching your filters.
          </div>
          <button
            onClick={() => {
              setCategoryFilter('all');
              setProjectTypeFilter('all');
            }}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

