'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/data/portfolio';
import { TiltCard3D } from '@/components/ui/TiltCard3D';
import { Folder, FolderItem } from '@/components/ui/Folder';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Globe,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export function ProjectsSection() {
  const { projects } = portfolioData;

  // React Bits Interactive Glass Folder Dossier Items
  const dossierItems: FolderItem[] = projects.map((project) => ({
    title: project.title,
    subtitle: project.subtitle,
    image: project.image,
    tags: project.techStack,
    link: project.liveUrl || project.githubUrl,
    badge: project.badge,
  }));

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>03 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Projects &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Real-world frontend applications demonstrating component modularity, Arabic RTL design, and performance optimization.
          </p>
        </div>

        {/* Interactive React Bits Dossier Glass Folder */}
        <div className="mt-10 mb-14">
          <Folder
            variant="glass"
            mode="flap"
            theme="dark"
            color="#3d8bff"
            label="Featured Dossier"
            peek={true}
            draggable={true}
            items={dossierItems}
          />
        </div>

        {/* Projects Showcase */}
        <div className="space-y-16">
          {projects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className="group relative rounded-3xl border border-white/10 bg-[#0b0b14]/75 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 sm:p-8"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  {/* Image Preview with 3D Tilt */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <TiltCard3D maxTilt={7} scale={1.01}>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12121f]">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview Screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-slate-600">
                            <Layers className="h-12 w-12" />
                          </div>
                        )}

                        {/* Subtle inner shadow overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Badge Overlay */}
                        {project.badge && (
                          <div className="absolute top-4 left-4 z-10 rounded-full border border-white/10 bg-[#0c0c16]/80 px-3 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md">
                            {project.badge}
                          </div>
                        )}

                        {/* Arabic RTL tag if Masar */}
                        {project.title === 'Masar' && (
                          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                            <Globe className="h-3 w-3" />
                            <span>Arabic RTL First</span>
                          </div>
                        )}
                      </div>
                    </TiltCard3D>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                        {project.subtitle}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                      {project.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        Key Architectural Highlights:
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {project.liveUrl && (
                        <MagneticButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </MagneticButton>
                      )}

                      {project.githubUrl && (
                        <MagneticButton
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:text-white"
                        >
                          <GithubIcon className="h-3.5 w-3.5 text-slate-400" />
                          <span>Codebase</span>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
