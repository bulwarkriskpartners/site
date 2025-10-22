'use client';

import Tornado from '../charts/Tornado';

interface ReportData {
  scenarios: Array<{
    name: string;
    gmBpsImpact: number;
    cashImpact: number;
    drivers: Array<{
      label: string;
      impact: number;
    }>;
  }>;
}

interface ScenariosSectionProps {
  data: ReportData;
}

export default function ScenariosSection({ data }: ScenariosSectionProps) {
  // Transform scenarios data for tornado chart
  const tornadoData = data.scenarios.map(scenario => ({
    name: scenario.name,
    negative: scenario.gmBpsImpact < 0 ? scenario.gmBpsImpact : 0,
    positive: scenario.gmBpsImpact > 0 ? scenario.gmBpsImpact : 0,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Scenario Analysis</h3>
        <p className="text-zinc-400 text-sm">
          P50/P95 scenarios showing GM impact and key drivers. Tornado chart shows sensitivity analysis.
        </p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {data.scenarios.map((scenario, index) => (
            <div key={index} className="p-4 bg-zinc-800/40 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-zinc-100">{scenario.name} Scenario</h4>
                <div className="text-right">
                  <div className={`text-lg font-bold ${scenario.gmBpsImpact >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {scenario.gmBpsImpact > 0 ? '+' : ''}{scenario.gmBpsImpact} bps
                  </div>
                  <div className="text-sm text-zinc-400">
                    ${(scenario.cashImpact / 1000000).toFixed(1)}M cash impact
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {scenario.drivers.map((driver, driverIndex) => (
                  <div key={driverIndex} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{driver.label}</span>
                    <span className="text-zinc-300">{(driver.impact * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-zinc-800/40 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-zinc-100 mb-4">Sensitivity Analysis</h4>
          <Tornado data={tornadoData} height={250} />
        </div>
      </div>
    </div>
  );
}
