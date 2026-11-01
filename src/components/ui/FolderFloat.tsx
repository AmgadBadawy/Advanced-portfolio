// @ts-nocheck
'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './FolderFloat.css';
import { Sparkles, Move } from 'lucide-react';

interface FolderFloatProps {
  physics?: boolean;
  trigger?: 'hover' | 'click' | 'always';
  label?: string;
  sublabel?: string;
  items?: string[];
  className?: string;
}

export function FolderFloat({
  physics = true,
  trigger = 'hover',
  label = 'Engineering Core',
  sublabel = 'Drag & Throw',
  items = [
    'Clean Architecture',
    'Next.js App Router',
    'GSAP & 3D Motion',
    'Pixel-Perfect UI',
    'Performance 100%',
    'TypeScript Strict',
  ],
  className = '',
}: FolderFloatProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!physics || !canvasRef.current || !sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const width = sceneRef.current.clientWidth || 500;
    const height = sceneRef.current.clientHeight || 380;

    // Create engine with low gravity for floating feel
    const engine = Engine.create({
      gravity: { x: 0, y: 0.15, scale: 0.001 },
    });

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // Create boundary walls
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width * 2, 50, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width * 2, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);

    // Create pill bodies for each item
    const colors = [
      { bg: 'rgba(0, 240, 255, 0.12)', border: '#00f0ff', text: '#00f0ff' },
      { bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', text: '#10b981' },
      { bg: 'rgba(139, 92, 246, 0.12)', border: '#8b5cf6', text: '#c084fc' },
      { bg: 'rgba(56, 189, 248, 0.12)', border: '#38bdf8', text: '#7dd3fc' },
      { bg: 'rgba(244, 63, 94, 0.12)', border: '#f43f5e', text: '#fb7185' },
      { bg: 'rgba(251, 146, 60, 0.12)', border: '#fb923c', text: '#fdba74' },
    ];

    const pills = items.map((text, i) => {
      const textWidth = Math.max(text.length * 9.5 + 36, 120);
      const pillHeight = 38;
      const x = (width / (items.length + 1)) * (i + 1);
      const y = 80 + Math.random() * 120;

      const body = Bodies.rectangle(x, y, textWidth, pillHeight, {
        chamfer: { radius: pillHeight / 2 },
        restitution: 0.75,
        frictionAir: 0.02,
        density: 0.002,
      });

      body.customText = text;
      body.customColor = colors[i % colors.length];
      body.customWidth = textWidth;
      body.customHeight = pillHeight;

      return body;
    });

    Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, ...pills]);

    // Add mouse constraint
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // Custom Canvas Render Loop
    let animId: number;

    const render = () => {
      Engine.update(engine, 1000 / 60);

      ctx.clearRect(0, 0, width, height);

      // Draw each capsule pill
      pills.forEach((pill) => {
        const { x, y } = pill.position;
        const angle = pill.angle;
        const w = pill.customWidth;
        const h = pill.customHeight;
        const r = h / 2;
        const col = pill.customColor;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Capsule Path
        ctx.beginPath();
        ctx.roundRect(-w / 2, -h / 2, w, h, r);
        ctx.fillStyle = col.bg;
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = col.border;
        ctx.stroke();

        // Capsule Text
        ctx.fillStyle = col.text;
        ctx.font = '600 12px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pill.customText, 0, 1);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Resize Handler
    const handleResize = () => {
      if (!sceneRef.current || !canvasRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
      Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      Composite.clear(engine.world);
      Engine.clear(engine);
    };
  }, [physics, items]);

  return (
    <div ref={sceneRef} className={`folderfloat-container ${className}`}>
      {/* Top Header */}
      <div className="folderfloat-header">
        <span className="folderfloat-title-badge">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{label}</span>
        </span>
        <span className="folderfloat-sublabel flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-slate-400" />
          <span>{sublabel}</span>
        </span>
      </div>

      {/* Physics Interactive Canvas */}
      <canvas ref={canvasRef} className="folderfloat-canvas" />
    </div>
  );
}
export default FolderFloat;
