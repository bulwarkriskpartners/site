import { Metadata } from 'next';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';

export const metadata: Metadata = {
  title: 'Risk Analytics for CFOs | Bulwark Risk Partners',
  description: 'Hedge-fund-grade risk analytics for CFOs: quantify operational risk exposure, protect cash flow, and deliver board-ready risk insights.',
};

export default function CFOLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <section className={`${SITE_CONTAINER} relative py-20 md:py-24`}>
        <div className={COPY_NARROW}>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-100/95 md:text-5xl tracking-tight mb-6">
            Risk Analytics for CFOs
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl leading-relaxed">
            Quantify operational risk exposure in dollars. Protect cash flow. Deliver board-ready insights that pay for themselves.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a 
              href="/#diagnostic" 
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-colors"
            >
              Request Diagnostic
            </a>
            <a 
              href="/case-studies" 
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 border border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-850 transition-colors"
            >
              See Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">CFO Risk Challenges</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Cash Flow Volatility</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Unpredictable supplier delays, customer payment issues, and seasonal variations create cash flow uncertainty.
              </p>
              <div className="text-xs text-zinc-500">
                <strong>Impact:</strong> Working capital strain, covenant risk, growth constraints
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Hidden Concentrations</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Vendor dependencies, customer concentration, and geographic risks that aren't visible in standard reporting.
              </p>
              <div className="text-xs text-zinc-500">
                <strong>Impact:</strong> Supply chain disruption, revenue concentration risk
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Board Risk Questions</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Board members asking for quantified risk exposure and mitigation strategies without clear answers.
              </p>
              <div className="text-xs text-zinc-500">
                <strong>Impact:</strong> Governance gaps, investor confidence issues
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">What We Deliver</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-4">$2.1M</div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100/95">Cash Flow Protection</h3>
              <p className="text-sm text-zinc-400">
                Typical cash flow protection identified within 30 days of engagement start.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-4">45 bps</div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100/95">Volatility Reduction</h3>
              <p className="text-sm text-zinc-400">
                Average reduction in cash flow volatility through risk controls implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-4">10 Days</div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-100/95">Board-Ready Results</h3>
              <p className="text-sm text-zinc-400">
                Complete risk assessment and action plan delivered in 10 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Case Study */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-800/80 p-12 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] mb-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wider">Case Study</div>
                <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">$75M Consumer Goods Company</h2>
                
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Challenge</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    CFO facing margin pressure from tariff changes and currency fluctuations. Board demanding quantified risk exposure and hedging strategies.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-medium text-zinc-300">Solution</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    14-day Executive Risk Diagnostic modeled cost structure under various scenarios. Identified key cost drivers and developed dynamic pricing strategies.
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
                    "The scenario modeling helped us navigate the tariff changes with confidence. We knew exactly which products to adjust and by how much."
                  </p>
                  <div className="text-xs text-zinc-500 mt-2">— Sarah Chen, CFO, Premium Apparel Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Ready to quantify your risk exposure?</h2>
          <p className="mb-8 text-zinc-400 leading-relaxed">
            Start with our Executive Risk Diagnostic to identify your specific cash flow risks and protection opportunities.
          </p>
          <a 
            href="/#diagnostic" 
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-colors"
          >
            Request Diagnostic
          </a>
        </div>
      </section>
    </div>
  );
}
