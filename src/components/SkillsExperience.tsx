import React, { useState } from 'react';
import { Cpu, Server, Cloud, CheckCircle, Code2, Terminal, Zap, Shield } from 'lucide-react';
import { SKILL_CATEGORIES_DATA, PROFILE_DATA } from '../data/portfolioData';

export const SkillsExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('frontend');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const selectedCategory = SKILL_CATEGORIES_DATA.find((c) => c.id === activeTab) || SKILL_CATEGORIES_DATA[0];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950"
      aria-label="Skills and Technical Competencies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.4em] font-mono text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            <span>002 // Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
            Architecture, Tooling & Craft
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
            Hands-on expertise spanning modern reactive frontend architectures, distributed backends, and fault-tolerant cloud platforms.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {SKILL_CATEGORIES_DATA.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none ${
                activeTab === category.id
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/60 hover:text-zinc-950 dark:hover:text-lime-400'
              }`}
            >
              {getCategoryIcon(category.id)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Category Summary & Highlights */}
          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-lime-400" />

            <div>
              <h3 className="text-2xl font-bold text-zinc-950 dark:text-white font-serif italic">
                {selectedCategory.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed">
                {selectedCategory.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Core Engineering Highlights
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                {PROFILE_DATA.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Detailed Skill Meters */}
          <div className="lg:col-span-2 space-y-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2.5 hover:border-zinc-400 dark:hover:border-lime-400/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base tracking-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                      {skill.experience}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-lime-600 dark:text-lime-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar with lime aesthetic */}
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-lime-500 dark:bg-lime-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
