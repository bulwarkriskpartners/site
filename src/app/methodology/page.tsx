import { Metadata } from 'next';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';

export const metadata: Metadata = {
  title: 'Methodology | Bulwark Risk Partners',
  description: 'Our quantitative risk analytics methodology: VaR models, stress testing, scenario analysis, and factor decomposition for institutional-grade risk forecasting.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <section className={`${SITE_CONTAINER} relative py-20 md:py-24`}>
        <div className={COPY_NARROW}>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-100/95 md:text-5xl tracking-tight mb-6">
            Methodology
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl leading-relaxed">
            Institutional-grade quantitative risk analytics built on proven financial engineering principles.
          </p>
        </div>
      </section>

      {/* Core Models */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Risk Models & Frameworks</h2>
          
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-xl font-semibold text-zinc-100/95">Value at Risk (VaR)</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Historical Simulation</div>
                  <p>500+ day rolling window, 95% & 99% confidence intervals. Captures tail risk through empirical distribution analysis.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Monte Carlo Simulation</div>
                  <p>10,000+ scenario runs with correlated risk factors. Incorporates volatility clustering and regime changes.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Parametric VaR</div>
                  <p>Normal & t-distribution assumptions with fat-tail adjustments. Real-time calculation for operational monitoring.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-xl font-semibold text-zinc-100/95">Stress Testing</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Scenario Analysis</div>
                  <p>Historical stress events (2008 crisis, COVID-19, supply chain shocks) with forward-looking adjustments.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Factor Stress</div>
                  <p>Correlation breakdown, volatility spikes, liquidity constraints. Tests portfolio resilience under extreme conditions.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Reverse Stress</div>
                  <p>Identifies scenarios that would cause significant losses. Helps define risk appetite boundaries.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-xl font-semibold text-zinc-100/95">Factor Models</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Multi-Factor Framework</div>
                  <p>Market, credit, operational, and liquidity risk factors. Dynamic correlation modeling with regime detection.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Principal Components</div>
                  <p>Dimensionality reduction for complex portfolios. Identifies dominant risk drivers and diversification opportunities.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Factor Decomposition</div>
                  <p>Risk attribution by factor exposure. Enables targeted hedging and portfolio optimization strategies.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-xl font-semibold text-zinc-100/95">Liquidity Risk</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Cash Flow Modeling</div>
                  <p>Working capital stress testing with payment timing uncertainty. Accounts for seasonal and cyclical patterns.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Funding Risk</div>
                  <p>Credit line availability under stress. Models lender behavior and covenant breach scenarios.</p>
                </div>
                <div>
                  <div className="font-medium text-zinc-300 mb-2">Asset Liquidity</div>
                  <p>Inventory liquidation curves, receivables collection rates. Market impact modeling for forced sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Infrastructure */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Data & Infrastructure</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Data Sources</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• ERP systems (NetSuite, SAP, QuickBooks)</li>
                <li>• Financial statements (10-K, 10-Q)</li>
                <li>• Market data (Bloomberg, Refinitiv)</li>
                <li>• Economic indicators (FRED, BLS)</li>
                <li>• Industry benchmarks</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Processing</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• Python/R quantitative libraries</li>
                <li>• Cloud-native architecture (AWS)</li>
                <li>• Real-time data validation</li>
                <li>• Automated backtesting</li>
                <li>• Version control & audit trails</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Outputs</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• Risk dashboards & reports</li>
                <li>• Scenario analysis results</li>
                <li>• Stress test outcomes</li>
                <li>• Early warning indicators</li>
                <li>• Actionable recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Outputs */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Sample Analytics</h2>
          
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Risk Decomposition</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Market Risk</span>
                  <span className="text-zinc-100">$2.1M (35%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Credit Risk</span>
                  <span className="text-zinc-100">$1.8M (30%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Operational Risk</span>
                  <span className="text-zinc-100">$1.2M (20%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Liquidity Risk</span>
                  <span className="text-zinc-100">$900K (15%)</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Scenario P&L Impact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Baseline</span>
                  <span className="text-zinc-100">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">P50 (Median)</span>
                  <span className="text-zinc-100">-$450K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">P95 (Stress)</span>
                  <span className="text-red-400">-$2.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">P99 (Tail)</span>
                  <span className="text-red-400">-$4.8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Ready to see our methodology in action?</h2>
          <p className="mb-8 text-zinc-400 leading-relaxed">
            Start with our Executive Risk Diagnostic to see how these models apply to your specific business.
          </p>
          <a href="/#diagnostic" className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-colors">
            Request Diagnostic
          </a>
        </div>
      </section>
    </div>
  );
}
