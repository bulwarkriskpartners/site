'use client';

interface GaugeMiniProps {
  value: number;
  max: number;
  threshold: number;
  label: string;
  unit?: string;
  height?: number;
  className?: string;
}

export default function GaugeMini({ 
  value, 
  max, 
  threshold, 
  label, 
  unit = '', 
  height = 120, 
  className = '' 
}: GaugeMiniProps) {
  const percentage = (value / max) * 100;
  const thresholdPercentage = (threshold / max) * 100;
  const isAboveThreshold = value > threshold;
  
  // Calculate stroke-dasharray for the progress arc
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ height }}>
      <div className="relative w-24 h-24 mb-2">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#374151"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={isAboveThreshold ? "#ef4444" : "#10b981"}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          {/* Threshold indicator */}
          <circle
            cx={50 + 45 * Math.cos((thresholdPercentage / 100) * 2 * Math.PI - Math.PI / 2)}
            cy={50 + 45 * Math.sin((thresholdPercentage / 100) * 2 * Math.PI - Math.PI / 2)}
            r="3"
            fill="#f59e0b"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-zinc-100">
            {value.toFixed(1)}{unit}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-zinc-300">{label}</div>
        <div className="text-xs text-zinc-500">
          Threshold: {threshold}{unit}
        </div>
      </div>
    </div>
  );
}