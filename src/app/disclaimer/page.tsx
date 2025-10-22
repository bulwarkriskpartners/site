'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';

export default function Disclaimer() {
  const [isScrolled, setIsScrolled] = useState(false);

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

      {/* Content */}
      <section className="bg-zinc-950 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold text-white mb-8">Disclaimer</h1>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <div className="rounded-lg border border-zinc-700/50 p-6 bg-zinc-800/40">
                <h2 className="text-xl font-semibold text-white mb-4">Important Notice</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Bulwark Risk Partners LLC provides operational risk analytics and decision support services. 
                  We do not provide investment advice, financial planning services, or recommendations regarding 
                  the purchase or sale of securities.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Service Scope</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Our services are limited to operational risk analysis, scenario modeling, and strategic recommendations 
                  for risk management. All analysis and recommendations are based on the information provided by clients 
                  and publicly available data.
                </p>
                <ul className="text-zinc-300 space-y-2 ml-6">
                  <li>• We do not guarantee specific financial outcomes</li>
                  <li>• Past performance does not predict future results</li>
                  <li>• All risk assessments are based on historical data and assumptions</li>
                  <li>• Clients should consult qualified professionals for investment decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Bulwark Risk Partners LLC shall not be liable for any direct, indirect, incidental, special, 
                  or consequential damages resulting from the use of our services or reliance on our analysis. 
                  Our total liability shall not exceed the fees paid for the specific engagement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Confidentiality</h2>
                <p className="text-zinc-300 leading-relaxed">
                  All client information is treated as confidential and is covered by mutual non-disclosure agreements. 
                  We maintain strict confidentiality standards and do not share client information with third parties 
                  without explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Professional Standards</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Our analysis and recommendations are provided in good faith based on professional judgment and 
                  industry best practices. However, all business decisions remain the sole responsibility of our clients.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-700/50 p-6 bg-zinc-800/40">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}<br/>
                  For questions about this disclaimer, please contact us through our inquiries page.
                </p>
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
          </div>
          <div className="text-center text-xs text-zinc-500">
            Bulwark provides operational risk analytics and decision support. We do not provide investment advice. No guarantee of results.
          </div>
        </div>
      </footer>
    </main>
  );
}
