'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Line, LineChart, ComposedChart } from 'recharts';

interface ParetoBarsProps {
  data: Array<{
    name: string;
    value: number;
    cumulative?: number;
  }>;
  height?: number;
  className?: string;
}

export default function ParetoBars({ data, height = 200, className = '' }: ParetoBarsProps) {
  // Calculate cumulative percentages
  const dataWithCumulative = data.map((item, index) => ({
    ...item,
    cumulative: data.slice(0, index + 1).reduce((sum, d) => sum + d.value, 0) / data.reduce((sum, d) => sum + d.value, 0) * 100
  }));

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={dataWithCumulative}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
          />
          <YAxis 
            yAxisId="bars"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
          />
          <YAxis 
            yAxisId="line"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#a1a1aa' }}
            domain={[0, 100]}
          />
          <Bar 
            yAxisId="bars"
            dataKey="value" 
            fill="#10b981" 
            radius={[2, 2, 0, 0]}
          />
          <Line 
            yAxisId="line"
            type="monotone" 
            dataKey="cumulative" 
            stroke="#f59e0b" 
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}