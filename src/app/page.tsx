'use client';

import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import Pricing from '@/components/Pricing';
import Toast from '@/components/Toast';

export default function Home() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      // Check if Supabase is configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
        throw new Error('Supabase not configured');
      }

      const { error } = await supabase.from('leads').insert([{
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        revenue_band: formData.get('revenue'),
        systems: formData.get('systems'),
        top_risk: formData.get('top_risk'),
        user_agent: navigator.userAgent,
        page_url: window.location.href,
      }]);

      if (error) {
        throw error;
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

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl tracking-widest">BULWARK RISK</div>
          <nav className="hidden gap-8 text-sm tracking-wider md:flex">
            <a 
              href="#contact" 
              className="opacity-80 hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('contact');
              }}
            >
              CONTACT
            </a>
            <a 
              href="#inquire" 
              className="opacity-80 hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('inquire');
              }}
            >
              CLIENT INQUIRIES
            </a>
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
            Institutional-grade risk forecasting for business leaders.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
            We map exposures, run stress tests, and send a monthly action plan that protects cash and margin.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendly}
              className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              target="_blank"
              rel="noopener noreferrer"
              title={calendly === "#" ? "Link coming soon" : "Book a consultation"}
            >
              BOOK A CONSULTATION
            </a>
            <a
              href="#inquire"
              className="rounded-md border border-white/25 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('inquire');
              }}
            >
              CLIENT INQUIRIES
            </a>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 text-center text-3xl font-semibold">What you get</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Risk Heatmap</h3>
              <p className="text-white/70">With dollarized exposure (suppliers, customers, SKUs, geos).</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">3 Stress Scenarios</h3>
              <p className="text-white/70">With P50/P95 impact on revenue, gross margin, and cash runway.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Top-5 Actions</h3>
              <p className="text-white/70">With owners, thresholds, and expected $ impact.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="mb-3 text-lg font-semibold">Board-Ready PDF</h3>
              <p className="text-white/70">12 slides + 45-min exec readout.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="/sample-slides.pdf"
              className="inline-block rounded-md border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              target="_blank"
              rel="noopener noreferrer"
              title="View sample slides"
            >
              SEE SAMPLE SLIDES
            </a>
          </div>
        </div>
      </section>

      {/* Recent outcomes */}
      <section className="bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-sm text-white/60">
              <span className="font-medium text-white/80">DSO −6 days</span> → +$520k cash cushion
            </div>
            <div className="text-sm text-white/60">
              <span className="font-medium text-white/80">Slow-SKU reorders −10%</span> → −$240k COGS
            </div>
            <div className="text-sm text-white/60">
              <span className="font-medium text-white/80">Tariff +10% pass-through</span> → ~100 bps GM protected
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing calendlyUrl={calendly} />

      {/* Inquiry form */}
      <section id="inquire" className="bg-black">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Client Inquiries</h2>
            <p className="mt-3 text-white/70">
              Ready to protect your business? Share a few details and we&apos;ll follow up within 24 hours.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Read-only access. No PII required. Encrypted at rest. 12-month retention.
            </p>
          </div>
          
          {formSubmitted ? (
            <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-white/5 to-white/10 p-8 text-center">
              <h3 className="mb-4 text-xl font-semibold">Thanks—your inquiry is in</h3>
              <p className="mb-6 text-white/70">
                We&apos;ve received your inquiry and will follow up within 24 hours. 
                Want to talk sooner?
              </p>
              <a
                href={calendly}
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                target="_blank"
                rel="noopener noreferrer"
                title={calendly === "#" ? "Link coming soon" : "Book a consultation"}
              >
                BOOK A CONSULTATION
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4"
            >
            <input 
              name="name" 
              placeholder="Name *" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              required 
              aria-label="Full name"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email *" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              required 
              aria-label="Email address"
            />
            <input 
              name="phone" 
              placeholder="Phone" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              aria-label="Phone number"
            />
            <input 
              name="company" 
              placeholder="Company" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              aria-label="Company name"
            />
            <select 
              name="revenue" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50"
              aria-label="Revenue band"
            >
              <option value="">Revenue band</option>
              <option value="<15M">&lt;$15M</option>
              <option value="15-50M">$15–50M</option>
              <option value="50-150M">$50–150M</option>
              <option value="150M+">$150M+</option>
            </select>
            <input 
              name="systems" 
              placeholder="Systems (QB/Shopify/etc.)" 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              aria-label="Current systems"
            />
            <textarea 
              name="top_risk" 
              placeholder="Top risk right now" 
              rows={4} 
              className="rounded-md bg-neutral-900 p-3 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/50" 
              aria-label="Top risk description"
            />
            {/* Honeypot field - hidden from users */}
            <input 
              name="company_website" 
              type="text" 
              style={{ display: 'none' }} 
              tabIndex={-1} 
              autoComplete="off" 
              aria-hidden="true"
            />
            <button 
              className="mt-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
            </form>
          )}
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-neutral-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="text-center text-xs text-white/50">
            Operational risk advisory. Not investment advice. Read-only data access. 12-month retention.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Bulwark Risk Partners · austin@bulwarkrisk.com</div>
          <div className="flex gap-4 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            {process.env.NEXT_PUBLIC_SHOW_ADMIN_LINK === 'true' && (
              <a href="/admin" className="hover:text-white transition-colors">Admin</a>
            )}
          </div>
        </div>
      </footer>

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