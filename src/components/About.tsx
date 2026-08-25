import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Sparkles, 
  Code, 
  Layers, 
  Search, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  HeartHandshake,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'process' | 'community'>('process');

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'Understanding user goals, scoping data requirements, wireframing workflows, and choosing the optimal technology stack.',
      icon: Search
    },
    {
      step: '02',
      title: 'UI/UX & Design System',
      description: 'Crafting responsive layouts, typographic hierarchy, and intuitive micro-interactions using Figma and Tailwind CSS.',
      icon: Layers
    },
    {
      step: '03',
      title: 'Full-Stack Engineering',
      description: 'Writing maintainable TypeScript, building performant React/Next.js client experiences, and resilient Node/PostgreSQL backends.',
      icon: Code
    },
    {
      step: '04',
      title: 'SEO, Speed & Launch',
      description: 'Zero-CLS Core Web Vitals optimization, automated schema markup, domain & SSL provisioning, and ongoing maintenance.',
      icon: Rocket
    }
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
          <span>01</span>
          <span className="h-px w-8 bg-brand/40"></span>
          <span>About</span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          A bit about me
        </h2>
      </div>

      {/* Main Grid: Narrative & Stats */}
      <div className="grid gap-12 md:grid-cols-3 items-start">
        {/* Story Text */}
        <div className="space-y-4 md:col-span-2 text-muted-foreground leading-relaxed text-base">
          {PERSONAL_INFO.extendedBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Core Values / Badges */}
          <div className="pt-4 grid sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card">
              <Zap className="h-4 w-4 text-amber-500 shrink-0" />
              <span>Speed & Accessibility First (100% Lighthouse)</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>Clean, Maintainable & Scalable Code</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card">
              <HeartHandshake className="h-4 w-4 text-rose-500 shrink-0" />
              <span>Transparent Client Collaboration & Delivery</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card">
              <Cpu className="h-4 w-4 text-brand shrink-0" />
              <span>Full-Stack Versatility: Frontend to Database</span>
            </div>
          </div>
        </div>

        {/* Stats Column */}
        <div className="flex flex-col gap-6 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="text-4xl font-bold tracking-tight text-foreground group-hover:text-brand transition-colors">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Process & Philosophy Tabs */}
      <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
          <div>
            <h3 className="text-lg font-semibold text-foreground">How I Build & Deliver</h3>
            <p className="text-xs text-muted-foreground">My end-to-end software and agency workflow at Inceptix</p>
          </div>

          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1 border border-border">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'process'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Engineering Workflow
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'philosophy'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Tech Philosophy
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'community'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Community & Roots
            </button>
          </div>
        </div>

        {/* Tab 1: Workflow Steps */}
        {activeTab === 'process' && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative flex flex-col p-5 rounded-xl border border-border/80 bg-background hover:border-brand/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand bg-brand/10 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Tech Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-background border border-border space-y-2">
              <h4 className="font-semibold text-foreground">User-Centric Performance</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Great websites are fast, lightweight, and accessible to everyone on any network or device. Every millisecond shaved is a better user experience.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border space-y-2">
              <h4 className="font-semibold text-foreground">Type Safety & Reliability</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                TypeScript from frontend to backend reduces runtime bugs, accelerates feature velocity, and ensures scalable architecture as projects expand.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border space-y-2">
              <h4 className="font-semibold text-foreground">Business Measurable Outcomes</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Design and code are vehicles for real business growth — generating leads, booking orders, building brand credibility, and ranking on Google.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Community & Roots */}
        {activeTab === 'community' && (
          <div className="mt-6 p-5 rounded-xl bg-background border border-border flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 space-y-2 text-sm">
              <span className="font-mono text-xs font-semibold text-brand">SOWETO TO THE WORLD</span>
              <h4 className="text-base font-semibold text-foreground">
                Empowering Local Businesses in Diepkloof & Beyond
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based in Diepkloof, Soweto, I am passionate about bringing modern, world-class web presence and digital commerce tools to South African township entrepreneurs, local shops, and independent brands. Through Inceptix, we bridge the gap between world-class software engineering and local market needs.
              </p>
            </div>
            <div className="shrink-0 font-mono text-center p-4 rounded-lg bg-secondary border border-border text-xs">
              <span className="block text-2xl font-bold text-foreground">Soweto</span>
              <span className="text-muted-foreground">South Africa</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
