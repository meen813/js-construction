'use client';

import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '../../projects/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our completed residential and commercial construction projects across Southern California — including Fullerton, Manhattan Beach, and La Palma. 
              From custom home builds and ADU additions to commercial renovations and ADA compliance upgrades, our portfolio showcases our commitment to quality craftsmanship and attention to detail.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
