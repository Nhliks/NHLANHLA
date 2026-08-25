import React from 'react';
import { ArrowUp, Heart, Code2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Inceptix. All rights reserved.
              </p>
            </div>
          </div>

          {/* Center: Location & Tech info */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-brand" />
            <span>Built in Diepkloof, Soweto</span>
            <span>•</span>
            <span>Next-Gen Performance</span>
          </div>

          {/* Right: Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
