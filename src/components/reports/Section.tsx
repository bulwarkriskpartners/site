'use client';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-100 mb-2">{title}</h2>
        {subtitle && (
          <p className="text-zinc-400">{subtitle}</p>
        )}
      </div>
      <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
        {children}
      </div>
    </section>
  );
}