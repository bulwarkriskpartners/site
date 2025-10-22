'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';
import { trackEvent } from '@/lib/analytics';

export default function SampleAnalysis() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickLead, setShowQuickLead] = useState(false);
  const [canDownloadPDF, setCanDownloadPDF] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Track page view
    trackEvent('sample_view', { page: 'sample_analysis' });
    
    // Check if user has submitted a lead
    const hasLead = localStorage.getItem('bulwark_lead_submitted');
    setCanDownloadPDF(!!hasLead);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickLeadSuccess = () => {
    localStorage.setItem('bulwark_lead_submitted', 'true');
    setCanDownloadPDF(true);
    setShowQuickLead(false);
  };

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
            <a href="/case-studies" className="opacity-60 hover:opacity-100 transition-opacity">CASE STUDIES</a>
            <a href="/insights" className="opacity-60 hover:opacity-100 transition-opacity">INSIGHTS</a>
            <a href="/security" className="opacity-60 hover:opacity-100 transition-opacity">SECURITY</a>
            <a href="/inquiries" className="opacity-60 hover:opacity-100 transition-opacity">INQUIRIES</a>
          </nav>
        </div>
      </header>

      <div className="pt-20 bg-zinc-950">
        <ProofStripe />
        
        {/* Header */}
        <section className="bg-zinc-950 py-16 md:py-20">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                Sample Client Analysis
              </h1>
              <p className="text-lg text-zinc-300 leading-relaxed">
                One dataset. Six slides. A clear plan. By invitation.
              </p>
              <p className="text-sm text-zinc-400 mt-4">
                See how a 10-day diagnostic becomes a board-ready deck: top exposures, 3 stress scenarios, and an action plan.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Viewer */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-5xl mx-auto">
              <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Executive Risk Diagnostic Sample</h2>
                
                {/* Preview Cards */}
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-6">
                    <div className="text-sm font-medium text-zinc-300 mb-2">Slide 1</div>
                    <div className="aspect-video bg-zinc-700 rounded mb-3 flex items-center justify-center">
                      <div className="text-center text-zinc-500">
                        <div className="text-xs mb-2">EXECUTIVE SUMMARY</div>
                        <div className="text-4xl font-mono opacity-30">REDACTED</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">Risk heatmap & top exposures</p>
                  </div>
                  
                  <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-6">
                    <div className="text-sm font-medium text-zinc-300 mb-2">Slide 2</div>
                    <div className="aspect-video bg-zinc-700 rounded mb-3 flex items-center justify-center">
                      <div className="text-center text-zinc-500">
                        <div className="text-xs mb-2">STRESS SCENARIOS</div>
                        <div className="text-4xl font-mono opacity-30">REDACTED</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">P50/P95 impact on cash & margin</p>
                  </div>
                  
                  <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-6">
                    <div className="text-sm font-medium text-zinc-300 mb-2">Slide 3</div>
                    <div className="aspect-video bg-zinc-700 rounded mb-3 flex items-center justify-center">
                      <div className="text-center text-zinc-500">
                        <div className="text-xs mb-2">TOP ACTIONS</div>
                        <div className="text-4xl font-mono opacity-30">REDACTED</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">5 actions with owners & expected impact</p>
                  </div>
                  
                  <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/40 p-6">
                    <div className="text-sm font-medium text-zinc-300 mb-2">Slides 4-6</div>
                    <div className="aspect-video bg-zinc-700 rounded mb-3 flex items-center justify-center">
                      <div className="text-center text-zinc-500">
                        <div className="text-xs mb-2">APPENDIX</div>
                        <div className="text-4xl font-mono opacity-30">REDACTED</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400">Data sources, methodology, next steps</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setShowQuickLead(true)}
                    className="inline-flex items-center justify-center rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-4 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  >
                    {canDownloadPDF ? 'Download Full PDF' : 'Email me the full sample (PDF)'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-8 text-center">What&apos;s Included</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6">
                  <h3 className="font-medium text-zinc-200 mb-2">Risk Heatmap</h3>
                  <p className="text-sm text-zinc-400">Vendor, SKU, customer, and geographic concentrations</p>
                </div>
                <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6">
                  <h3 className="font-medium text-zinc-200 mb-2">Stress Scenarios</h3>
                  <p className="text-sm text-zinc-400">P50/P95 cash runway & margin impact</p>
                </div>
                <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-6">
                  <h3 className="font-medium text-zinc-200 mb-2">Action Plan</h3>
                  <p className="text-sm text-zinc-400">Top-5 actions with owners & thresholds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-950 py-12">
          <div className={`${SITE_CONTAINER}`}>
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
        onClose={() => setShowQuickLead(false)}
        onSuccess={handleQuickLeadSuccess}
      />
    </main>
  );
}
