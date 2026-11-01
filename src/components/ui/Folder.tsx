// @ts-nocheck
'use client';

import React, { useState } from 'react';
import './Folder.css';
import { ExternalLink, Layers, Sparkles, FolderOpen } from 'lucide-react';

export interface FolderItem {
  title: string;
  subtitle: string;
  image?: string;
  tags?: string[];
  link?: string;
  badge?: string;
}

interface FolderProps {
  variant?: 'glass' | 'solid';
  mode?: 'flap' | 'slide';
  theme?: 'dark' | 'light';
  color?: string;
  label?: string;
  peek?: boolean;
  draggable?: boolean;
  items?: FolderItem[];
  className?: string;
}

export function Folder({
  variant = 'glass',
  mode = 'flap',
  theme = 'dark',
  color = '#3d8bff',
  label = 'Featured Dossier',
  peek = true,
  draggable = true,
  items = [],
  className = '',
}: FolderProps) {
  const [activeItem, setActiveItem] = useState<FolderItem | null>(null);

  return (
    <div className={`folder-wrapper ${className}`} style={{ '--folder-accent': color }}>
      <div className={`folder-box folder-${variant} folder-theme-${theme}`}>
        {/* Top Tab */}
        <div className="folder-tab">
          <FolderOpen className="w-3.5 h-3.5 mr-1.5 inline" />
          <span>{label}</span>
        </div>

        {/* Header */}
        <div className="folder-header">
          <div className="folder-title-row">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Project Archives &amp; Direct Case Studies</span>
            </h3>
          </div>
          <div className="folder-status-pill">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{items.length} Production Systems</span>
          </div>
        </div>

        {/* Cards Inside Folder */}
        <div className="folder-cards-grid">
          {items.map((item, index) => (
            <div
              key={item.title || index}
              onClick={() => setActiveItem(item)}
              className="folder-card-sheet group"
              style={{
                transform: peek ? `translateY(${index * 4}px)` : 'none',
              }}
            >
              {item.image && (
                <div className="folder-card-image">
                  <img src={item.image} alt={item.title} />
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Flap Edge */}
        <div className="folder-flap-edge" />
      </div>
    </div>
  );
}
export default Folder;
