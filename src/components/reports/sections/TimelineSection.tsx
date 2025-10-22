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

interface TimelineSectionProps {
  data: ReportData;
}

export default function TimelineSection({ data }: TimelineSectionProps) {
  const now = new Date();
  const actionsWithDates = data.actions.map(action => ({
    ...action,
    dueDate: new Date(action.due)
  })).sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const getTimelineStatus = (dueDate: Date, status: string) => {
    if (status === 'Done') return 'completed';
    if (dueDate < now) return 'overdue';
    if (dueDate.getTime() - now.getTime() < 30 * 24 * 60 * 60 * 1000) return 'urgent';
    return 'upcoming';
  };

  const getStatusColor = (timelineStatus: string) => {
    switch (timelineStatus) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'overdue':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'urgent':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Implementation Timeline</h3>
        <p className="text-zinc-400 text-sm">
          30/60/90 day implementation roadmap with status tracking.
        </p>
      </div>
      
      <div className="space-y-4">
        {actionsWithDates.map((action, index) => {
          const timelineStatus = getTimelineStatus(action.dueDate, action.status);
          return (
            <div key={index} className={`p-4 rounded-lg border ${getStatusColor(timelineStatus)}`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-zinc-100">{action.title}</h4>
                <div className="text-sm text-zinc-400">
                  Due: {action.dueDate.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
              <div className="grid gap-2 md:grid-cols-3 text-sm">
                <div><span className="text-zinc-400">Owner:</span> {action.owner}</div>
                <div><span className="text-zinc-400">Impact:</span> ${(action.expectedImpact / 1000).toFixed(0)}k</div>
                <div><span className="text-zinc-400">Status:</span> {action.status}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
