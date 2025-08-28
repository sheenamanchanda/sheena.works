# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code with ESLint
npm run typecheck    # TypeScript type checking
```

## Git Workflow
After every code update of any scale or size, always make sure to do a git add and commit and push immediately.

## Architecture Overview

This is a Next.js 14+ professional portfolio website for Sheena Manchanda (Enrolled Advocate) using the App Router, TypeScript, and Tailwind CSS. The site emphasizes privacy, professionalism, and legal compliance.

### Key Architecture Patterns

**Page Structure**: Uses Next.js App Router with route-based organization (`src/app/`). Each page is a `page.tsx` file in its route folder.

**Layout System**: 
- Root layout (`src/app/layout.tsx`) handles global metadata, SEO, and font loading
- Main layout component (`src/components/layout/Layout.tsx`) wraps pages with Header, Footer, and Aurora background
- Individual page components compose multiple section components

**Component Organization**:
- `src/components/layout/` - Header, Footer, Layout wrapper
- `src/components/sections/` - Page-specific content sections (Hero, About, Services, etc.)
- `src/components/ui/` - Reusable UI components (Button, Card, Aurora)
- `src/components/forms/` - Form components

**Styling System**:
- Custom Tailwind configuration with legal-themed color palette
- Blue-based primary colors, professional secondary grays
- Custom CSS in `globals.css` for complex animations (aurora background, floating icons)
- Component-specific styles using Tailwind utility classes
- `cn()` utility function for conditional className merging

**Content Strategy**: 
- Static content defined in component files (no CMS)
- Service information, testimonials, and professional details are hardcoded in components
- Multi-page structure covering legal services, content writing, translation, and tutoring

### Important Patterns

**Privacy-First Design**: No personal photos, addresses, or direct contact information displayed. All contact through forms.

**Aurora Background**: Global animated gradient background with floating orbs defined in `globals.css` and rendered via `Aurora.tsx` component.

**Section-Based Pages**: Pages are composed of multiple section components (e.g., `AboutHero`, `ProfessionalJourney`, `SkillsMatrix`) for modular content organization.

**Professional Theme**: Consistent use of legal terminology, professional color scheme, and formal tone throughout the site.

**SEO Optimization**: Comprehensive meta tags, Open Graph, and Twitter card configuration in root layout.

## Component Conventions

- Use TypeScript interfaces for props
- Section components follow naming pattern: `[PageName][SectionName].tsx`
- UI components are minimal and reusable
- Lucide React icons throughout for consistency
- Form components handle validation and submission logic

## Styling Conventions

- Tailwind utility-first approach
- Custom color variables defined in `tailwind.config.js`
- Global animations and custom CSS in `src/app/globals.css`
- Responsive design using Tailwind breakpoints
- Professional blue color scheme with legal-themed accents

## Key Features

- **Performance**: Optimized images, lazy loading, and Next.js built-in optimizations
- **Legal Compliance**: Professional disclaimers, privacy policy, terms of service
- **Multi-Service**: Legal services, content writing, translation, and tutoring sections
- **Professional Branding**: Enrolled Advocate credentials prominently displayed
- **Contact Forms**: Service-specific contact routing and professional inquiry handling