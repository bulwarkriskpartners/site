'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';
import QuickLeadModal from '@/components/lead/QuickLeadModal';
import ProofStripe from '@/components/ui/ProofStripe';
import HeroRiskField from '@/components/HeroRiskField';

export default function Home() {
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
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              HOME
            </a>
            <a 
              href="/approach" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              APPROACH
            </a>
            <a 
              href="/case-studies" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              CASE STUDIES
            </a>
            <a 
              href="/insights" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              INSIGHTS
            </a>
            <a 
              href="/security" 
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              SECURITY
            </a>
            <a 
              href="/inquiries" 
              className="opacity-80 hover:opacity-100 transition-opacity"
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
        <HeroRiskField />
        <div className={`${SITE_CONTAINER} relative z-10 pt-28 pb-24 min-h-[100svh] flex items-center`}>
          <div className={COPY_NARROW}>
            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl tracking-tight drop-shadow-lg">
              Institutional-grade risk analytics for select businesses
            </h1>
            <p className="mt-6 text-lg text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              We quantify operational risk in dollars and design actions your board can use.
            </p>
            <p className="mt-4 text-sm text-zinc-400 italic drop-shadow-sm">
              Boutique capacity; new engagements are limited.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="/inquiries"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg outline-none focus-visible:ring-1 focus-visible:ring-neutral-600"
                title="Start an Inquiry"
              >
                Start an Inquiry
              </a>
              <button
                onClick={() => setShowQuickLead(true)}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 border border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-850 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                title="Quick Contact"
              >
                Quick Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProofStripe />

      {/* Industry Chips Slim Row */}
      <section className="bg-zinc-950 py-6 border-b border-zinc-800/50">
        <div className={`${SITE_CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-700/50">
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
              <span className="text-xs text-zinc-300">Consumer</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-700/50">
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
              <span className="text-xs text-zinc-300">CPG</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-700/50">
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
              <span className="text-xs text-zinc-300">Light MFG</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-700/50">
              <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
              <span className="text-xs text-zinc-300">E-comm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We're For */}
      <section id="who" className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold mb-8 text-white">Who we&apos;re for</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/60 p-5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <p className="font-medium text-zinc-200">CFO & Finance</p>
              </div>
              <p className="text-sm text-zinc-400 max-w-[68ch] mb-3">Quantify exposure in dollars; cut avoidable losses; board-ready reporting.</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-xs text-green-500 font-medium">Volatility ↓</span>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/60 p-5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <p className="font-medium text-zinc-200">Treasury & FP&A</p>
              </div>
              <p className="text-sm text-zinc-400 max-w-[68ch] mb-3">Liquidity and working-capital stability under real scenarios.</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <span className="text-xs text-green-500 font-medium">Runway ↑</span>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/60 p-5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <p className="font-medium text-zinc-200">Ops & Supply</p>
              </div>
              <p className="text-sm text-zinc-400 max-w-[68ch] mb-3">Supplier, inventory, and fulfillment risk with actionable playbooks.</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '58%' }}></div>
                </div>
                <span className="text-xs text-green-500 font-medium">Stock-outs ↓</span>
              </div>
            </div>
            
            <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/60 p-5 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <p className="font-medium text-zinc-200">PE-Backed</p>
              </div>
              <p className="text-sm text-zinc-400 max-w-[68ch] mb-3">Cross-entity risk with cadence your board actually uses.</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-xs text-teal-500 font-medium">Cross-entity view</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Risk Diagnostic */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-[920px] mx-auto">
            <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] text-center">
              <h2 className="text-2xl font-semibold mb-3 text-white">Start with an Executive Risk Diagnostic</h2>
              <p className="text-lg text-zinc-300 mb-2">One dataset. Six slides. A clear plan.</p>
              <p className="text-sm text-zinc-400 mb-8">By invitation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/inquiries"
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 hover:bg-teal-500 px-6 py-3 text-center text-sm font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  title="Start an Inquiry"
                >
                  Start an Inquiry
                </a>
                <a
                  href="/sample-analysis"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-6 py-3 text-center text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors focus-visible:ring-2 focus-visible:ring-teal-500"
                  title="See sample analysis"
                >
                  See sample analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Results */}
      <section id="results" className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <h2 className="mb-4 text-center text-3xl font-semibold text-white">Results</h2>
          <p className="mb-8 text-center text-zinc-300 max-w-3xl mx-auto leading-relaxed">Recent outcomes we&apos;ve delivered for clients across manufacturing, distribution, and consumer goods.</p>
          
          {/* Client Logos */}
          <div className="mb-12">
            <p className="text-center text-sm text-zinc-400 mb-6">Selected clients:</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="px-4 py-2 bg-zinc-800/60 backdrop-blur-sm rounded-lg border border-zinc-700/50">
                <span className="text-sm text-zinc-200 font-medium">Manufacturing Co.</span>
              </div>
              <div className="px-4 py-2 bg-zinc-800/60 backdrop-blur-sm rounded-lg border border-zinc-700/50">
                <span className="text-sm text-zinc-200 font-medium">Regional Foods</span>
              </div>
              <div className="px-4 py-2 bg-zinc-800/60 backdrop-blur-sm rounded-lg border border-zinc-700/50">
                <span className="text-sm text-zinc-200 font-medium">Premium Apparel</span>
              </div>
              <div className="px-4 py-2 bg-zinc-800/60 backdrop-blur-sm rounded-lg border border-zinc-700/50">
                <span className="text-sm text-zinc-200 font-medium">Industrial Components</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* Manufacturing Client */}
            <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-sm font-medium text-zinc-300">MANUFACTURING CLIENT</div>
              
              {/* Top stat row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-green-500 font-mono">$2.1M</div>
                  <div className="text-xs text-zinc-300">cash protected</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-zinc-200 font-mono">-45 bps</div>
                  <div className="text-xs text-zinc-300">COGS trend</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-zinc-200 font-mono">+35 days</div>
                  <div className="text-xs text-zinc-300">cash runway</div>
                </div>
              </div>

              {/* Mini waterfall chart */}
              <div className="mb-6">
                <div className="text-sm font-medium text-zinc-300 mb-3">GM impact from 3 actions</div>
                <div className="h-12 flex items-end gap-2">
                  <div className="flex-1 bg-red-500 rounded-t" style={{height: '40%'}}>
                    <div className="text-xs text-white p-1">Action 1</div>
                  </div>
                  <div className="flex-1 bg-orange-500 rounded-t" style={{height: '60%'}}>
                    <div className="text-xs text-white p-1">Action 2</div>
                  </div>
                  <div className="flex-1 bg-green-500 rounded-t" style={{height: '80%'}}>
                    <div className="text-xs text-white p-1">Action 3</div>
                  </div>
                  <div className="flex-1 bg-emerald-600 rounded-t" style={{height: '100%'}}>
                    <div className="text-xs text-white p-1">Total</div>
                  </div>
                </div>
              </div>

              {/* Results bullets */}
              <div className="space-y-2">
                <div className="text-sm text-zinc-300">• $520k cash from DSO reduction</div>
                <div className="text-sm text-zinc-300">• -45 bps supplier concentration risk</div>
                <div className="text-sm text-zinc-300">• +35 days cash runway</div>
              </div>
              
              {/* Footnote */}
              <div className="text-xs text-zinc-500 mt-4 italic border-t border-zinc-700/30 pt-3">
                12-month lookback, weekly aggregation, 95% confidence. Values illustrative.
              </div>
            </div>

            {/* Distribution Client */}
            <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 text-sm font-medium text-zinc-300">DISTRIBUTION CLIENT</div>
              
              {/* Top stat row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-green-500 font-mono">$845k</div>
                  <div className="text-xs text-zinc-300">write-offs avoided</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-zinc-200 font-mono">-22%</div>
                  <div className="text-xs text-zinc-300">stock-out rate</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50">
                  <div className="text-lg font-bold text-zinc-200 font-mono">+15%</div>
                  <div className="text-xs text-zinc-300">fill-rate</div>
                </div>
              </div>

              {/* Mini heatmap */}
              <div className="mb-6">
                <div className="text-sm font-medium text-zinc-300 mb-3">Supplier concentration by region</div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-8 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-xs text-white">NE</span>
                  </div>
                  <div className="h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-xs text-white">SE</span>
                  </div>
                  <div className="h-8 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-xs text-black">MW</span>
                  </div>
                  <div className="h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-xs text-white">W</span>
                  </div>
                </div>
              </div>

              {/* Results bullets */}
              <div className="space-y-2">
                <div className="text-sm text-zinc-300">• $240k COGS from SKU rationalization</div>
                <div className="text-sm text-zinc-300">• +15% inventory turns improvement</div>
                <div className="text-sm text-zinc-300">• +60 days cash runway</div>
              </div>
              
              {/* Footnote */}
              <div className="text-xs text-zinc-500 mt-4 italic border-t border-zinc-700/30 pt-3">
                12-month lookback, weekly aggregation, 95% confidence. Values illustrative.
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center mb-8">
            <blockquote className="text-xl text-zinc-300 italic mb-4 leading-relaxed">
              &ldquo;Finally have visibility into what could break us and how to prevent it. The diagnostic paid for itself in the first quarter.&rdquo;
            </blockquote>
            <div className="text-zinc-400">— CFO, Manufacturing Co.</div>
          </div>

          {/* Sample PDF Link */}
          <div className="text-center">
            <a
              href="/case-studies"
              className="inline-block rounded-md border border-zinc-700/80 px-6 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-zinc-600/80 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-teal-500"
              title="View detailed case studies"
            >
              View Detailed Case Studies
            </a>
          </div>
        </div>
      </section>


      {/* How We Work */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <h2 className="mb-12 text-center text-3xl font-semibold text-white">How We Work</h2>
          
          {/* Row 1 - 3-step swimlane */}
          <div className="mb-12">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-700/80 p-6 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Data Intake</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-2">Days 0–2</div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Read-only exports: COGS by SKU, vendor list, AR/AP aging, DSO/DIO/DPO, backlog, tariff exposure
                </p>
              </div>
              
              <div className="rounded-2xl border border-zinc-700/80 p-6 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Model & Scenarios</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-2">Days 3–7</div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                  P50/P95, runway, GM deltas; risk score = Probability × Impact × Detectability
                </p>
                <div className="text-xs font-mono bg-zinc-800/60 px-2 py-1 rounded text-zinc-200">
                  Risk Score = P × I × D
                </div>
              </div>
              
              <div className="rounded-2xl border border-zinc-700/80 p-6 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Board-Ready Plan</h3>
                </div>
                <div className="text-sm text-zinc-400 mb-2">Days 8–10</div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Top-5 actions with owners & thresholds, 45-min readout
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - Security & Systems tiles */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-6 text-lg font-semibold text-zinc-100/95">Data Security</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">Read-only access (no write privileges)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">No PII required (operational/financial data only)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">Encryption at rest & in transit (AES-256 / TLS 1.2+)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">12-month retention (auto purge upon request)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">Data residency: US (cloud storage)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">Access control & audit logs (least privilege)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">NDA by default (Mutual NDA provided)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-400">SOC 2–aligned controls</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a href="/security" className="text-sm text-neutral-400 hover:text-neutral-200 hover:underline transition-colors">Learn more → Security</a>
                <p className="text-xs text-zinc-500 mt-2">We never ask for banking credentials.</p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-6 text-lg font-semibold text-zinc-100/95">Systems</h3>
              
              {/* Sources */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-zinc-300 mb-3">Sources</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">QuickBooks</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">NetSuite</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">Shopify</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">GA4</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">CSV/Excel</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">SFTP</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800/40 text-xs text-zinc-300">Other</span>
                </div>
              </div>

              {/* Key fields */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-zinc-300 mb-3">Key fields we use</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">COGS by SKU, sales by SKU/customer, inventory on hand, vendor/customer master, AR/AP aging, POs & receipts, tariffs/freight</p>
              </div>

              {/* Ingestion */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-zinc-300 mb-3">Ingestion</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">API, SFTP, or secure drive upload (read-only service accounts)</p>
              </div>

              {/* Cadence */}
          <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-3">Cadence</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">Diagnostic: one-time import (Days 0–2)<br/>Ongoing plans: monthly sync (or on demand)</p>
              </div>
            </div>
          </div>

          {/* Row 3 - Denser sample dashboard */}
          <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <h3 className="mb-6 text-lg font-semibold text-zinc-100/95">Sample Dashboard</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 rounded-lg bg-zinc-800/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-300">Supplier concentration</span>
                  <span className="text-xs text-zinc-500">High</span>
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="flex-1 bg-zinc-600 rounded-t" style={{height: '60%'}}></div>
                  <div className="flex-1 bg-zinc-500 rounded-t" style={{height: '80%'}}></div>
                  <div className="flex-1 bg-neutral-300 rounded-t" style={{height: '100%'}}></div>
                </div>
                <div className="text-xs text-zinc-400 mt-1"><span className="text-emerald-500 font-semibold">75%</span> from top 3</div>
              </div>
              
              <div className="p-4 rounded-lg bg-zinc-800/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-300">Scenario PL impact</span>
                  <span className="text-xs text-red-400">-12%</span>
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="flex-1 bg-red-500 rounded-t" style={{height: '100%'}}></div>
                  <div className="flex-1 bg-red-400 rounded-t" style={{height: '70%'}}></div>
                  <div className="flex-1 bg-red-300 rounded-t" style={{height: '40%'}}></div>
                </div>
                <div className="text-xs text-zinc-400 mt-1">P50/P75/P95</div>
              </div>
              
              <div className="p-4 rounded-lg bg-zinc-800/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-300">Stock-out risk</span>
                  <span className="text-xs text-orange-400">Medium</span>
                </div>
                <div className="h-8 flex items-center">
                  <div className="w-full h-1 bg-zinc-600 rounded">
                    <div className="h-full bg-orange-500 rounded" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 mt-1">Below threshold</div>
              </div>
              
              <div className="p-4 rounded-lg bg-zinc-800/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-300">Runway days</span>
                  <span className="text-xs text-green-400">+35</span>
                </div>
                <div className="h-8 flex items-center gap-2">
                  <div className="flex-1 h-4 bg-zinc-600 rounded"></div>
                  <div className="flex-1 h-6 bg-green-500 rounded"></div>
                </div>
                <div className="text-xs text-zinc-400 mt-1">Before → After</div>
              </div>
            </div>
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
            <button onClick={() => setShowQuickLead(true)} className="hover:text-zinc-300 transition-colors">Quick Contact</button>
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