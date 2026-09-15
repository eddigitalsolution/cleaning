---
name: cloudflare-deployment
description: Comprehensive Cloudflare Pages & Workers static deployment skill. Enforces security headers (public/_headers), CSP meta tag synchronization, SPA routing (wrangler.jsonc / 200.html), package.json postbuild scripts, NODE_VERSION=20, and troubleshooting common Cloudflare CI edge deployment failures. Use when deploying, configuring, or troubleshooting web apps on Cloudflare.
---

# Global Cloudflare Deployment Skill

This skill provides step-by-step instructions, pre-flight checklists, and troubleshooting runbooks for deploying web applications to **Cloudflare Pages** and **Cloudflare Workers**.

---

## 🚨 Deployment Model Reference

Identify your Cloudflare deployment model BEFORE configuring settings:

| Parameter | Model A: Cloudflare Pages (Git) | Model B: Cloudflare Workers + Static Assets |
|---|---|---|
| **Deploy Command (Dashboard)** | *(Leave completely BLANK)* | `npx wrangler deploy` |
| **`wrangler.jsonc` setting** | `pages_build_output_dir: "./dist"` | `assets: { directory: "./dist", not_found_handling: "single-page-application" }` |
| **Use Case** | Native Git push to Pages | Worker script + static frontend assets |

> ⚠️ **CRITICAL**: Never mix these models. Adding `assets` to a Pages project causes `Configuration file for Pages projects does not support "assets"`. Running `npx wrangler deploy` without `assets.directory` causes `Missing entry-point to Worker script or to assets directory`.

---

## 🔒 1. Security Headers (`public/_headers`)

Create `public/_headers` in the root of your web project directory:

```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🌐 2. Local & Edge CSP Synchronization (`index.html`)

Include matching CSP meta tag in `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```

---

## 🛠️ 3. Package.json Scripts & SPA Postbuild Clean-Up

Configure `package.json` with node postbuild fallback and asset cleanup:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "postbuild": "node -e \"const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });\"",
    "deploy": "npm run build",
    "lint": "tsc",
    "preview": "vite preview"
  }
}
```

---

## ⚙️ 4. Cloudflare Dashboard Environment & Build Setup

- **Framework preset**: None / Vite / React
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Deploy command**: *(BLANK for Pages; `npx wrangler deploy` for Workers)*
- **Environment Variables**:
  - `NODE_VERSION`: `20`
