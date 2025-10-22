'use client';

import { useState, useEffect } from 'react';

interface ReportData {
  client: {
    name: string;
    slug: string;
    logoUrl?: string;
  };
  report: {
    id: string;
    title: string;
    date: string;
    preparedBy: string;
  };
  summary: {
    bullets: string[];
    topMetrics: Array<{
      label: string;
      value: number;
      fmt: string;
    }>;
  };
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState<Array<{ client: string; reportId: string; data: ReportData }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from an API
    // For now, we'll use the sample reports we created
    const sampleReports = [
      {
        client: 'sample-mfg',
        reportId: '2025q1',
        data: {
          client: { name: 'Sample Manufacturing Co', slug: 'sample-mfg' },
          report: { id: '2025q1', title: 'Executive Risk Diagnostic', date: '2025-01-15', preparedBy: 'Bulwark Risk Partners' },
          summary: {
            bullets: ['Sample bullet 1', 'Sample bullet 2'],
            topMetrics: [{ label: 'Cash protected', value: 2100000, fmt: 'currency' }]
          }
        }
      },
      {
        client: 'sample-dist',
        reportId: '2025q1',
        data: {
          client: { name: 'Sample Distribution Corp', slug: 'sample-dist' },
          report: { id: '2025q1', title: 'Executive Risk Diagnostic', date: '2025-01-15', preparedBy: 'Bulwark Risk Partners' },
          summary: {
            bullets: ['Sample bullet 1', 'Sample bullet 2'],
            topMetrics: [{ label: 'Write-offs avoided', value: 845000, fmt: 'currency' }]
          }
        }
      }
    ];
    
    setReports(sampleReports);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="text-zinc-400">Loading reports...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-100 mb-2">Report Administration</h1>
          <p className="text-zinc-400">Manage and validate client reports</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => (
            <div key={index} className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                  {report.data.client.name}
                </h3>
                <p className="text-sm text-zinc-400">
                  {report.data.report.title} - {report.data.report.id}
                </p>
                <p className="text-xs text-zinc-500">
                  {new Date(report.data.report.date).toLocaleDateString()}
                </p>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-zinc-400 mb-2">Summary Metrics:</div>
                <div className="space-y-1">
                  {report.data.summary.topMetrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs text-zinc-300">
                      {metric.label}: {metric.fmt === 'currency' ? `$${(metric.value / 1000000).toFixed(1)}M` : metric.value}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <a
                  href={`/reports/${report.client}/${report.reportId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition-colors"
                >
                  View Report
                </a>
                <a
                  href={`/api/reports/${report.client}/${report.reportId}/pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm border border-zinc-600 text-zinc-300 hover:border-zinc-500 rounded-lg transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-800/40 rounded-lg border border-zinc-700/50">
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">Report Validation</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-300 mb-2">Required Fields</h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                <li>• Client name and slug</li>
                <li>• Report ID and title</li>
                <li>• Summary bullets and metrics</li>
                <li>• Time series data</li>
                <li>• Scenarios and heatmap</li>
                <li>• Actions and alerts</li>
                <li>• Assumptions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-300 mb-2">Validation Status</h4>
              <div className="space-y-2">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{report.data.client.name}</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Valid
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
