import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

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
  timeSeries: {
    runwayDays: Array<{
      date: string;
      base: number;
      p50: number;
      p95: number;
    }>;
  };
  scenarios: Array<{
    name: string;
    gmBpsImpact: number;
    cashImpact: number;
    drivers: Array<{
      label: string;
      impact: number;
    }>;
  }>;
  heatmap: {
    rows: string[];
    cols: string[];
    scores: number[][];
  };
  vendors: Array<{
    name: string;
    spendShare: number;
    altSuppliers: number;
    riskScore: number;
  }>;
  skus: Array<{
    name: string;
    revenueShare: number;
    reorderDays: number;
    slowMover: boolean;
  }>;
  actions: Array<{
    title: string;
    owner: string;
    threshold: string;
    expectedImpact: number;
    due: string;
    status: string;
  }>;
  alerts: Array<{
    metric: string;
    rule: string;
    owner: string;
    escalation: string;
  }>;
  assumptions: string[];
}

export default async function PrintPage({ params }: { params: Promise<{ client: string; reportId: string }> }) {
  const { client, reportId } = await params;
  
  let reportData: ReportData;
  
  try {
    const reportPath = path.join(process.cwd(), 'data', 'reports', client, `${reportId}.json`);
    reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  } catch (error) {
    notFound();
  }

  const formatValue = (value: number, fmt: string) => {
    switch (fmt) {
      case 'currency':
        return `$${(value / 1000000).toFixed(1)}M`;
      case 'bps':
        return `${value} bps`;
      case 'percent':
        return `${value}%`;
      case 'days':
        return `+${value} days`;
      default:
        return value.toString();
    }
  };

  return (
    <html>
      <head>
        <title>{reportData.report.title} - {reportData.client.name}</title>
        <style dangerouslySetInnerHTML={{
          __html: `
          @page { 
            size: Letter; 
            margin: 0.5in; 
          }
          * { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          .slide { 
            page-break-after: always; 
            min-height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .slide:last-child { 
            page-break-after: avoid; 
          }
          .print-cover {
            background: url('/hero.jpg') center/cover no-repeat;
            color: white;
            text-align: center;
          }
          .print-watermark {
            position: fixed; 
            inset: 0;
            background-image: repeating-linear-gradient(-35deg, rgba(255,255,255,.03) 0 20px, transparent 20px 60px);
            pointer-events: none;
          }
          .print-footer {
            position: fixed; 
            bottom: .3in; 
            left: .5in; 
            right: .5in;
            display: flex; 
            justify-content: space-between; 
            font-size: 11px; 
            color: rgba(255,255,255,.65);
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            color: #f4f4f5;
            margin: 0;
            padding: 0;
          }
          .slide {
            padding: 2rem;
            background: #18181b;
            border: 1px solid #3f3f46;
          }
          h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
          h2 { font-size: 2rem; font-weight: 600; margin-bottom: 1.5rem; }
          h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; }
          .metric { 
            display: inline-block; 
            padding: 1rem 2rem; 
            background: #27272a; 
            border: 1px solid #3f3f46; 
            margin: 0.5rem;
            text-align: center;
          }
          .metric-value { 
            font-size: 2rem; 
            font-weight: 700; 
            color: #10b981; 
          }
          .metric-label { 
            font-size: 0.875rem; 
            color: #a1a1aa; 
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 1rem 0; 
          }
          th, td { 
            border: 1px solid #3f3f46; 
            padding: 0.75rem; 
            text-align: left; 
          }
          th { 
            background: #27272a; 
            font-weight: 600; 
          }
          .bullet { 
            margin: 0.5rem 0; 
            padding-left: 1rem; 
          }
        `}} />
      </head>
      <body>
        <div className="print-watermark"></div>
        
        {/* Slide 1: Cover */}
        <div className="slide print-cover">
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Bulwark Risk Partners</h1>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{reportData.report.title}</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>{reportData.client.name} · {new Date(reportData.report.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>Private & Confidential</span>
              <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '1rem' }}>Prepared by {reportData.report.preparedBy}</span>
            </div>
          </div>
        </div>

        {/* Slide 2: Executive Summary */}
        <div className="slide">
          <h2>Executive Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
            {reportData.summary.topMetrics.map((metric, index) => (
              <div key={index} className="metric">
                <div className="metric-value">{formatValue(metric.value, metric.fmt)}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          <div>
            <h3>Key Findings</h3>
            {reportData.summary.bullets.map((bullet, index) => (
              <div key={index} className="bullet">• {bullet}</div>
            ))}
          </div>
        </div>

        {/* Slide 3: Cash Runway */}
        <div className="slide">
          <h2>Cash Runway Projections</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
            <div className="metric">
              <div className="metric-value">{reportData.timeSeries.runwayDays[0]?.base || 0} days</div>
              <div className="metric-label">Current Runway</div>
            </div>
            <div className="metric">
              <div className="metric-value" style={{ color: '#10b981' }}>{reportData.timeSeries.runwayDays[reportData.timeSeries.runwayDays.length - 1]?.p50 || 0} days</div>
              <div className="metric-label">P50 Scenario</div>
            </div>
            <div className="metric">
              <div className="metric-value" style={{ color: '#f59e0b' }}>{reportData.timeSeries.runwayDays[reportData.timeSeries.runwayDays.length - 1]?.p95 || 0} days</div>
              <div className="metric-label">P95 Scenario</div>
            </div>
          </div>
          <p>Base case vs stress scenarios. P50 and P95 represent 50th and 95th percentile outcomes.</p>
        </div>

        {/* Slide 4: Scenarios */}
        <div className="slide">
          <h2>Scenario Sensitivities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {reportData.scenarios.map((scenario, index) => (
              <div key={index} style={{ padding: '1rem', background: '#27272a', border: '1px solid #3f3f46' }}>
                <h3>{scenario.name} Scenario</h3>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: scenario.gmBpsImpact >= 0 ? '#10b981' : '#ef4444' }}>
                  {scenario.gmBpsImpact > 0 ? '+' : ''}{scenario.gmBpsImpact} bps
                </div>
                <div style={{ color: '#a1a1aa' }}>
                  ${(scenario.cashImpact / 1000000).toFixed(1)}M cash impact
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 5: Risk Heatmap */}
        <div className="slide">
          <h2>Risk Heatmap</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                {reportData.heatmap.cols.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportData.heatmap.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <th>{row}</th>
                  {reportData.heatmap.cols.map((_, colIndex) => {
                    const score = reportData.heatmap.scores[rowIndex][colIndex];
                    const getColor = (score: number) => {
                      if (score >= 0.8) return '#ef4444';
                      if (score >= 0.6) return '#f97316';
                      if (score >= 0.4) return '#eab308';
                      if (score >= 0.2) return '#22c55e';
                      return '#16a34a';
                    };
                    return (
                      <td key={colIndex} style={{ backgroundColor: getColor(score), color: 'white', textAlign: 'center' }}>
                        {(score * 100).toFixed(0)}%
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide 6: Vendor Concentration */}
        <div className="slide">
          <h2>Vendor Concentration</h2>
          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Spend Share</th>
                <th>Alt Suppliers</th>
                <th>Risk Score</th>
              </tr>
            </thead>
            <tbody>
              {reportData.vendors.map((vendor, index) => (
                <tr key={index}>
                  <td>{vendor.name}</td>
                  <td>{(vendor.spendShare * 100).toFixed(1)}%</td>
                  <td>{vendor.altSuppliers}</td>
                  <td style={{ color: vendor.riskScore > 0.7 ? '#ef4444' : vendor.riskScore > 0.5 ? '#f59e0b' : '#22c55e' }}>
                    {(vendor.riskScore * 100).toFixed(0)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide 7: Slow-SKU Analysis */}
        <div className="slide">
          <h2>Slow-SKU Analysis</h2>
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Revenue Share</th>
                <th>Reorder Days</th>
                <th>Slow Mover</th>
              </tr>
            </thead>
            <tbody>
              {reportData.skus.map((sku, index) => (
                <tr key={index}>
                  <td>{sku.name}</td>
                  <td>{(sku.revenueShare * 100).toFixed(1)}%</td>
                  <td>{sku.reorderDays}</td>
                  <td style={{ color: sku.slowMover ? '#ef4444' : '#22c55e' }}>
                    {sku.slowMover ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide 8: Tariff/FX Pass-through */}
        <div className="slide">
          <h2>Tariff/FX Pass-through Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {reportData.scenarios.map((scenario, index) => (
              <div key={index} style={{ padding: '1rem', background: '#27272a', border: '1px solid #3f3f46' }}>
                <h3>{scenario.name} Scenario</h3>
                <div>
                  {scenario.drivers.filter(d => d.label.includes('Tariff') || d.label.includes('FX')).map((driver, driverIndex) => (
                    <div key={driverIndex} style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
                      <span>{driver.label}</span>
                      <span>{(driver.impact * 100).toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 9: Waste & Write-offs */}
        <div className="slide">
          <h2>Waste & Write-offs Analysis</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0' }}>
            <div className="metric">
              <div className="metric-value">$1.2M</div>
              <div className="metric-label">Baseline Waste</div>
            </div>
            <div className="metric">
              <div className="metric-value" style={{ color: '#10b981' }}>+$860k</div>
              <div className="metric-label">Improvements</div>
            </div>
            <div className="metric">
              <div className="metric-value">$2.1M</div>
              <div className="metric-label">Final Value</div>
            </div>
          </div>
          <p>Waterfall showing waste reduction and write-off prevention impact.</p>
        </div>

        {/* Slide 10: Top-5 Actions */}
        <div className="slide">
          <h2>Top-5 Actions</h2>
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Owner</th>
                <th>Threshold</th>
                <th>Expected Impact</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reportData.actions.map((action, index) => (
                <tr key={index}>
                  <td>{action.title}</td>
                  <td>{action.owner}</td>
                  <td>{action.threshold}</td>
                  <td style={{ color: '#10b981', fontWeight: '600' }}>${(action.expectedImpact / 1000).toFixed(0)}k</td>
                  <td>{new Date(action.due).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                  <td>{action.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide 11: Guardrails & Alerts */}
        <div className="slide">
          <h2>Guardrails & Alerts</h2>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Rule</th>
                <th>Owner</th>
                <th>Escalation</th>
              </tr>
            </thead>
            <tbody>
              {reportData.alerts.map((alert, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: '600' }}>{alert.metric}</td>
                  <td>{alert.rule}</td>
                  <td>{alert.owner}</td>
                  <td>{alert.escalation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slide 12: 30/60/90 Plan */}
        <div className="slide">
          <h2>30/60/90 Implementation Plan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            {reportData.actions.map((action, index) => {
              const dueDate = new Date(action.due);
              const now = new Date();
              const daysUntil = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
              const getTimeframe = (days: number) => {
                if (days <= 30) return '30 days';
                if (days <= 60) return '60 days';
                return '90 days';
              };
              const getStatusColor = (status: string) => {
                switch (status) {
                  case 'Done': return '#22c55e';
                  case 'In Flight': return '#eab308';
                  default: return '#6b7280';
                }
              };
              
              return (
                <div key={index} style={{ padding: '1rem', background: '#27272a', border: '1px solid #3f3f46' }}>
                  <div style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '0.5rem' }}>
                    {getTimeframe(daysUntil)}
                  </div>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{action.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '0.5rem' }}>
                    Owner: {action.owner}
                  </div>
                  <div style={{ color: getStatusColor(action.status), fontSize: '0.875rem' }}>
                    {action.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="print-footer">
          <span>{reportData.client.name} — {reportData.report.title}</span>
          <span>Page 1 of 12</span>
        </div>
      </body>
    </html>
  );
}
