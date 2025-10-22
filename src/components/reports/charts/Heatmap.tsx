'use client';

import React from 'react';

interface HeatmapProps {
  rows: string[];
  cols: string[];
  scores: number[][];
  height?: number;
  className?: string;
}

export default function Heatmap({ rows, cols, scores, height = 200, className = '' }: HeatmapProps) {
  const getColor = (score: number) => {
    if (score >= 0.8) return 'bg-red-500';
    if (score >= 0.6) return 'bg-orange-400';
    if (score >= 0.4) return 'bg-yellow-400';
    if (score >= 0.2) return 'bg-green-400';
    return 'bg-green-500';
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <div className="grid gap-1 h-full" style={{ 
        gridTemplateColumns: `100px repeat(${cols.length}, 1fr)`,
        gridTemplateRows: `30px repeat(${rows.length}, 1fr)`
      }}>
        {/* Header cell */}
        <div className="bg-transparent"></div>
        
        {/* Column headers */}
        {cols.map((col, index) => (
          <div key={index} className="bg-zinc-800/40 flex items-center justify-center text-xs text-zinc-300 p-1">
            {col}
          </div>
        ))}
        
        {/* Row headers and data cells */}
        {rows.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            <div className="bg-zinc-800/40 flex items-center text-xs text-zinc-300 p-1">
              {row}
            </div>
            {cols.map((_, colIndex) => (
              <div 
                key={`cell-${rowIndex}-${colIndex}`}
                className={`${getColor(scores[rowIndex][colIndex])} flex items-center justify-center text-xs text-white p-1 rounded-sm`}
                title={`${row} × ${cols[colIndex]}: ${(scores[rowIndex][colIndex] * 100).toFixed(0)}%`}
              >
                {(scores[rowIndex][colIndex] * 100).toFixed(0)}%
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}