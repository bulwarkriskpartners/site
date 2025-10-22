interface Action {
  title: string;
  owner: string;
  threshold: string;
  expectedImpact: number;
  due: string;
  status: 'Not Started' | 'In Flight' | 'Done';
}

interface TopActionsProps {
  actions: Action[];
}

export default function TopActions({ actions }: TopActionsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'In Flight':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Not Started':
      default:
        return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  const formatCurrency = (value: number) => {
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
      <h3 className="text-xl font-semibold text-zinc-100/95 mb-6">Top 5 Priority Actions</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800/80">
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Action</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Owner</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Threshold</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Expected Impact</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Due Date</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((action, index) => (
              <tr key={index} className="border-b border-zinc-800/40">
                <td className="py-4 px-4">
                  <div className="font-medium text-zinc-100">{action.title}</div>
                </td>
                <td className="py-4 px-4 text-zinc-300">{action.owner}</td>
                <td className="py-4 px-4 text-zinc-300">{action.threshold}</td>
                <td className="py-4 px-4">
                  <span className="font-medium text-emerald-400">
                    {formatCurrency(action.expectedImpact)}
                  </span>
                </td>
                <td className="py-4 px-4 text-zinc-300">{formatDate(action.due)}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(action.status)}`}>
                    {action.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-xs text-zinc-500">
        <p>
          <strong>Legend:</strong> Actions are prioritized by impact and urgency. 
          Expected impact represents cash protection or margin improvement opportunities.
        </p>
      </div>
    </div>
  );
}
