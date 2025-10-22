'use client';

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

interface TopActionsSectionProps {
  data: ReportData;
}

export default function TopActionsSection({ data }: TopActionsSectionProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Not Started':
        return 'bg-zinc-600 text-zinc-300';
      case 'In Flight':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'Done':
        return 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
      default:
        return 'bg-zinc-600 text-zinc-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Priority Actions</h3>
        <p className="text-zinc-400 text-sm">
          Top-5 actions with owners, thresholds, and expected impact. Status tracked for implementation.
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Action</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Owner</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Threshold</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-zinc-300">Expected Impact</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Due Date</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-zinc-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.actions.map((action, index) => (
              <tr key={index} className="border-b border-zinc-800/50">
                <td className="py-3 px-4 text-sm text-zinc-200">{action.title}</td>
                <td className="py-3 px-4 text-sm text-zinc-400">{action.owner}</td>
                <td className="py-3 px-4 text-sm text-zinc-400">{action.threshold}</td>
                <td className="py-3 px-4 text-sm text-right font-medium text-emerald-400">
                  ${(action.expectedImpact / 1000).toFixed(0)}k
                </td>
                <td className="py-3 px-4 text-sm text-zinc-400">
                  {new Date(action.due).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(action.status)}`}>
                    {action.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-zinc-800/40 rounded-lg">
        <div className="text-sm text-zinc-400">
          <strong className="text-zinc-300">Total Expected Impact:</strong>{' '}
          <span className="text-emerald-400 font-medium">
            ${(data.actions.reduce((sum, action) => sum + action.expectedImpact, 0) / 1000000).toFixed(1)}M
          </span>
        </div>
      </div>
    </div>
  );
}
