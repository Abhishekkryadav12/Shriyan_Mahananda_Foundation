import { galleryCategories, type GalleryCategory } from '@/data/gallery';

interface GalleryFilterProps {
  active: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {galleryCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            active === category
              ? 'bg-navy-900 text-white shadow-soft'
              : 'bg-white text-navy-600 border border-navy-100 hover:border-navy-200 hover:bg-navy-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
