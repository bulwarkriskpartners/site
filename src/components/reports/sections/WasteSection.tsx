'use client';

import Waterfall from '../charts/Waterfall';

interface ReportData {
  actions: Array<{
    title: string;
    owner: string;
    threshold: string;
    expectedImpact: number;
    due: string;
    status: string;
  }>;
}

interface WasteSectionProps {
  data: ReportData;
}

export default function WasteSection({ data }: WasteSectionProps) {
  // Mock waterfall data - in real implementation, this would come from the report data
  const waterfallData = [
    { name: 'Before', value: 1200000, type: 'base' },
    { name: 'SKU Rationalization', value: 240000, type: 'positive' },
    { name: 'Inventory Optimization', value: 180000, type: 'positive' },
    { name: 'Write-off Prevention', value: 320000, type: 'positive' },
    { name: 'After', value: 2060000, type: 'total' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Waste & Write-offs Analysis</h3>
        <p className="text-zinc-400 text-sm">
          Waterfall chart showing waste reduction and write-off prevention impact.
        </p>
      </div>
      
      <div className="bg-zinc-800/40 rounded-lg p-6">
        <Waterfall data={waterfallData} height={250} />
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 bg-zinc-800/40 rounded-lg text-center">
          <div className="text-2xl font-bold text-zinc-300 mb-1">$1.2M</div>
          <div className="text-sm text-zinc-400">Baseline Waste</div>
        </div>
        <div className="p-4 bg-zinc-800/40 rounded-lg text-center">
          <div className="text-2xl font-bold text-emerald-400 mb-1">+$860k</div>
          <div className="text-sm text-zinc-400">Improvements</div>
        </div>
        <div className="p-4 bg-zinc-800/40 rounded-lg text-center">
          <div className="text-2xl font-bold text-zinc-100 mb-1">$2.1M</div>
          <div className="text-sm text-zinc-400">Final Value</div>
        </div>
      </div>
    </div>
  );
}
