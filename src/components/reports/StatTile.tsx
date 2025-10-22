interface StatTileProps {
  label: string;
  value: string | number;
  delta?: {
    value: number;
    isPositive: boolean;
  };
  tooltip?: string;
  format?: 'currency' | 'percentage' | 'days' | 'bps' | 'number';
}

export default function StatTile({ label, value, delta, tooltip, format = 'number' }: StatTileProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'string') return val;
    
    switch (format) {
      case 'currency':
        return `$${(val / 1000000).toFixed(1)}M`;
      case 'percentage':
        return `${val}%`;
      case 'days':
        return `${val} days`;
      case 'bps':
        return `${val} bps`;
      case 'number':
      default:
        return val.toLocaleString();
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
      <div className="text-center">
        <div className="text-2xl font-bold text-zinc-100/95 mb-2">
          {formatValue(value)}
        </div>
        <div className="text-sm text-zinc-400 mb-2">
          {label}
        </div>
        {delta && (
          <div className={`text-xs font-medium ${
            delta.isPositive ? 'text-emerald-400' : 'text-rose-400'
          }`}>
            {delta.isPositive ? '+' : ''}{delta.value}
            {format === 'currency' ? 'M' : format === 'bps' ? ' bps' : ''}
          </div>
        )}
        {tooltip && (
          <div className="text-xs text-zinc-500 mt-1">
            {tooltip}
          </div>
        )}
      </div>
    </div>
  );
}
