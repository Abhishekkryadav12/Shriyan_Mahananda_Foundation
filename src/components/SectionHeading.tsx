interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] text-balance ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-muted-500 sm:text-lg ${isCenter ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
