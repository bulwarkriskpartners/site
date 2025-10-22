'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface BeforeAfterBarsProps {
  data: Array<{
    name: string;
    before: number;
    after: number;
    delta: number;
  }>;
  height?: number;
  className?: string;
}

export default function BeforeAfterBars({ data, height = 200, className = '' }: BeforeAfterBarsProps) {
  const chartData = data.flatMap(item => [
    { name: `${item.name} (Before)`, value: item.before, type: 'before' },
    { name: `${item.name} (After)`, value: item.after, type: 'after' }
  ]);

  const getBarColor = (type: string) => {
    return type === 'before' ? '#71717a' : '#10b981';
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
          />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Delta indicators */}
      <div className="mt-4 grid gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">{item.name}</span>
            <span className={`font-medium ${item.delta >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.delta >= 0 ? '+' : ''}{item.delta.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}