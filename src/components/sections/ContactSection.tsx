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
  Loader2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${personalInfo.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Inquiry from ${formData.name}`,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to dispatch message.');
      }
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'Unable to connect to form service.';
      setErrorMessage(msg);
    }
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
            Open for Frontend Developer roles, high-performing engineering teams, and ambitious web products.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c16]/80 p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-semibold text-white">Direct Communication</h3>

              {/* WhatsApp Fast Button */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Fastest Direct Channel:
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

              {/* Email Card (Clickable mailto: + One-Click Copy Button with Toast) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Official Email:
                  </span>
                  {copied && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded animate-fade-in">
                      Email Copied!
                    </span>
                  )}
                </div>

                <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-200 transition-colors hover:border-cyan-400/40">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 truncate text-slate-200 hover:text-cyan-300 transition-colors group"
                    title="Click to open mail client"
                  >
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate font-mono text-xs sm:text-sm underline-offset-4 group-hover:underline">
                      {personalInfo.email}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="ml-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 shrink-0 active:scale-95"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-xs font-semibold">Copied!</span>
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

              {/* Location & Phone Info */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-emerald-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                >
                  <LinkedinIcon className="h-4 w-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-violet-400 hover:text-violet-300 hover:bg-violet-500/10"
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
              <h3 className="text-xl font-semibold text-white">Send Direct Message</h3>
              <p className="mt-1 text-xs text-slate-400">
                Have a project or job opening? Leave a message here and it will be sent directly to my inbox.
              </p>

              {status === 'success' ? (
                <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center text-emerald-300 space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Message Delivered Successfully!</h4>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for getting in touch. I have received your email and will get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-5 py-2 text-xs font-semibold text-emerald-200 transition-all hover:bg-emerald-500/30"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {status === 'error' && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-rose-200">
                        <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Transmission Notice: {errorMessage || 'Network connection issue.'}</span>
                      </div>
                      <p className="text-slate-300">
                        You can send your message directly via email client or WhatsApp:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            `Portfolio message from ${formData.name || 'Visitor'}`
                          )}&body=${encodeURIComponent(formData.message || '')}`}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/40 bg-rose-500/20 px-3 py-1 text-[11px] font-medium text-rose-200 hover:bg-rose-500/30 transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span>Open in Mail App</span>
                        </a>
                        <a
                          href={personalInfo.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/30 transition-colors"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-400">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        disabled={status === 'loading'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none disabled:opacity-50"
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
                        disabled={status === 'loading'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none disabled:opacity-50"
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
                      disabled={status === 'loading'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Amged, I'd like to discuss a frontend role / web project..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-cyan-400 focus:outline-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-slate-950" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
