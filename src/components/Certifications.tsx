import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  GraduationCap, 
  ShieldCheck,
  Star,
  Quote
} from 'lucide-react';
import { CERTIFICATIONS, TESTIMONIALS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
      {/* Section Header */}
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
          <span>05</span>
          <span className="h-px w-8 bg-brand/40"></span>
          <span>Certifications & Endorsements</span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          Learning & credentials
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-base">
          Self-taught through hands-on projects, course curriculums, and continued technical mastery — backed by verified credentials.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-6 sm:grid-cols-2 mb-20">
        {CERTIFICATIONS.map((cert) => {
          const isSelected = selectedCert === cert.id;

          return (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(isSelected ? null : cert.id)}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-brand transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-muted-foreground mt-0.5">
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  {cert.status}
                </span>
              </div>

              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Acquired */}
              <div className="mt-5 pt-4 border-t border-border/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2">
                  Competencies Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-secondary px-2 py-0.5 text-[11px] font-mono text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialId && (
                <div className="mt-4 pt-2 text-[10px] font-mono text-muted-foreground/80 flex items-center justify-between">
                  <span>ID: {cert.credentialId}</span>
                  <span className="text-brand group-hover:underline">Click to expand details</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Client Endorsements & Testimonials Sub-section */}
      <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-10">
        <div className="max-w-xl mb-8">
          <div className="flex items-center gap-2 text-brand text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Quote className="h-3.5 w-3.5" />
            <span>Client Reviews</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            What collaborators say
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-mono text-xs font-bold text-brand">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">{t.name}</h4>
                  <p className="text-[11px] text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
