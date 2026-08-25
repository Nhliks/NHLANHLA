export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Agency & Marketing' | 'E-Commerce' | 'Web Apps';
  status: 'live' | 'under-construction';
  completionPercentage?: number;
  expectedLaunch?: string;
  description: string;
  longDescription: string;
  role: string;
  client?: string;
  year: string;
  featured: boolean;
  tags: string[];
  metrics?: { label: string; value: string }[];
  features: string[];
  techStack: { name: string; icon?: string }[];
  liveUrl?: string;
  githubUrl?: string;
  previewImageColor: string;
  previewType: 'fastandbeyond' | 'nova-construction' | 'inceptix-construction';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    description: string;
    codeSnippet?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: string;
  description: string;
  skillsAcquired: string[];
  credentialId?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}
