'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SpotlightGridProps {
  children?: React.ReactNode;
  className?: string;
}

export function SpotlightGrid({ children, className = '' }: SpotlightGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen w-full overflow-hidden bg-[#050508] ${className}`}
    >
      {/* Subtle Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-grid-pattern opacity-40"
        aria-hidden="true"
      />

      {/* Ambient Radial Gradient Lights */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 z-0 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-[#00f0ff]/10 via-[#8b5cf6]/5 to-transparent blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 z-0 h-[500px] w-[600px] rounded-full bg-gradient-to-b from-[#10b981]/8 to-transparent blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-40 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-t from-[#8b5cf6]/8 to-transparent blur-[160px]"
        aria-hidden="true"
      />

      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(0, 240, 255, 0.08), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
