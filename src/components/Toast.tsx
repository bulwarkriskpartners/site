'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number; // in milliseconds
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const borderColor = type === 'success' ? 'border-green-700' : 'border-red-700';

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-lg border ${borderColor} ${bgColor} p-4 text-white shadow-lg transition-all duration-300 ease-out`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span className="text-lg">
        {type === 'success' ? '✅' : '❌'}
      </span>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="ml-auto p-1 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
}