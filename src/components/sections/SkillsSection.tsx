'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { LogoLoop, LogoItem } from '@/components/ui/LogoLoop';
import { TiltCard3D } from '@/components/ui/TiltCard3D';
import { Code, Layout, Database, Sparkles, CheckCircle } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiGit,
  SiGreensock,
  SiThreedotjs,
} from 'react-icons/si';

export function SkillsSection() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frameworks & Styling':
        return <Code className="h-5 w-5 text-cyan-400" />;
      case 'UI & Frontend Architecture':
        return <Layout className="h-5 w-5 text-emerald-400" />;
      case 'Data & Tools':
        return <Database className="h-5 w-5 text-violet-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-cyan-400" />;
    }
  };

  // Interactive React Bits LogoLoop Items with official brand colors
  const techLogos: LogoItem[] = [
    { icon: <SiReact className="w-7 h-7" />, label: 'React 19', hoverColor: '#61DAFB' },
    { icon: <SiNextdotjs className="w-7 h-7" />, label: 'Next.js App Router', hoverColor: '#FFFFFF' },
    { icon: <SiTypescript className="w-7 h-7" />, label: 'TypeScript', hoverColor: '#3178C6' },
    { icon: <SiJavascript className="w-7 h-7" />, label: 'JavaScript', hoverColor: '#F7DF1E' },
    { icon: <SiTailwindcss className="w-7 h-7" />, label: 'Tailwind CSS', hoverColor: '#06B6D4' },
    { icon: <SiHtml5 className="w-7 h-7" />, label: 'HTML5', hoverColor: '#E34F26' },
    { icon: <SiCss className="w-7 h-7" />, label: 'CSS3 / Modern CSS', hoverColor: '#1572B6' },
    { icon: <SiNodedotjs className="w-7 h-7" />, label: 'Node.js', hoverColor: '#5FA04E' },
    { icon: <SiGit className="w-7 h-7" />, label: 'Git & GitHub', hoverColor: '#F05032' },
    { icon: <SiGreensock className="w-7 h-7" />, label: 'GSAP Animation', hoverColor: '#88CE02' },
    { icon: <SiThreedotjs className="w-7 h-7" />, label: 'Three.js / WebGL', hoverColor: '#00F0FF' },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Architectural Capabilities
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            A comprehensive overview of my frontend toolkit, architectural patterns, and development workflow.
          </p>
        </div>

        {/* React Bits Interactive LogoLoop */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#090912]/60 py-6 backdrop-blur-xl shadow-2xl">
          <div className="mb-4 px-6 flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Core Technical Stack
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Hover to magnify • Drag or scroll to accelerate
            </span>
          </div>
          <LogoLoop
            items={techLogos}
            layout="wave"
            magnify={0.6}
            scaleOnHover={true}
            labels="hover"
            scrollBoost={0.5}
          />
        </div>

        {/* 3 Categorized Skill Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((categoryGroup, index) => (
            <TiltCard3D key={index} maxTilt={6} scale={1.01}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      {getCategoryIcon(categoryGroup.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {categoryGroup.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skill Items List */}
                  <div className="mt-5 space-y-2.5">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="font-medium">{skill}</span>
                        <CheckCircle className="h-4 w-4 text-cyan-400/60 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="mt-6 border-t border-white/5 pt-4 text-right">
                  <span className="font-mono text-[11px] text-slate-500">
                    Production Verified
                  </span>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
