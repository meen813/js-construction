'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Project } from '../projects/types';
import ProjectCard from './ProjectCard';

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
    }).sort((a, b) => b.year - a.year);
  }, [projects, projectTypeFilter, categoryFilter]);

  const residentialProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = categoryFilter === 'all' || categoryFilter === 'residential';
      const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
      return project.category === 'residential' && categoryMatch && projectTypeMatch;
    }).sort((a, b) => b.year - a.year);
  }, [projects, projectTypeFilter, categoryFilter]);


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

