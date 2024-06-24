'use client';

import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '../../projects/data';

export default function ProjectsPage() {
  return (
    <section className="flex flex-col text-center items-center gap-5">
      <div className="p-6"/>

      <div className="mt-12 text-center max-w-2xl">
        <h1 className="font-bold text-4xl tracking-wider">Our Projects</h1>
        <p className="mt-5 font-semibold">
          Welcome to our project gallery. Here you will find homes transformed from vision to reality, showcasing our commitment to quality craftsmanship and attention to detail.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
