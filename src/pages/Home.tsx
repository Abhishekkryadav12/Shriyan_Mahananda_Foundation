import { Target, Eye, Heart, Users, MapPin, Quote } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ImpactStats from '@/components/ImpactStats';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import ProgramCard from '@/components/ProgramCard';
import TeamCard from '@/components/TeamCard';
import DonationCTA from '@/components/DonationCTA';
import Newsletter from '@/components/Newsletter';
import { programs } from '@/data/programs';
import { team } from '@/data/team';
import { missionCards, founderQuote, foundationInfo } from '@/data/site';

const missionIconMap: Record<string, typeof Target> = {
  Target,
  Eye,
  Heart,
  Users,
};

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ImpactStats />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="Mission, vision and values"
              description="Every program we run traces back to these four commitments."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionCards.map((card, index) => {
              const Icon = missionIconMap[card.icon] ?? Target;
              return (
                <ScrollReveal key={card.title} delay={index * 100}>
                  <div className="card card-hover h-full p-6 lg:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-500">{card.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-200">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Where We Work"
              title="Our core programs"
              description="Six focus areas built around what communities across India tell us they need most."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ScrollReveal key={program.id} delay={(index % 3) * 100}>
                <ProgramCard program={program} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The people behind the foundation"
              description="A small, hands-on team working directly with volunteers and communities across India."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <ScrollReveal key={member.id} delay={(index % 5) * 80}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-200">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Originated in Bihar, working across India"
              description="Founded with a single learning centre in Sohsarai, the foundation now runs programs across education, health and empowerment throughout India."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 mx-auto max-w-4xl">
              <div className="card p-8 lg:p-12 relative overflow-hidden">
                <img
                  src="/assets/logo/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-8 -right-8 h-40 w-40 opacity-[0.04] pointer-events-none"
                />
                <div className="flex items-center gap-2 text-gold-600 mb-6">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-semibold">{foundationInfo.location}</span>
                </div>
                <Quote className="h-10 w-10 text-gold-300 mb-4" />
                <blockquote className="font-serif text-xl font-medium leading-relaxed text-navy-800 sm:text-2xl lg:text-[1.625rem] lg:leading-relaxed text-balance">
                  &ldquo;{founderQuote.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px w-12 bg-gold-400" />
                  <div>
                    <p className="font-semibold text-navy-900">{founderQuote.name}</p>
                    <p className="text-sm text-muted-500">{founderQuote.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DonationCTA />
      <Newsletter />
    </>
  );
}
