import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, Heart, ShieldCheck, Server } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs tracking-wider border border-zinc-300 dark:border-zinc-800">
                PG
              </div>
              <span className="font-serif italic font-black text-xl text-zinc-950 dark:text-white tracking-tight">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-sm max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
              Senior Full-Stack Engineer and Systems Designer architecting scalable cloud platforms, microservices, and sub-millisecond web interfaces.
            </p>
            {/* Scalable Server Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>Edge Delivery & Scalable Express Backend Active</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Index / Navigation
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  01 // Overview & Dossier
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  02 // Selected Gallery
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  03 // Architecture Matrix
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  04 // Engineering Logs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  05 // Initiate Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & SEO Links */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a
                  href={`tel:${PROFILE_DATA.phone}`}
                  className="flex items-center gap-2 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-lime-500" />
                  <span>+91 {PROFILE_DATA.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-2 hover:text-lime-600 dark:hover:text-lime-400 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-lime-500" />
                  <span>{PROFILE_DATA.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-lime-500" />
                  <span>LinkedIn: {PROFILE_DATA.linkedin}</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-lime-500 transition-colors flex items-center gap-1 font-mono"
                >
                  <span>XML Sitemap (SEO Engine)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. Built with React 19, TypeScript, Tailwind CSS, & Scalable Express.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-mono uppercase font-bold tracking-wider text-zinc-700 dark:text-zinc-300 hover:border-lime-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
          >
            <span>Ascend to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
