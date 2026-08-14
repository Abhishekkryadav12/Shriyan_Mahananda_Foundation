import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ProgramCard from '@/components/ProgramCard';
import DonationCTA from '@/components/DonationCTA';
import Newsletter from '@/components/Newsletter';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <>
      <PageHero
        title="Six focus areas, one community"
        description="Every program is designed with local volunteers and families across India, and reviewed regularly for impact."
        eyebrow="Our Programs"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ScrollReveal key={program.id} delay={(index % 3) * 100}>
                <ProgramCard program={program} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <DonationCTA />
      <Newsletter />
    </>
  );
}
