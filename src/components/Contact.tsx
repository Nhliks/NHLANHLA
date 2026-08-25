import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialData?: {
    projectType?: string;
    scope?: string;
    addons?: string[];
    estimate?: string;
  } | null;
  onCopyEmail: () => void;
  copiedEmail: boolean;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({
  initialData,
  onCopyEmail,
  copiedEmail,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('New Web Project');
  const [message, setMessage] = useState(
    initialData
      ? `Hi Nhlanhla,\n\nI'm interested in working together on a ${initialData.projectType} (${initialData.scope}).\nEstimated Budget: ${initialData.estimate}\nAdd-ons: ${initialData.addons?.join(', ')}.\n\nLet's discuss next steps!`
      : ''
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync if initialData changes from Estimator
  React.useEffect(() => {
    if (initialData) {
      setSelectedTopic('Inceptix Services');
      setMessage(
        `Hi Nhlanhla,\n\nI'm interested in working together on a ${initialData.projectType} (${initialData.scope}).\nEstimated Investment: ${initialData.estimate}\nSelected Add-ons:\n- ${initialData.addons?.join('\n- ')}\n\nLooking forward to hearing from you!`
      );
    }
  }, [initialData]);

  const topics = ['New Web Project', 'Inceptix Services', 'Full-Stack App', 'SEO & Speed Audit', 'Say Hello'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      onShowToast('Missing required fields', 'Please fill in your name, email, and message.', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onShowToast('Inquiry sent successfully!', `Thanks ${name}, Nhlanhla will get back to you shortly.`, 'success');
    }, 900);
  };

  return (
    <section id="contact" className="border-t border-border bg-card/70 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-16">
          <p className="font-mono text-sm font-semibold text-brand tracking-wider uppercase">
            What's next?
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Let's work together
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm currently open to new roles, freelance commissions, and agency client projects at Inceptix. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          {/* Quick email CTA button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              id="contact-main-email-btn"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-98"
            >
              <Mail className="h-4 w-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <button
              onClick={onCopyEmail}
              id="contact-copy-email-btn"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground hover:bg-secondary active:scale-98 transition-all"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-muted-foreground" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Two Columns: Contact Details & Direct Form */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-foreground">Direct Channels</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-brand/10 text-brand shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Email Inquiry</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-medium text-foreground hover:text-brand transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Location</span>
                    <span className="font-medium text-foreground">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Response Time</span>
                    <span className="font-medium text-foreground">Usually within 2–4 hours (SAST)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                  Connect on Social & Code:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Nhlanhla will review your project details and respond to <strong className="text-foreground">{email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-xs font-medium text-secondary-foreground hover:bg-border transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <h3 className="text-base font-bold text-foreground">Send a Direct Message</h3>
                    <span className="text-[11px] font-mono text-muted-foreground">Inceptix Direct Hub</span>
                  </div>

                  {/* Topic Selector Pills */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-2">
                      Topic / Requirement
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            selectedTopic === t
                              ? 'bg-brand text-white'
                              : 'bg-secondary text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Lerato Ndlovu"
                        className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.co.za"
                        className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full rounded-xl border border-border bg-card p-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-98 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message to Nhlanhla</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
