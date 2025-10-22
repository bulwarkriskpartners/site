import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-zinc-100/95 mb-8">About Bulwark Risk Partners</h1>
        
        <div className="prose prose-zinc max-w-none">
          <p className="text-zinc-400 leading-relaxed text-lg">
            Bulwark Risk Partners provides executive risk advisory services to help business leaders identify, 
            quantify, and mitigate operational risks that impact cash flow and margins. Our approach combines 
            institutional-grade risk modeling with practical, actionable strategies that protect business value 
            and enable confident decision-making in uncertain environments.
          </p>
          
          <p className="text-zinc-400 leading-relaxed">
            We work exclusively with established businesses ($20M–$300M revenue) facing operational complexity 
            in supply chains, vendor relationships, inventory management, and cash flow optimization. Our services 
            include risk assessments, scenario modeling, and ongoing advisory programs designed to provide 
            board-ready insights and owner-assigned action plans.
          </p>
          
          <p className="text-zinc-400 leading-relaxed">
            All engagements begin with our 10-Day Executive Risk Diagnostic, which maps key risk exposures, 
            stress-tests current assumptions, and delivers a prioritized action plan with quantified impacts. 
            We maintain strict confidentiality through mutual NDAs and provide read-only access to client systems 
            with SOC2-aligned security practices.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 transition-colors"
          >
            Start Diagnostic
          </Link>
        </div>
      </div>
    </div>
  );
}
