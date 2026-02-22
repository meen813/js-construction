import Link from "next/link";
import ScrollableBar from "./ScrollableBar";
import { projects } from "@/projects/data";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1, partialVisibilityGutter: 30 }
};


export default function ProjectPreview() {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  }).sort((a, b) => b.year - a.year);

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
              {filteredProjects.map((project) => (
                <div key={project.id} className="p-4 h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </ScrollableBar> 
            ) : (
                  <div className="text-center py-10 text-gray-500">No projects found in this category.</div>
            )}
           
          </div>

          {/* Mobile: Horizontal Carousel */}
          <div className="md:hidden pb-12">
            {filteredProjects.length > 0 ? (
               <Carousel 
                 responsive={responsive}
                 infinite={false}
                 swipeable={true}
                 draggable={true}
                 showDots={true}
                 arrows={false}
                 partialVisible={true}
                 itemClass="px-2 pb-8"
               >
                 {filteredProjects.map((project) => (
                   <div key={project.id} className="h-full">
                     <ProjectCard project={project} />
                   </div>
                 ))}
               </Carousel>
            ) : (
                <div className="text-center py-10 text-gray-500">No projects found.</div>
            )}
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
