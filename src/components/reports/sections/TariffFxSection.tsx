'use client';

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

interface TariffFxSectionProps {
  data: ReportData;
}

export default function TariffFxSection({ data }: TariffFxSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Tariff & FX Impact Analysis</h3>
        <p className="text-zinc-400 text-sm">
          Contribution to GM bps from tariff and FX exposure. Scenario analysis shows sensitivity.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <h4 className="font-semibold text-zinc-100 mb-3">P50 Scenario</h4>
          <div className="space-y-2">
            {data.scenarios[0]?.drivers.filter(d => d.label.includes('Tariff') || d.label.includes('FX')).map((driver, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">{driver.label}</span>
                <span className="text-zinc-300">{(driver.impact * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-zinc-800/40 rounded-lg">
          <h4 className="font-semibold text-zinc-100 mb-3">P95 Scenario</h4>
          <div className="space-y-2">
            {data.scenarios[1]?.drivers.filter(d => d.label.includes('Tariff') || d.label.includes('FX')).map((driver, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">{driver.label}</span>
                <span className="text-zinc-300">{(driver.impact * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
