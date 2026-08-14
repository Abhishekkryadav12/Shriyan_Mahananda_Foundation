import { Target, Eye, Heart, Users, FileCheck, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import Timeline from '@/components/Timeline';
import DonationCTA from '@/components/DonationCTA';
import { missionCards, founderMessage, foundationInfo } from '@/data/site';

const missionIconMap: Record<string, typeof Target> = {
  Target,
  Eye,
  Heart,
  Users,
};

export default function About() {
  return (
    <>
      <PageHero
        title="Building सेवा • संस्कृति • समर्पण into everyday action"
        description="Shriyan Mahananda Foundation began as a small community effort in Sohsarai and has grown into a registered NGO serving families across India."
      />

      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Founder Message"
              title="Why we started"
              description="A message from our Founder & President."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 mx-auto max-w-3xl">
              <div className="card p-8 lg:p-12 relative overflow-hidden">
                <img
                  src="/assets/logo/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-8 -right-8 h-40 w-40 opacity-[0.04] pointer-events-none"
                />
                <Quote className="h-10 w-10 text-gold-300 mb-4" />
                <blockquote className="font-serif text-lg font-medium leading-relaxed text-navy-800 sm:text-xl lg:text-2xl lg:leading-relaxed text-balance">
                  &ldquo;{founderMessage.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px w-12 bg-gold-400" />
                  <div>
                    <p className="font-semibold text-navy-900">{founderMessage.name}</p>
                    <p className="text-sm text-muted-500">{founderMessage.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream-200">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Timeline"
              description="Key milestones since our founding."
            />
          </ScrollReveal>
          <div className="mt-14">
            <Timeline />
          </div>
        </div>
      </section>

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
              eyebrow="Compliance"
              title="Registration & legal status"
              description="Full transparency on our registration details — see our Transparency page for certificates and reports."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              <div className="card p-7 lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 mb-5">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900">Registration Number</h3>
                <p className="mt-2 text-lg font-semibold text-navy-700 break-all">
                  {foundationInfo.registrationNumber}
                </p>
              </div>
              <div className="card p-7 lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 mb-5">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900">Trust PAN</h3>
                <p className="mt-2 text-lg font-semibold text-navy-700 break-all">
                  {foundationInfo.trustPan}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DonationCTA />
    </>
  );
}
