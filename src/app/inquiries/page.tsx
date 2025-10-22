'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import { analytics, captureUTM } from '@/lib/analytics';

export default function Inquiries() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const utm = captureUTM();

      const payload = {
        type: 'advanced',
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        role: formData.get('role'),
        industry: formData.get('industry'),
        size: formData.get('size'),
        objective: formData.get('objective'),
        data_readiness: formData.get('data_readiness'),
        urgency: formData.get('urgency'),
        budget: formData.get('budget'),
        ...utm,
        timestamp: new Date().toISOString(),
      };

      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      analytics.leadAdvancedSubmit();
      setFormSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
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
              className="opacity-100 hover:opacity-100 transition-opacity"
            >
              INQUIRIES
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className={`${SITE_CONTAINER} relative z-10 pt-28 pb-24 min-h-[60vh] flex items-center`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl tracking-tight drop-shadow-lg">
              Inquiries
            </h1>
            <p className="mt-6 text-lg text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              Tell us about your business and risk challenges.
            </p>
          </div>
        </div>
      </section>

      <ProofStripe />

      {/* Two Column Layout */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Left Column - Intro */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  How We Work Together
                </h2>
                <p className="text-zinc-300 leading-relaxed">
                  We start with a 15-minute fit call to understand your risk profile and challenges. 
                  If there's mutual alignment, we proceed with an Executive Risk Diagnostic.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xs">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-200">Initial Consultation</h3>
                    <p className="text-sm text-zinc-400">15-minute fit call to assess alignment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xs">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-200">Executive Diagnostic</h3>
                    <p className="text-sm text-zinc-400">10-day deep dive into your risk exposures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xs">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-200">Implementation</h3>
                    <p className="text-sm text-zinc-400">Board-ready action plan with ongoing support</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-zinc-700/50 p-6 bg-zinc-800/40">
                <h3 className="font-medium text-zinc-200 mb-2">Response Time</h3>
                <p className="text-sm text-zinc-400">
                  We respond to all inquiries within 24 hours. NDA by default for all discussions.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              {formSubmitted ? (
                <div className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
                  <div className="text-center mb-8">
                    <div className="h-16 w-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Inquiry Received</h3>
                    <p className="text-zinc-300 mb-2">
                      Thank you for your detailed inquiry.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-zinc-700/50 p-6 bg-zinc-800/40 mb-6">
                    <h4 className="font-medium text-zinc-200 mb-3">What happens next</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      <li>• We review your risk profile within 24 hours</li>
                      <li>• Our team will reach out to schedule a 15-minute fit call</li>
                      <li>• All communications are covered under NDA</li>
                    </ul>
                  </div>
                  
                  <p className="text-xs text-zinc-500 text-center">
                    <strong>SLA:</strong> We respond within 24 hours under NDA.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] space-y-6">
                  {/* Progress Banner */}
                  <div className="mb-6 pb-6 border-b border-zinc-700/50">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className={currentStep >= 1 ? 'text-teal-500 font-medium' : ''}>Step 1: Basic</span>
                      <span className="text-zinc-600">→</span>
                      <span className={currentStep >= 2 ? 'text-teal-500 font-medium' : ''}>Step 2: Business</span>
                      <span className="text-zinc-600">→</span>
                      <span className={currentStep >= 3 ? 'text-teal-500 font-medium' : ''}>Step 3: Timeline & Files</span>
                    </div>
                    <div className="mt-3 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 transition-all duration-300" 
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Basic Information</h3>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <input 
                        name="name" 
                        placeholder="Name *" 
                        required
                        onFocus={() => setCurrentStep(1)}
                        className="rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100" 
                      />
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email *" 
                        required
                        onFocus={() => setCurrentStep(1)}
                        className="rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100" 
                      />
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <input 
                        name="company" 
                        placeholder="Company *" 
                        required
                        onFocus={() => setCurrentStep(1)}
                        className="rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100" 
                      />
                      <input 
                        name="role" 
                        placeholder="Role *" 
                        required
                        onFocus={() => setCurrentStep(1)}
                        className="rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100" 
                      />
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Business Details</h3>
                    
                    <select 
                      name="industry" 
                      required
                      onFocus={() => setCurrentStep(2)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100"
                    >
                      <option value="">Industry *</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="distribution">Distribution</option>
                      <option value="retail">Retail</option>
                      <option value="services">Services</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                    
                    <select 
                      name="size" 
                      required
                      onFocus={() => setCurrentStep(2)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100"
                    >
                      <option value="">Headcount or Revenue band *</option>
                      <option value="<5M">&lt;$5M revenue</option>
                      <option value="5-20M">$5-20M revenue</option>
                      <option value="20-50M">$20-50M revenue</option>
                      <option value="50-200M">$50-200M revenue</option>
                      <option value="200M+">$200M+ revenue</option>
                      <option value="<50">&lt;50 employees</option>
                      <option value="50-200">50-200 employees</option>
                      <option value="200-1000">200-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  {/* Objectives */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Objectives</h3>
                    
                    <select 
                      name="objective" 
                      required
                      onFocus={() => setCurrentStep(2)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100"
                    >
                      <option value="">Primary objective *</option>
                      <option value="risk-assessment">Risk assessment & exposure analysis</option>
                      <option value="cash-optimization">Cash flow optimization</option>
                      <option value="supply-chain">Supply chain risk management</option>
                      <option value="vendor-management">Vendor concentration analysis</option>
                      <option value="board-reporting">Board reporting & governance</option>
                      <option value="crisis-planning">Crisis planning & continuity</option>
                      <option value="other">Other</option>
                    </select>
                    
                    <textarea 
                      name="data_readiness" 
                      placeholder="Data readiness (ERP/BI/tools available)" 
                      rows={3}
                      onFocus={() => setCurrentStep(2)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100" 
                    />
                  </div>

                  {/* Timeline & Budget */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Timeline & Budget</h3>
                    
                    <select 
                      name="urgency" 
                      required
                      onFocus={() => setCurrentStep(3)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100"
                    >
                      <option value="">Urgency *</option>
                      <option value="immediate">This month</option>
                      <option value="quarter">This quarter</option>
                      <option value="exploratory">Exploratory</option>
                    </select>
                    
                    <select 
                      name="budget"
                      onFocus={() => setCurrentStep(3)} 
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100"
                    >
                      <option value="">Budget band (optional)</option>
                      <option value="<5k">&lt;$5,000</option>
                      <option value="5-10k">$5,000-$10,000</option>
                      <option value="10-25k">$10,000-$25,000</option>
                      <option value="25k+">$25,000+</option>
                    </select>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white">Additional Information</h3>
                    
                    <input 
                      type="file" 
                      name="file_upload" 
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                      onFocus={() => setCurrentStep(3)}
                      className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-zinc-700 file:text-zinc-200 hover:file:bg-zinc-600"
                    />
                    <p className="text-xs text-zinc-500">
                      Optional: Upload any relevant documents (PDF, DOC, XLS, CSV)
                    </p>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <label className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        name="consent" 
                        required
                        onFocus={() => setCurrentStep(3)}
                        className="mt-1 rounded border-zinc-600 bg-zinc-800 text-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                      />
                      <span className="text-sm text-zinc-300">
                        I consent to Bulwark Risk Partners contacting me about this inquiry and understand that all communications are covered by mutual NDA. *
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium transition-colors px-6 py-4 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
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
          </div>
          <div className="text-center text-xs text-zinc-500">
            Bulwark provides operational risk analytics and decision support. We do not provide investment advice. No guarantee of results.
          </div>
        </div>
      </footer>
    </main>
  );
}
