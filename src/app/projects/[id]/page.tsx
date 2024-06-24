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
    <section className="flex flex-col items-center gap-5 mb-20 px-4 md:px-8">
      <div className="p-12" />
      <h1 className="text-3xl font-bold mt-12 mb-5 tracking-wider text-center">{project.title}</h1>
      <div className="relative w-full max-w-4xl">
        <Image
          src={project.image}
          alt={project.title}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          width={600}
          height={300}
        />
      </div>
      <p className="mt-5 max-w-4xl text-center font-semibold">
        {project.description}
      </p>
    </section>
  );
}
