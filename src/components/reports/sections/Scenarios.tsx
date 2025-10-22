import Tornado from '../charts/Tornado';
import StatTile from '../StatTile';

interface Scenario {
  name: string;
  gmBpsImpact: number;
  cashImpact: number;
  drivers: Array<{
    label: string;
    impact: number;
  }>;
}

interface ScenariosProps {
  scenarios: Scenario[];
}

export default function Scenarios({ scenarios }: ScenariosProps) {
  const tornadoData = scenarios.map(scenario => ({
    name: scenario.name,
    negative: Math.min(scenario.gmBpsImpact, 0),
    positive: Math.max(scenario.gmBpsImpact, 0)
  }));

  return (
    <div className="space-y-8">
      {/* Scenario Impact Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        {scenarios.map((scenario, index) => (
          <div key={index} className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <h4 className="text-lg font-semibold text-zinc-100/95 mb-4">{scenario.name} Scenario</h4>
            
            <div className="grid gap-4 mb-4">
              <StatTile
                label="GM Impact"
                value={scenario.gmBpsImpact}
                format="bps"
              />
              <StatTile
                label="Cash Impact"
                value={scenario.cashImpact}
                format="currency"
              />
            </div>

            <div className="text-sm text-zinc-400">
              <div className="font-medium mb-2">Key Drivers:</div>
              <ul className="space-y-1">
                {scenario.drivers.map((driver, driverIndex) => (
                  <li key={driverIndex} className="flex justify-between">
                    <span>{driver.label}</span>
                    <span className="font-medium">{(driver.impact * 100).toFixed(0)}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Tornado Chart */}
      <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
        <h3 className="text-xl font-semibold text-zinc-100/95 mb-6">Scenario Sensitivity Analysis</h3>
        <Tornado data={tornadoData} />
        <div className="mt-4 text-xs text-zinc-500">
          <p>
            <strong>Interpretation:</strong> Shows how gross margin (bps) responds to different scenario assumptions. 
            Negative values indicate margin compression; positive values indicate margin expansion.
          </p>
        </div>
      </div>
    </div>
  );
}
