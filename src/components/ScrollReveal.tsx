import { type ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useAnimations';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
