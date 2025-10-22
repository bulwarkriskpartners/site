import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import ReportLayout from '@/components/reports/ReportLayout';

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

export async function generateStaticParams() {
  const reportsDir = path.join(process.cwd(), 'data', 'reports');
  const params: Array<{ client: string; reportId: string }> = [];
  
  try {
    const clients = fs.readdirSync(reportsDir);
    for (const client of clients) {
      const clientDir = path.join(reportsDir, client);
      if (fs.statSync(clientDir).isDirectory()) {
        const reports = fs.readdirSync(clientDir).filter(file => file.endsWith('.json'));
        for (const report of reports) {
          params.push({
            client,
            reportId: report.replace('.json', '')
          });
        }
      }
    }
  } catch (error) {
    console.error('Error generating static params:', error);
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ client: string; reportId: string }> }) {
  const { client, reportId } = await params;
  
  try {
    const reportPath = path.join(process.cwd(), 'data', 'reports', client, `${reportId}.json`);
    const reportData: ReportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    return {
      title: `${reportData.report.title} - ${reportData.client.name} | Bulwark Risk Partners`,
      description: `Executive risk diagnostic report for ${reportData.client.name} prepared by Bulwark Risk Partners.`,
      robots: {
        index: client.startsWith('sample') ? true : false,
        follow: client.startsWith('sample') ? true : false,
      },
    };
  } catch (error) {
    return {
      title: 'Report Not Found | Bulwark Risk Partners',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ReportPage({ params }: { params: Promise<{ client: string; reportId: string }> }) {
  const { client, reportId } = await params;
  
  let reportData: ReportData;
  
  try {
    const reportPath = path.join(process.cwd(), 'data', 'reports', client, `${reportId}.json`);
    reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  } catch (error) {
    notFound();
  }
  
  // Set noindex headers for private reports
  if (!client.startsWith('sample')) {
    // This would be handled by middleware in production
  }
  
  return <ReportLayout data={reportData} />;
}
