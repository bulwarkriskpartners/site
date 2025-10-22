import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section className={`py-10 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <div className="text-sm text-zinc-400 uppercase tracking-wider mb-2">{eyebrow}</div>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
