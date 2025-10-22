import StatTile from '../StatTile';

interface ExecutiveSummaryProps {
  bullets: string[];
  topMetrics: Array<{
    label: string;
    value: number;
    fmt: string;
  }>;
}

export default function ExecutiveSummary({ bullets, topMetrics }: ExecutiveSummaryProps) {
  return (
    <div className="space-y-8">
      {/* Top Metrics */}
      <div className="grid gap-6 md:grid-cols-3">
        {topMetrics.map((metric, index) => (
          <StatTile
            key={index}
            label={metric.label}
            value={metric.value}
            format={metric.fmt as any}
          />
        ))}
      </div>

      {/* Key Points */}
      <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
        <h3 className="text-xl font-semibold text-zinc-100/95 mb-6">Key Findings</h3>
        <ul className="space-y-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-zinc-300 leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
