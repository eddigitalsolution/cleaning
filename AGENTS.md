# Project Agent Guide & Rules

Welcome to the `cleaning` project. This workspace is configured with project-level rules, agent capabilities, and custom skills for **Web Development**, **Cloudflare Deployment**, and **Data Cleaning & Engineering**.

## Workspace Agent Skills Structure

All workspace skills are located under `.agents/skills/`:

### 🌐 Web Development & Design
- **[`web-development`](file:///.agents/skills/web-development/SKILL.md)**: Web architecture, React/Vite standards, accessibility, UI/UX anti-slop rules, and SEO.
- **[`design-director`](file:///.agents/skills/design-director/SKILL.md)**: Master visual art direction, typography, dynamic micro-interactions, and Lighthouse optimization.
- **[`global-setup`](file:///.agents/skills/global-setup/SKILL.md)**: Global project initialization standards, headers, and SPA setup.

### 🚀 Deployment & DevOps
- **[`cloudflare-deployment`](file:///.agents/skills/cloudflare-deployment/SKILL.md)**: Production Cloudflare Pages & Workers deployment checklist, edge headers, and troubleshooting.
- **[`cloudflare-setup`](file:///.agents/skills/cloudflare-setup/SKILL.md)**: Cloudflare configuration standards, `wrangler.jsonc` models, and CSP sync.

### 🧹 Data Cleaning & Engineering
- **[`data-cleaning-pipeline`](file:///.agents/skills/data-cleaning-pipeline/SKILL.md)**: Data profiling, sanitization, deduplication, and transformation workflows.
- **[`code-refactoring`](file:///.agents/skills/code-refactoring/SKILL.md)**: Structural code refactoring, performance tuning, and safety checks.
- **[`quality-assurance`](file:///.agents/skills/quality-assurance/SKILL.md)**: Edge case validation, verification testing, and logging standards.

## Project Directives
1. **Verification**: Always verify code changes and build targets with concrete test/build executions.
2. **Security & Deployment**: Enforce `public/_headers` CSP and SPA routing cleanups for all Cloudflare deployments.
3. **Data & Code Quality**: Non-destructive data operations and clean, modular code.
