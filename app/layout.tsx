'use client';

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

// export const metadata: Metadata = {
//   title: 'YatraVerse - Discover the Soul of India',
//   description: 'AI-Powered Tourism Discovery, Travel Planning & Experience Ecosystem',
// };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI-Powered Tourism Discovery, Travel Planning & Experience Ecosystem" />
        <title>YatraVerse - Discover the Soul of India</title>
      </head>
      <body className="bg-brand-dark text-white overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
