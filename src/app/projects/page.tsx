'use client';

import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '../../projects/data';
import StructuredData, { generateBreadcrumbSchema } from '@/components/StructuredData';

export default function ProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' }
  ]);

  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]">
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our commercial and residential construction projects across Southern California — including mall renovations, ADA upgrades, tenant improvements, and custom home remodels.
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

