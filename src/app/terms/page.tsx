import { Metadata } from 'next';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';

export const metadata: Metadata = {
  title: 'Terms of Service | Bulwark Risk Partners',
  description: 'Terms of service for Bulwark Risk Partners risk advisory services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <section className={`${SITE_CONTAINER} relative py-20 md:py-24`}>
        <div className={COPY_NARROW}>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-100/95 md:text-5xl tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl leading-relaxed">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className={`${SECTION_CONTAINER}`}>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            
            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">1. Services</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Bulwark Risk Partners provides operational risk advisory services including risk assessments, 
              scenario analysis, and risk management consulting. Our services are designed to help businesses 
              identify, quantify, and mitigate operational risks.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">2. Not Investment Advice</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Our services do not constitute investment advice, financial planning, or investment recommendations. 
              We do not provide fiduciary services or manage client funds. All risk assessments and recommendations 
              are advisory in nature and should be evaluated by qualified professionals.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">3. No Guarantee of Results</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              While we provide risk assessments and recommendations based on our analysis, we cannot guarantee 
              specific outcomes or results. Risk management involves inherent uncertainties, and past performance 
              does not guarantee future results.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">4. Confidentiality</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We maintain strict confidentiality regarding all client information and data. We will not disclose 
              client information to third parties without written consent, except as required by law or as 
              necessary to provide our services.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">5. Data Security</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We implement appropriate technical and organizational measures to protect client data. However, 
              no method of transmission or storage is 100% secure. Clients are responsible for ensuring 
              appropriate security measures for their own systems.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">6. Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              To the maximum extent permitted by law, Bulwark Risk Partners shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but not limited to 
              loss of profits, data, or business opportunities.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">7. Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
              without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-100/95 mb-6">8. Contact Information</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@bulwarkrisk.com
              <br />
              Address: Bulwark Risk Partners, Delaware, USA
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}