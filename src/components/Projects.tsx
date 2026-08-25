import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShoppingCart, 
  Check, 
  Plus, 
  Eye, 
  Activity, 
  Globe,
  Hammer,
  AlertTriangle,
  Clock,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Fast and Beyond interactive pricing toggle state
  const [fabPackage, setFabPackage] = useState<'starter' | 'business' | 'enterprise'>('business');

  // Categories computed dynamically with counts
  const categories = ['All', 'Agency & Marketing', 'E-Commerce', 'Web Apps'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
          <span>03</span>
          <span className="h-px w-8 bg-brand/40"></span>
          <span>Selected Work</span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          Featured projects
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base">
          Selected client platforms and technical systems — featuring our live production deployment for <a href="https://fastandbeyond.co.za" target="_blank" rel="noreferrer" className="text-brand font-medium hover:underline">fastandbeyond.co.za</a> alongside active 2026 builds in development.
        </p>
      </div>

      {/* Category Filter Pills with counts */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {categories.map((cat) => {
          const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all inline-flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <span>{cat}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                selectedCategory === cat
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => {
          const isLive = project.status === 'live';

          return (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl ${
                isLive
                  ? 'border-brand/40 hover:border-brand ring-1 ring-brand/10'
                  : 'border-border/80 hover:border-amber-500/40'
              }`}
            >
              {/* Interactive Device Preview Screen */}
              <div className="relative border-b border-border bg-secondary/40 p-4 overflow-hidden">
                {/* Simulated Browser Bar */}
                <div className="mb-3 flex items-center justify-between rounded-lg bg-card/90 px-3 py-1.5 border border-border text-[11px] font-mono text-muted-foreground shadow-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80"></span>
                    <span className="h-2 w-2 rounded-full bg-amber-500/80"></span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-1.5 truncate max-w-[130px] font-mono text-[10px]">
                      {isLive ? 'fastandbeyond.co.za' : `${project.id}.dev`}
                    </span>
                  </div>
                  
                  {isLive ? (
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      LIVE
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                      <Hammer className="h-2.5 w-2.5" />
                      IN BUILD
                    </span>
                  )}
                </div>

                {/* Dynamic Interactive Preview Canvas based on project */}
                <div className="aspect-[16/11] w-full rounded-xl bg-background border border-border p-3.5 flex flex-col justify-between overflow-hidden shadow-inner relative">
                  
                  {/* PREVIEW 1: FAST AND BEYOND (LIVE & OPERATIONAL) */}
                  {project.previewType === 'fastandbeyond' && (
                    <div className="h-full flex flex-col justify-between text-xs">
                      <div>
                        <div className="flex items-center justify-between pb-1.5 border-b border-border">
                          <span className="font-bold text-foreground tracking-wider flex items-center gap-1 text-[11px]">
                            <span className="h-2 w-2 bg-blue-600 rounded-xs"></span> FAST & BEYOND
                          </span>
                          <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">
                            Live Site
                          </span>
                        </div>
                        <div className="mt-1.5">
                          <p className="font-semibold text-foreground text-xs leading-tight">
                            Elevate Your Digital Reach in SA
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            Tailored web engineering & high-ranking SEO.
                          </p>
                        </div>
                      </div>

                      {/* Interactive Pricing Toggle inside Preview */}
                      <div className="my-auto p-2 rounded-lg bg-secondary/80 border border-border">
                        <div className="flex items-center justify-between text-[10px] mb-1 font-medium">
                          <span>Package Pricing:</span>
                          <div className="flex gap-1">
                            {(['starter', 'business', 'enterprise'] as const).map((pkg) => (
                              <button
                                key={pkg}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFabPackage(pkg);
                                }}
                                className={`px-1.5 py-0.5 rounded capitalize text-[9px] font-mono transition-colors ${
                                  fabPackage === pkg
                                    ? 'bg-brand text-white font-bold'
                                    : 'bg-card text-muted-foreground'
                                }`}
                              >
                                {pkg}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-semibold text-foreground truncate max-w-[140px]">
                            {fabPackage === 'starter' && 'Starter: R2,999'}
                            {fabPackage === 'business' && 'Business: R5,999'}
                            {fabPackage === 'enterprise' && 'Enterprise: R9,999+'}
                          </span>
                          <span className="text-emerald-500 font-bold text-[9px]">99/100 Speed</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/60">
                        <span className="text-emerald-500 font-medium">● fastandbeyond.co.za</span>
                        <a
                          href="https://fastandbeyond.co.za"
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand font-bold hover:underline flex items-center gap-0.5 text-[9px]"
                        >
                          Visit <ArrowUpRight className="h-2.5 w-2.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 2: NOVA STOREFRONT (UNDER CONSTRUCTION) */}
                  {project.previewType === 'nova-construction' && (
                    <div className="h-full flex flex-col justify-between text-xs">
                      <div className="flex items-center justify-between pb-1.5 border-b border-border">
                        <div className="flex items-center gap-1.5 font-bold text-foreground text-[11px]">
                          <ShoppingCart className="h-3.5 w-3.5 text-amber-500" />
                          <span>NOVA COMMERCE</span>
                        </div>
                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-bold">
                          Under Construction
                        </span>
                      </div>

                      {/* Construction Progress Interface */}
                      <div className="my-auto p-2 rounded-lg bg-secondary/80 border border-dashed border-amber-500/30 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono text-muted-foreground">Sprint Phase: 3/4</span>
                          <span className="font-mono font-bold text-amber-500">68%</span>
                        </div>
                        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full w-[68%]" />
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[9px] text-muted-foreground pt-1 font-mono">
                          <div className="truncate">✓ Headless API</div>
                          <div className="truncate">✓ State Cart</div>
                          <div className="truncate text-amber-500 font-semibold">⚡ PayFast Gateway</div>
                          <div className="truncate text-muted-foreground/60">⏳ Final QA</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/60">
                        <span className="text-amber-500 font-mono text-[9px]">Launch: Q3 2026</span>
                        <span className="font-mono text-[9px]">React 19 + Postgre</span>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW 3: INCEPTIX CLIENT PORTAL (UNDER CONSTRUCTION) */}
                  {project.previewType === 'inceptix-construction' && (
                    <div className="h-full flex flex-col justify-between text-xs">
                      <div className="flex items-center justify-between pb-1.5 border-b border-border">
                        <span className="font-semibold text-foreground flex items-center gap-1 text-[11px]">
                          <Activity className="h-3.5 w-3.5 text-amber-500" /> INCEPTIX HUB
                        </span>
                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded font-bold">
                          Under Construction
                        </span>
                      </div>

                      {/* Construction Progress Interface */}
                      <div className="my-auto p-2 rounded-lg bg-secondary/80 border border-dashed border-amber-500/30 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono text-muted-foreground">Sprint Phase: 2/4</span>
                          <span className="font-mono font-bold text-amber-500">54%</span>
                        </div>
                        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full w-[54%]" />
                        </div>
                        <div className="grid grid-cols-2 gap-1 text-[9px] text-muted-foreground pt-1 font-mono">
                          <div className="truncate">✓ DNS Prober</div>
                          <div className="truncate">✓ SSL Monitor</div>
                          <div className="truncate text-amber-500 font-semibold">⚡ Milestone UI</div>
                          <div className="truncate text-muted-foreground/60">⏳ Client Auth</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/60">
                        <span className="text-amber-500 font-mono text-[9px]">Launch: Q4 2026</span>
                        <span className="font-mono text-[9px]">Node + Express</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Information */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-brand uppercase tracking-wider">
                    {project.category}
                  </span>
                  {isLive ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Working Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400 font-medium">
                      <Hammer className="h-3 w-3" />
                      Under Construction
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack / Status Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2 py-0.5 font-mono text-[11px] border ${
                        tag === 'Live Website'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 font-bold'
                          : tag === 'Under Construction'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 font-semibold'
                          : 'bg-secondary text-secondary-foreground border-border'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Controls */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5 text-xs font-medium">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-brand transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5 text-brand" />
                    <span>{isLive ? 'Case Study' : 'Build Roadmap'}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        title="View Source Code"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                    
                    {isLive && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400">
                        <Clock className="h-3 w-3" />
                        <span>Soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Live website spotlight banner */}
      <div className="mt-12 rounded-2xl border border-brand/20 bg-brand/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand font-bold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Live Production Client Platform</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Explore fastandbeyond.co.za in real-time
          </h3>
          <p className="text-xs text-muted-foreground max-w-xl">
            See the full agency website engineered by Nhlanhla Kolobe, featuring sub-second Lighthouse scores, dynamic pricing packages, and SEO architecture.
          </p>
        </div>

        <a
          href="https://fastandbeyond.co.za"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-bold text-white shadow-md hover:opacity-95 transition-all shrink-0"
        >
          <span>Visit fastandbeyond.co.za</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Detailed Case Study Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <ProjectModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
