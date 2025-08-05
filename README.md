# KF CIVIL PRO Builders - Professional Civil Engineering Website

A modern, responsive website for KF CIVIL PRO Builders, a professional civil engineering and construction company. Built with React, TypeScript, and Tailwind CSS.

## 🏗️ Features

- **Modern Design System**: Professional blue and orange color scheme with gradients and animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Multi-page Architecture**: Home, About, Services, Projects, Contact, and Insights pages
- **Interactive Components**: Contact forms, project filtering, search functionality
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Professional Content**: Ready-to-use content for civil engineering company

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site navigation
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Page layout wrapper
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # Company information
│   ├── Services.tsx    # Service offerings
│   ├── Projects.tsx    # Portfolio showcase
│   ├── Contact.tsx     # Contact form and info
│   └── Insights.tsx    # Blog/articles
├── assets/             # Images and static files
└── lib/                # Utility functions
```

## 🎨 Design System

The website uses a professional design system with:

- **Primary Color**: Deep blue (#1e3a8a) for trust and professionalism
- **Accent Color**: Warm orange (#f97316) for energy and progress
- **Typography**: Inter font family for modern, clean readability
- **Components**: Consistent button styles, cards, and interactive elements

## 📱 Pages Overview

### Home Page
- Hero section with construction imagery
- Company statistics and achievements
- Service overview cards
- Featured projects showcase
- Client testimonials
- Call-to-action sections

### About Page
- Company mission, vision, and values
- Historical timeline
- Team member profiles
- Industry certifications
- Core company values

### Services Page
- Detailed service descriptions:
  - Building Construction
  - Infrastructure Development
  - Project Management
  - Architectural Consulting
- Process methodology
- Industry sectors served

### Projects Page
- Portfolio showcase with filtering
- Project case studies
- Statistics and capabilities
- Project details and timelines

### Contact Page
- Contact form with validation
- Office location information
- Interactive map placeholder
- Business hours and contact details
- FAQ section

### Insights Page
- Blog/articles with categorization
- Search functionality
- Featured articles
- Newsletter signup
- Industry insights and trends

## 🛠️ Customization

### Content Updates
- Edit page content in respective files under `src/pages/`
- Update company information in components
- Replace placeholder images with actual project photos

### Styling
- Modify colors in `src/index.css` (CSS variables)
- Update Tailwind config in `tailwind.config.ts`
- Customize components in `src/components/ui/`

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🌐 Deployment

### Lovable Platform
- Already configured for Lovable deployment
- Use the "Publish" button in the Lovable interface

### Other Platforms
- **Vercel**: Connect GitHub repo and deploy
- **Netlify**: Drag and drop the `dist` folder after build
- **AWS S3**: Upload build files to S3 bucket

## 📞 Support

For questions about customization or deployment, refer to:
- [Lovable Documentation](https://docs.lovable.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is built for KF CIVIL PRO Builders. Customize and use as needed for your civil engineering business.