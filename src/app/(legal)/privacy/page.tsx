import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-semibold">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="mb-4 text-white/80">
            We collect contact and business information you submit through our inquiry form. This data is stored securely in Supabase with read-only internal access.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Data Collection</h2>
          <p className="mb-4 text-white/80">
            We collect information you provide directly to us, such as when you fill out our inquiry form or contact us.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Data Use</h2>
          <p className="mb-4 text-white/80">
            We use the information we collect to provide our risk advisory services and communicate with you about our offerings. We do not sell your data.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Data Retention</h2>
          <p className="mb-4 text-white/80">
            We retain your information for 12 months unless you request earlier deletion.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Contact Us</h2>
          <p className="mb-4 text-white/80">
            If you have questions about this privacy policy, please contact us at privacy@bulwarkrisk.com.
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