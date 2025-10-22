'use client';

import { useState, useEffect } from 'react';
import Watermark from './Watermark';
import Section from './Section';
import CoverSection from './sections/CoverSection';
import ExecutiveSummarySection from './sections/ExecutiveSummarySection';
import RiskHeatmapSection from './sections/RiskHeatmapSection';
import CashRunwaySection from './sections/CashRunwaySection';
import ScenariosSection from './sections/ScenariosSection';
import TopActionsSection from './sections/TopActionsSection';
import VendorConcentrationSection from './sections/VendorConcentrationSection';
import SlowSkuSection from './sections/SlowSkuSection';
import TariffFxSection from './sections/TariffFxSection';
import WasteSection from './sections/WasteSection';
import AlertsSection from './sections/AlertsSection';
import TimelineSection from './sections/TimelineSection';
import AppendixSection from './sections/AppendixSection';

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

interface ReportLayoutProps {
  data: ReportData;
}

const TOC_ITEMS = [
  { id: 'cover', label: 'Cover', section: false },
  { id: 'executive-summary', label: 'Executive Summary', section: true },
  { id: 'risk-heatmap', label: 'Risk Heatmap', section: true },
  { id: 'cash-runway', label: 'Cash Runway', section: true },
  { id: 'scenarios', label: 'Scenarios', section: true },
  { id: 'top-actions', label: 'Top-5 Actions', section: true },
  { id: 'vendor-concentration', label: 'Vendor Concentration', section: true },
  { id: 'slow-sku', label: 'Slow-SKU Drag', section: true },
  { id: 'tariff-fx', label: 'Tariffs/FX/Pass-through', section: true },
  { id: 'waste', label: 'Waste & Write-offs', section: true },
  { id: 'alerts', label: 'Alert Rules / Guardrails', section: true },
  { id: 'timeline', label: 'Implementation Timeline', section: true },
  { id: 'appendix', label: 'Appendix', section: true },
];

export default function ReportLayout({ data }: ReportLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showTOC, setShowTOC] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = TOC_ITEMS.filter(item => item.section).map(item => item.id);
      let current = '';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = sectionId;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Watermark */}
      <Watermark 
        clientName={data.client.name} 
        date={data.report.date} 
        position="background" 
      />
      
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowTOC(!showTOC)}
              className="lg:hidden text-zinc-400 hover:text-zinc-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-zinc-100">
              {data.client.name} — {data.report.title}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open(`/api/reports/${data.client.slug}/${data.report.id}/pdf`, '_blank')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Table of Contents */}
        <aside className={`fixed lg:sticky lg:top-20 top-16 left-0 z-40 w-[240px] h-screen bg-zinc-900/95 backdrop-blur-sm border-r border-zinc-800/80 transform transition-transform duration-300 ${
          showTOC ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-zinc-100 mb-4">Contents</h2>
            <nav className="space-y-1">
              {TOC_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.section) {
                      scrollToSection(item.id);
                    }
                    setShowTOC(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === item.id && item.section
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-[240px] pt-16">
          <div className="mx-auto w-full max-w-[900px] px-6 sm:px-8 py-8">
            {/* Report Cover with Skyline */}
            <section className="relative rounded-2xl overflow-hidden mb-8">
              <img src="/hero.jpg" className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold text-white">Executive Risk Diagnostic</h1>
                  <p className="text-zinc-200/85">{data.client.name} · {new Date(data.report.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · Private & Confidential</p>
                </div>
              </div>
            </section>
            
            {/* Cover - Hidden since we have skyline cover above */}
            {/* <CoverSection data={data} /> */}
            
            {/* Report Sections */}
            <Section id="executive-summary" title="Executive Summary">
              <ExecutiveSummarySection data={data} />
            </Section>

            <Section id="risk-heatmap" title="Risk Heatmap">
              <RiskHeatmapSection data={data} />
            </Section>

            <Section id="cash-runway" title="Cash Runway">
              <CashRunwaySection data={data} />
            </Section>

            <Section id="scenarios" title="Scenarios">
              <ScenariosSection data={data} />
            </Section>

            <Section id="top-actions" title="Top-5 Actions">
              <TopActionsSection data={data} />
            </Section>

            <Section id="vendor-concentration" title="Vendor Concentration">
              <VendorConcentrationSection data={data} />
            </Section>

            <Section id="slow-sku" title="Slow-SKU Drag">
              <SlowSkuSection data={data} />
            </Section>

            <Section id="tariff-fx" title="Tariffs/FX/Pass-through">
              <TariffFxSection data={data} />
            </Section>

            <Section id="waste" title="Waste & Write-offs">
              <WasteSection data={data} />
            </Section>

            <Section id="alerts" title="Alert Rules / Guardrails">
              <AlertsSection data={data} />
            </Section>

            <Section id="timeline" title="Implementation Timeline">
              <TimelineSection data={data} />
            </Section>

            <Section id="appendix" title="Appendix">
              <AppendixSection data={data} />
            </Section>
          </div>
        </main>
      </div>

      {/* Mobile TOC Overlay */}
      {showTOC && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setShowTOC(false)}
        />
      )}
    </div>
  );
}