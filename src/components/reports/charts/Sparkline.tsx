'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface SparklineProps {
  data: Array<{
    date: string;
    base: number;
    p50: number;
    p95: number;
  }>;
  height?: number;
  className?: string;
}

export default function Sparkline({ data, height = 48, className = '' }: SparklineProps) {
  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="date" 
            hide 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            hide 
            axisLine={false}
            tickLine={false}
          />
          <Line 
            type="monotone" 
            dataKey="base" 
            stroke="#71717a" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="p50" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="p95" 
            stroke="#f59e0b" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}