// @ts-nocheck
'use client';

import React, { useRef, useEffect, useState } from 'react';
import './LogoLoop.css';

export interface LogoItem {
  icon: React.ReactNode;
  label: string;
  hoverColor?: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  layout?: 'orbit' | 'wave' | 'row';
  magnify?: number;
  scaleOnHover?: boolean;
  labels?: 'hover' | 'always' | 'none';
  scrollBoost?: number;
  speed?: number; // pixels per second
  className?: string;
}

export function LogoLoop({
  items = [],
  layout = 'wave',
  magnify = 0.6,
  scaleOnHover = true,
  labels = 'hover',
  scrollBoost = 0.5,
  speed = 45,
  className = '',
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(1);

  // Triple items for seamless endless loop
  const displayItems = [...items, ...items, ...items];

  useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused && trackRef.current && containerRef.current) {
        // Natural speed progression
        posRef.current += speed * delta * velocityRef.current;
        const totalWidth = trackRef.current.scrollWidth / 3;

        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }

        trackRef.current.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      }

      // Smooth deceleration of scroll boost
      if (velocityRef.current > 1) {
        velocityRef.current = Math.max(1, velocityRef.current - delta * 2);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, speed]);

  // Wheel speed boost
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollBoost > 0) {
      velocityRef.current = Math.min(3.5, velocityRef.current + Math.abs(e.deltaY) * 0.005 * scrollBoost);
    }
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className={`logoloop-container logoloop-labels-${labels} logoloop-layout-${layout} ${className}`}
    >
      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="logoloop-track"
      >
        {displayItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="logoloop-item"
            style={{
              '--hover-color': item.hoverColor || '#00f0ff',
            }}
          >
            <div className="logoloop-icon">{item.icon}</div>
            <span className="logoloop-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LogoLoop;
