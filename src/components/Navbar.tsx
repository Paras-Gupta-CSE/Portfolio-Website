import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, ArrowUpRight, Phone, Mail, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, actualTheme, setTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800 py-3.5 shadow-xs'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-baseline gap-2.5 group focus:outline-none rounded-lg p-1"
            aria-label="Paras Gupta Home"
          >
            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-lime-400 font-serif italic group-hover:scale-105 transition-transform">
              PG
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 font-medium">
                Portfolio—2025
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-lime-400" />
              <span className="hidden sm:inline-block text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                PARAS GUPTA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-lime-400 transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-400 hover:border-lime-400 transition-colors duration-150 focus:outline-none"
              aria-label={`Switch to ${actualTheme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Toggle theme (Current: ${actualTheme})`}
            >
              {actualTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-lime-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Resume button */}
            <button
              id="view-resume-nav-btn"
              type="button"
              onClick={onOpenResume}
              className="px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-lime-400 hover:text-zinc-950 dark:hover:text-lime-400 transition-all duration-150 focus:outline-none"
            >
              Resume
            </button>

            {/* LinkedIn Profile Link */}
            <a
              id="navbar-linkedin-btn"
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-lime-400 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-150 focus:outline-none"
              aria-label="Visit LinkedIn Profile"
              title={`LinkedIn: ${PROFILE_DATA.linkedin}`}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Connect CTA */}
            <a
              id="contact-nav-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-[11px] font-black uppercase tracking-widest rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-all duration-150 shadow-xs focus:outline-none"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-btn"
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {actualTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-lime-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-lime-500 dark:hover:text-lime-400 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="md:hidden fixed inset-0 top-16 bg-zinc-950/70 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-100 hover:text-lime-500 dark:hover:text-lime-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-lime-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
                >
                  View Full CV / Resume
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full py-3 text-center text-xs font-black uppercase tracking-widest rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-colors"
                >
                  Connect
                </a>
              </div>

              {/* Direct quick contact links in mobile drawer */}
              <div className="pt-4 flex flex-col gap-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-lime-400 font-semibold"
                >
                  <Linkedin className="w-3.5 h-3.5 text-lime-500 shrink-0" />
                  <span>LinkedIn: {PROFILE_DATA.linkedin}</span>
                </a>
                <div className="flex items-center justify-between pt-1">
                  <a
                    href={`tel:${PROFILE_DATA.phone}`}
                    className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-lime-400"
                  >
                    <Phone className="w-3.5 h-3.5 text-lime-500" />
                    <span>{PROFILE_DATA.phone}</span>
                  </a>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-lime-400"
                  >
                    <Mail className="w-3.5 h-3.5 text-lime-500" />
                    <span>{PROFILE_DATA.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
