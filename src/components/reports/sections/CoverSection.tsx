'use client';

import Watermark from '../Watermark';

interface ReportData {
  client: {
    name: string;
    slug: string;
    logoUrl?: string;
  };
  report: {
    id: string;
    title: string;
    date: string;
    preparedBy: string;
  };
}

interface CoverSectionProps {
  data: ReportData;
}

export default function CoverSection({ data }: CoverSectionProps) {
  return (
    <section id="cover" className="min-h-screen flex flex-col justify-center items-center text-center py-20">
      <Watermark 
        clientName={data.client.name} 
        date={data.report.date} 
        position="header" 
      />
      
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Bulwark Brand */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-100 mb-2">Bulwark Risk Partners</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        
        {/* Report Title */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-zinc-100 mb-4">
            {data.report.title}
          </h2>
          <div className="text-2xl text-zinc-400 mb-2">
            {data.client.name}
          </div>
          <div className="text-lg text-zinc-500">
            {new Date(data.report.date).toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </div>
        </div>
        
        {/* Confidentiality Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-4 py-2 bg-zinc-800/60 border border-zinc-700 rounded-full text-sm text-zinc-300">
            Private & Confidential
          </div>
          <div className="px-4 py-2 bg-zinc-800/60 border border-zinc-700 rounded-full text-sm text-zinc-300">
            Prepared by {data.report.preparedBy}
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-sm text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          <p className="mb-4">
            This report is Private & Confidential, prepared exclusively for {data.client.name} by Bulwark Risk Partners. 
            No redistribution without written consent.
          </p>
          <p>
            Operational risk advisory—not investment advice. See Appendix for assumptions.
          </p>
        </div>
      </div>
      
      <Watermark 
        clientName={data.client.name} 
        date={data.report.date} 
        position="footer" 
      />
    </section>
  );
}
