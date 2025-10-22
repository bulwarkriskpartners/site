'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { SITE_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';
import Callout from '@/components/insights/Callout';
import { analytics } from '@/lib/analytics';

export default function InsightArticle() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickLead, setShowQuickLead] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowMobileCTA(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Track article view
    analytics.insightOpen(slug);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  // Mock article data - in production this would come from MDX
  const article = {
    title: slug === 'btc-ath-treasury-risk' ? 'BTC at ATH: What It Means for Treasury Risk' :
           slug === 'vendor-concentration-playbook' ? 'Vendor Concentration: A Practical Playbook' :
           'When Liquidity Dries Up: Board Questions for Q4',
    date: '2025-01-14',
    readingTime: '8 min',
    ogImage: '/og/insights-btc.png',
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
            <a href="/insights" className="opacity-100 hover:opacity-100 transition-opacity">INSIGHTS</a>
            <a href="/security" className="opacity-60 hover:opacity-100 transition-opacity">SECURITY</a>
            <a href="/inquiries" className="opacity-60 hover:opacity-100 transition-opacity">INQUIRIES</a>
          </nav>
        </div>
      </header>

      <div className="pt-20 bg-zinc-950">
        <ProofStripe />
        
        {/* Article Header */}
        <section className="bg-zinc-950 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-6">
              <a href="/insights" className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors">
                ← Back to Insights
              </a>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-8">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>{article.readingTime} read</span>
            </div>

            {/* Disclaimer */}
            <div className="mb-8 p-4 rounded-lg bg-zinc-800/40 border border-zinc-700/50">
              <p className="text-xs text-zinc-400">
                <strong>Disclaimer:</strong> This analysis is for informational purposes only and does not constitute investment advice. 
                Past performance does not guarantee future results. Consult with qualified professionals before making any financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-zinc-950 py-8">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <div style={{ maxWidth: '68ch' }}>
                {slug === 'btc-ath-treasury-risk' && (
                  <>
                    <Callout title="3 Actions for CFOs & Treasury">
                      <ol className="space-y-2">
                        <li>Cap crypto exposure by policy (max % of liquid assets).</li>
                        <li>Stress-test counterparties (exchange, custody) against 30–50% drawdowns.</li>
                        <li>Predefine conversion triggers and governance for fast de-risking.</li>
                      </ol>
                    </Callout>

                    <p className="text-zinc-300 leading-relaxed mb-6">
                      <strong>Why it matters.</strong> ATH regimes correlate with higher realized vol and exchange-specific risk. 
                      If your balance sheet or payment rails touch crypto, model a <span className="font-mono">weekly VaR</span> and 
                      a <span className="font-mono">counterparty failure scenario</span> (settlement delay + haircut).
                    </p>

                    <p className="text-zinc-300 leading-relaxed mb-6">
                      <strong>How to quantify.</strong> Use a 2-year lookback, weekly horizon, 95% CL. Layer a 40% shock to price + 
                      3–5 day settlement friction. Measure P&L impact and <span className="font-mono">runway days</span> under each stress.
                    </p>

                    <p className="text-xs text-zinc-500 italic mt-8">
                      Methods: historical & Monte Carlo VaR; counterparty stress; liquidity overlays. Decision support—not investment advice.
                    </p>
                  </>
                )}
                
                {slug === 'vendor-concentration-playbook' && (
                  <>
                    <Callout title="3 Actions for Ops & Finance">
                      <ol className="space-y-2">
                        <li>Quantify top-3 supplier exposure vs. critical SKUs.</li>
                        <li>Pilot dual-sourcing on 10% of volume with contractual SLAs.</li>
                        <li>Pre-approve substitutions and safety stock rules by category.</li>
                      </ol>
                    </Callout>

                    <p className="text-zinc-300 leading-relaxed mb-6">
                      Define exposure as <span className="font-mono">% of BOM at risk × SKU criticality × lead time</span>. 
                      Start with a supplier <strong>Herfindahl index</strong> and a threshold (e.g., top-3 ≤ 70%). 
                      Simulate dual-source mix and GM impact.
                    </p>

                    <p className="text-xs text-zinc-500 italic mt-8">
                      Methods: Herfindahl-Hirschman Index, concentration analysis, scenario modeling. Decision support—not investment advice.
                    </p>
                  </>
                )}
                
                {slug === 'when-liquidity-dries-up-board-questions-for-q4' && (
                  <>
                    <Callout title="3 Questions for the Board">
                      <ol className="space-y-2">
                        <li>What&apos;s our <span className="font-mono">runway under stress</span> (P50/P95)?</li>
                        <li>Which levers move <span className="font-mono">cash conversion</span> fastest?</li>
                        <li>Which <strong>customers/vendors</strong> drive tail risk, and what&apos;s the pre-agreed action?</li>
                      </ol>
                    </Callout>

                    <p className="text-zinc-300 leading-relaxed mb-6">
                      Model weekly cash under 3 scenarios: mild slowdown, credit shock (+200bps), and supply disruption (lead +30%). 
                      Track <span className="font-mono">CCC</span> and <span className="font-mono">runway days</span> deltas.
                    </p>

                    <p className="text-xs text-zinc-500 italic mt-8">
                      Methods: scenario analysis, stress testing, liquidity modeling. Decision support—not investment advice.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Desktop Right Rail */}
        <aside className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2">
          <div className="rounded-xl border border-zinc-700/80 bg-zinc-900/80 backdrop-blur-sm p-6 max-w-xs">
            <h3 className="font-semibold text-white mb-3">Talk to us</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Discuss how these frameworks apply to your business.
            </p>
            <button
              onClick={() => setShowQuickLead(true)}
              className="w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-2 px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              Quick Contact
            </button>
          </div>
        </aside>

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

      {/* Mobile Sticky CTA */}
      {showMobileCTA && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-700/50 p-4">
          <button
            onClick={() => setShowQuickLead(true)}
            className="w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            Start an Inquiry
          </button>
        </div>
      )}

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

      <QuickLeadModal isOpen={showQuickLead} onClose={() => setShowQuickLead(false)} />
    </main>
  );
}
