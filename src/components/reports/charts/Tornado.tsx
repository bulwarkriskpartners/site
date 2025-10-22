'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface TornadoProps {
  data: Array<{
    name: string;
    negative: number;
    positive: number;
  }>;
  height?: number;
  className?: string;
}

export default function Tornado({ data, height = 200, className = '' }: TornadoProps) {
  // Transform data for tornado chart
  const tornadoData = data.map(item => ({
    name: item.name,
    value: Math.abs(item.negative),
    isNegative: true,
    originalValue: item.negative
  })).concat(data.map(item => ({
    name: item.name,
    value: Math.abs(item.positive),
    isNegative: false,
    originalValue: item.positive
  })));

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={tornadoData} 
          layout="horizontal"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis 
            type="category" 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
          />
          <Bar dataKey="value">
            {tornadoData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.isNegative ? '#ef4444' : '#10b981'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}