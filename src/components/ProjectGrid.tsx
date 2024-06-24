import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
  projects: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
  }[]
}

export default function ProjectGrid({ projects }: Props) {
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

