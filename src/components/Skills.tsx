import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Code2, 
  Layers, 
  Wrench, 
  TrendingUp, 
  Users2, 
  Check, 
  Copy, 
  Sparkles,
  ChevronDown,
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkillCode, setActiveSkillCode] = useState<{ name: string; snippet: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Tools & Platforms', 'Marketing & Digital Strategy', 'Soft Skills'];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return false;
    }
    return true;
  }).map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((cat) => cat.skills.length > 0);

  const handleCopyCode = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="border-y border-border bg-card/60 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-brand">
            <span>02</span>
            <span className="h-px w-8 bg-brand/40"></span>
            <span>Skills</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            Technologies I work with
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-base">
            A snapshot of the tools I use day to day, plus the soft skills that help me collaborate and ship production-ready products.
          </p>
        </div>

        {/* Controls: Category Filter + Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-secondary/80 rounded-xl border border-border">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat === 'Marketing & Digital Strategy' ? 'Marketing' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, SQL)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => {
            const isSoftSkill = catGroup.title === 'Soft Skills';

            return (
              <div key={catGroup.title} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {catGroup.title}
                  </h3>
                  <span className="h-px flex-1 bg-border/60"></span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                {isSoftSkill ? (
                  /* Soft Skills Badges */
                  <div className="flex flex-wrap gap-2.5">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative rounded-full bg-brand/10 border border-brand/20 px-4 py-2 text-sm font-medium text-brand hover:bg-brand/20 transition-all cursor-default"
                        title={skill.description}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Technical Skills Cards */
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-4 transition-all hover:border-brand/40 hover:shadow-sm"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors">
                              {skill.name}
                            </h4>
                            <span className="font-mono text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded border border-border">
                              {skill.experience}
                            </span>
                          </div>

                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {skill.description}
                          </p>
                        </div>

                        {/* Interactive Code Snippet button or Progress */}
                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                          <div className="flex-1 mr-3">
                            <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                              <div
                                className="h-full rounded-full bg-brand transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>

                          {skill.codeSnippet && (
                            <button
                              onClick={() =>
                                setActiveSkillCode({
                                  name: skill.name,
                                  snippet: skill.codeSnippet!
                                })
                              }
                              className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[10px] font-mono text-muted-foreground hover:text-foreground hover:bg-border transition-colors shrink-0"
                              title="View sample usage"
                            >
                              <Terminal className="h-3 w-3 text-brand" />
                              <span>Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Code Snippet Modal Drawer */}
        <AnimatePresence>
          {activeSkillCode && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-brand" />
                    <span className="font-mono text-xs font-semibold text-foreground">
                      {activeSkillCode.name} — Implementation snippet
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveSkillCode(null)}
                    className="text-muted-foreground hover:text-foreground text-xs font-mono"
                  >
                    ✕ Close
                  </button>
                </div>

                <div className="p-4 bg-secondary/30">
                  <pre className="font-mono text-xs text-foreground/90 overflow-x-auto p-4 rounded-xl bg-card border border-border leading-relaxed">
                    <code>{activeSkillCode.snippet}</code>
                  </pre>
                </div>

                <div className="flex items-center justify-between border-t border-border bg-card px-4 py-3">
                  <span className="text-[11px] text-muted-foreground font-mono">
                    Production pattern used across Inceptix projects
                  </span>
                  <button
                    onClick={() => handleCopyCode(activeSkillCode.snippet)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy code'}</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
