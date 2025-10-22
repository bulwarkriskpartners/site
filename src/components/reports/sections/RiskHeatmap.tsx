import Heatmap from '../charts/Heatmap';

interface RiskHeatmapProps {
  rows: string[];
  cols: string[];
  scores: number[][];
}

export default function RiskHeatmap({ rows, cols, scores }: RiskHeatmapProps) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-zinc-100/95 mb-2">Risk Exposure Matrix</h3>
        <p className="text-zinc-400 text-sm">
          Risk scores calculated as Probability × Impact × Detectability (0-1 scale)
        </p>
      </div>
      
      <Heatmap rows={rows} cols={cols} scores={scores} />
      
      <div className="mt-6 text-xs text-zinc-500">
        <p>
          <strong>Interpretation:</strong> Higher scores indicate greater risk exposure. 
          Red zones require immediate attention; yellow zones need monitoring.
        </p>
      </div>
    </div>
  );
}
