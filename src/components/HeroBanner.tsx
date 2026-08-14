import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

export default function HeroBanner() {
  useSEO({
    title: 'Shriyan Mahananda Foundation - NGO in India',
    description:
      'Shriyan Mahananda Foundation works with communities across India on education, women\'s empowerment, healthcare and cultural preservation — one village at a time.',
    ogImage: '/assets/hero/hero-community.jpeg',
  });

  return (
    <section className="relative bg-cream-200 pt-28 pb-0 lg:pt-36 overflow-hidden">
      <img
        src="/assets/logo/logo.png"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-1/3 h-72 w-72 opacity-[0.04] pointer-events-none select-none hidden lg:block"
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in-up max-w-xl">
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] text-balance">
              Service, culture
              <br />
              and dedication for
              <br />
              a stronger <span className="text-gold-500">India.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-500 sm:text-lg max-w-lg">
              Shriyan Mahananda Foundation works with communities across India on education,
              women's empowerment, healthcare and cultural preservation — one village at a time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/donate" className="btn-primary">
                <Heart className="h-4 w-4" fill="currentColor" />
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <svg
                className="absolute -top-6 -right-6 h-24 w-24 text-gold-400 z-10 hidden lg:block"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 95 Q5 5 95 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>

              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] shadow-card">
                <img
                  src="/assets/hero/hero-community.jpeg"
                  alt="Community program by Shriyan Mahananda Foundation"
                  className="h-full w-full object-cover"
                />
                <img
                  src="/assets/logo/logo.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 h-16 w-16 opacity-20 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
