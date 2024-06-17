import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../public/image1.webp';
import image2 from '../../public/image2.webp';
import image3 from '../../public/image3.webp';
import image4 from '../../public/image4.webp';
import image5 from '../../public/image5.webp';
import image6 from '../../public/image6.webp';

const projects = [
  { id: 1, title: 'Project 1', image: image1.src },
  { id: 2, title: 'Project 2', image: image2.src },
  { id: 3, title: 'Project 3', image: image3.src },
  { id: 4, title: 'Project 4', image: image4.src },
  { id: 5, title: 'Project 5', image: image5.src },
  { id: 6, title: 'Project 6', image: image6.src },
  { id: 7, title: 'Project 7', image: image1.src },
  // 더 많은 프로젝트 추가
];

export default function ProjectGrid() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="block cursor-pointer">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <h2 className="mt-4 text-xl font-bold">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
