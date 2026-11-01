'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { TiltCard3D } from '@/components/ui/TiltCard3D';
import {
  GraduationCap,
  Layers,
  Globe2,
  Code2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function AboutSection() {
  const { personalInfo, education } = portfolioData;

  const coreStrengths = [
    {
      icon: <Layers className="h-5 w-5 text-cyan-400" />,
      title: 'Component Architecture',
      description:
        'Architecting reusable, composable React and Next.js interfaces with strict TypeScript types, predictable props, and clear state boundaries.',
    },
    {
      icon: <Globe2 className="h-5 w-5 text-emerald-400" />,
      title: 'Arabic RTL Specialization',
      description:
        'Proven expertise in bidirectional layouts, Arabic typographic hierarchy, RTL CSS logical properties, and seamless Arabic-first user flows.',
    },
    {
      icon: <Code2 className="h-5 w-5 text-violet-400" />,
      title: 'Data & State Abstraction',
      description:
        'Designing clean repository abstraction layers between UI and backend APIs, ensuring robust loading, error, and offline fallback states.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineering with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Precision & Empathy
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            A look into my academic background, technical ethos, and how I bridge computer science fundamentals with modern frontend engineering.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c16]/70 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                I am a Computer Science graduate from Mansoura University with a deep focus on frontend development. I specialize in building responsive, accessible, and fast web applications using React, Next.js (App Router), and TypeScript.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Whether implementing intricate Arabic RTL government guides like <span className="text-cyan-300 font-medium">Masar</span>, workflow interfaces like <span className="text-emerald-300 font-medium">FlowDesk</span>, or AI-integrated budgeting systems like <span className="text-violet-300 font-medium">Budgetly</span>, I write clean, maintainable code designed to scale.
              </p>

              {/* Key Bullet Highlights */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 pt-4 border-t border-white/10 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Modern React 19 & Next.js 16</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Arabic RTL & Bidirectional UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Strict TypeScript & Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Interactive Motion (GSAP & Three.js)</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Graduation Year: {education.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    {education.degree}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {education.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Core Pillars in 3D Tilt Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {coreStrengths.map((pillar, idx) => (
              <TiltCard3D key={idx} maxTilt={8} scale={1.01}>
                <div className="rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      {pillar.icon}
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
