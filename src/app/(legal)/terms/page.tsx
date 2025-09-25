import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="mb-4 text-white/80">
            This is a marketing site only. We do not provide investment advice and are not a broker-dealer.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Services</h2>
          <p className="mb-4 text-white/80">
            Bulwark Risk Partners provides operational risk advisory services. All advisory engagement terms are governed by separate Statement of Work (SOW) or Master Service Agreement (MSA).
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Limitation of Liability</h2>
          <p className="mb-4 text-white/80">
            Our services are advisory in nature. You remain responsible for your business decisions and risk management.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Contact Us</h2>
          <p className="mb-4 text-white/80">
            If you have questions about these terms, please contact us at austin@bulwarkrisk.com.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-white/60 hover:text-white">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}