---
name: global-setup
description: Global web project setup standards and deployment guidelines. Enforces Cloudflare Pages/Workers static setup (CSP headers in public/_headers, synchronized CSP meta tag in index.html, public/_redirects for SPA routing), form accessibility standards, navbar text standards, anti-AI-slop icon standards, build configurations, Markdown rules (.md) manifest, and project initialization standards across all web projects. Use when creating a new web app, setting up Cloudflare deployment, configuring security headers or SPA routing, or auditing web project setup.
---

# Global Web Project Setup & Standards

This skill defines mandatory rules for setting up and deploying modern web projects.

---

## 1. Project Initialization & Structure

1. **Framework Choice**: React 19 + Vite (or Next.js for SSR/complex apps) with TypeScript.
2. **Build Configuration**: Output to `dist` directory. Set `NODE_VERSION=20` in deployment environment settings.
3. **SPA Routing**: Ensure fallback routing (e.g. `200.html` copy hook in `package.json` postbuild) so direct route URLs do not throw 404s.

---

## 2. Security Headers & CSP

1. **`public/_headers`**: Include `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`.
2. **`index.html` Meta CSP**: Ensure `<meta http-equiv="Content-Security-Policy" ...>` matches production headers.

---

## 3. UI/UX & Quality Safeguards

1. **Form Fields**: All text inputs MUST have valid `id`, `name`, `<label>` or `aria-label`, and explicit `autoComplete`.
2. **Header Navigation**: Keep top menu text concise and non-wrapping (`whitespace-nowrap`).
3. **Icons**: Use minimal vector icons (Lucide React or SVG). Avoid glossy, tacky 3D icons.
