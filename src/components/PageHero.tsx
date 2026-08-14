import { useSEO } from '@/hooks/useSEO';

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  devanagari?: string;
}

export default function PageHero({ title, description, eyebrow, devanagari }: PageHeroProps) {
  useSEO({
    title: `${title} | Shriyan Mahananda Foundation`,
    description,
  });

  return (
    <section className="relative bg-cream-200 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <img
        src="/assets/logo/logo.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-64 w-64 opacity-[0.04] pointer-events-none select-none"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl lg:leading-tight text-balance">
            {title}
          </h1>
          {devanagari && (
            <p className="devanagari mt-3 text-lg font-medium text-gold-600">{devanagari}</p>
          )}
          <p className="mt-5 text-base leading-relaxed text-muted-500 sm:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
