import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
              Curriculum Vitae • Verified Dossier
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 hover:border-lime-400 hover:text-lime-500 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="space-y-8 print:p-0">
          {/* CV Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight font-serif italic">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-zinc-700 dark:text-zinc-300 mt-1 font-mono text-xs sm:text-sm">
                {PROFILE_DATA.role}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Specializing in Distributed Cloud Architecture, Modern Web Frontends & Systems Engineering
              </p>
            </div>

            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-1 sm:text-right font-mono">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-lime-500" />
                <a href={`tel:${PROFILE_DATA.phone}`} className="hover:underline">
                  +91 {PROFILE_DATA.phone}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-lime-500" />
                <a href={`mailto:${PROFILE_DATA.email}`} className="hover:underline">
                  {PROFILE_DATA.email}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-lime-500" />
                <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-lime-500 transition-colors">
                  LinkedIn: {PROFILE_DATA.linkedin}
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bangalore / Delhi (Remote Worldwide)</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-4">
              Selected Technical Experience
            </h2>
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-zinc-950 dark:text-white">
                    Lead Systems Architect • High-Scale Cloud Platforms
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">2022 — Present</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pt-1">
                  <li>Engineered distributed edge routing clusters handling 15M+ daily requests with 99.995% availability.</li>
                  <li>Refactored legacy monolith into event-driven microservices, reducing p95 database latency by 72%.</li>
                  <li>Spearheaded Core Web Vitals optimization across 12 customer-facing portals, reaching 100/100 Lighthouse metrics.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-zinc-950 dark:text-white">
                    Senior Full-Stack Engineer • SaaS & Fintech
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">2020 — 2022</span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pt-1">
                  <li>Built idempotent double-entry financial ledger platform processing over $120M in transaction volume.</li>
                  <li>Designed and published accessible enterprise design systems with strict TypeScript and WCAG AAA compliance.</li>
                  <li>Automated end-to-end continuous delivery pipelines on GCP Cloud Run and Docker.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-3">
              Core Technical Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
                <span className="font-bold text-zinc-900 dark:text-white">Frontend Architecture:</span>
                <p className="text-zinc-600 dark:text-zinc-300 mt-1 font-mono text-xs">
                  React 19, TypeScript, Next.js, Tailwind CSS, Headless UI, Motion, Canvas, State Management (Zustand, React Query).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
                <span className="font-bold text-zinc-900 dark:text-white">Backend & Cloud Systems:</span>
                <p className="text-zinc-600 dark:text-zinc-300 mt-1 font-mono text-xs">
                  Node.js, Express, Go, PostgreSQL, Redis, Kafka, Docker, Google Cloud Run, Cloudflare Edge, Prometheus, OpenTelemetry.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 font-mono">
            <div>
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Bachelor of Technology in Computer Science</span> • First Class Honors
            </div>
            <div className="mt-1 sm:mt-0">
              References & verification available upon request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
