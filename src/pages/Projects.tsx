import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import DonationCTA from '@/components/DonationCTA';
import Newsletter from '@/components/Newsletter';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <>
      <PageHero
        title="On-the-ground projects across India"
        description="From learning centres to mobile health camps, here's what we're building with local communities."
        eyebrow="Our Projects"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} className="h-full" />
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
