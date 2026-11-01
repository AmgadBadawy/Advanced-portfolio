'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Certification } from '@/data/portfolio';
import { TiltCard3D } from '@/components/ui/TiltCard3D';
import { Award, Sparkles, ExternalLink, X, ZoomIn } from 'lucide-react';

export function CertificationsSection() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>04 // CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Verified{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Certifications & Training
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Formal professional training programs, institutional certificates, and English language communication tracks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert: Certification, index: number) => (
            <TiltCard3D key={index} maxTilt={8} scale={1.02}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c16]/75 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)]"
              >
                <div>
                  {/* Image Thumbnail */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#161626]">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-600">
                        <Award className="h-10 w-10 text-cyan-400/50" />
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
                    <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-cyan-300 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Issuer & Year */}
                  <div className="mt-4 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{cert.issuer}</span>
                    <span className="text-slate-500">{cert.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Subtitle */}
                  {cert.subtitle && (
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {cert.subtitle}
                    </p>
                  )}
                </div>

                {/* Inspect Link */}
                <div className="mt-4 flex items-center gap-1.5 border-t border-white/5 pt-3 text-xs font-medium text-slate-400 group-hover:text-cyan-400">
                  <span>View Certificate</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Modal Lightbox for Certificate View */}
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-3xl w-full rounded-2xl border border-white/20 bg-[#0e0e18] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    {selectedCert.issuer} • {selectedCert.year}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.subtitle && (
                    <p className="text-sm text-slate-400">
                      {selectedCert.subtitle}
                    </p>
                  )}
                </div>

                {selectedCert.image && (
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
