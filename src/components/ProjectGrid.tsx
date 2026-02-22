'use client';

import { useState, useMemo } from 'react';
import { Project } from '../projects/types';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type Props = {
  projects: Project[];
}

type ProjectFilterType = 'all' | 'new-build' | 'remodel' | 'renovation' | 'ada-upgrade' | 'addition';
type CategoryFilterType = 'all' | 'commercial' | 'residential';

export default function ProjectGrid({ projects }: Props) {
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectFilterType>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterType>('all');

  // Filter projects by both category and type together
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = categoryFilter === 'all' || categoryFilter === project.category;
      const projectTypeMatch = projectTypeFilter === 'all' || project.projectType === projectTypeFilter;
      return categoryMatch && projectTypeMatch;
    }).sort((a, b) => b.year - a.year);
  }, [projects, projectTypeFilter, categoryFilter]);

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 max-w-7xl">
      {/* Minimalist Filters */}
      <div className="flex flex-col items-center mb-16 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 border-b border-gray-200 pb-4">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'residential', label: 'Residential' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setCategoryFilter(cat.id as CategoryFilterType);
                setProjectTypeFilter('all'); // Reset sub-filter when main changes
              }}
              className={`text-base md:text-xl font-semibold tracking-widest uppercase transition-all duration-300 focus:outline-none relative py-2 ${
                categoryFilter === cat.id
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.label}
              {categoryFilter === cat.id && (
                <motion.div 
                  layoutId="activeCategoryIndicator"
                  className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-gray-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Type Sub-Filters */}
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 origin-top"
          >
            {[
              { id: 'all', label: 'All Types' },
              { id: 'new-build', label: 'New Build' },
              { id: 'remodel', label: 'Remodel' },
              { id: 'renovation', label: 'Renovation' },
              { id: 'addition', label: 'Addition' },
              { id: 'ada-upgrade', label: 'ADA Upgrade' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setProjectTypeFilter(type.id as ProjectFilterType)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none border ${
                  projectTypeFilter === type.id
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-105'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                {type.label}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Unified Project Grid */}
      <div className="min-h-[400px]">
        {filteredProjects.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-3xl"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide">No projects found.</h3>
            <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setCategoryFilter('all'); setProjectTypeFilter('all'); }}
              className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest border-b border-blue-600/30 hover:border-blue-800 pb-1 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

