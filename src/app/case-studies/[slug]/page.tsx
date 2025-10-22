'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';
import { getCaseStudy } from '@/lib/caseStudies';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';
import { ChartTheme } from '@/components/charts/ChartTheme';
import { analytics } from '@/lib/analytics';

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const caseStudy = getCaseStudy(slug);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickLead, setShowQuickLead] = useState(false);
  const [canDownloadPDF, setCanDownloadPDF] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user has submitted a lead
    const hasLead = localStorage.getItem('bulwark_lead_submitted');
    setCanDownloadPDF(!!hasLead);
  }, []);

  const handlePDFDownload = (e: React.MouseEvent) => {
    if (!canDownloadPDF) {
      e.preventDefault();
      setShowQuickLead(true);
    } else {
      analytics.casePdfDownload(slug);
    }
  };

  const handleQuickLeadSuccess = () => {
    localStorage.setItem('bulwark_lead_submitted', 'true');
    setCanDownloadPDF(true);
    setShowQuickLead(false);
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white mb-4">Case Study Not Found</h1>
          <a href="/case-studies" className="text-teal-500 hover:text-teal-400">
            ← Back to Case Studies
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className={`${SITE_CONTAINER} flex items-center justify-between py-5`}>
          <div className="text-xl tracking-widest">
            <a href="/" className="hover:opacity-80 transition-opacity">BULWARK RISK</a>
          </div>
          <nav className="hidden gap-6 text-sm tracking-wider md:flex">
            <a href="/" className="opacity-60 hover:opacity-100 transition-opacity">HOME</a>
            <a href="/approach" className="opacity-60 hover:opacity-100 transition-opacity">APPROACH</a>
            <a href="/case-studies" className="opacity-100 hover:opacity-100 transition-opacity">CASE STUDIES</a>
            <a href="/insights" className="opacity-60 hover:opacity-100 transition-opacity">INSIGHTS</a>
            <a href="/security" className="opacity-60 hover:opacity-100 transition-opacity">SECURITY</a>
            <a href="/inquiries" className="opacity-60 hover:opacity-100 transition-opacity">INQUIRIES</a>
          </nav>
        </div>
      </header>

      <div className="pt-20 bg-zinc-950">
        <ProofStripe />
        
        {/* Header */}
        <section className="bg-zinc-950 py-12 md:py-16">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-xs text-zinc-300">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{caseStudy.title}</h1>
              
              <div className="grid gap-8 md:grid-cols-2 mb-8">
                <div>
                  <h2 className="text-lg font-medium text-zinc-200 mb-3">Challenge</h2>
                  <p className="text-zinc-400 leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-zinc-200 mb-3">Solution</h2>
                  <p className="text-zinc-400 leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-8">Outcomes</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseStudy.outcomes.map((outcome, idx) => (
                  <div key={idx} className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-5">
                    <div className="text-sm text-zinc-400 mb-2">{outcome.label}</div>
                    <div className={`text-3xl font-mono font-bold mb-1 ${
                      outcome.type === 'positive' ? 'text-green-500' : 
                      outcome.type === 'negative' ? 'text-red-500' : 'text-zinc-200'
                    }`}>
                      {outcome.value}
                      <span className="text-lg ml-1">{outcome.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Chart */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Before / After</h2>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: ChartTheme.colors.negative }}></div>
                      <span className="text-zinc-400">Before</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: ChartTheme.colors.positive }}></div>
                      <span className="text-zinc-400">After</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {caseStudy.beforeAfterData.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-sm text-zinc-300 mb-2">{metric.metric}</div>
                      <div className="flex items-end gap-2 h-24">
                        <div className="flex-1 flex flex-col justify-end">
                          <div 
                            className="rounded-t transition-all duration-500 hover:opacity-80 relative group"
                            style={{ 
                              backgroundColor: ChartTheme.colors.negative,
                              height: `${(metric.before / Math.max(metric.before, metric.after)) * 100}%`
                            }}
                          >
                            <div className="absolute -top-6 left-0 right-0 text-center">
                              <span className="text-xs font-mono text-zinc-400">{metric.before}{metric.unit}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end">
                          <div 
                            className="rounded-t transition-all duration-500 hover:opacity-80 relative group"
                            style={{ 
                              backgroundColor: ChartTheme.colors.positive,
                              height: `${(metric.after / Math.max(metric.before, metric.after)) * 100}%`
                            }}
                          >
                            <div className="absolute -top-6 left-0 right-0 text-center">
                              <span className="text-xs font-mono text-zinc-400">{metric.after}{metric.unit}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-700/30">
                  <p className="text-xs text-zinc-500 italic">
                    12-month lookback, weekly aggregation, 95% confidence. Values illustrative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-8">Timeline</h2>
              <div className="space-y-4">
                {caseStudy.timeline.map((phase, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-zinc-200">{phase.phase}</h3>
                        <span className="text-xs text-zinc-400">{phase.days}</span>
                      </div>
                      <p className="text-sm text-zinc-400">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Used & Limitations */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">Data Used</h2>
                  <ul className="space-y-2">
                    {caseStudy.dataUsed.map((data, idx) => (
                      <li key={idx} className="text-sm text-zinc-400">• {data}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6">
                  <h2 className="text-lg font-semibold text-white mb-4">Limitations</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.limitations}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download PDF */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-8 text-center">
                <h2 className="text-xl font-semibold text-white mb-4">Download Redacted Case Study</h2>
                <p className="text-zinc-300 mb-6">
                  Get the full board-ready PDF with detailed analysis and recommendations.
                </p>
                <button
                  onClick={handlePDFDownload}
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  {canDownloadPDF ? 'Download PDF' : 'Email me the PDF'}
                </button>
                {!canDownloadPDF && (
                  <p className="text-xs text-zinc-500 mt-3">
                    We&apos;ll send you a download link
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SECTION_CONTAINER}`}>
            <div className="text-center">
              <a
                href="/inquiries"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-white hover:bg-neutral-200 text-black font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Start an Inquiry
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 py-8">
        <div className={`${SITE_CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 mb-6 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Encryption in transit & at rest</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>U.S. hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>NDA by default</span>
            </div>
          </div>
          
          <div className="text-center text-xs text-zinc-400 mb-2">
            © {new Date().getFullYear()} Bulwark Risk Partners LLC - A Private Advisory Firm
          </div>
          <div className="flex justify-center gap-4 text-xs text-zinc-400 mb-2">
            <a href="/terms" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="/disclaimer" className="hover:text-zinc-300 transition-colors">Disclaimer</a>
            <a href="/team" className="hover:text-zinc-300 transition-colors">Team</a>
            <button onClick={() => setShowQuickLead(true)} className="hover:text-zinc-300 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 rounded">Quick Contact</button>
          </div>
          <div className="text-center text-xs text-zinc-500">
            Bulwark provides operational risk analytics and decision support. We do not provide investment advice. No guarantee of results.
          </div>
        </div>
      </footer>

      <QuickLeadModal 
        isOpen={showQuickLead} 
        onClose={() => {
          setShowQuickLead(false);
          const hasLead = localStorage.getItem('bulwark_lead_submitted');
          setCanDownloadPDF(!!hasLead);
        }} 
      />
    </main>
  );
}
