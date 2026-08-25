import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  MapPin, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Globe,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_LIST, CERTIFICATIONS, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCV = () => {
    const plainText = `
NHLANHLA KOLOBE
Web Developer & Designer | Founder of Inceptix
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Portfolio: https://inceptix.co.za | GitHub: ${PERSONAL_INFO.socials.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

CORE SKILLS
- Languages: TypeScript, JavaScript, HTML5, CSS3, SQL (PostgreSQL)
- Frameworks & Libraries: React, Next.js, Node.js, Express, Tailwind CSS
- Tools & Platforms: Git, Figma, Vercel, Docker, PostgreSQL
- Marketing & SEO: Technical SEO, Conversion Optimization, Brand Identity

PROFESSIONAL EXPERIENCE
Founder & Full Stack Developer — Inceptix (2024 — Present)
- Founded and managed digital agency offering web design, custom development, and SEO.
- Engineered 5+ production-grade web applications with 99+ Lighthouse performance scores.
- Managed domain routing, secure SSL infrastructure, and technical SEO campaigns.

EDUCATION & CREDENTIALS
- Full Stack Development — FNB App Academy (2025)
- Digital Marketing — Learnio (2026)

FLAGSHIP PROJECTS
- Fast And Beyond (Live): Marketing platform for SA web design agency (https://fastandbeyond.co.za)
- Nova Storefront (In Development): Headless e-commerce engine with reactive state & PayFast gateway
- Inceptix Client Workspace (In Development): Centralized project delivery & DNS health monitor
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    onShowToast('CV Text Copied!', 'Curriculum Vitae copied in plain-text markdown format.', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden text-foreground my-auto print:border-none print:shadow-none print:max-h-none print:w-full"
      >
        {/* Top Control Bar (Hidden in Print) */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-5 py-3.5 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-brand uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <span className="text-border">•</span>
            <span className="text-xs text-muted-foreground font-mono">Nhlanhla Kolobe</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-brand" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors ml-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CV Printable Paper Layout */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6">
          {/* Header section */}
          <div className="border-b border-border pb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-medium text-brand mt-1">
                  {PERSONAL_INFO.title} · {PERSONAL_INFO.subtitle}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5 text-brand" />
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <div className="text-right hidden sm:block font-mono text-xs text-muted-foreground space-y-1">
                <div>Status: Available</div>
                <div>Experience: 2+ Years</div>
                <div>Focus: Full Stack & UI/UX</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
              <span>01</span>
              <span className="h-px w-6 bg-brand/40"></span>
              <span>Professional Summary</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {PERSONAL_INFO.bio} {PERSONAL_INFO.extendedBio[0]}
            </p>
          </div>

          {/* Core Technical & Marketing Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
              <span>02</span>
              <span className="h-px w-6 bg-brand/40"></span>
              <span>Technical & Domain Skills</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                <span className="font-semibold text-foreground block mb-1.5">Frontend & Frameworks</span>
                <p className="text-muted-foreground">React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3 Grid/Flexbox, Responsive Design</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                <span className="font-semibold text-foreground block mb-1.5">Backend & Databases</span>
                <p className="text-muted-foreground">Node.js, Express, PostgreSQL, SQL Modeling, RESTful APIs, Server-Side Rendering (SSR), Headless Architectures</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                <span className="font-semibold text-foreground block mb-1.5">Tools, Cloud & DevOps</span>
                <p className="text-muted-foreground">Git, GitHub, Figma Wireframing, Vercel, Docker, Domain/DNS Setup, SSL Configuration, Cloud Run</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                <span className="font-semibold text-foreground block mb-1.5">Marketing & Growth</span>
                <p className="text-muted-foreground">Technical On-Page SEO, Core Web Vitals Optimization, Brand Identity, Digital Strategy, Content Marketing</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
              <span>03</span>
              <span className="h-px w-6 bg-brand/40"></span>
              <span>Work Experience</span>
            </h2>
            {EXPERIENCE_LIST.map((exp) => (
              <div key={exp.company} className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-foreground">
                    {exp.role} <span className="text-brand">· {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground pl-4 list-disc">
                  {exp.description.map((d, i) => (
                    <li key={i} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-brand mb-3 flex items-center gap-2">
              <span>04</span>
              <span className="h-px w-6 bg-brand/40"></span>
              <span>Education & Credentials</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg border border-border bg-card">
                  <span className="font-bold text-foreground block">{cert.title}</span>
                  <span className="text-muted-foreground block text-[11px] mt-0.5">
                    {cert.issuer} · {cert.year} ({cert.status})
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-1.5">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border bg-secondary/50 px-6 py-3 flex items-center justify-between text-xs text-muted-foreground print:hidden">
          <span>Nhlanhla Kolobe · Inceptix Digital</span>
          <button onClick={onClose} className="hover:underline text-foreground font-medium">
            Close CV
          </button>
        </div>
      </motion.div>
    </div>
  );
};
