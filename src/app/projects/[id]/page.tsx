'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import image1 from '../../../../public/image1.webp';
import image2 from '../../../../public/image2.webp';
import image3 from '../../../../public/image3.webp';
import image4 from '../../../../public/image4.webp';
import image5 from '../../../../public/image5.webp';
import image6 from '../../../../public/image6.webp';

const projects = [
  { id: 1, title: 'Project 1', description: 'Details about Project 1', image: image1.src },
  { id: 2, title: 'Project 2', description: 'Details about Project 2', image: image2.src },
  { id: 3, title: 'Project 3', description: 'Details about Project 3', image: image3.src },
  { id: 4, title: 'Project 4', description: 'Details about Project 4', image: image4.src },
  { id: 5, title: 'Project 5', description: 'Details about Project 5', image: image5.src },
  { id: 6, title: 'Project 6', description: 'Details about Project 6', image: image6.src },
  // 더 많은 프로젝트 추가
];

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
          // layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          width={500}
          height={200}
        />
      </div>
      {/* <p className="mt-5">{project.description}</p> */}
      <p className="mt-5 max-w-4xl">
        Welcome to our project gallery. Here you'll find homes transformed from vision to reality, showcasing our commitment to quality craftsmanship and attention to detail.          Welcome to our project gallery. Here you'll find homes transformed from vision to reality, showcasing our commitment to quality craftsmanship and attention to detail.
      </p>
    </section>
  );
}
