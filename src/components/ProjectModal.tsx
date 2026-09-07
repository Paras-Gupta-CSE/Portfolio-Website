import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-white/20 backdrop-blur-xs text-white">
                {project.category}
              </span>
              <span className="text-xs text-neutral-300 font-medium">
                {project.year} • {project.role}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Executive Overview */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
              Architectural Overview
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Key Capabilities & Performance Results</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/40 p-3 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architectural Decisions */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              <span>Systems Engineering Strategy</span>
            </h3>
            <div className="space-y-2">
              {project.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800/60 p-3.5 rounded-lg border border-neutral-200/80 dark:border-neutral-700/80 font-mono text-xs sm:text-sm"
                >
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Tech Stack & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
