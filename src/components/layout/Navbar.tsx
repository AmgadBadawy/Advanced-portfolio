'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import { FileDown, Menu, X, Globe, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c0c14]/75 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30 text-cyan-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              AB
            </span>
            <span className="hidden font-mono text-xs tracking-widest text-slate-300 sm:inline group-hover:text-cyan-300">
              AMGED BADAWY
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.03] p-1 border border-white/5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Arabic RTL Badge */}
            <span
              title="Specialized in Arabic Right-to-Left (RTL) Layouts"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300"
            >
              <Globe className="h-3 w-3" />
              <span>RTL Expert</span>
            </span>

            {/* Resume Button */}
            <a
              href={portfolioData.personalInfo.cvUrl}
              download="AmgedBadawy-CV.pdf"
              className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 px-4 py-1.5 text-xs font-medium text-white shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:scale-105"
            >
              <FileDown className="h-3.5 w-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 md:hidden hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0c0c14]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Globe className="h-3.5 w-3.5" />
                  Arabic RTL Ready
                </span>
                <span className="flex items-center gap-1 text-xs text-cyan-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Frontend Engineer
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
