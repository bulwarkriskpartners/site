'use client';

import { useState, useEffect } from 'react';
import { SITE_CONTAINER, SECTION_CONTAINER } from '@/lib/globals';
import ProofStripe from '@/components/ui/ProofStripe';
import QuickLeadModal from '@/components/lead/QuickLeadModal';
import { analytics } from '@/lib/analytics';

export default function Insights() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuickLead, setShowQuickLead] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const posts = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'BTC at ATH: What It Means for Treasury Risk',
      excerpt: 'As Bitcoin reaches new all-time highs, treasury departments face unique risk exposures. We analyze the operational implications for businesses holding crypto assets and the risk management frameworks needed.',
      readTime: '8 min read'
    },
    {
      id: 2,
      date: '2024-01-08',
      title: 'Vendor Concentration: A Practical Playbook',
      excerpt: 'Most businesses underestimate their vendor concentration risk until it\'s too late. Here\'s a step-by-step framework for identifying, measuring, and mitigating supplier dependencies that could disrupt operations.',
      readTime: '12 min read'
    },
    {
      id: 3,
      date: '2024-01-02',
      title: 'When Liquidity Dries Up: Board Questions for Q4',
      excerpt: 'As we enter Q4, liquidity risk becomes critical for planning. We outline the key questions boards should ask their finance teams and the early warning indicators that matter most.',
      readTime: '6 min read'
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
              className="opacity-100 hover:opacity-100 transition-opacity"
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

      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className={`${SITE_CONTAINER} relative z-10 pt-28 pb-24 min-h-[60vh] flex items-center`}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl tracking-tight drop-shadow-lg">
              Insights
            </h1>
            <p className="mt-6 text-lg text-zinc-200 md:text-xl leading-relaxed drop-shadow-md">
              Analysis and frameworks for operational risk management.
            </p>
          </div>
        </div>
      </section>

      <ProofStripe />

      {/* Posts */}
      <section className="bg-zinc-950 py-20 md:py-24">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={`/insights/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  onClick={() => analytics.insightOpen(post.title)}
                  className="block rounded-2xl border border-zinc-700/80 p-8 bg-zinc-900/80 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:border-zinc-600/80 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:outline-none"
                >
                  {/* Disclaimer Block */}
                  <div className="mb-6 p-4 rounded-lg bg-zinc-800/60 border border-zinc-700/50">
                    <p className="text-xs text-zinc-400">
                      <strong>Disclaimer:</strong> This analysis is for informational purposes only and does not constitute investment advice. 
                      Past performance does not guarantee future results. Consult with qualified professionals before making any financial decisions.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-white mb-4 group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <span className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                    Read more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-12">
        <div className={`${SECTION_CONTAINER}`}>
          <div className="text-center">
            <a
              href="/inquiries"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-white hover:bg-neutral-200 text-black font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg outline-none focus-visible:ring-1 focus-visible:ring-neutral-600"
            >
              Start an Inquiry
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

      <QuickLeadModal isOpen={showQuickLead} onClose={() => setShowQuickLead(false)} />
    </main>
  );
}
