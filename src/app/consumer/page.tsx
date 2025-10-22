'use client';

import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import Toast from '@/components/Toast';

export default function ConsumerPage() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [contactStep, setContactStep] = useState(1);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [sampleFormSubmitted, setSampleFormSubmitted] = useState(false);

  // Pricing logic
  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === 'quarterly') {
      return Math.round(monthlyPrice * 3 * 0.8); // 20% off for quarterly
    }
    return monthlyPrice;
  };

  const getPriceLabel = (monthlyPrice: number) => {
    const price = getPrice(monthlyPrice);
    const period = billingCycle === 'quarterly' ? '/qtr' : '/mo';
    return `$${price.toLocaleString()}${period}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('company_website');

    // Check honeypot
    if (honeypot) {
      setToast({ message: 'Invalid submission', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        top_risk: formData.get('top_risk'),
        revenue_band: formData.get('revenue'),
        urgency: formData.get('urgency'),
        systems: formData.get('systems'),
        source: 'consumer_landing'
      });

      if (error) {
        throw error;
      }

      // Track contact form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_submit', {
          event_category: 'engagement',
          event_label: 'consumer_contact_form'
        });
      }

      setFormSubmitted(true);
      setToast({ message: 'Thank you! We&apos;ll follow up within 24 hours.', type: 'success' });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSampleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Track sample download
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sample_download', {
        event_category: 'engagement',
        event_label: 'consumer_sample_slides'
      });
    }

    setSampleFormSubmitted(true);
    
    // In a real implementation, you would send this to your CRM/email service
    console.log('Sample request:', {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      source: 'consumer_landing'
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80' : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-6xl px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-400 flex items-center justify-center">
                <span className="text-black font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-zinc-100/95">Bulwark Risk</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => smoothScrollTo('diagnostic')} className="text-zinc-400 hover:text-zinc-100/95 transition-colors">Diagnostic</button>
              <button onClick={() => smoothScrollTo('programs')} className="text-zinc-400 hover:text-zinc-100/95 transition-colors">Programs</button>
              <button onClick={() => smoothScrollTo('proof')} className="text-zinc-400 hover:text-zinc-100/95 transition-colors">Proof</button>
              <button onClick={() => smoothScrollTo('faq')} className="text-zinc-400 hover:text-zinc-100/95 transition-colors">FAQ</button>
              <button onClick={() => smoothScrollTo('contact')} className="text-zinc-400 hover:text-zinc-100/95 transition-colors">Contact</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex h-[88vh] items-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
        style={{ 
          backgroundImage: "url('/hero.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-zinc-100/95 md:text-6xl">
            Consumer goods risk forecasting for business leaders.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Identify the 3–5 risks that move your cash & margin. Get a board-ready plan in 10 days.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href={calendly}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'start_diagnostic', {
                    event_category: 'engagement',
                    event_label: 'consumer_hero_cta'
                  });
                }
              }}
              className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]"
              target="_blank"
              rel="noopener noreferrer"
              title={calendly === "#" ? "Link coming soon" : "Start Diagnostic"}
            >
              Start Diagnostic
            </a>
            <button
              onClick={() => setShowSampleModal(true)}
              className="rounded-md border border-zinc-800/80 px-5 py-3 text-sm font-medium text-zinc-100/95 hover:bg-zinc-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400/50"
              title="View sample slides"
            >
              See Sample Slides
            </button>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80">
                <div className="h-2 w-2 rounded-full bg-sky-400"></div>
                <span className="text-sm text-zinc-400">Consumer Goods</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80">
                <div className="h-2 w-2 rounded-full bg-sky-400"></div>
                <span className="text-sm text-zinc-400">Retail</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80">
                <div className="h-2 w-2 rounded-full bg-sky-400"></div>
                <span className="text-sm text-zinc-400">E-commerce</span>
              </div>
            </div>
            <div className="text-center text-sm text-zinc-400">
              Read-only access · No PII required · Encrypted at rest · 12-month retention · NDA by default
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Consumer Goods Success Stories</h2>
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* Case Study 1 */}
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <div className="mb-4 text-sm font-medium text-zinc-400">CONSUMER BRAND CLIENT</div>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Situation</h3>
              <p className="mb-4 text-zinc-400 text-sm leading-relaxed">
                $85M consumer brand with seasonal demand spikes, supplier concentration risk, and inventory carrying costs eating margins.
              </p>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">What we did</h3>
              <p className="mb-4 text-zinc-400 text-sm leading-relaxed">
                10-day diagnostic mapped seasonal patterns, supplier dependencies, and inventory optimization opportunities with demand forecasting.
              </p>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Results</h3>
              <ul className="text-zinc-400 text-sm space-y-1">
                <li>• $680k cash from inventory optimization (25% reduction)</li>
                <li>• Supplier diversification plan implemented</li>
                <li>• 45-day cash runway added through better forecasting</li>
              </ul>
            </div>

            {/* Case Study 2 */}
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <div className="mb-4 text-sm font-medium text-zinc-400">RETAIL CHAIN CLIENT</div>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Situation</h3>
              <p className="mb-4 text-zinc-400 text-sm leading-relaxed">
                $150M retail chain with 200+ locations, seasonal inventory challenges, and vendor concentration in key categories.
              </p>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">What we did</h3>
              <p className="mb-4 text-zinc-400 text-sm leading-relaxed">
                Quarterly blueprint identified waste patterns, vendor concentration, and seasonal inventory optimization with location-specific scenarios.
              </p>
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Results</h3>
              <ul className="text-zinc-400 text-sm space-y-1">
                <li>• $420k COGS from inventory optimization (18%)</li>
                <li>• Inventory turns improved 22%</li>
                <li>• Seasonal planning reduced stockouts by 35%</li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center mb-12">
            <blockquote className="text-xl text-zinc-400 italic mb-4 leading-relaxed">
              "Finally understand our seasonal risks and have a plan to manage them before they impact cash flow."
            </blockquote>
            <div className="text-zinc-500">— Consumer Brand CFO</div>
          </div>

          {/* Sample PDF Link */}
          <div className="text-center">
            <button
              onClick={() => setShowSampleModal(true)}
              className="inline-block rounded-md border border-zinc-800/80 px-6 py-3 text-sm font-medium text-zinc-100/95 hover:bg-zinc-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400/50"
              title="Download redacted sample"
            >
              Download redacted sample (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Sample Slides Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800/80 p-8 max-w-md w-full shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-zinc-100/95">Download Sample Slides</h3>
              <button
                onClick={() => {
                  setShowSampleModal(false);
                  setSampleFormSubmitted(false);
                }}
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {!sampleFormSubmitted ? (
              <form onSubmit={handleSampleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="sample-name" className="block text-sm font-medium text-zinc-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="sample-name"
                    name="name"
                    required
                    className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-emerald-400/50 text-zinc-100/95"
                  />
                </div>
                <div>
                  <label htmlFor="sample-email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="sample-email"
                    name="email"
                    required
                    className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-emerald-400/50 text-zinc-100/95"
                  />
                </div>
                <div>
                  <label htmlFor="sample-company" className="block text-sm font-medium text-zinc-400 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="sample-company"
                    name="company"
                    required
                    className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-emerald-400/50 text-zinc-100/95"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-400 px-4 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]"
                >
                  Download Sample
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-full bg-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-100/95 mb-2">Sample Slides Ready!</h4>
                  <p className="text-zinc-400 text-sm mb-6">
                    We've sent the download link to your email and you can access it below.
                  </p>
                </div>
                <a
                  href="/sample-slides.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-emerald-400 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]"
                >
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}
