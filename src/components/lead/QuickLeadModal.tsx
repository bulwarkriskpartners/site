'use client';

import { useState } from 'react';
import { analytics, captureUTM } from '@/lib/analytics';

interface QuickLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function QuickLeadModal({ isOpen, onClose, onSuccess }: QuickLeadModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utm = captureUTM();

      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quick',
          email,
          name,
          company,
          ...utm,
          timestamp: new Date().toISOString(),
        }),
      });

      analytics.leadQuickSubmit();
      localStorage.setItem('bulwark_lead_submitted', 'true');
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Quick lead submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-xl border border-zinc-700/80 p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Quick Contact</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="quick-email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="quick-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-teal-500 text-zinc-100"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="quick-name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="quick-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-teal-500 text-zinc-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="quick-company" className="block text-sm font-medium text-zinc-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="quick-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-md bg-zinc-900/60 border border-zinc-800/80 p-3 outline-none focus:ring-2 focus:ring-teal-500 text-zinc-100"
                placeholder="Company name"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Thanks—our team will reach out shortly</h4>
            <p className="text-zinc-400 text-sm mb-6">
              Want to share more details now so we can prepare?
            </p>
            <div className="space-y-3">
              <a
                href="/inquiries"
                className="block w-full rounded-md bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 transition-colors text-center"
                onClick={() => {
                  onClose();
                  window.location.href = '/inquiries';
                }}
              >
                Continue to Advanced Inquiry
              </a>
              <button
                onClick={onClose}
                className="block w-full rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800 font-medium py-3 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
