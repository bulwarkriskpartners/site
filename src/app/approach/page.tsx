'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';

export default function Approach() {
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
              className="opacity-100 hover:opacity-100 transition-opacity"
            >
              APPROACH
            </a>
            <a 
              href="/case-studies" 
              className="opacity-60 hover:opacity-100 transition-opacity"
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

      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className={`${SITE_CONTAINER} relative z-10 pt-28 pb-24 min-h-[100svh] flex items-center`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl tracking-tight drop-shadow-lg">
              Our Approach
            </h1>
            <p className="mt-6 text-lg text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              Three steps from data to actionable insights that boards can implement immediately.
            </p>
          </div>
        </div>
      </section>

      <ProofStripe />

      {/* Approach Steps */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-[1000px] mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Data Intake</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-4">Days 0–2</div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Read-only exports: COGS by SKU, vendor list, AR/AP aging, DSO/DIO/DPO, backlog, tariff exposure. 
                  CSV or exports from QuickBooks/NetSuite/Shopify work seamlessly.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Models & Scenarios</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-4">Days 3–7</div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  P50/P95, runway, GM deltas; risk score = Probability × Impact × Detectability. 
                  Historical & Monte Carlo VaR, factor decompositions, stress scenarios.
                </p>
                <div className="text-xs font-mono bg-zinc-800/60 px-2 py-1 rounded text-zinc-200">
                  Risk Score = P × I × D
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Board-Ready Plan</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-4">Days 8–10</div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Top-5 actions with owners & thresholds, 45-min readout. 
                  Board-ready 12-slide PDF with clear implementation roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Footnote */}
      <section className="bg-zinc-950 pb-20">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="rounded-lg border border-zinc-800/80 p-6 bg-zinc-900/60">
              <h3 className="text-sm font-medium text-zinc-300 mb-3">Methods</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Historical & Monte Carlo VaR, factor decompositions, stress scenarios, and liquidity overlays. 
                Decision support—not investment advice.
              </p>
            </div>
            
            <div className="rounded-lg border border-zinc-800/80 p-6 bg-zinc-900/60">
              <h3 className="text-sm font-medium text-zinc-300 mb-3">What we don&apos;t do</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We don&apos;t provide investment advice or audit financial statements. Our outputs inform operator decisions.
              </p>
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

      <QuickLeadModal isOpen={showQuickLead} onClose={() => setShowQuickLead(false)} />
    </main>
  );
}
