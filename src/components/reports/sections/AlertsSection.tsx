'use client';

interface ReportData {
  alerts: Array<{
    metric: string;
    rule: string;
    owner: string;
    escalation: string;
  }>;
}

interface AlertsSectionProps {
  data: ReportData;
}

export default function AlertsSection({ data }: AlertsSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Alert Rules & Guardrails</h3>
        <p className="text-zinc-400 text-sm">
          Automated thresholds and escalation paths for key risk metrics.
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Metric</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Rule</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Owner</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Escalation</th>
            </tr>
          </thead>
          <tbody>
            {data.alerts.map((alert, index) => (
              <tr key={index} className="border-b border-zinc-800/50">
                <td className="py-3 px-4 text-sm text-zinc-200 font-medium">{alert.metric}</td>
                <td className="py-3 px-4 text-sm text-zinc-300">{alert.rule}</td>
                <td className="py-3 px-4 text-sm text-zinc-400">{alert.owner}</td>
                <td className="py-3 px-4 text-sm text-zinc-400">{alert.escalation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
