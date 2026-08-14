import { useEffect, useRef, useState } from 'react';
import { Heart, Users, MapPin, Activity } from 'lucide-react';
import { impactStats } from '@/data/site';
import { useCountUp, useScrollAnimation } from '@/hooks/useAnimations';

const iconMap: Record<string, typeof Heart> = {
  Heart,
  Users,
  MapPin,
  Activity,
};

function StatItem({
  stat,
  shouldAnimate,
}: {
  stat: typeof impactStats[number];
  shouldAnimate: boolean;
}) {
  const count = useCountUp(stat.value, 2000, shouldAnimate);
  const Icon = iconMap[stat.icon] ?? Heart;

  return (
    <div className="flex flex-col items-center gap-3 px-4 py-6 text-center flex-1 min-w-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600 shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="font-serif text-3xl font-bold text-navy-900 lg:text-4xl tabular-nums">
          {count.toLocaleString('en-US')}{stat.suffix}
        </p>
        <p className="mt-1 text-sm font-medium text-muted-500">{stat.label}</p>
      </div>
    </div>
  );
}

export default function ImpactStats() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(() => setShouldAnimate(true), 200);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible]);

  return (
    <div ref={ref} className="relative z-20 -mt-16 lg:-mt-20 px-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-stat border border-navy-100 sm:p-8 lg:rounded-[2rem] lg:p-10">
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
          {impactStats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col sm:flex-row items-center">
              <StatItem stat={stat} shouldAnimate={shouldAnimate} />
              {index < impactStats.length - 1 && (
                <div className="hidden sm:block h-16 w-px bg-navy-100" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
