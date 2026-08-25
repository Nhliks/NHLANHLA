import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section id="experience" className="border-y border-border bg-card/60 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
            <span>04</span>
            <span className="h-px w-8 bg-brand/40"></span>
            <span>Experience</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Where I've worked
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base">
            Professional track record engineering digital systems, managing client deliverables, and driving technical outcomes.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-12">
          {EXPERIENCE_LIST.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative pl-6 sm:pl-8 border-l-2 border-border/80 group"
            >
              {/* Timeline Marker Dot */}
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-brand shadow-sm transition-transform group-hover:scale-125" />

              <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-xs">
                {/* Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 pb-4 border-b border-border">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-brand">· {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-brand" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Narrative Bullets */}
                <ul className="mt-6 space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Highlights Banner */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mt-6 grid sm:grid-cols-3 gap-3 pt-6 border-t border-border">
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-secondary/60 border border-border flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-foreground font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies used */}
                <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
