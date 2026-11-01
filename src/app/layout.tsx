import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amged-badawy.vercel.app'),
  title: 'Amged Badawy | Frontend Developer & UI Engineer',
  description:
    'Portfolio of Amged Badawy — Frontend Developer specializing in React, Next.js (App Router), TypeScript, Arabic RTL interfaces, and high-performance web engineering.',
  keywords: [
    'Amged Badawy',
    'Frontend Developer',
    'Frontend Engineer',
    'Web Developer',
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Arabic RTL',
    'Mansoura University',
  ],
  authors: [{ name: 'Amged Badawy', url: 'https://github.com/AmgadBadawy' }],
  openGraph: {
    title: 'Amged Badawy — Frontend Developer',
    description:
      'Explore production web applications, architectural patterns, and engineering projects by Amged Badawy (React, Next.js, TypeScript, RTL layout design).',
    siteName: 'Amged Badawy Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amged Badawy — Frontend Developer',
    description:
      'Explore production web applications, architectural patterns, and engineering projects by Amged Badawy (React, Next.js, TypeScript, RTL layout design).',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-slate-100">
        {children}
      </body>
    </html>
  );
}
