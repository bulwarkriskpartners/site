'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

interface ReportData {
  timeSeries: {
    runwayDays: Array<{
      date: string;
      base: number;
      p50: number;
      p95: number;
    }>;
  };
}

interface CashRunwaySectionProps {
  data: ReportData;
}

export default function CashRunwaySection({ data }: CashRunwaySectionProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
  };

  const chartData = data.timeSeries.runwayDays.map(item => ({
    ...item,
    formattedDate: formatDate(item.date)
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Cash Runway Projections</h3>
        <p className="text-zinc-400 text-sm">
          Base case vs stress scenarios. P50 and P95 represent 50th and 95th percentile outcomes.
        </p>
      </div>
      
      <div className="bg-zinc-800/40 rounded-lg p-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="formattedDate" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#a1a1aa' }}
              domain={[0, 'dataMax + 10']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="base" 
              stroke="#71717a" 
              strokeWidth={3}
              name="Base Case"
              dot={{ fill: '#71717a', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="p50" 
              stroke="#10b981" 
              strokeWidth={3}
              name="P50 Scenario"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="p95" 
              stroke="#f59e0b" 
              strokeWidth={3}
              name="P95 Scenario"
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <div className="text-sm text-zinc-400 mb-1">Current Runway</div>
          <div className="text-xl font-bold text-zinc-100">
            {data.timeSeries.runwayDays[0]?.base || 0} days
          </div>
        </div>
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <div className="text-sm text-zinc-400 mb-1">P50 Scenario</div>
          <div className="text-xl font-bold text-emerald-400">
            {data.timeSeries.runwayDays[data.timeSeries.runwayDays.length - 1]?.p50 || 0} days
          </div>
        </div>
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <div className="text-sm text-zinc-400 mb-1">P95 Scenario</div>
          <div className="text-xl font-bold text-yellow-400">
            {data.timeSeries.runwayDays[data.timeSeries.runwayDays.length - 1]?.p95 || 0} days
          </div>
        </div>
      </div>
    </div>
  );
}
