'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  MessageCircle,
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link as fallback or direct sender
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>05 // INITIATE COLLABORATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Exceptional Together
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Open for Frontend Developer roles, engineering teams, and high-impact web interface projects.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-semibold text-white">Direct Channels</h3>
              
              {/* WhatsApp Fast Button */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Fastest Response (WhatsApp):
                </span>
                <MagneticButton
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:bg-emerald-500/25 hover:border-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp ({personalInfo.phone})</span>
                </MagneticButton>
              </div>

              {/* Email Copy Card */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  Email Address:
                </span>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="truncate font-mono text-xs sm:text-sm">
                      {personalInfo.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 shrink-0"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-xs">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-slate-400" />
                        <span className="font-mono text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300"
                >
                  <LinkedinIcon className="h-4 w-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-violet-400 hover:text-violet-300"
                >
                  <GithubIcon className="h-4 w-4 text-violet-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Send a Message</h3>
              <p className="mt-1 text-xs text-slate-400">
                Have a question, job opportunity, or want to discuss a project? Drop a note below.
              </p>

              {formSubmitted ? (
                <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-300">
                  <Check className="mx-auto h-8 w-8 text-emerald-400 mb-2" />
                  <h4 className="text-base font-semibold">Message Ready to Send!</h4>
                  <p className="mt-1 text-xs text-emerald-400/80">
                    Your email client should have opened with your draft. If not, feel free to contact me via WhatsApp or directly at {personalInfo.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-400">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-400">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Amged, I'd like to talk about..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
