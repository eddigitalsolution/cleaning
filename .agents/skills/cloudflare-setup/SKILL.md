---
name: cloudflare-setup
description: Cloudflare Pages & Workers deployment setup skill. Enforces security headers (public/_headers), CSP meta tag synchronization (index.html), SPA routing via wrangler.jsonc assets config, input autocomplete standards, and build settings (NODE_VERSION=20, dist). Use when deploying web apps to Cloudflare, fixing CSP issues, or configuring SPA sub-route redirects.
---

# Cloudflare Pages & Workers Deployment Setup Skill

This skill provides guidelines and configurations for deploying web applications cleanly without CSP warnings or 404 routing errors.

---

## 🏗️ Model A: Cloudflare Pages (Git Integration)

Used when Cloudflare dashboard **Deploy command** is **BLANK**.

### `wrangler.jsonc`
```json
{
  "name": "project-name",
  "compatibility_date": "2026-09-07",
  "pages_build_output_dir": "./dist"
}
```

---

## 🏗️ Model B: Cloudflare Workers + Static Assets

Used when Cloudflare dashboard **Deploy command** is `npx wrangler deploy`.

### `wrangler.jsonc`
```json
{
  "name": "project-name",
  "compatibility_date": "2026-09-07",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

---

## Key Configurations

### 1. `public/_headers`
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

### 2. `index.html` Meta CSP Tag
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```
