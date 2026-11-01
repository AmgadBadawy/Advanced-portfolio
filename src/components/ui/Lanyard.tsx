// @ts-nocheck
'use client';

import React, { useRef, useState, useEffect } from 'react';
import './Lanyard.css';

interface LanyardProps {
  frontImage?: string;
  finish?: 'holographic' | 'matte' | 'glossy';
  metal?: 'silver' | 'gold' | 'black';
  interactive?: boolean;
  className?: string;
}

export function Lanyard({
  frontImage = '/amged-id-card.png',
  finish = 'holographic',
  metal = 'silver',
  interactive = true,
  className = '',
}: LanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const dragStart = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number | null>(null);

  // Return to equilibrium with spring damping
  useEffect(() => {
    if (!isDragging) {
      let velX = 0;
      let velY = 0;
      let currentRotX = rotX;
      let currentRotY = rotY;
      let currentTransX = transX;
      let currentTransY = transY;

      const spring = () => {
        // Natural idle floating swing
        const time = Date.now() * 0.002;
        const targetRotX = Math.sin(time) * 4;
        const targetRotY = Math.cos(time * 0.8) * 6;
        const targetTransX = Math.sin(time * 0.7) * 4;

        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;
        currentTransX += (targetTransX - currentTransX) * 0.08;
        currentTransY += (0 - currentTransY) * 0.08;

        setRotX(currentRotX);
        setRotY(currentRotY);
        setTransX(currentTransX);
        setTransY(currentTransY);

        animFrame.current = requestAnimationFrame(spring);
      };

      animFrame.current = requestAnimationFrame(spring);
    }

    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * 100;
    const relY = ((e.clientY - rect.top) / rect.height) * 100;
    setShine({ x: relX, y: relY });

    if (isDragging) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      const newTransX = Math.max(Math.min(deltaX * 0.6, 80), -80);
      const newTransY = Math.max(Math.min(deltaY * 0.6, 60), -40);
      const newRotY = Math.max(Math.min(deltaX * 0.35, 35), -35);
      const newRotX = Math.max(Math.min(-deltaY * 0.35, 35), -35);

      setTransX(newTransX);
      setTransY(newTransY);
      setRotY(newRotY);
      setRotX(newRotX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!interactive) return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`lanyard-container ${className}`}
    >
      {/* Top Ribbon */}
      <div
        className="lanyard-ribbon"
        style={{
          transform: `translateX(${transX * 0.2}px) rotate(${rotY * 0.15}deg)`,
        }}
      />

      {/* Metal Attachment Rings */}
      <div
        className={`lanyard-metal-ring lanyard-metal-${metal}`}
        style={{
          transform: `translateX(${transX * 0.4}px) rotate(${rotY * 0.3}deg)`,
        }}
      />
      <div
        className="lanyard-metal-clip"
        style={{
          transform: `translateX(${transX * 0.6}px) rotate(${rotY * 0.5}deg)`,
        }}
      />

      {/* Suspended ID Badge */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="lanyard-card-wrapper"
        style={{
          transform: `translate3d(${transX}px, ${transY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          '--shine-x': `${shine.x}%`,
          '--shine-y': `${shine.y}%`,
        }}
      >
        <div className="lanyard-card-body">
          <img
            src={frontImage}
            alt="Amged Badawy ID Badge"
            className="lanyard-card-image"
            draggable={false}
          />
          {finish === 'holographic' && (
            <div className="lanyard-holographic-sheen" />
          )}
          <div className="lanyard-shine-reflection" />
        </div>
      </div>
    </div>
  );
}
export default Lanyard;
