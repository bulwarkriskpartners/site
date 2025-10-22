import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold font-display leading-tight ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-2xl md:text-3xl font-semibold font-display ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-xl md:text-2xl font-semibold font-display ${className}`}>
      {children}
    </h3>
  );
}

export function Muted({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-zinc-400 ${className}`}>
      {children}
    </p>
  );
}

export function Mono({ children, className = '' }: TypographyProps) {
  return (
    <span className={`font-mono ${className}`}>
      {children}
    </span>
  );
}
