# Portfolio Project State & Architecture Tracker
**Developer:** Amged Badawy (Frontend Engineer)  
**Role:** Senior Frontend Architect & AI Agent Pair  
**Repository:** https://github.com/AmgadBadawy/Advanced-portfolio.git  
**Last Updated:** 2026-11-01  

---

## 1. System Architecture & Standards

### Core Tech Stack
- **Framework:** Next.js 16.4.3 (App Router, Turbopack, React 19 Server Components)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 (Design tokens in `@theme`, dark-mode native)
- **Animation & Motion:** GSAP 3.15 + ScrollTrigger, Framer Motion 14, Three.js 0.187 (Procedural 3D)
- **Icons:** Lucide React
- **Testing:** Playwright E2E

### Architect Rules for All Agents
1. **Server vs Client Separation:**
   - Keep root pages (`src/app/page.tsx`, `src/app/layout.tsx`) as Server Components.
   - Place animated, interactive, and browser-dependent components in `src/components/ui/` and `src/components/sections/` with `'use client'` strictly at the top of client files.
2. **Animation & GSAP Guidelines:**
   - Always clean up GSAP tweens/timelines using `gsap.context()` inside `useEffect` or `useGSAP`.
   - Prefer transform properties (`x`, `y`, `scale`, `rotation`, `autoAlpha`) over layout properties (`top`, `left`, `width`, `height`, `opacity`).
   - Respect `prefers-reduced-motion` for all animations.
3. **Impeccable & Taste-Skill Design Standards:**
   - No generic purple-to-blue AI gradient cliches or plain Inter templates.
   - High-contrast obsidian theme with electric cyan (`#00f0ff`), cyber emerald (`#10b981`), and subtle deep violet ambient accents.
   - Crisp typographic scale with Geist Sans and Geist Mono.
   - Distinct visual rhythm: generous negative space, glassmorphism borders (`rgba(255,255,255,0.08)`), micro-interactions on hover, click, and scroll.
4. **Data Integrity:**
   - Zero dummy data. All information must be imported directly from `src/data/portfolio.ts`.
   - Asset paths must point to `/projects/`, `/certificates/`, and `/AmgedBadawy-CV.pdf`.
5. **State Tracking Protocol:**
   - Every completed phase/sub-phase must be marked in this file and followed by a local git commit immediately.

---

## 2. Modular Execution Roadmap

### Phase 1: Environment, Audit & Base Foundations
- [x] Inspect existing skills, project structure, data sources, and assets
- [x] Configure git remote (`https://github.com/AmgadBadawy/Advanced-portfolio.git`) and branch (`main`)
- [x] Verify base Next.js 16 build and dependencies
- [x] Create `PROJECT_STATE.md` with modular architecture roadmap
- [x] Set up Tailwind CSS design tokens, custom color variables, and typography styles in `src/app/globals.css`
- [x] Initial git commit for foundation and state tracker

### Phase 2: React Bits & Interactive UI Primitives (`src/components/ui/`)
- [/] `SpotlightGrid`: Interactive cursor-reactive spotlight background with subtle geometric grid
- [ ] `DecryptedText`: High-tech character scrambling/decoding effect for headings and roles
- [ ] `TiltCard3D`: 3D perspective tilt card with light reflection for interactive cards
- [ ] `MagneticButton`: Physics-based spring magnetic pull effect for primary buttons & social links
- [ ] `TechMarquee`: Infinite smooth marquee with pause-on-hover for technology skills
- [ ] `InteractiveCanvas3D`: Procedural Three.js floating crystalline/polyhedral mesh with mouse parallax
- [ ] Commit & state update for UI primitives

### Phase 3: Layout & Navigation Components
- [ ] `Navbar`: Glassmorphic floating header with active section tracking, logo, resume download button, and mobile sheet menu
- [ ] `Footer`: Polished footer with quick navigation, social links, status indicator, and copyright
- [ ] Commit & state update for layout components

### Phase 4: Portfolio Sections Architecture (`src/components/sections/`)
- [ ] `HeroSection`: Impactful introduction with Amged's name, `DecryptedText` role, `InteractiveCanvas3D`, availability badge, and magnetic CTAs
- [ ] `AboutSection`: Personal summary, Computer Science background at Mansoura University, and key highlights
- [ ] `SkillsSection`: Categorized technical skill matrix (Frameworks, UI Architecture, Data & Tools) + `TechMarquee`
- [ ] `ProjectsSection`: Featured interactive cards for **Masar** (with RTL badge & live link), **FlowDesk**, and **Budgetly**
- [ ] `CertificationsSection`: Interactive gallery of verified certificates (Manara, CCIC Mansoura University, Courssat English) with modal preview
- [ ] `ContactSection`: Quick contact actions (Direct WhatsApp message, Email, LinkedIn, GitHub, Phone)
- [ ] Commit & state update for sections

### Phase 5: Assembly, Page Integration & Polish
- [ ] Assemble full page in `src/app/page.tsx`
- [ ] Enhance SEO metadata, OpenGraph tags, and favicon in `src/app/layout.tsx`
- [ ] Optimize images, lazy loading, and accessibility (ARIA, focus outlines)
- [ ] Commit & state update for page integration

### Phase 6: Quality Verification, Documentation & Remote Sync
- [ ] Run production build (`npm run build`) and fix any lint/type errors
- [ ] Create comprehensive professional `README.md`
- [ ] Push to GitHub remote origin (`main`)
- [ ] Final verification summary

---

## 3. File Creation & Modification Log
| Date | File | Action | Description |
|------|------|--------|-------------|
| 2026-11-01 | `PROJECT_STATE.md` | Created | Project architecture, state tracker, and modular roadmap |
| 2026-11-01 | `src/app/globals.css` | Modified | Added obsidian dark theme, cyan/emerald design tokens, glassmorphism utilities |
