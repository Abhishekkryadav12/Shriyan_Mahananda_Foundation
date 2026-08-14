import { BookOpen, Heart, Wrench, Stethoscope, Droplet, TreePine } from 'lucide-react';
import type { Program } from '@/data/programs';

const iconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  Heart,
  Wrench,
  Stethoscope,
  Droplet,
  TreePine,
};

interface ProgramCardProps {
  program: Program;
  className?: string;
}

export default function ProgramCard({ program, className = '' }: ProgramCardProps) {
  const Icon = iconMap[program.icon] ?? BookOpen;

  return (
    <article className={`card card-hover group overflow-hidden flex flex-col ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-soft text-gold-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-navy-900">{program.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-500">{program.description}</p>
        <div className="mt-4 flex items-baseline gap-1.5 border-t border-navy-50 pt-4">
          <span className="font-serif text-2xl font-bold text-gold-600">{program.metric}</span>
          <span className="text-sm font-medium text-muted-400">{program.metricLabel}</span>
        </div>
      </div>
    </article>
  );
}
