import { timeline } from '@/data/site';
import ScrollReveal from '@/components/ScrollReveal';

export default function Timeline() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-300 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        {timeline.map((item, index) => (
          <ScrollReveal
            key={item.year}
            delay={index * 100}
            className={`relative flex items-start gap-6 pb-12 last:pb-0 ${
              index % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
            }`}
          >
            <div className="absolute left-5 top-1.5 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gold-400 ring-4 ring-cream-100 sm:left-1/2" />
            <div className="hidden sm:block sm:w-1/2" />
            <div className={`flex-1 pl-12 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
              <div className="card p-5">
                <span className="font-serif text-2xl font-bold text-gold-600">{item.year}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted-500">{item.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
