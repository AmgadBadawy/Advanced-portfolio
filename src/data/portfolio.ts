export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  subtitle?: string;
  issuer: string;
  year: string;
  image?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Amged Badawy",
    fullName: "Amged Ibrahim Mohamed Badawy",
    role: "Frontend Developer",
    location: "Nasr City, Cairo, Egypt",
    email: "amgedbadawy04@gmail.com",
    phone: "+20 114 464 9776",
    whatsappUrl: "https://wa.me/201144649776",
    linkedinUrl: "https://www.linkedin.com/in/amged-badawy-7a48b1177/",
    githubUrl: "https://github.com/AmgadBadawy",
    cvUrl: "/AmgedBadawy-CV.pdf",
    availability: "Available for Frontend Developer Roles",
    summary:
      "Frontend Developer and Computer Science graduate from Mansoura University specializing in building high-performance, accessible, and responsive web applications with React 19, Next.js (App Router), and TypeScript. Experienced in crafting scalable design systems, bidirectional Arabic RTL interfaces, and resilient client-side state architectures.",
  },

  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate" },
  ] as Language[],

  skillCategories: [
    {
      category: "Frameworks & Styling",
      skills: [
        "React.js (v19)",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS v4",
        "CSS Modules & SASS",
        "HTML5 & Semantic Web",
      ],
    },
    {
      category: "UI & Frontend Architecture",
      skills: [
        "Component-Based Architecture",
        "Responsive & Mobile-First UI",
        "Arabic RTL Layouts & Localization",
        "Reusable Design Systems",
        "React Hooks & Custom State",
        "Repository / Data Abstraction Layer",
        "Web Accessibility (WCAG / a11y)",
        "Core Web Vitals & Performance",
      ],
    },
    {
      category: "Data, Tools & Testing",
      skills: [
        "REST APIs & GraphQL Fetch",
        "Supabase & PostgreSQL",
        "Git & GitHub Workflows",
        "Vercel Cloud Deployment",
        "Playwright E2E Testing",
        "Vitest & React Testing Library",
        "ESLint & TypeScript Strict",
        "Chrome DevTools Profiling",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: "Masar",
      subtitle: "Government Services Guide",
      badge: "Featured Platform",
      description:
        "A comprehensive Arabic-first citizen guide platform providing instant search, step-by-step procedure workflows, required documentation checklists, and direct governmental source verification.",
      highlights: [
        "Engineered a fully responsive bidirectional RTL architecture with dedicated Arabic typography hierarchy and accessible form inputs.",
        "Constructed a resilient repository abstraction layer handling data fetching, granular loading skeletons, and custom error boundaries.",
        "Optimized metadata, semantic structure, and Core Web Vitals to deliver sub-second page transitions across mobile devices.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "RTL Design",
      ],
      liveUrl: "https://masar-frontend-ten.vercel.app/",
      githubUrl: "https://github.com/AmgadBadawy",
      image: "/projects/masar.png",
    },
    {
      title: "FlowDesk",
      subtitle: "AI Workflow Productivity Interface",
      badge: "Production UI",
      description:
        "An intuitive modern workflow management platform designed to orchestrate team operations, automate task pipelines, and visualize activity metrics with zero friction.",
      highlights: [
        "Designed and implemented high-density dashboard layouts leveraging CSS Grid and Flexbox for seamless cross-device adaptability.",
        "Created smooth interactive UI states, micro-transitions, and keyboard-friendly navigation components.",
        "Applied strict TypeScript contracts across component props and API responses to guarantee runtime stability.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "UI/UX Design",
      ],
      liveUrl: "https://flow-desk-rho-ten.vercel.app/",
      githubUrl: "https://github.com/AmgadBadawy",
      image: "/projects/flowdesk.png",
    },
    {
      title: "Budgetly",
      subtitle: "Smart Home Budget Management System",
      badge: "Graduation Project",
      description:
        "An AI-assisted personal finance and household budgeting platform featuring automated expense categorization, income allocation targets, bill reminders, and intelligent budget-tailored dietary recommendations.",
      highlights: [
        "Architected frontend data flows and integrated ML recommendation endpoints based on income brackets and dietary preferences.",
        "Designed visual expense breakdown charts, customizable savings goals, and instant budget alert notifications.",
        "Awarded top evaluation honors by the Faculty of Computers and Information Sciences, Mansoura University.",
      ],
      techStack: [
        "Frontend & ML",
        "System Architecture",
        "User Flows",
        "Python & Data Analysis",
      ],
      image: "/projects/budgety.png",
    },
  ] as Project[],

  education: {
    degree: "Bachelor's Degree in Computer Science",
    institution:
      "Faculty of Computers and Information Sciences, Mansoura University",
    year: "2024",
  },

  certifications: [
    {
      title: "Frontend Engineering with React",
      subtitle: "Professional Frontend Track",
      issuer: "Manara",
      year: "2025",
      image: "/certificates/manara.png",
    },
    {
      title: "Front End Web Development",
      subtitle: "HTML5, CSS3, JavaScript, Bootstrap, ReactJS",
      issuer: "CCIC — Faculty of Computers & Information, Mansoura University",
      year: "2023",
      image: "/certificates/ccic.png",
    },
    {
      title: "Comprehensive English Language — Phase 2",
      subtitle: "Advanced Language & Communication Track",
      issuer: "COURSSAT.com (The UK)",
      year: "2024",
      image: "/certificates/english-course2.png",
    },
    {
      title: "Comprehensive English Language — Phase 1",
      subtitle: "Foundational Language Track",
      issuer: "COURSSAT.com (The UK)",
      year: "2024",
      image: "/certificates/english-course1.png",
    },
  ] as Certification[],
};
