import React, { useState } from 'react';
import { ArrowDown, Check, Copy, ExternalLink, FileText, Linkedin, Mail, MapPin, Phone, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-label="Introduction & Overview"
    >
      {/* Subtle atmospheric gradient (ambient lime glow) */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[500px] h-[350px] bg-lime-400/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Availability Status Badge in Mono */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Open for Technical Leadership & Architecture Contracts</span>
          </div>

          {/* Headline and Identity - Editorial Artistic Serif */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[96px] leading-[0.88] font-black tracking-tighter font-serif italic text-zinc-950 dark:text-zinc-100">
              PARAS<br className="hidden sm:inline" /> GUPTA
            </h1>
            <p className="text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Digital architect specializing in high-performance delivery systems, scalable SEO frameworks, distributed backends, and pixel-perfect aesthetic interfaces.
            </p>

            {/* Monospace Quick Skill Pills from Design */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['TypeScript', 'React & Next.js', 'Distributed Node.js', 'AWS Cloud & Edge', 'PostgreSQL & Redis'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] uppercase font-mono tracking-wider text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Artistic Divider Lines & Contact Strip */}
          <div className="mt-8 space-y-3.5">
            {/* Email Line */}
            <div className="flex items-center space-x-3.5 group">
              <div className="w-12 h-[1px] bg-lime-400 transition-all duration-300 group-hover:w-16" />
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="hover:text-zinc-950 dark:hover:text-lime-400 transition-colors"
                >
                  {PROFILE_DATA.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
                  className="p-1 hover:text-lime-500 dark:hover:text-lime-400 focus:outline-none"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-lime-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Line */}
            <div className="flex items-center space-x-3.5 group">
              <div className="w-12 h-[1px] bg-zinc-400 dark:bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-lime-400" />
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <a
                  href={`tel:${PROFILE_DATA.phone}`}
                  className="hover:text-zinc-950 dark:hover:text-lime-400 transition-colors"
                >
                  +91 {PROFILE_DATA.phone}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE_DATA.phone, 'phone')}
                  className="p-1 hover:text-lime-500 dark:hover:text-lime-400 focus:outline-none"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-3 h-3 text-lime-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Line */}
            <div className="flex items-center space-x-3.5 group">
              <div className="w-12 h-[1px] bg-zinc-400 dark:bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-lime-400" />
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <Linkedin className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-lime-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn: {PROFILE_DATA.linkedin}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3.5 text-xs font-mono text-zinc-500">
              <div className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-800" />
              <span>Bangalore / Delhi (Available Worldwide)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              id="hero-portfolio-cta"
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-black text-xs uppercase tracking-widest hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-all duration-150 shadow-xs focus:outline-none"
            >
              <span>Selected Gallery</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              id="hero-contact-cta"
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-lime-400 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-150 focus:outline-none"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Initiate Protocol</span>
            </a>

            <a
              id="hero-linkedin-cta"
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider hover:border-lime-400 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-150 focus:outline-none"
            >
              <Linkedin className="w-3.5 h-3.5 text-lime-500" />
              <span>LinkedIn</span>
            </a>

            <button
              id="hero-resume-cta"
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-zinc-600 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider hover:text-zinc-950 dark:hover:text-lime-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV Dossier</span>
            </button>
          </div>

          {/* Metric Stats Banner */}
          <div className="mt-14 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/50 transition-colors">
              <div className="text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
                6+ <span className="text-xs font-mono font-normal uppercase not-italic text-zinc-500">Yrs</span>
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 mt-2 font-bold">
                Production Depth
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/50 transition-colors">
              <div className="text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
                42+ <span className="text-xs font-mono font-normal uppercase not-italic text-zinc-500">Live</span>
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 mt-2 font-bold">
                Shipped Architectures
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/50 transition-colors">
              <div className="text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic text-lime-500 dark:text-lime-400">
                99.99%
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 mt-2 font-bold">
                Availability Standard
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/50 transition-colors">
              <div className="text-3xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
                15M+ <span className="text-xs font-mono font-normal uppercase not-italic text-zinc-500">Req</span>
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 mt-2 font-bold">
                Peak Daily Volume
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
