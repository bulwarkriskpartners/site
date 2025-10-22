'use client';

interface ReportData {
  summary: {
    bullets: string[];
    topMetrics: Array<{
      label: string;
      value: number;
      fmt: string;
    }>;
  };
}

interface ExecutiveSummarySectionProps {
  data: ReportData;
}

export default function ExecutiveSummarySection({ data }: ExecutiveSummarySectionProps) {
  const formatValue = (value: number, fmt: string) => {
    switch (fmt) {
      case 'currency':
        return `$${(value / 1000000).toFixed(1)}M`;
      case 'bps':
        return `${value} bps`;
      case 'percent':
        return `${value}%`;
      case 'days':
        return `+${value} days`;
      default:
        return value.toString();
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Metrics */}
      <div className="grid gap-6 md:grid-cols-3">
        {data.summary.topMetrics.map((metric, index) => (
          <div key={index} className="text-center p-6 bg-zinc-800/40 rounded-xl">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {formatValue(metric.value, metric.fmt)}
            </div>
            <div className="text-sm text-zinc-400">{metric.label}</div>
          </div>
        ))}
      </div>
      
      {/* Key Findings */}
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-4">Key Findings</h3>
        <ul className="space-y-3">
          {data.summary.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
              <span className="text-zinc-300 leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
