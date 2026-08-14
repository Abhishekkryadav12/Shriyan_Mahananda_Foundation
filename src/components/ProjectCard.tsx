import { MapPin } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const isOngoing = project.status === 'Ongoing';

  return (
    <article className={`card card-hover group flex flex-col p-7 lg:p-8 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            isOngoing
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-navy-50 text-navy-600 border border-navy-100'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isOngoing ? 'bg-green-500' : 'bg-navy-400'}`} />
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl font-bold text-navy-900 lg:text-2xl">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-500">{project.description}</p>

      <div className="mt-6 flex items-center gap-2 border-t border-navy-50 pt-4">
        <MapPin className="h-4 w-4 text-gold-600 shrink-0" />
        <span className="text-sm font-medium text-navy-700">{project.location}</span>
      </div>
    </article>
  );
}
