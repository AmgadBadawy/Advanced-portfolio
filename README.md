# Amged Badawy — Senior Frontend Architect & Interactive Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-0.187-black?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.15-green?style=for-the-badge&logo=greensock)

> High-performance, interactive personal portfolio engineered for **Amged Badawy** (Junior Frontend Developer / Computer Science Graduate from Mansoura University). Built with Next.js 16 App Router, TypeScript, custom React Bits primitives, GSAP animations, and procedural Three.js.

---

## 🌟 Architecture & Key Features

### 1. Server Components & Leaf Client Isolation
- The root page (`src/app/page.tsx`) and layout (`src/app/layout.tsx`) are pure **React Server Components**, ensuring instantaneous initial paint, minimal client bundle weight, and optimal SEO.
- Interactive animations and WebGL hooks are isolated inside `src/components/ui/` and `src/components/sections/` using `'use client'` strictly at the component boundary.

### 2. Custom React Bits & Motion Engineering
- **`SpotlightGrid`**: Dynamic cursor-reactive ambient radial illumination over a precision geometric grid.
- **`DecryptedText`**: High-tech character decoding animation inspired by React Bits, decoding developer roles upon viewport entry.
- **`TiltCard3D`**: Multi-axis 3D perspective tilt with real-time specular sheen reflections on project and skill cards.
- **`MagneticButton`**: Physics-based cursor attraction with spring recovery for primary CTAs and social channels.
- **`TechMarquee`**: Smooth infinite horizontal ticker with hover-pause and gradient edge masking.
- **`InteractiveCanvas3D`**: Procedural Three.js crystalline wireframe with glowing vertices, orbital core, and mouse parallax.

### 3. Impeccable & Taste-Skill Visual System
- High-contrast **Obsidian Palette** (`#050508`) with electric cyan (`#00f0ff`) and cyber emerald (`#10b981`) accents.
- Strict rejection of generic AI templates: generous spatial rhythm, glassmorphism borders (`rgba(255,255,255,0.08)`), and accessible typography using **Geist Sans** and **Geist Mono**.
- Fully accessible keyboard navigation, ARIA attributes, and reduced-motion compliance (`prefers-reduced-motion`).

### 4. Arabic RTL First Mastery
- Deep expertise in Right-to-Left bidirectional layouts, CSS logical properties, and Arabic typographic hierarchy — exemplified in the **Masar** government services platform case study.

### 5. 100% Real Production Data
- No dummy data or placeholder text. All content is directly drawn from `src/data/portfolio.ts` and actual media in `public/`:
  - **Masar**: Arabic-first government services guide (Live on Vercel).
  - **FlowDesk**: Workflow productivity interface (Live on Vercel).
  - **Budgetly**: AI-assisted smart home budget management system (Graduation Project).
  - **Credentials**: Manara React Frontend Engineering, Mansoura University CCIC, and Courssat UK English tracks.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16.4.3 (App Router, Turbopack, Cache Components) |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 (Design Tokens via `@theme inline`) |
| **3D & Graphics** | Three.js 0.187 + WebGL Canvas |
| **Animation** | GSAP 3.15 + ScrollTrigger, Framer Motion 14 |
| **Icons** | Lucide React + Custom SVG Icons |
| **Testing** | Playwright E2E Suite |

---

## 📁 Project Structure

```text
advanced-portfolio/
├── .agent/skills/               # Full agent skills repository (gsap, img2threejs, impeccable, etc.)
├── public/
│   ├── certificates/            # Verified credentials (manara, ccic, english-courses)
│   ├── projects/                # Production screenshots (masar, flowdesk, budgety)
│   └── AmgedBadawy-CV.pdf       # Downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, obsidian dark theme, keyframes
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, Geist fonts
│   │   └── page.tsx             # Root Server Component assembling all sections
│   ├── components/
│   │   ├── layout/              # Navbar and Footer components
│   │   ├── sections/            # Hero, About, Skills, Projects, Certifications, Contact
│   │   └── ui/                  # React Bits primitives (Spotlight, DecryptedText, TiltCard, 3D Canvas)
│   └── data/
│       └── portfolio.ts         # Authoritative developer information & project data
├── PROJECT_STATE.md             # State tracking, architecture log, and phase checklist
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm or pnpm

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/AmgadBadawy/Advanced-portfolio.git
cd Advanced-portfolio

# Install dependencies
npm install

# Run the local development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 👤 Contact Amged Badawy

- **Email:** [amgedbadawy04@gmail.com](mailto:amgedbadawy04@gmail.com)
- **Phone / WhatsApp:** [+20 114 464 9776](https://wa.me/201144649776)
- **LinkedIn:** [Amged Badawy](https://www.linkedin.com/in/amged-badawy-7a48b1177/)
- **GitHub:** [AmgadBadawy](https://github.com/AmgadBadawy)
- **Location:** Nasr City, Cairo, Egypt
