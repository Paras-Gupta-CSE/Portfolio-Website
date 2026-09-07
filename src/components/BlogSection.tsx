import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Heart, Search, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { BlogModal } from './BlogModal';

export const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS_DATA);
  const [activeTag, setActiveTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const tags = ['All', 'Architecture & Backend', 'Frontend & Performance', 'Full-Stack & TypeScript'];

  const filteredPosts = posts.filter((post) => {
    const matchesTag = activeTag === 'All' || post.category === activeTag;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));

    return matchesTag && matchesSearch;
  });

  const handleLike = async (postId: string) => {
    // Optimistic UI update
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
    if (activePost && activePost.id === postId) {
      setActivePost((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }

    try {
      await fetch(`/api/posts/${postId}/like`, { method: 'POST' });
    } catch (e) {
      console.warn('Like request failed:', e);
    }
  };

  return (
    <section
      id="blog"
      className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800"
      aria-label="Engineering Blog & Publications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.4em] font-mono text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>003 // Engineering Logs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
              Writings, Essays & Logs
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
              Deep dives into distributed systems reliability, frontend render pipelines, API contract safety, and production telemetry.
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 font-bold">
            001 — 00{filteredPosts.length}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase font-bold tracking-wider whitespace-nowrap transition-all duration-150 focus:outline-none ${
                  activeTag === t
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-lime-400/60 hover:text-zinc-950 dark:hover:text-lime-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search engineering logs..."
              className="w-full pl-11 pr-4 py-2.5 text-xs font-mono bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-full focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400"
            />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs hover:border-zinc-400 dark:hover:border-lime-400/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
              onClick={() => setActivePost(post)}
            >
              {/* Artistic Hover Accent Overlay */}
              <div className="absolute inset-0 bg-lime-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

              {/* Cover Image */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-950/85 backdrop-blur-xs text-zinc-200 border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-lime-600 dark:text-lime-400 tracking-wider">
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:underline underline-offset-4 decoration-lime-400 transition-colors leading-snug font-serif italic">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400">
                    <span>Inspect Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <BlogModal
        post={activePost}
        onClose={() => setActivePost(null)}
        onLike={handleLike}
      />
    </section>
  );
};
