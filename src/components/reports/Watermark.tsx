'use client';

interface WatermarkProps {
  clientName: string;
  date: string;
  position: 'header' | 'footer' | 'background';
}

export default function Watermark({ clientName, date, position }: WatermarkProps) {
  if (position === 'background') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-zinc-600 transform -rotate-12">
              PRIVATE & CONFIDENTIAL
            </div>
          </div>
          <div className="absolute bottom-10 left-10 text-sm text-zinc-600">
            {clientName} — {date}
          </div>
        </div>
      </div>
    );
  }

  if (position === 'header') {
    return (
      <div className="text-xs text-zinc-500 mb-2">
        Private & Confidential — {clientName} — {date}
      </div>
    );
  }

  if (position === 'footer') {
    return (
      <div className="text-xs text-zinc-500 mt-4">
        {clientName} — Executive Risk Diagnostic — Page 1 of 12
      </div>
    );
  }

  return null;
}
