# Sheena.Works - Professional Portfolio Website

A sophisticated, privacy-conscious portfolio website for Sheena Manchanda, an Enrolled Advocate and multilingual professional services provider.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with TypeScript and Tailwind CSS
- **Privacy-First Design**: No personal photos, secure contact forms, GDPR compliant
- **Professional Services**: Legal research, contract drafting, translation, content writing
- **Performance Optimized**: Lighthouse score 95+, optimized for Indian internet speeds
- **SEO Optimized**: Bilingual SEO (English/Hindi ready)
- **Responsive Design**: Mobile-first approach with dark/light mode toggle

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom legal theme
- **Content**: MDX for blog posts and case studies
- **Deployment**: Vercel with static export
- **Icons**: Lucide React
- **Performance**: Optimized images, lazy loading, service worker

## 📁 Project Structure

```
sheena.works/
├── public/
│   ├── images/
│   ├── resume-legal.pdf
│   ├── resume-content.pdf
│   └── legal-samples/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── forms/
│   ├── content/
│   │   ├── services/
│   │   ├── projects/
│   │   └── blog/
│   └── utils/
├── package.json
└── next.config.js
```

## 🎯 Core Services

### Legal Services
- Contract Drafting & Review
- Legal Research & Memos
- Case Digests & Policy Briefs
- Cyber Law Consultation

### Content & Language
- English ↔ Hindi Translation
- Editing & Proofreading
- Academic Writing Support
- Social Media Content

### Digital Services
- Social Media Management
- Voice-over (Script-based)
- Content Strategy
- Digital Marketing

### Education
- English Tutoring
- Political Science
- Law Fundamentals
- Professional Writing

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```
   SITE_URL=https://sheena.works
   CONTACT_EMAIL=hi@sheena.works
   LEGAL_EMAIL=legal@sheena.works
   CONTENT_EMAIL=content@sheena.works
   TEACH_EMAIL=teach@sheena.works
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

## 📝 Content Management

### Adding Blog Posts
Create MDX files in `src/content/blog/`:
```markdown
---
title: "Understanding Cyber Law in India"
date: "2024-01-15"
excerpt: "A comprehensive guide to cyber law regulations in India"
category: "Legal"
---

Your content here...
```

### Adding Services
Create service pages in `src/content/services/`:
```markdown
---
title: "Contract Drafting"
price: "Starting from ₹5,000"
duration: "3-5 business days"
category: "legal"
---

Service description...
```

### Adding Case Studies
Create case studies in `src/content/projects/`:
```markdown
---
title: "Contract Review for Tech Startup"
client: "Anonymized Startup"
category: "Legal"
completed: "2024-01-01"
---

Case study details...
```

## 🔒 Privacy & Security Features

- **No Personal Information**: No photos, addresses, or phone numbers displayed
- **Secure Forms**: CAPTCHA, honeypot fields, rate limiting
- **Email Obfuscation**: Contact only through forms
- **GDPR Compliant**: Cookie consent, privacy policy
- **Legal Disclaimers**: Proper legal disclaimers on all services

## 🎨 Design Guidelines

### Color Palette
- **Primary**: Warm professional orange (`#dc5934`)
- **Secondary**: Trust-building blue (`#0ea5e9`)
- **Legal**: Traditional dark gray (`#1a1a1a`)
- **Accent**: Professional gold (`#d4af37`)

### Typography
- **Headings**: Inter (Professional, modern)
- **Body**: Inter (Readable, accessible)
- **Legal**: Georgia (Traditional, authoritative)

### Components
- **Cards**: Clean, shadowed containers
- **Buttons**: Primary and secondary styles
- **Forms**: Multi-step, validated forms
- **Navigation**: Sticky header with dropdowns

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Compression**: Gzip/Brotli compression
- **Caching**: Optimized cache headers
- **Critical CSS**: Inline critical styles

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta data
- **Schema Markup**: Legal service structured data
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine guidelines
- **Open Graph**: Social media sharing
- **Local SEO**: Delhi NCR location optimization

## 📧 Email Integration

### Contact Form Routing
- General inquiries: `hi@sheena.works`
- Legal services: `legal@sheena.works`
- Content services: `content@sheena.works`
- Teaching services: `teach@sheena.works`

### Auto-responders
Each service type has customized auto-response templates with:
- Service acknowledgment
- Expected response time
- Next steps
- Relevant resources

## 🌐 Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Set environment variables
3. Deploy with automatic builds

### Custom Domain Setup
1. Configure DNS records
2. Add domain to Vercel
3. Enable HTTPS

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build test
npm run build
```

## 📈 Analytics & Tracking

- **Google Analytics 4**: Privacy-compliant tracking
- **Service Inquiries**: Form submission tracking
- **Download Tracking**: Resource download metrics
- **Performance Monitoring**: Core Web Vitals
- **A/B Testing**: Ready for conversion optimization

## 🚀 Future Enhancements

### Phase 2 Features
- [ ] Hindi language support
- [ ] Client testimonials system
- [ ] Service calculator
- [ ] Online booking system
- [ ] Client portal
- [ ] Payment integration (Razorpay)
- [ ] Newsletter integration
- [ ] WhatsApp Business API

### Platform Integrations
- [ ] Upwork portfolio sync
- [ ] Fiverr gig display
- [ ] LinkedIn article feed
- [ ] Google Reviews widget

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

- **Website**: https://sheena.works
- **Email**: hi@sheena.works
- **Legal Services**: legal@sheena.works
- **Content Services**: content@sheena.works
- **Teaching Services**: teach@sheena.works

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS