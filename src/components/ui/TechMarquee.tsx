'use client';

import React from 'react';

interface TechMarqueeProps {
  items: string[];
  speed?: number; // seconds per full loop
  direction?: 'left' | 'right';
  className?: string;
  badgeClassName?: string;
}

export function TechMarquee({
  items,
  speed = 35,
  direction = 'left',
  className = '',
  badgeClassName = '',
}: TechMarqueeProps) {
  // Duplicate array 3 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 group select-none ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        className="flex w-max items-center gap-4 transition-transform duration-300 group-hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] ${badgeClassName}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
