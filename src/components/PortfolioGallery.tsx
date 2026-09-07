import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, ArrowRight, Layers, Sparkles, Filter } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & Systems', 'Cloud & DevOps', 'Mobile & Web'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800"
      aria-label="Selected Engineering Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.4em] font-mono text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
              Featured Systems & Applications
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
              A curated catalog of production systems, developer toolkits, edge routers, and distributed architectures engineered with rigorous precision.
            </p>
          </div>

          {/* Quick Count Badge in Mono */}
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 font-bold">
            001 — 00{filteredProjects.length}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider whitespace-nowrap transition-all duration-150 focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/60 hover:text-zinc-950 dark:hover:text-lime-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input with architectural style */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keyword, tag, or tech..."
              className="w-full pl-11 pr-4 py-2.5 text-xs font-mono bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-full focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
            <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">
              No archives found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:border-zinc-400 dark:hover:border-lime-400/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
                onClick={() => setActiveProject(project)}
              >
                {/* Artistic Hover Accent Overlay */}
                <div className="absolute inset-0 bg-lime-400/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 backdrop-blur-xs text-zinc-200 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Primary Metric Pill */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-3 left-3 z-10 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-xs text-white text-[11px] font-mono font-medium flex items-center gap-1.5 border border-zinc-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      <span>{project.metrics[0].label}: {project.metrics[0].value}</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                      <span>{project.role}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors font-serif italic">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-mono uppercase rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Links */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400"
                    >
                      <span>Case Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-zinc-500 hover:text-zinc-950 dark:hover:text-lime-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                          title="Live Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-zinc-500 hover:text-zinc-950 dark:hover:text-lime-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          aria-label={`View GitHub repository for ${project.title}`}
                          title="GitHub Source"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
