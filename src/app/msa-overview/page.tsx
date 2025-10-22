import Link from 'next/link';

export default function MSAOverviewPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-zinc-100/95 mb-8">Master Service Agreement Overview</h1>
        
        <div className="space-y-8">
          <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">What is an MSA?</h2>
            <p className="text-zinc-400 leading-relaxed">
              A Master Service Agreement (MSA) is a comprehensive contract that establishes the framework for our ongoing business relationship. 
              It covers terms, conditions, and expectations for all services we provide, ensuring clarity and protection for both parties.
            </p>
          </div>
          
          <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">Key Terms Summary</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Service Scope</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Risk assessment, scenario modeling, and advisory services as outlined in individual Statements of Work (SOWs). 
                  Each engagement begins with a detailed SOW specifying deliverables, timelines, and fees.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Payment Terms</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Net 7 payment terms (ACH, wire transfer, or credit card accepted). Invoices are due within 7 days of receipt. 
                  Quarterly prepayment options available with 20% savings.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Termination & Notice</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Either party may terminate with 30 days written notice. Minimum terms apply to ongoing programs 
                  (3 months for Advisory/Professional, quarterly for Enterprise).
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Confidentiality</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Mutual non-disclosure agreement covering all proprietary information, financial data, and business processes. 
                  Standard 5-year confidentiality period with ongoing protection for trade secrets.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Data Security</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  SOC2-aligned security practices, AES-256 encryption, read-only data access, and 12-month data retention policy. 
                  No PII collection or storage.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-100/95 mb-2">Liability & Guarantees</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Professional liability coverage. Diagnostic guarantee: if we don't identify at least 2× the fee in cash or 
                  margin opportunities, we'll credit the fee toward future services or provide a full refund.
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-zinc-800/80 p-8 bg-zinc-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]">
            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">Standard SOW Template</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100/95">Executive Risk Diagnostic</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    10-day engagement: $3,000, 100% credited to first invoice if you proceed within 30 days. 
                    Includes heatmap, 3 stress scenarios, action plan, and executive readout.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100/95">Ongoing Programs</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Advisory ($3,500/mo), Professional ($6,000/mo), Enterprise ($12,000+/mo) with defined deliverables, 
                    monthly/quarterly reviews, and escalation procedures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100/95">Add-on Services</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Vendor assessments ($4,000), continuity planning ($7,500), tabletop exercises ($5,000), 
                    SKU rationalization ($6,000), lender packages ($3,000).
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8">
            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-4">Ready to Get Started?</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Our standard MSA is designed to be fair, transparent, and protective of both parties' interests. 
              We're happy to discuss any specific terms or answer questions about the agreement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:austin@bulwarkrisk.com?subject=MSA%20Request"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]"
              >
                Request Full MSA
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-zinc-800/80 text-zinc-100/95 font-medium hover:bg-zinc-900/60 transition-colors"
              >
                Start Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
