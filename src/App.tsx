import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CostEstimator } from './components/CostEstimator';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { Toast, ToastMessage } from './components/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nhlanhla_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('top');
  const [cvOpen, setCvOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [contactInitialData, setContactInitialData] = useState<{
    projectType?: string;
    scope?: string;
    addons?: string[];
    estimate?: string;
  } | null>(null);

  // Sync dark mode class with HTML document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('nhlanhla_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nhlanhla_theme', 'light');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['top', 'about', 'skills', 'projects', 'estimator', 'experience', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (title: string, message?: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    showToast('Email Copied to Clipboard', PERSONAL_INFO.email, 'success');
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleApplyQuoteToContact = (data: {
    projectType: string;
    scope: string;
    addons: string[];
    estimate: string;
  }) => {
    setContactInitialData(data);
    showToast(
      'Quote Applied to Inquiry',
      `Configured ${data.projectType} (${data.estimate}) in message form below.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-grid-pattern selection:bg-brand selection:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCV={() => setCvOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenCV={() => setCvOpen(true)}
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
        />

        <About />

        <Skills />

        <Projects />

        <CostEstimator onApplyToContact={handleApplyQuoteToContact} />

        <Experience />

        <Certifications />

        <Contact
          initialData={contactInitialData}
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <CVModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification System */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
