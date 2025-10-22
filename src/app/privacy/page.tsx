import { Metadata } from 'next';
import { SITE_CONTAINER, SECTION_CONTAINER, COPY_NARROW } from '@/lib/globals';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bulwark Risk Partners',
  description: 'Privacy policy for Bulwark Risk Partners risk advisory services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <section className={`${SITE_CONTAINER} relative py-20 md:py-24`}>
        <div className={COPY_NARROW}>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-100/95 md:text-5xl tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-400 md:text-xl leading-relaxed mb-8">
            Last updated: January 2025
          </p>
          
          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-zinc-100/95 mb-4">Information Collection</h2>
              <p>We collect information you provide directly to us, including name, email, company information, and business data necessary for risk assessments.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-zinc-100/95 mb-4">Data Usage</h2>
              <p>We use collected information to provide risk advisory services, communicate about our offerings, and improve our services.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-zinc-100/95 mb-4">Data Security</h2>
              <p>We implement appropriate security measures including encryption, access controls, and regular security assessments to protect your information.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-zinc-100/95 mb-4">Contact</h2>
              <p>For questions about this privacy policy, contact us at privacy@bulwarkrisk.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}