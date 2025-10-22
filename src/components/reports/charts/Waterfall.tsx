'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface WaterfallProps {
  data: Array<{
    name: string;
    value: number;
    type: 'base' | 'positive' | 'negative' | 'total';
  }>;
  height?: number;
  className?: string;
}

export default function Waterfall({ data, height = 200, className = '' }: WaterfallProps) {
  const getBarColor = (type: string) => {
    switch (type) {
      case 'base':
        return '#71717a';
      case 'positive':
        return '#10b981';
      case 'negative':
        return '#ef4444';
      case 'total':
        return '#3b82f6';
      default:
        return '#71717a';
    }
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}