'use client';

import ParetoBars from '../charts/ParetoBars';

interface ReportData {
  skus: Array<{
    name: string;
    revenueShare: number;
    reorderDays: number;
    slowMover: boolean;
  }>;
}

interface SlowSkuSectionProps {
  data: ReportData;
}

export default function SlowSkuSection({ data }: SlowSkuSectionProps) {
  const paretoData = data.skus.map(sku => ({
    name: sku.name,
    value: sku.revenueShare * 100
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Slow-SKU Analysis</h3>
        <p className="text-zinc-400 text-sm">
          Revenue distribution and reorder patterns. Identifies slow-moving inventory opportunities.
        </p>
      </div>
      
      <div className="bg-zinc-800/40 rounded-lg p-6">
        <ParetoBars data={paretoData} height={250} />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">SKU</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-zinc-300">Revenue Share</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-zinc-300">Reorder Days</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-zinc-300">Slow Mover</th>
            </tr>
          </thead>
          <tbody>
            {data.skus.map((sku, index) => (
              <tr key={index} className="border-b border-zinc-800/50">
                <td className="py-3 px-4 text-sm text-zinc-200">{sku.name}</td>
                <td className="py-3 px-4 text-sm text-right text-zinc-300">
                  {(sku.revenueShare * 100).toFixed(1)}%
                </td>
                <td className="py-3 px-4 text-sm text-right text-zinc-300">{sku.reorderDays}</td>
                <td className="py-3 px-4 text-center">
                  {sku.slowMover ? (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-400">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                      No
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
