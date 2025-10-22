import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-100/95 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-400 mb-6">Page Not Found</h2>
        <p className="text-zinc-500 mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back to our risk assessment services.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,.7)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
