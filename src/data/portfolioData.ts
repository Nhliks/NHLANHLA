import { Project, SkillCategory, ExperienceItem, Certification, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Nhlanhla Kolobe',
  initials: 'NK',
  title: 'Web Developer & Designer',
  subtitle: 'Founder of Inceptix · Full Stack Developer',
  location: 'Diepkloof, Soweto, South Africa',
  timezone: 'Africa/Johannesburg (GMT+2)',
  email: 'nhlanhlakolobe70@gmail.com',
  secondaryEmail: 'nhlikssa03@gmail.com',
  company: 'Inceptix',
  companyTagline: 'End-to-End Digital Solutions & High-Performance Web Development',
  bio: 'I design and build complete web applications end to end — crafting clean, accessible interfaces with React and Next.js, and reliable back-end APIs and databases with Node.js and PostgreSQL.',
  extendedBio: [
    "I'm a full stack developer who loves turning complex problems into clean, intuitive products — from the interface all the way down to the database. I care deeply about performance, accessibility, and the small details that make a product feel polished.",
    "Over the past few years I have worked on everything from high-converting marketing sites to data-heavy dashboards, building both the front-end and the APIs and data models behind them, always focusing on writing maintainable code.",
    "When I am not coding, you will find me contributing to open-source projects, exploring new web technologies, or mentoring aspiring developers in my local community in Soweto."
  ],
  stats: [
    { value: '2+', label: 'Years of experience', detail: 'Continuous hands-on full-stack development' },
    { value: '5+', label: 'Flagship projects shipped', detail: 'High-speed, production-grade applications' },
    { value: '10+', label: 'Happy clients served', detail: 'From startups to local businesses' },
    { value: '99%', label: 'Performance score', detail: 'Optimized for Core Web Vitals & SEO' }
  ],
  socials: {
    github: 'https://github.com/nhlanhlakolobe',
    linkedin: 'https://linkedin.com/in/nhlanhla-kolobe',
    email: 'mailto:nhlanhlakolobe70@gmail.com',
    whatsapp: 'https://wa.me/27700000000'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'fast-and-beyond',
    title: 'Fast And Beyond',
    subtitle: 'Agency Marketing Platform & Lead Engine',
    category: 'Agency & Marketing',
    status: 'live',
    year: '2025',
    role: 'Lead Designer & Full Stack Developer',
    client: 'Fast And Beyond Digital Agency',
    featured: true,
    description: 'A live marketing platform for a South African web design, branding, and SEO agency. Features interactive package pricing tables, dynamic project showcases, verified client testimonials, and a high-converting lead consultation capture system — built to be fully responsive and speed-optimized.',
    longDescription: 'Fast And Beyond is a live, production-grade digital platform engineered for a top South African creative agency. Built with Next.js, TypeScript, and Tailwind CSS, it achieves a 99/100 Lighthouse performance rating, sub-second load times, interactive consultation package calculators, and an automated CRM inquiry funnel.',
    tags: ['Live Website', 'Next.js', 'Tailwind CSS', 'SEO', 'Lead Gen'],
    features: [
      'Live website deployed at fastandbeyond.co.za with sub-second page loads',
      'Interactive service & package pricing calculator with real-time quote generation',
      'Dynamic project portfolio grid with responsive viewport previews',
      'Client testimonials slider with verified review badges',
      'High-converting multi-step lead capture consultation modal',
      '100/100 Google Lighthouse audit score with automated sitemap & schema markup'
    ],
    metrics: [
      { label: 'Status', value: 'Live & Active' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Lead Growth', value: '+140%' }
    ],
    techStack: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' }
    ],
    previewImageColor: 'from-blue-600 to-indigo-900',
    previewType: 'fastandbeyond',
    liveUrl: 'https://fastandbeyond.co.za',
    githubUrl: 'https://github.com/nhlanhlakolobe/fast-and-beyond'
  },
  {
    id: 'nova-storefront',
    title: 'Nova Storefront & E-Commerce Engine',
    subtitle: 'Headless E-Commerce Platform',
    category: 'E-Commerce',
    status: 'under-construction',
    completionPercentage: 68,
    expectedLaunch: 'Q3 2026',
    year: '2026 (In Development)',
    role: 'Full Stack Engineer & Architect',
    client: 'Inceptix Commerce Labs',
    featured: true,
    description: 'Under active construction — a high-performance headless e-commerce storefront engineered for South African retailers with ultra-fast search indexing, persistent cart state, localized currency switcher, and modern checkout flows.',
    longDescription: 'Nova Storefront is an upcoming next-generation headless retail platform engineered to eliminate slow checkout bottlenecks. Currently in active development: sprint milestones include real-time stock state tracking, PostgreSQL order modeling, dynamic variant filtering, and South African payment gateway integration.',
    tags: ['Under Construction', 'React 19', 'Headless Commerce', 'Tailwind CSS', 'PostgreSQL'],
    features: [
      'Instant facet search and multi-criteria category filtering engine',
      'Persistent shopping bag with local and cloud state synchronization',
      'Interactive coupon validation and ZAR/USD currency switcher',
      'Responsive product visualizer with variant selection (Under Construction)',
      'PayFast & Stripe payment gateway integration (In Progress)'
    ],
    metrics: [
      { label: 'Build Status', value: 'In Progress' },
      { label: 'Completion', value: '68%' },
      { label: 'Target TTFB', value: '<180ms' }
    ],
    techStack: [
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'PostgreSQL' },
      { name: 'Express API' }
    ],
    previewImageColor: 'from-amber-600 to-orange-950',
    previewType: 'nova-construction'
  },
  {
    id: 'inceptix-hub',
    title: 'Inceptix Client Workspace & Portal',
    subtitle: 'Project Delivery & Domain Hub',
    category: 'Web Apps',
    status: 'under-construction',
    completionPercentage: 54,
    expectedLaunch: 'Q4 2026',
    year: '2026 (In Development)',
    role: 'Founder & Systems Architect',
    client: 'Inceptix Digital Clients',
    featured: true,
    description: 'Under active construction — a unified management dashboard for Inceptix clients to monitor ongoing website development, verify domain & SSL health, approve design mockups, and review live SEO analytics.',
    longDescription: 'A bespoke client workspace crafted exclusively for Inceptix digital agency clients. Currently in sprint development: building real-time project roadmap milestones, automated DNS and SSL TLS certificate health monitoring, and monthly keyword ranking shift telemetry.',
    tags: ['Under Construction', 'Full Stack', 'Client Portal', 'Analytics', 'DNS / SSL'],
    features: [
      'Real-time project milestone tracker with stage approval workflows',
      'Automated domain expiry and SSL certificate health monitor (In Development)',
      'Interactive SEO performance graphs and keyword ranking metrics',
      'Direct client-to-developer messaging channel and asset upload hub'
    ],
    metrics: [
      { label: 'Build Status', value: 'In Progress' },
      { label: 'Completion', value: '54%' },
      { label: 'Target Uptime', value: '99.9%' }
    ],
    techStack: [
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Tailwind CSS' }
    ],
    previewImageColor: 'from-amber-700 to-stone-900',
    previewType: 'inceptix-construction'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      {
        name: 'TypeScript',
        level: 90,
        experience: '2+ yrs',
        description: 'Strongly typed JavaScript for robust front-end apps and resilient backend services.',
        codeSnippet: `type UserRole = 'founder' | 'developer' | 'client';
interface Developer {
  name: string;
  skills: string[];
  build: () => Promise<ProductionApp>;
}`
      },
      {
        name: 'JavaScript (ES6+)',
        level: 95,
        experience: '3+ yrs',
        description: 'Deep understanding of modern JavaScript, asynchronous event loops, DOM APIs, and closures.',
        codeSnippet: `const shipProject = async (specs) => {
  const code = await craftArchitecture(specs);
  return deployToEdge(code, { speed: 'blazing' });
};`
      },
      {
        name: 'HTML5 & Semantic Web',
        level: 98,
        experience: '3+ yrs',
        description: 'Accessible semantic structures, SEO metadata, Open Graph standards, and microdata tags.'
      },
      {
        name: 'CSS3 & Modern Layouts',
        level: 95,
        experience: '3+ yrs',
        description: 'Flexbox, CSS Grid, custom properties, animations, and fluid responsive typography.'
      },
      {
        name: 'SQL (PostgreSQL)',
        level: 85,
        experience: '2 yrs',
        description: 'Relational data modeling, indexed queries, joins, constraints, and data integrity.'
      }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      {
        name: 'React',
        level: 95,
        experience: '2+ yrs',
        description: 'Component architecture, custom hooks, state synchronization, and render optimization.',
        codeSnippet: `const usePortfolio = () => {
  const [activeProject, setActive] = useState('fast-and-beyond');
  return { activeProject, setActive };
};`
      },
      {
        name: 'Next.js',
        level: 90,
        experience: '2 yrs',
        description: 'App router, Server-Side Rendering (SSR), Static Generation (SSG), and edge API routes.'
      },
      {
        name: 'Node.js',
        level: 88,
        experience: '2+ yrs',
        description: 'Scalable backend runtime, RESTful APIs, authentication workflows, and file system handlers.'
      },
      {
        name: 'Tailwind CSS',
        level: 98,
        experience: '2+ yrs',
        description: 'Utility-first styling, design system tokens, fluid spacing, and custom responsive themes.'
      },
      {
        name: 'Express',
        level: 88,
        experience: '2+ yrs',
        description: 'Fast, unopinionated web framework for Node.js REST APIs and custom middleware stacks.'
      }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      {
        name: 'Git & GitHub',
        level: 92,
        experience: '3 yrs',
        description: 'Version control, branch workflows, pull requests, automated GitHub Actions, and release management.'
      },
      {
        name: 'Figma',
        level: 85,
        experience: '2 yrs',
        description: 'UI/UX wireframing, high-fidelity prototypes, interactive mockups, and client design reviews.'
      },
      {
        name: 'Vercel & Cloud Run',
        level: 90,
        experience: '2 yrs',
        description: 'Continuous deployment pipelines, edge network routing, SSL provisioning, and environment config.'
      },
      {
        name: 'PostgreSQL',
        level: 86,
        experience: '2 yrs',
        description: 'Database schema design, relational migrations, connection pooling, and data security.'
      },
      {
        name: 'Docker',
        level: 78,
        experience: '1+ yr',
        description: 'Containerizing full-stack web applications for predictable local development and cloud deployments.'
      }
    ]
  },
  {
    title: 'Marketing & Digital Strategy',
    skills: [
      {
        name: 'SEO Optimization',
        level: 92,
        experience: '2 yrs',
        description: 'Technical on-page SEO, Core Web Vitals optimization, structured schema, and local Google Business ranking.'
      },
      {
        name: 'Branding & Identity',
        level: 88,
        experience: '2 yrs',
        description: 'Crafting brand palettes, logo assets, typography rules, and cohesive digital design guidelines.'
      },
      {
        name: 'Digital Marketing Strategy',
        level: 86,
        experience: '2 yrs',
        description: 'Customer journey mapping, lead generation funnels, and conversion rate optimization (CRO).'
      },
      {
        name: 'Social Media Marketing',
        level: 82,
        experience: '2 yrs',
        description: 'Organic reach campaigns, visual asset creation, and content distribution across LinkedIn & Instagram.'
      },
      {
        name: 'Content Marketing',
        level: 84,
        experience: '2 yrs',
        description: 'Engaging copywriting for landing pages, case studies, technical summaries, and value propositions.'
      }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      {
        name: 'Communication',
        level: 96,
        experience: 'Always',
        description: 'Clear, proactive communication with clients and teammates; translating technical concepts into plain English.'
      },
      {
        name: 'Problem Solving',
        level: 94,
        experience: 'Always',
        description: 'Breaking complex challenges down into manageable, architecturally sound solutions.'
      },
      {
        name: 'Teamwork & Collaboration',
        level: 92,
        experience: 'Always',
        description: 'Thriving in cross-functional environments with designers, copywriters, and stakeholders.'
      },
      {
        name: 'Adaptability',
        level: 95,
        experience: 'Always',
        description: 'Fast learner who rapidly adopts emerging frameworks, standards, and industry best practices.'
      },
      {
        name: 'Time Management',
        level: 90,
        experience: 'Always',
        description: 'Reliable estimation, milestone discipline, and on-time project deliveries.'
      },
      {
        name: 'Attention to Detail',
        level: 98,
        experience: 'Always',
        description: 'Obsessed with pixel perfection, typography rhythm, zero-error consoles, and clean code formatting.'
      }
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    role: 'Founder & Full Stack Developer',
    company: 'Inceptix',
    period: '2024 — Present',
    location: 'Diepkloof, Soweto, South Africa',
    type: 'Digital Agency & Engineering',
    description: [
      'Founded and run Inceptix, a digital solutions company offering comprehensive website design and development, bespoke branding, domain and hosting setup, and SEO optimization for South African businesses and startups.',
      'Design and engineer client websites end to end, taking projects from initial whiteboard discovery and wireframing through to full-stack implementation and production deployment.',
      'Manage client domain registrations, DNS routing, secure cloud hosting, and search engine optimization strategies that deliver demonstrable organic lead growth.',
      'Oversee project timelines, client consultations, and post-launch maintenance, retaining a 100% client satisfaction score.'
    ],
    highlights: [
      'Delivered 5+ full-scale web platforms in 2024–2026',
      'Maintained 100% client retention and zero critical downtime across all hosted sites',
      'Increased client organic inbound leads by up to 140% via tailored technical SEO'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'SEO']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'fnb-academy',
    title: 'Full Stack Development',
    issuer: 'FNB App Academy',
    year: '2025',
    status: 'Verified Credential',
    description: 'Comprehensive software engineering curriculum covering modern frontend architectures, backend APIs, relational database design, algorithmic problem solving, and enterprise software patterns.',
    skillsAcquired: ['React & Next.js', 'TypeScript', 'Node.js & Express', 'SQL & Database Design', 'Git & CI/CD', 'API Architecture'],
    credentialId: 'FNB-AA-2025-NK'
  },
  {
    id: 'learnio-marketing',
    title: 'Digital Marketing & Growth',
    issuer: 'Learnio',
    year: '2026',
    status: 'Verified Credential',
    description: 'Advanced certification in digital marketing strategy, conversion rate optimization (CRO), on-page and technical SEO, brand identity execution, and digital audience acquisition.',
    skillsAcquired: ['Technical SEO', 'Conversion Optimization', 'Digital Strategy', 'Brand Positioning', 'Analytics & Tracking'],
    credentialId: 'LRN-2026-DM-NK'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sipho Ndlovu',
    role: 'Managing Director',
    company: 'Fast And Beyond Digital',
    content: 'Nhlanhla built our entire agency web platform from the ground up. Not only does it look world-class, but our page speed is lightning fast and client inquiries jumped in our first month after launch. Exceptional work ethic.',
    avatar: 'SN',
    rating: 5
  },
  {
    name: 'Lerato Mokoena',
    role: 'Creative Director',
    company: 'Apex Studio',
    content: 'The attention to typography, responsiveness, and clean code that Nhlanhla brings to every project is rare. Working with him through Inceptix was effortless — delivered ahead of schedule!',
    avatar: 'LM',
    rating: 5
  },
  {
    name: 'Kagiso Molefe',
    role: 'Founder',
    company: 'Soweto Commerce Initiative',
    content: 'Nhlanhla understands both the technical code and the business marketing side. His solutions are built for real users, and his local dedication to the Soweto tech community is inspiring.',
    avatar: 'KM',
    rating: 5
  }
];
