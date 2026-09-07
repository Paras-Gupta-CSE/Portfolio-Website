/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { SkillsExperience } from './components/SkillsExperience';
import { BlogSection } from './components/BlogSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col selection:bg-lime-300 selection:text-black font-sans">
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero & Identity */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* Portfolio Projects Gallery */}
          <PortfolioGallery />

          {/* Technical Skills Matrix */}
          <SkillsExperience />

          {/* Engineering Blog Section */}
          <BlogSection />

          {/* Custom Contact Form & Direct Phone/Email */}
          <ContactFormSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Downloadable / Printable Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
