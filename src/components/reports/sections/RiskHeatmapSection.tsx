'use client';

import Heatmap from '../charts/Heatmap';

interface ReportData {
  heatmap: {
    rows: string[];
    cols: string[];
    scores: number[][];
  };
}

interface RiskHeatmapSectionProps {
  data: ReportData;
}

export default function RiskHeatmapSection({ data }: RiskHeatmapSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Risk Exposure Matrix</h3>
        <p className="text-zinc-400 text-sm">
          Risk scores by vendor-SKU combination. Higher scores indicate greater concentration risk.
        </p>
      </div>
      
      <div className="bg-zinc-800/40 rounded-lg p-6">
        <Heatmap 
          rows={data.heatmap.rows}
          cols={data.heatmap.cols}
          scores={data.heatmap.scores}
          height={300}
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-red-500 rounded"></div>
          <span className="text-zinc-400">High (80%+)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-orange-400 rounded"></div>
          <span className="text-zinc-400">Medium-High (60-80%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-yellow-400 rounded"></div>
          <span className="text-zinc-400">Medium (40-60%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-green-400 rounded"></div>
          <span className="text-zinc-400">Low (&lt;40%)</span>
        </div>
      </div>
    </div>
  );
}
