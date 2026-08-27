# Nhlanhla Kolobe — Portfolio & Inceptix Digital Agency Website

A personal portfolio and business showcase site built as a full stack developer profile, combined with the digital agency Inceptix (inceptix.co.za). The site is responsive, animated, and interactive, presenting skills, selected work, credentials, and a live cost estimator for prospective clients.

## Overview

This site serves two purposes. It is a personal portfolio for Nhlanhla Kolobe, founder of Inceptix, and it is a functional marketing and lead generation tool for Inceptix itself, offering visitors an interactive way to explore services, request quotes, and get in touch.

## Features

### Hero & Developer Workbench
- Live availability indicator synced with South African Standard Time (SAST)
- Interactive CLI terminal with commands such as `whoami`, `skills`, `projects`, `inceptix`, and `help`
- One click email copy with clipboard feedback, direct social links, and quick CV access

### Skills Explorer
- Categorized skills across Languages, Frameworks and Libraries, Tools and Platforms, Marketing and Digital Strategy, and Soft Skills
- Real time keyword search
- Interactive code snippet drawer showcasing production grade TypeScript and React patterns

### Selected Work (3 Projects)
1. **Fast And Beyond** (fastandbeyond.co.za) — Live and working flagship project, with a pulsing "Live" badge, interactive package pricing preview (Starter, Business, Enterprise), and performance metrics
2. **Nova Storefront & Commerce Engine** — Under construction, with a sprint progress visualizer and architecture highlights (React 19, TypeScript, PostgreSQL)
3. **Inceptix Client Workspace & Portal** — Under construction, with a sprint roadmap and monitoring engine roadmap (DNS/SSL prober, milestone approvals, SEO ranking telemetry)

### Inceptix Project Cost & Scope Estimator
- Interactive quote calculator with project scale, delivery timeline, and add on options (domain/SSL setup, technical SEO, payment gateways, CMS)
- One click "Request This Quote" button that carries the estimate into the contact form

### Experience & Credentials
- Inceptix founder timeline covering full stack development and client results
- Certifications: FNB App Academy (Full Stack Development, 2025) and Learnio (Digital Marketing, 2026), with syllabus highlights and testimonials

### CV & Contact
- Printable and downloadable CV modal formatted for PDF export and plain text ATS copying
- Consultation form with topic presets and validation
- Dark and light mode theme switcher with persistent user preference

## Tech Stack

- React with TypeScript
- Component based architecture (Header, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer, and supporting modals)
- Custom CSS for styling and theming

## Project Structure

```
├── index.html
├── metadata.json
├── src/
│   ├── index.css
│   ├── types.ts
│   ├── data/
│   │   └── portfolioData.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── CostEstimator.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── CVModal.tsx
│   │   ├── Toast.tsx
│   │   └── Footer.tsx
│   └── App.tsx
```

## Contact

For enquiries or project requests, reach out via the contact form on the site or email nhlanhlakolobe70@gmail.com.

## About Inceptix

Inceptix is a digital solutions company offering website design and development, branding, domain and hosting setup, and SEO optimization. Learn more at [inceptix.co.za](https://inceptix.co.za).
