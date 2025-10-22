'use client';

interface ReportData {
  assumptions: string[];
}

interface AppendixSectionProps {
  data: ReportData;
}

export default function AppendixSection({ data }: AppendixSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Methodology & Assumptions</h3>
        <p className="text-zinc-400 text-sm">
          Data sources, modeling assumptions, and calculation methodologies.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <h4 className="font-semibold text-zinc-100 mb-3">Key Assumptions</h4>
          <ul className="space-y-2">
            {data.assumptions.map((assumption, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <span className="text-zinc-300 text-sm">{assumption}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <h4 className="font-semibold text-zinc-100 mb-3">Data Dictionary</h4>
          <div className="grid gap-3 md:grid-cols-2 text-sm">
            <div>
              <div className="font-medium text-zinc-200">P50/P95 Scenarios</div>
              <div className="text-zinc-400">50th and 95th percentile outcomes from Monte Carlo simulation</div>
            </div>
            <div>
              <div className="font-medium text-zinc-200">Risk Score</div>
              <div className="text-zinc-400">Probability × Impact × Detectability (0-1 scale)</div>
            </div>
            <div>
              <div className="font-medium text-zinc-200">Cash Runway</div>
              <div className="text-zinc-400">Days of cash remaining at current burn rate</div>
            </div>
            <div>
              <div className="font-medium text-zinc-200">GM Impact</div>
              <div className="text-zinc-400">Gross margin basis points (100 bps = 1%)</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <h4 className="font-semibold text-zinc-100 mb-3">Disclaimer</h4>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This report is Private & Confidential, prepared exclusively for the client by Bulwark Risk Partners. 
            No redistribution without written consent. Operational risk advisory—not investment advice. 
            All projections and scenarios are based on current data and assumptions and may change with market conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
