import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Coins, 
  Zap,
  Globe
} from 'lucide-react';

interface CostEstimatorProps {
  onApplyToContact: (data: {
    projectType: string;
    scope: string;
    addons: string[];
    estimate: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyToContact }) => {
  const [projectType, setProjectType] = useState<'landing' | 'webapp' | 'ecommerce' | 'seo'>('landing');
  const [scopeSize, setScopeSize] = useState<'starter' | 'medium' | 'large'>('starter');
  const [timeline, setTimeline] = useState<'standard' | 'express'>('standard');
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR');

  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'seo',
    'domain'
  ]);

  const addonOptions = [
    { id: 'domain', name: 'Domain Registration & SSL Hosting Setup', priceZar: 650, priceUsd: 40 },
    { id: 'seo', name: 'Technical SEO Audit & Google Search Indexing', priceZar: 1200, priceUsd: 75 },
    { id: 'cms', name: 'Custom Admin CMS / Content Dashboard', priceZar: 2200, priceUsd: 130 },
    { id: 'payments', name: 'South African Payment Gateway (PayFast/Ozow/Stripe)', priceZar: 1800, priceUsd: 110 },
    { id: 'branding', name: 'Bespoke Logo & Brand Style Guide', priceZar: 1500, priceUsd: 90 }
  ];

  const projectTypes = [
    {
      id: 'landing',
      title: 'Marketing & Landing Site',
      subtitle: 'High-converting business or portfolio site',
      baseZar: 2999,
      baseUsd: 180,
      turnaroundDays: '5–8 days',
      recommendedStack: 'Next.js, Tailwind CSS, Responsive Design'
    },
    {
      id: 'webapp',
      title: 'Full-Stack Web App',
      subtitle: 'Custom database, auth, and dashboard logic',
      baseZar: 6499,
      baseUsd: 380,
      turnaroundDays: '10–18 days',
      recommendedStack: 'React, Node.js, PostgreSQL, TypeScript'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Storefront',
      subtitle: 'Product catalog, cart, checkout & inventory',
      baseZar: 5899,
      baseUsd: 340,
      turnaroundDays: '8–14 days',
      recommendedStack: 'React, Headless Commerce, PayFast/Stripe'
    },
    {
      id: 'seo',
      title: 'SEO & Speed Rehaul',
      subtitle: 'Boost Google rankings & Core Web Vitals to 95+',
      baseZar: 2499,
      baseUsd: 150,
      turnaroundDays: '3–6 days',
      recommendedStack: 'Lighthouse 100/100, Schema, Meta Tuning'
    }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const currentType = projectTypes.find((p) => p.id === projectType)!;
    let base = currency === 'ZAR' ? currentType.baseZar : currentType.baseUsd;

    // Scope multiplier
    if (scopeSize === 'medium') base *= 1.4;
    if (scopeSize === 'large') base *= 1.9;

    // Timeline multiplier
    if (timeline === 'express') base *= 1.25;

    // Addons
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const option = addonOptions.find((o) => o.id === addonId);
      if (!option) return sum;
      return sum + (currency === 'ZAR' ? option.priceZar : option.priceUsd);
    }, 0);

    const total = Math.round(base + addonsTotal);

    return {
      total,
      turnaround: currentType.turnaroundDays,
      stack: currentType.recommendedStack,
      typeName: currentType.title
    };
  }, [projectType, scopeSize, timeline, currency, selectedAddons]);

  const handleApply = () => {
    const selectedAddonNames = selectedAddons.map(
      (id) => addonOptions.find((o) => o.id === id)?.name || id
    );

    const estimateString =
      currency === 'ZAR'
        ? `R ${calculation.total.toLocaleString('en-ZA')}`
        : `$ ${calculation.total.toLocaleString('en-US')}`;

    onApplyToContact({
      projectType: calculation.typeName,
      scope: `${scopeSize.toUpperCase()} scope (${timeline} timeline)`,
      addons: selectedAddonNames,
      estimate: estimateString
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="border-y border-border bg-card/40 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
            <Calculator className="h-3.5 w-3.5" />
            <span className="h-px w-8 bg-brand/40"></span>
            <span>Inceptix Quote Estimator</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Estimate your project investment
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base">
            Transparent pricing for South African businesses and international clients. Pick your requirements to get an instant scope breakdown.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Configurator */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                1. Select Project Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id as any)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-brand bg-brand/5 shadow-sm ring-1 ring-brand'
                          : 'border-border bg-card hover:bg-secondary/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-foreground">{type.title}</span>
                        {isSelected && <Check className="h-4 w-4 text-brand" />}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{type.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scope Size */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'starter', label: 'Essential', pages: '1–4 Key Views' },
                  { id: 'medium', label: 'Standard Growth', pages: '5–10 Views & CMS' },
                  { id: 'large', label: 'Enterprise', pages: '10+ Views & APIs' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScopeSize(s.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      scopeSize === s.id
                        ? 'border-brand bg-brand/5 ring-1 ring-brand font-semibold text-foreground'
                        : 'border-border bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="block text-xs font-medium text-foreground">{s.label}</span>
                    <span className="block text-[10px] text-muted-foreground mt-0.5">{s.pages}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Delivery Speed */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                3. Delivery Timeline
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                    timeline === 'standard'
                      ? 'border-brand bg-brand/5 ring-1 ring-brand'
                      : 'border-border bg-card hover:bg-secondary'
                  }`}
                >
                  <Clock className="h-4 w-4 text-brand shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-foreground">Standard Speed</span>
                    <span className="block text-[11px] text-muted-foreground">Standard iteration cycle</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('express')}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                    timeline === 'express'
                      ? 'border-brand bg-brand/5 ring-1 ring-brand'
                      : 'border-border bg-card hover:bg-secondary'
                  }`}
                >
                  <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-foreground">Express Priority (+25%)</span>
                    <span className="block text-[11px] text-muted-foreground">Dedicated priority delivery</span>
                  </div>
                </button>
              </div>
            </div>

            {/* 4. Add-ons */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                4. Select Optional Inceptix Add-ons
              </label>
              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const priceLabel =
                    currency === 'ZAR' ? `+R ${addon.priceZar}` : `+$ ${addon.priceUsd}`;

                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'border-brand/40 bg-brand/5 text-foreground font-medium'
                          : 'border-border bg-card text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`h-4 w-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-brand border-brand text-white'
                              : 'border-border bg-background'
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-brand font-semibold">{priceLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Invoice Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xl space-y-6">
              {/* Currency Toggle Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-brand" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                    Estimated Investment
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-secondary rounded-lg p-1 border border-border">
                  <button
                    onClick={() => setCurrency('ZAR')}
                    className={`px-2 py-1 text-[11px] font-mono rounded font-semibold transition-colors ${
                      currency === 'ZAR'
                        ? 'bg-card text-foreground shadow-xs'
                        : 'text-muted-foreground'
                    }`}
                  >
                    ZAR (R)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-1 text-[11px] font-mono rounded font-semibold transition-colors ${
                      currency === 'USD'
                        ? 'bg-card text-foreground shadow-xs'
                        : 'text-muted-foreground'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Price Big Display */}
              <div className="py-2">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground flex items-baseline gap-2">
                  <span>{currency === 'ZAR' ? 'R' : '$'}</span>
                  <span>{calculation.total.toLocaleString()}</span>
                  <span className="text-xs font-normal text-muted-foreground">est. total</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  *Guaranteed transparent pricing with milestone delivery
                </p>
              </div>

              {/* Scope Highlights */}
              <div className="space-y-2.5 text-xs border-y border-border py-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Package Type:</span>
                  <span className="font-semibold text-foreground text-right">{calculation.typeName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Estimated Turnaround:</span>
                  <span className="font-mono text-brand font-semibold">{calculation.turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Add-ons Included:</span>
                  <span className="font-semibold text-foreground">{selectedAddons.length} selected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Speed Target:</span>
                  <span className="font-mono text-emerald-500 font-semibold">95+ PageSpeed Guarantee</span>
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="rounded-xl bg-secondary/60 border border-border p-3 space-y-1 text-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
                  Recommended Architecture:
                </span>
                <p className="font-medium text-foreground text-[11px]">{calculation.stack}</p>
              </div>

              {/* Action Button */}
              <button
                id="estimator-apply-btn"
                onClick={handleApply}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-98"
              >
                <span>Request This Quote</span>
                <ArrowRight className="h-4 w-4 text-brand-light" />
              </button>

              <p className="text-center text-[11px] text-muted-foreground">
                Zero obligation. Direct conversation with Nhlanhla Kolobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
