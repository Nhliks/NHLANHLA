import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCV: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenCV,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Quote Calculator', href: '#estimator' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 font-mono text-sm font-semibold transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span>{PERSONAL_INFO.initials}</span>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-foreground">{PERSONAL_INFO.name}</span>
            <span className="text-[11px] font-normal text-muted-foreground flex items-center gap-1">
              Founder · <span className="text-brand font-medium">Inceptix</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-6 lg:flex text-sm text-muted-foreground font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-foreground ${
                    isActive ? 'text-foreground font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA / Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>

          {/* Quick CV button */}
          <button
            id="header-cv-btn"
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <FileText className="h-3.5 w-3.5 text-brand" />
            <span>CV</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            id="header-contact-btn"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-light" />
            <span>Get in touch</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card lg:hidden text-foreground hover:bg-secondary"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Navigation</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-brand font-medium">
                  <span className="badge-dot"><span className="ping"></span><span className="dot"></span></span>
                  Available for hire
                </span>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-foreground font-medium transition-colors hover:text-brand"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card py-2.5 text-xs font-medium text-foreground hover:bg-secondary"
                >
                  <FileText className="h-4 w-4 text-brand" />
                  View Curriculum Vitae
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                >
                  <Sparkles className="h-4 w-4" />
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
