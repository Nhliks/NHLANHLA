import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Cpu, 
  Calendar, 
  User, 
  Sparkles,
  Smartphone,
  Monitor,
  Hammer,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'architecture'>('overview');

  if (!project) return null;

  const isLive = project.status === 'live';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden text-foreground my-auto"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-brand font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-border">•</span>
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live & Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Hammer className="h-3 w-3" />
                Under Construction ({project.completionPercentage}%)
              </span>
            )}
            <span className="text-border hidden sm:inline">•</span>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Under Construction Banner if applicable */}
        {!isLive && (
          <div className="bg-amber-500/10 border-b border-amber-500/20 px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                <strong>Under Construction:</strong> This project is undergoing active engineering and sprint development.
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
              <span>Expected Launch: <strong className="text-foreground">{project.expectedLaunch}</strong></span>
              <span>•</span>
              <span>Progress: <strong className="text-amber-500">{project.completionPercentage}%</strong></span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {isLive && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <span>Visit Live Site (fastandbeyond.co.za)</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Launching {project.expectedLaunch}</span>
                  </div>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Meta tags */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground border-y border-border py-3">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-brand" />
                <span>Role: <strong className="text-foreground">{project.role}</strong></span>
              </div>
              {project.client && (
                <>
                  <span className="text-border">•</span>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-brand" />
                    <span>Client / Platform: <strong className="text-foreground">{project.client}</strong></span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Metrics Spotlight Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-brand">{m.value}</div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-border pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'overview'
                  ? 'text-brand border-b-2 border-brand -mb-[10px]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Overview & Scope
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'features'
                  ? 'text-brand border-b-2 border-brand -mb-[10px]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Deliverables {isLive ? `(${project.features.length})` : '(Sprint Roadmap)'}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-2 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                activeTab === 'architecture'
                  ? 'text-brand border-b-2 border-brand -mb-[10px]'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Architecture & Stack
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>{project.longDescription}</p>
              
              {!isLive && project.completionPercentage && (
                <div className="p-4 rounded-xl bg-secondary/60 border border-border space-y-2">
                  <div className="flex justify-between text-xs font-medium text-foreground">
                    <span className="flex items-center gap-1.5">
                      <Hammer className="h-3.5 w-3.5 text-amber-500" />
                      Engineering Sprint Progress
                    </span>
                    <span className="font-mono text-amber-500">{project.completionPercentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${project.completionPercentage}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Target deployment scheduled for {project.expectedLaunch}. Built with modern component boundaries and strict TypeScript safety.
                  </p>
                </div>
              )}

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-2">
                  Project Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-secondary-foreground border border-border"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Features */}
          {activeTab === 'features' && (
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${isLive ? 'text-emerald-500' : 'text-amber-500'}`} />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tab 3: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-lg bg-brand/10 border border-brand/20 px-3 py-1.5 text-xs font-medium text-brand"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border text-xs text-muted-foreground leading-relaxed">
                <p>
                  Engineered strictly following web performance standards: lazy-loaded assets, minimal bundle sizes, responsive SVG visualizers, and fully typed API contracts to ensure resilient maintenance.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-secondary/40 px-6 py-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>Inceptix Portfolio · Nhlanhla Kolobe</span>
          <button
            onClick={onClose}
            className="text-foreground hover:underline font-medium"
          >
            Close Window
          </button>
        </div>
      </motion.div>
    </div>
  );
};

