import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/projects/data';
import ProjectDetailView from './ProjectDetailView';

type Params = Promise<{ id: string }>;

const findProject = async (params: Params) => {
  const { id } = await params;
  return projects.find(p => p.id === Number(id));
};

// Prerender every project page instead of rendering on demand.
export function generateStaticParams() {
  return projects.map(project => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = await findProject(params);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const image = typeof project.image === 'string' ? project.image : project.image.src;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const project = await findProject(params);

  // Respond with a real 404 rather than rendering a "not found" body at 200.
  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
