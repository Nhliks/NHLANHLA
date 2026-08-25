import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  Download, 
  Mail, 
  MapPin, 
  Clock, 
  Terminal as TerminalIcon, 
  Copy, 
  Check, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Code2,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onCopyEmail, copiedEmail }) => {
  const [localTime, setLocalTime] = useState('');
  const [terminalTab, setTerminalTab] = useState<'profile' | 'inceptix' | 'terminal'>('profile');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    { cmd: 'npx nhlanhla-kolobe --version', output: 'v2.6.0 (Production Ready · Founder @ Inceptix)' },
    { cmd: 'nhlanhla --status', output: '🟢 Open for high-impact full-stack and agency client work' }
  ]);

  // Update Johannesburg / Soweto local time
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-ZA', {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setLocalTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let res: React.ReactNode = '';

    if (trimmed === 'help') {
      res = 'Available commands: whoami, skills, projects, inceptix, contact, clear';
    } else if (trimmed === 'whoami') {
      res = 'Nhlanhla Kolobe — Full Stack Web Developer, UI/UX Designer & Founder of Inceptix. Based in Diepkloof, Soweto.';
    } else if (trimmed === 'skills') {
      res = 'TypeScript, JavaScript, React, Next.js, Node.js, Express, PostgreSQL, Tailwind CSS, SEO & Digital Marketing';
    } else if (trimmed === 'projects') {
      res = 'Live Production: Fast And Beyond (fastandbeyond.co.za) | In Development: Nova Storefront (Headless Commerce) & Inceptix Client Workspace.';
    } else if (trimmed === 'inceptix') {
      res = 'Inceptix: Digital Agency specializing in web applications, bespoke branding, domain setup, hosting & SEO in South Africa.';
    } else if (trimmed === 'contact') {
      res = `Email: ${PERSONAL_INFO.email} | WhatsApp: Available on request`;
    } else if (trimmed === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      res = `command not found: "${trimmed}". Type "help" to see available commands.`;
    }

    setTerminalLogs((prev) => [...prev, { cmd, output: res }]);
    setTerminalInput('');
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand/10 dark:bg-brand/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Core Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Availability Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm">
              <span className="badge-dot">
                <span className="ping"></span>
                <span className="dot"></span>
              </span>
              <span className="font-medium text-foreground">Available for new opportunities</span>
            </div>

            {/* Soweto local time badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-brand" />
              <span className="font-mono">{localTime ? `${localTime} SAST` : 'Soweto SAST'}</span>
            </div>
          </div>

          <p className="font-mono text-sm font-medium text-brand tracking-wide">
            Hi, my name is
          </p>

          <h1 className="mt-2 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
            Nhlanhla Kolobe
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-muted-foreground">
              Web Developer & Designer
            </h2>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.bio}
          </p>

          {/* Location & Agency Tag */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand" />
              <span className="font-medium text-foreground">Diepkloof, Soweto</span>
              <span>· South Africa</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand"></span>
              <span>Founder of <strong className="text-foreground font-semibold">Inceptix</strong></span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              id="hero-view-work-btn"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-95 active:scale-98"
            >
              <span>View my work</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenCV}
              id="hero-download-cv-btn"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-secondary active:scale-98"
            >
              <Download className="h-4 w-4 text-brand" />
              <span>Interactive CV</span>
            </button>

            <a
              href="#estimator"
              id="hero-estimator-btn"
              className="inline-flex items-center gap-2 rounded-lg border border-brand/30 bg-brand/5 px-4 py-3.5 text-sm font-medium text-brand transition-all hover:bg-brand/10"
            >
              <Sparkles className="h-4 w-4" />
              <span>Quote Estimator</span>
            </a>
          </div>

          {/* Social Links & 1-Click Copy */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.email}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>

            {/* Quick 1-click email copy pill */}
            <button
              onClick={onCopyEmail}
              id="hero-copy-email-pill"
              className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/60 px-3 py-2 text-xs font-mono text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Developer Workbench Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-border bg-card/95 shadow-xl overflow-hidden backdrop-blur-sm">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">nk-terminal — zsh</span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-background/70 rounded-md p-0.5 border border-border">
                <button
                  onClick={() => setTerminalTab('profile')}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                    terminalTab === 'profile'
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setTerminalTab('inceptix')}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                    terminalTab === 'inceptix'
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Inceptix
                </button>
                <button
                  onClick={() => setTerminalTab('terminal')}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                    terminalTab === 'terminal'
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Shell
                </button>
              </div>
            </div>

            {/* Tab Content 1: Profile Summary */}
            {terminalTab === 'profile' && (
              <div className="p-5 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-brand/10 border border-brand/30 flex items-center justify-center text-brand font-bold text-sm">
                      NK
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm font-sans">Nhlanhla Kolobe</p>
                      <p className="text-muted-foreground text-[11px]">Full Stack Dev & UI Craftsman</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 text-[10px] font-semibold border border-emerald-500/20">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="text-foreground">Base:</span>
                    <span>Diepkloof, Soweto (ZA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Focus:</span>
                    <span className="text-brand">React · Next.js · Node · SQL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Agency:</span>
                    <span className="text-foreground font-medium">Inceptix (Founder)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Education:</span>
                    <span>FNB App Academy (2025)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-[11px] text-muted-foreground mb-2">Core Tech Stack:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'SEO'].map((t) => (
                      <span
                        key={t}
                        className="rounded bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 2: Inceptix Agency Highlights */}
            {terminalTab === 'inceptix' && (
              <div className="p-5 font-mono text-xs space-y-4">
                <div className="flex items-center gap-2 text-brand">
                  <Layers className="h-4 w-4" />
                  <span className="font-semibold font-sans text-sm text-foreground">Inceptix Digital Agency</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  End-to-end digital partner for growing brands. Custom web engineering, domain & DNS hosting infrastructure, high-converting SEO, and brand identity.
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-secondary/50 border border-border">
                    <span className="text-muted-foreground block text-[10px]">Speed Guarantee</span>
                    <span className="font-semibold text-foreground">95+ PageSpeed</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-secondary/50 border border-border">
                    <span className="text-muted-foreground block text-[10px]">Full Service</span>
                    <span className="font-semibold text-foreground">Design to Deploy</span>
                  </div>
                </div>

                <a
                  href="#estimator"
                  className="flex items-center justify-between w-full p-2 rounded-lg bg-brand/10 border border-brand/30 text-brand text-[11px] font-medium hover:bg-brand/20 transition-colors"
                >
                  <span>Calculate project quote</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            {/* Tab Content 3: Interactive CLI Shell */}
            {terminalTab === 'terminal' && (
              <div className="p-4 font-mono text-xs bg-card">
                <div className="min-h-[140px] max-h-[180px] overflow-y-auto space-y-2 mb-3">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-brand">
                        <span>$</span>
                        <span className="text-foreground">{log.cmd}</span>
                      </div>
                      <div className="text-muted-foreground pl-3 text-[11px]">{log.output}</div>
                    </div>
                  ))}
                </div>

                {/* Input & Quick Command Chips */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (terminalInput.trim()) {
                      handleRunCommand(terminalInput);
                    }
                  }}
                  className="flex items-center gap-2 border-t border-border pt-3"
                >
                  <span className="text-brand font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Try 'skills', 'projects', 'help'..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/60 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-[10px] hover:bg-primary hover:text-primary-foreground"
                  >
                    Run
                  </button>
                </form>

                <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-border/50 text-[10px]">
                  {['whoami', 'skills', 'projects', 'inceptix', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => handleRunCommand(cmd)}
                      className="px-1.5 py-0.5 rounded bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
