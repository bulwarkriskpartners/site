'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER } from '@/lib/globals';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import ProofStripe from '@/components/ui/ProofStripe';

export default function Team() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: 'Principal, Risk Analytics',
      pedigree: 'Ex-HF quant; 12y institutional risk modeling',
      mandates: 'Led treasury stress testing for $2B PE portfolio; advised 40+ ops teams'
    },
    {
      name: 'Principal, Operations',
      pedigree: 'Ex-FAANG supply chain; MBA Wharton',
      mandates: 'Built continuity frameworks for Fortune 500; scaled 3 startups through IPO'
    },
    {
      name: 'Principal, Data & Systems',
      pedigree: 'Ex-Big4 forensics; CFA',
      mandates: 'Integrated risk dashboards for 20+ ERP environments; SOC 2 architect'
    }
  ];

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
            <a href="/" className="opacity-60 hover:opacity-100 transition-opacity">HOME</a>
            <a href="/approach" className="opacity-60 hover:opacity-100 transition-opacity">APPROACH</a>
            <a href="/case-studies" className="opacity-60 hover:opacity-100 transition-opacity">CASE STUDIES</a>
            <a href="/insights" className="opacity-60 hover:opacity-100 transition-opacity">INSIGHTS</a>
            <a href="/security" className="opacity-60 hover:opacity-100 transition-opacity">SECURITY</a>
            <a href="/inquiries" className="opacity-60 hover:opacity-100 transition-opacity">INQUIRIES</a>
          </nav>
        </div>
      </header>

      <div className="pt-20 bg-zinc-950">
        <ProofStripe />
        
        <Section title="Team">
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, idx) => (
              <Card key={idx}>
                <div className="aspect-square bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-sm text-zinc-300 mb-3">{member.pedigree}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{member.mandates}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <Card className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Work with us</h3>
            <p className="text-zinc-300 mb-6">
              We work with a limited number of clients at a time to ensure boutique-level attention.
            </p>
            <a
              href="/inquiries"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Start an Inquiry
            </a>
          </Card>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 py-8">
        <div className={`${SITE_CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 mb-6 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Encryption in transit & at rest</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>U.S. hosting</span>
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
