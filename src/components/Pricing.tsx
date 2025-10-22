'use client';

import { useState } from 'react';

type Cycle = 'monthly' | 'quarterly';
type TierKey = 'advisory' | 'professional' | 'enterprise';

interface PricingProps {
  calendlyUrl: string;
}

export const TIER_LABELS: Record<TierKey, string> = {
  advisory: 'Advisory',
  professional: 'Professional',
  enterprise: 'Enterprise',
};

export const PRICES: Record<Cycle, Record<TierKey, number>> = {
  monthly:   { advisory: 3500, professional: 6000,  enterprise: 12000 },
  quarterly: { advisory: 8400, professional: 16800, enterprise: 33600 }, // 20% discount for quarterly
};

export const ONBOARDING_FEE: Record<TierKey, { amount: number; plus?: boolean }> = {
  advisory:     { amount: 2000 },
  professional: { amount: 3500 },
  enterprise:   { amount: 5000, plus: true }, // display "$5,000+"
};

export const WHO_ITS_FOR: Record<TierKey, string> = {
  advisory: 'For operators who want monthly guardrails.',
  professional: 'For teams that want deep dives plus a quarterly executive review.',
  enterprise: 'For bespoke modeling, workshops, and priority support.',
};

export const FEATURES: Record<Cycle, Record<TierKey, string[]>> = {
  monthly: {
    advisory: [
      'KPI watch (cash runway, DSO, turns)',
      '1 scenario refresh / month',
      'Email Q&A (next business day)',
      'Quarterly board deck & readout',
    ],
    professional: [
      'Quarterly executive review (live)',
      'Everything in Advisory',
      '2 custom scenarios / month',
      'Waste & concentration deep-dives',
      'Lender/board support',
    ],
    enterprise: [
      'Bespoke modeling (FX/commodities pass-through, elasticity, alt-supplier mix)',
      'Everything in Professional',
      'Executive workshops / tabletop exercises',
      'Priority support (same-day)',
    ],
  },
  quarterly: {
    advisory: [
      'KPI watch (quarterly refresh)',
      '1 scenario refresh / quarter',
      'Email Q&A (48-hr SLA)',
      'Board-ready deck & readout',
    ],
    professional: [
      'Quarterly executive review',
      'Everything in Advisory',
      '2 custom scenarios / quarter',
      'Waste & concentration deep-dives',
      'Lender/board support',
    ],
    enterprise: [
      'Bespoke modeling',
      'Everything in Professional',
      'Executive workshops',
      'Priority support',
    ],
  },
};

export function formatPrice(value: number, cycle: Cycle, tier: TierKey) {
  const unit = cycle === 'monthly' ? '/mo' : '/qtr';
  const plus = tier === 'enterprise' ? '+' : '';
  return `$${value.toLocaleString()}${plus}${unit}`;
}

export default function Pricing({ calendlyUrl }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<Cycle>('monthly');

  const features = FEATURES[billingCycle];

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold">Pricing & Services</h2>

        {/* Step 1 - Executive Risk Diagnostic */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/20 p-8 text-center bg-gradient-to-r from-white/5 to-white/10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-xl font-bold">1</div>
            <h3 className="mb-4 text-xl font-semibold">Executive Risk Diagnostic (10 days)</h3>
            <p className="mb-6 text-white/70">
              We map exposures, run 3 stress tests, and deliver a board-ready plan with owners, thresholds, and expected $ impact. 45-min exec readout included.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$3,000</span>
              <span className="ml-2 text-lg text-white/70">(credited)</span>
            </div>
            <p className="mb-8 text-sm text-white/70">
              Fully credited to your first invoice if you proceed within 30 days.
            </p>
            <div className="flex gap-3">
              <a
                href="/sample-slides.pdf"
                className="flex-1 rounded-md border border-white/25 px-4 py-3 text-center text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                target="_blank"
                rel="noopener noreferrer"
                title="View sample slides"
              >
                SEE SAMPLE SLIDES
              </a>
              <a
                href={calendlyUrl}
                className="flex-1 rounded-md bg-white px-4 py-3 text-center text-sm font-medium text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                target="_blank"
                rel="noopener noreferrer"
                title={calendlyUrl === "#" ? "Link coming soon" : "Start Diagnostic"}
              >
                START DIAGNOSTIC
              </a>
            </div>
          </div>
        </div>

        {/* Step 2 Header */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold">Step 2: Ongoing Programs</h3>
          <p className="mt-2 text-white/70">3-month minimum commitment</p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-neutral-800 p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === 'monthly' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
              }`}
              aria-pressed={billingCycle === 'monthly'}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                billingCycle === 'quarterly' ? 'bg-white text-black' : 'text-white/70 hover:text-white'
              }`}
              aria-pressed={billingCycle === 'quarterly'}
            >
              Quarterly <span className="ml-1 text-xs bg-green-500 text-black px-1.5 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid gap-8 lg:grid-cols-3">
          {(['advisory', 'professional', 'enterprise'] as TierKey[]).map((tier) => (
            <div key={tier} className={`rounded-2xl border p-8 text-center flex flex-col justify-between ${tier === 'professional' ? 'border-white/20 relative' : 'border-white/10'}`}>
              {tier === 'professional' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">MOST POPULAR</span>
                </div>
              )}
              <div>
                <h3 className="mb-4 text-xl font-semibold">{TIER_LABELS[tier]}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{formatPrice(PRICES[billingCycle][tier], billingCycle, tier)}</span>
                </div>
                <div className="mb-4 text-sm text-white/60">
                  Onboarding (if starting without Diagnostic): ${ONBOARDING_FEE[tier].amount.toLocaleString()}{ONBOARDING_FEE[tier].plus ? '+' : ''} one-time.
                </div>
                <div className="mb-4 text-sm text-white/80 font-medium">
                  {WHO_ITS_FOR[tier]}
                </div>
                <ul className="mb-8 space-y-2 text-sm text-white/70 text-left">
                  {features[tier].map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={calendlyUrl}
                className="block w-full rounded-md bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                target="_blank"
                rel="noopener noreferrer"
                title={calendlyUrl === "#" ? "Link coming soon" : "Book a consultation"}
              >
                GET STARTED
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-white/70">Most clients see 4–6× ROI in protected cash or margin within 90 days.</p>
          <p className="mb-8 text-sm text-white/50">
            If you don&apos;t see at least 2× your Diagnostic fee in identified cash or margin protection opportunities, we&apos;ll credit the Diagnostic to future advisory or refund it.
          </p>
          <a
            href={calendlyUrl}
            className="inline-block rounded-md border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            target="_blank"
            rel="noopener noreferrer"
            title={calendlyUrl === "#" ? "Link coming soon" : "Book a consultation"}
          >
            SCHEDULE CONSULTATION
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="mb-8 text-center text-xl font-semibold">FAQ</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">What data do you need?</h4>
              <p className="text-sm text-white/70">
                Minimal exports: COGS by SKU, vendor list, DSO/DSI/DPO, backlog, tariff exposure. 
                Shared via read-only access or secure file transfer.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">How fast is time-to-value?</h4>
              <p className="text-sm text-white/70">
                Executive Risk Diagnostic delivers actionable insights in 10 days. 
                Ongoing programs provide monthly guardrails and quarterly deep-dives.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">What if we have no FP&A?</h4>
              <p className="text-sm text-white/70">
                No problem. We work with basic financial data and can help identify 
                the key metrics you need to track for risk management.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">Will you talk to our vendors?</h4>
              <p className="text-sm text-white/70">
                Only with your explicit permission and as part of specific deep-dive 
                analyses. We never contact vendors without your approval.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">What counts as success?</h4>
              <p className="text-sm text-white/70">
                Measurable outcomes: cash protected, margin points gained, 
                runway extended, stock-out reduction, or risk exposure quantified.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">Money-back guarantee?</h4>
              <p className="text-sm text-white/70">
                If you don&apos;t see at least 2× your Diagnostic fee in identified 
                opportunities, we&apos;ll credit or refund the Diagnostic fee.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">Do you offer one-off engagements?</h4>
              <p className="text-sm text-white/70">
                Executive consultation (90 min) —{' '}
                <a
                  href={calendlyUrl}
                  className="text-white/80 hover:text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Book executive consultation"
                >
                  $3,000
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h4 className="mb-2 text-sm font-medium text-white/90">NDA and confidentiality?</h4>
              <p className="text-sm text-white/70">
                Mutual NDA by default. No sharing of client data with third parties. 
                All team members background-checked and bound by confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}