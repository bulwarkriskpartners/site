import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}
