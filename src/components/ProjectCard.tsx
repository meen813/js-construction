import Image from "next/image";
import Link from "next/link";
import { Project } from "@/projects/types";

const formatProjectType = (projectType: string) => {
  return projectType.replace('-', ' ').split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

const formatLabel = (category: Project['category'], projectType: Project['projectType']) => {
  const categoryName = category === 'commercial' ? 'COMMERCIAL' : 'RESIDENTIAL';
  let typeName = '';
  
  switch(projectType) {
    case 'renovation':
      typeName = 'RENOVATION';
      break;
    case 'remodel':
      typeName = 'REMODEL';
      break;
    case 'ada-upgrade':
      typeName = 'ADA UPGRADE';
      break;
    case 'addition':
      typeName = 'ADDITION';
      break;
    case 'new-build':
      typeName = 'NEW BUILD';
      break;
    default:
      typeName = formatProjectType(projectType).toUpperCase();
  }
  
  return `${categoryName} | ${typeName}`;
};

const cleanTitle = (title: string) => {
  return title
    .replace(/\s*Commercial\s*/gi, ' ')
    .replace(/\s*\([0-9]{4}\)\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cleanedTitle = cleanTitle(project.title);

  return (
    <Link href={`/projects/${project.id}`} className="group block h-full w-full outline-none focus:ring-4 focus:ring-blue-500/50 rounded-2xl">
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-700 ease-out group-hover:shadow-2xl translate-y-0 group-hover:-translate-y-2">
        {/* Full Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>

        {/* Content Block */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
          {/* Top Label */}
          <div className="absolute top-6 left-6">
             <span className="inline-flex items-center px-3 py-1.5 bg-black/40 text-white backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold tracking-[0.15em] rounded uppercase z-10">
               {formatLabel(project.category, project.projectType)}
             </span>
          </div>

          {/* Text Area */}
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 drop-shadow-md tracking-tight">
              {cleanedTitle}
            </h3>
            
            <div className="overflow-hidden">
               <div className="flex flex-col sm:flex-row sm:items-end justify-between text-white/90 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 h-0 group-hover:h-auto pt-1">
                 <p className="text-sm font-light leading-relaxed line-clamp-2 max-w-[85%] text-gray-200">
                   {project.shortDescription}
                 </p>
                 <span className="text-base font-medium mt-2 sm:mt-0 opacity-80 shrink-0">
                   {project.year}
                 </span>
               </div>
            </div>

            {/* View Project Action */}
            <div className="flex items-center gap-2 mt-5 text-white font-medium text-xs sm:text-sm tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150">
              <span className="border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">View Project</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
