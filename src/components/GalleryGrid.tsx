import { useState, useMemo } from 'react';
import { galleryImages, type GalleryCategory } from '@/data/gallery';
import GalleryFilter from '@/components/GalleryFilter';
import Lightbox from '@/components/Lightbox';

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <GalleryFilter active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-navy-50 animate-fade-in-up"
            style={{ animationDelay: `${(index % 8) * 50}ms` }}
            aria-label={`View image: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/20" />
          </button>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <p className="mt-12 text-center text-muted-500">No images in this category yet.</p>
      )}

      {lightboxIndex !== null && lightboxIndex < filteredImages.length && (
        <Lightbox
          images={filteredImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
