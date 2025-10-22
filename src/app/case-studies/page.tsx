'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';

export default function CaseStudiesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickLead, setShowQuickLead] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a 
              href="/" 
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              HOME
            </a>
            <a 
              href="/approach" 
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              APPROACH
            </a>
            <a 
              href="/case-studies" 
              className="opacity-100 hover:opacity-100 transition-opacity"
            >
              CASE STUDIES
            </a>
            <a 
              href="/insights" 
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              INSIGHTS
            </a>
            <a 
              href="/security" 
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              SECURITY
            </a>
            <a 
              href="/inquiries" 
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              INQUIRIES
            </a>
          </nav>
        </div>
      </header>

      <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className={`${SITE_CONTAINER} relative z-10 pt-28 pb-24 min-h-[60vh] flex items-center`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl tracking-tight drop-shadow-lg">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              Selected outcomes from our risk analytics engagements.
            </p>
          </div>
        </div>
      </section>

      <ProofStripe />

      {/* Case Study 1 */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800/80 p-12 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] mb-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wider">Manufacturing Client</div>
                <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Industrial Components</h2>
                
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Challenge</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Mid-size manufacturer facing cash flow volatility due to supplier concentration risk and seasonal demand patterns. 
                    Needed to quantify exposure and develop mitigation strategies for board presentation.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Solution</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Executive Risk Diagnostic identified critical vulnerabilities: single-source supplier dependency, 
                    seasonal inventory buildup, and currency exposure on raw materials. Developed scenario models and action plan.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-medium text-zinc-300">Results (90 days)</h3>
                
                <div className="grid gap-4 mb-8">
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">$2.1M</div>
                    <div className="text-sm text-zinc-400">Cash flow protected through supplier diversification</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">-45 bps</div>
                    <div className="text-sm text-zinc-400">COGS volatility reduction</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">+35 days</div>
                    <div className="text-sm text-zinc-400">Cash runway improvement</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-800/40">
                  <div className="text-sm text-zinc-300 font-medium mb-2">Client Quote</div>
                  <p className="text-sm text-zinc-400 italic">
                    &ldquo;Finally have visibility into what could break us and how to prevent it. The diagnostic paid for itself in the first quarter.&rdquo;
                  </p>
                  <div className="text-xs text-zinc-500 mt-2">— CFO, Industrial Components Co.</div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/case-studies/manufacturing-components"
                    className="inline-flex items-center justify-center w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800/80 p-12 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] mb-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wider">Distribution</div>
                <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Regional Food Distributor</h2>
                
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Challenge</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    $28M food distributor experiencing write-offs from expired inventory and stock-outs during peak demand. 
                    Needed to optimize inventory levels and reduce waste while maintaining service levels.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Solution</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Analyzed 18 months of SKU-level data to identify slow-moving inventory and demand patterns. 
                    Built predictive models for optimal stock levels and developed automated reorder triggers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-medium text-zinc-300">Results (120 days)</h3>
                
                <div className="grid gap-4 mb-8">
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">$845K</div>
                    <div className="text-sm text-zinc-400">Write-offs avoided through better inventory management</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">-22%</div>
                    <div className="text-sm text-zinc-400">Stock-out rate reduction</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">+15%</div>
                    <div className="text-sm text-zinc-400">Fill rate improvement</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-800/40">
                  <div className="text-sm text-zinc-300 font-medium mb-2">Client Quote</div>
                  <p className="text-sm text-zinc-400 italic">
                    &ldquo;The data-driven approach to inventory management has transformed our operations. We&apos;re now confident in our cash flow projections.&rdquo;
                  </p>
                  <div className="text-xs text-zinc-500 mt-2">— VP Operations, Regional Foods</div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/case-studies/regional-food-distributor"
                    className="inline-flex items-center justify-center w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800/80 p-12 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] mb-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wider">Consumer Goods</div>
                <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Premium Apparel Brand</h2>
                
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Challenge</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    $75M apparel company facing margin pressure from tariff changes and currency fluctuations. 
                    Needed to understand cost structure sensitivity and develop hedging strategies.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Solution</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Modeled cost structure under various tariff and FX scenarios. Identified key cost drivers and 
                    developed dynamic pricing strategies to maintain margins while staying competitive.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-lg font-medium text-zinc-300">Results (180 days)</h3>
                
                <div className="grid gap-4 mb-8">
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">$1.2M</div>
                    <div className="text-sm text-zinc-400">Margin protection through scenario planning</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">+8%</div>
                    <div className="text-sm text-zinc-400">Gross margin improvement</div>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-800/40">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">-30%</div>
                    <div className="text-sm text-zinc-400">Volatility in quarterly earnings</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-800/40">
                  <div className="text-sm text-zinc-300 font-medium mb-2">Client Quote</div>
                  <p className="text-sm text-zinc-400 italic">
                    &ldquo;The scenario modeling helped us navigate the tariff changes with confidence. We knew exactly which products to adjust and by how much.&rdquo;
                  </p>
                  <div className="text-xs text-zinc-500 mt-2">— CEO, Premium Apparel Co.</div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/case-studies/premium-apparel"
                    className="inline-flex items-center justify-center w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    View details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Ready to achieve similar results?</h2>
          <p className="mb-8 text-zinc-400 leading-relaxed">
            Start with our Executive Risk Diagnostic to identify your specific opportunities for cash flow improvement and risk reduction.
          </p>
          <a href="/#diagnostic" className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-colors">
            Request Diagnostic
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-12">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="text-center">
            <a
              href="/inquiries"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-white hover:bg-neutral-200 text-black font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg outline-none focus-visible:ring-1 focus-visible:ring-neutral-600"
            >
              Start an Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 py-8">
        <div className={`${SITE_CONTAINER}`}>
          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 mb-6 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Data encrypted at rest & in transit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>USA-hosted infrastructure</span>
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
    </div>

      <QuickLeadModal isOpen={showQuickLead} onClose={() => setShowQuickLead(false)} />
    </main>
  );
}
