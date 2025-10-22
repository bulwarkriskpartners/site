import { ReactNode } from 'react';

interface CalloutProps {
  title: string;
  children: ReactNode;
}

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="my-8 rounded-xl border-2 border-teal-500/30 bg-teal-950/20 p-6">
      <h3 className="text-lg font-semibold text-teal-400 mb-4">{title}</h3>
      <div className="prose prose-invert prose-sm max-w-none">
        {children}
      </div>
    </div>
  );
}
