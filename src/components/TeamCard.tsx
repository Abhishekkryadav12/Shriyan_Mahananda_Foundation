import { UserRound } from 'lucide-react';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="card card-hover group flex flex-col items-center p-6 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-cream-200 ring-offset-2">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-navy-100 text-navy-400">
            <UserRound className="h-12 w-12" />
          </div>
        )}
      </div>
      <h3 className="mt-5 font-serif text-lg font-bold text-navy-900">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-gold-600">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-500">{member.bio}</p>
    </article>
  );
}
