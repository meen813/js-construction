'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/projects/data';

export default function ProjectDetailPage() {
  const params = useParams();
  const { id } = params;
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="flex flex-col items-center gap-5 mb-20">
      <div className='p-12' />
      <h1 className="text-3xl font-bold mt-12 mb-5 tracking-wider">{project.title}</h1>
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          width={500}
          height={200}
        />
      </div>
      <p className="mt-5 max-w-4xl">
        {project.description}
      </p>
    </section>
  );
}
