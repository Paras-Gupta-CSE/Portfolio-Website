import React, { useState } from 'react';
import { X, Heart, Clock, Calendar, Share2, Check, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onLike: (id: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onLike }) => {
  const [copied, setCopied] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClap = () => {
    onLike(post.id);
    setHasLiked(true);
  };

  return (
    <div
      id="blog-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="blog-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category badge */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-white/20 backdrop-blur-xs text-white">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Metadata info */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                title="Share article link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>

              <button
                type="button"
                onClick={handleClap}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-colors ${
                  hasLiked
                    ? 'border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
                title="Applaud article"
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{post.likes}</span>
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 py-3 border-y border-neutral-100 dark:border-neutral-800">
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 font-bold flex items-center justify-center text-xs">
              PG
            </div>
            <div>
              <div className="font-bold text-sm text-neutral-900 dark:text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {post.author.role} • Cloud & Frontend Architecture
              </div>
            </div>
          </div>

          {/* Article Text / Sections */}
          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base space-y-4">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white pt-4 pb-1">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*/g, '').trim();
                return (
                  <pre
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-950 text-neutral-100 dark:bg-neutral-950 text-xs sm:text-sm font-mono overflow-x-auto border border-neutral-800"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Tags */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-neutral-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <span className="text-xs text-neutral-500">
              Published on Paras Gupta Engineering Blog
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
