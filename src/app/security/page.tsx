'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';

export default function SecurityPage() {
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
              className="opacity-100 hover:opacity-100 transition-opacity"
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
      <section className={`${SITE_CONTAINER} relative py-20 md:py-24`}>
        <div className={COPY_NARROW}>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-100/95 md:text-5xl tracking-tight mb-6">
            Security
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl leading-relaxed">
            Security architecture and controls to protect your sensitive business data.
          </p>
        </div>
      </section>

      <ProofStripe />

      {/* Architecture Overview */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Security Architecture</h2>
          
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-6 text-xl font-semibold text-zinc-100/95">Data Protection</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Encryption at Rest</div>
                    <div className="text-sm text-zinc-400">AES-256 encryption for all stored data</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Encryption in Transit</div>
                    <div className="text-sm text-zinc-400">TLS 1.3 for all data transmission</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Data Residency</div>
                    <div className="text-sm text-zinc-400">US-based infrastructure, data never leaves US</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Secure Key Management</div>
                    <div className="text-sm text-zinc-400">AWS KMS with automatic key rotation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-6 text-xl font-semibold text-zinc-100/95">Access Controls</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Multi-Factor Authentication</div>
                    <div className="text-sm text-zinc-400">Required for all system access</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Role-Based Access</div>
                    <div className="text-sm text-zinc-400">Principle of least privilege</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Audit Logging</div>
                    <div className="text-sm text-zinc-400">Complete activity tracking and monitoring</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-neutral-850 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-zinc-300">Session Management</div>
                    <div className="text-sm text-zinc-400">Automatic timeout and secure session handling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Compliance & Certifications</h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">SOC 2 Type II</h3>
              <div className="text-sm text-zinc-400 mb-4">
                In progress.
              </div>
              <div className="text-xs text-zinc-500">
                Security, availability, processing integrity, confidentiality, and privacy controls.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Data Processing Agreement</h3>
              <div className="text-sm text-zinc-400 mb-4">
                Standard DPA available for all client engagements.
              </div>
              <div className="text-xs text-zinc-500">
                GDPR-compliant data processing terms and data protection measures.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 p-6 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
              <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Mutual NDA</h3>
              <div className="text-sm text-zinc-400 mb-4">
                Default confidentiality agreement for all engagements.
              </div>
              <div className="text-xs text-zinc-500">
                Protects both client and firm confidential information.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-100/95">Data Handling & Retention</h2>
          
          <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] mb-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Data Collection</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Financial statements and operational data</li>
                  <li>• Vendor and customer information</li>
                  <li>• Risk exposure and historical data</li>
                  <li>• Market and economic indicators</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-lg font-semibold text-zinc-100/95">Data Retention</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Active engagement: Full data retention</li>
                  <li>• Post-engagement: 7 years minimum</li>
                  <li>• Data deletion on request (contractual)</li>
                  <li>• Regular data purging protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Brief Download */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-2xl font-semibold text-zinc-100/95">Security Brief</h2>
          <p className="mb-8 text-zinc-400 leading-relaxed">
            Download our comprehensive 2-page security brief with detailed architecture diagrams and control descriptions.
          </p>
          <a 
            href="/security-brief.pdf" 
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white hover:bg-neutral-200 text-black font-medium transition-colors"
          >
            Download Security Brief (PDF)
          </a>
        </div>
      </section>

      {/* Contact for DPA/NDA */}
      <section className="bg-zinc-950 py-12">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection & NDAs</h2>
            <p className="text-zinc-300 mb-6">
              For data processing agreements, NDAs, or security documentation requests, please contact us.
            </p>
            <a
              href="/inquiries"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-white hover:bg-neutral-200 text-black font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg outline-none focus-visible:ring-1 focus-visible:ring-neutral-600"
            >
              Contact Us
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