'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, MessageCircle, MapPin, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07070c]/90 py-16 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold text-sm">
                AB
              </span>
              <span className="font-mono text-sm tracking-widest text-white font-semibold">
                AMGED BADAWY
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              {portfolioData.personalInfo.summary}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              <span>{portfolioData.personalInfo.location}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personalInfo.availability}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="transition-colors hover:text-cyan-400">
                  About Amged
                </a>
              </li>
              <li>
                <a href="#skills" className="transition-colors hover:text-cyan-400">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-cyan-400">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="transition-colors hover:text-cyan-400">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-cyan-400">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Connect Directly
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={portfolioData.personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={portfolioData.personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <Github className="h-4 w-4 text-violet-400" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                aria-label="Email"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Email</span>
              </a>
            </div>
            <p className="font-mono text-xs text-slate-500">
              {portfolioData.personalInfo.phone}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}. Engineered with Next.js, Three.js & React Bits.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
