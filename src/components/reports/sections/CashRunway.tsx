import Sparkline from '../charts/Sparkline';

interface CashRunwayProps {
  timeSeries: Array<{
    date: string;
    base: number;
    p50: number;
    p95: number;
  }>;
}

export default function CashRunway({ timeSeries }: CashRunwayProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
        <h3 className="text-xl font-semibold text-zinc-100/95 mb-6">Cash Runway Projection</h3>
        
        <div className="mb-6">
          <Sparkline 
            data={timeSeries}
            height={120}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-sm text-zinc-400 mb-1">Baseline</div>
            <div className="text-lg font-semibold text-zinc-300">
              {timeSeries[timeSeries.length - 1]?.base} days
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-zinc-400 mb-1">P50 Scenario</div>
            <div className="text-lg font-semibold text-emerald-400">
              {timeSeries[timeSeries.length - 1]?.p50} days
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-zinc-400 mb-1">P95 Scenario</div>
            <div className="text-lg font-semibold text-rose-400">
              {timeSeries[timeSeries.length - 1]?.p95} days
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          <p>
            <strong>Note:</strong> P50 represents median scenario outcomes; P95 represents stress-case scenarios. 
            Baseline assumes current trends continue.
          </p>
        </div>
      </div>
    </div>
  );
}
