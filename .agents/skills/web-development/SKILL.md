---
name: web-development
description: Global web development standards, framework architecture (React/Vite/Next.js/Vanilla), anti-AI-slop design system, UI/UX performance, responsive navigation, accessibility, and SEO best practices. Use when building, auditing, or refactoring web applications.
---

# Global Web Development Skill

This skill defines the technical, visual, and architectural standards for building modern, high-performance web applications.

---

## 🎨 Design & Aesthetic Excellence

1. **Anti-AI-Slop Iconography & Visuals**:
   - Use clean, minimal vector line icons (e.g. Lucide React, Heroicons, or custom inline SVGs).
   - Strictly avoid 3D glossy icons, rainbow sparkles, or tacky clipart badges.
   - Maintain consistent icon stroke weights (1.5px to 2.0px) and proportions.

2. **Typography & Hierarchy**:
   - Use modern, authoritative Google Fonts (Inter, Outfit, Plus Jakarta Sans, Geist).
   - Enforce explicit font weight scaling (`font-normal`, `font-medium`, `font-semibold`, `font-bold`).
   - Use dynamic visual contrast rather than raw black (#000000) or pure white background text overload.

3. **Navbar & Layout Rules**:
   - Enforce clean, concise top-level menu labels (e.g., `FEATURES`, `SOLUTIONS`, `PRICING`, `ABOUT`).
   - Maintain `whitespace-nowrap` on header navigation links to prevent awkward text wrapping on desktop viewports.
   - Provide a responsive drawer/hamburger navigation for screens smaller than 768px (`md:hidden`).

---

## 🏗️ Architecture & Component Standards

1. **Framework & Logic**:
   - Use React 19 / Vite / Next.js with TypeScript for type-safe state management.
   - Keep components modular, single-responsibility, and easy to maintain.

2. **Accessibility (a11y)**:
   - Ensure all input fields have explicit `id`, `name`, and standard `autoComplete` attributes (e.g. `autoComplete="email"`, `autoComplete="name"`).
   - Provide `aria-label` or visible `<label>` elements for interactive buttons and inputs.
   - Ensure interactive controls are keyboard navigable with focus states.

3. **SEO Best Practices**:
   - Include unique `<title>` and `<meta name="description">` tags on every page.
   - Enforce single `<h1>` tag hierarchy per page.
   - Add OpenGraph (`og:title`, `og:description`, `og:image`) meta tags for social sharing previews.

---

## ⚡ Performance & Optimization

1. **Lighthouse 90+ Target**:
   - Optimize bundle size by lazy loading heavy components or heavy third-party assets.
   - Compress static assets (WebP/AVIF format for images).
   - Ensure smooth 60fps micro-animations using hardware-accelerated CSS or Framer Motion primitives.
