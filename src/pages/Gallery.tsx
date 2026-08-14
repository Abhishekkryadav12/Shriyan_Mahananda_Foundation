import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import DonationCTA from '@/components/DonationCTA';

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Moments from the field"
        description="A look at our programs, events and volunteers in action across India."
        eyebrow="Gallery"
      />
      <section className="section-padding bg-cream-100">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>
      <DonationCTA />
    </>
  );
}
