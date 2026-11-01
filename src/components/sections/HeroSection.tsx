'use client';

import React, { useEffect, useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { DecryptedText } from '@/components/ui/DecryptedText';
import { InteractiveCanvas3D } from '@/components/ui/InteractiveCanvas3D';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  FileDown,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { gsap } from 'gsap';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const { personalInfo } = portfolioData;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[92vh] items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typography & CTAs */}
          <div ref={textContentRef} className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="hero-fade inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Name & Title */}
            <div className="hero-fade space-y-2">
              <div className="flex items-center gap-2 text-sm font-mono tracking-widest text-cyan-400">
                <Sparkles className="h-4 w-4" />
                <span>HELLO, I&apos;M</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
                <span className="block text-white">Amged Badawy</span>
                <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl xl:text-5xl">
                  <DecryptedText
                    text={personalInfo.role}
                    speed={35}
                    animateOn="view"
                    className="font-sans font-bold"
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="hero-fade text-base leading-relaxed text-slate-300 sm:text-lg max-w-xl">
              {personalInfo.summary}
            </p>

            {/* Location & Quick Meta */}
            <div className="hero-fade flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="text-slate-400">
                React • Next.js App Router • Arabic RTL
              </div>
            </div>

            {/* Magnetic Call to Actions */}
            <div className="hero-fade flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <MagneticButton
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>

              {/* Resume CTA */}
              <MagneticButton
                href={personalInfo.cvUrl}
                download="AmgedBadawy-CV.pdf"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300"
              >
                <FileDown className="h-4 w-4 text-cyan-400" />
                <span>Download CV</span>
              </MagneticButton>

              {/* WhatsApp CTA */}
              <MagneticButton
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-200"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </MagneticButton>
            </div>

            {/* Social Icons row */}
            <div className="hero-fade flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-110"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:scale-110"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Three.js Interactive 3D Canvas */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Backlight Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-emerald-500/15 blur-3xl" />
              
              {/* 3D Canvas */}
              <InteractiveCanvas3D className="mx-auto" />

              {/* Decorative Tech Tag */}
              <div className="absolute -bottom-2 right-4 rounded-xl border border-white/10 bg-[#0e0e18]/80 px-3.5 py-1.5 text-[11px] font-mono text-cyan-300 backdrop-blur-md shadow-lg">
                <span className="text-slate-500">const</span> engine = <span className="text-emerald-400">&quot;Three.js + GSAP&quot;</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
