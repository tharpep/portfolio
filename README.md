
# pryceTharpe.dev – Personal Portfolio + Photography Site

A **Next.js 15 + TypeScript** app that showcases my engineering projects, code write-ups, and photography.

| Environment | URL |
|-------------|-----|
| **Production (custom domain – coming soon)** | <https://prycetharpe.dev> |
| **Current Vercel deployment** | <https://portfolio-seven-neon-7556zgb8u4.vercel.app> |

---

## ✨ Tech Stack

| Layer            | Tool / Library              | Notes                                                               |
|------------------|-----------------------------|---------------------------------------------------------------------|
| Runtime          | **Node 20 LTS**             | Executes React Server Components & API routes                        |
| Package manager  | **pnpm 8**                  | Fast, disk-efficient installs                                        |
| Framework        | **Next.js 15 (App Router)** | File-system routing · RSC · Image Opt · Edge & API routes            |
| UI library       | **React 19**                | Functional components & hooks                                        |
| Language         | **TypeScript (strict)**     | Path alias `@/*`                                                     |
| Styling          | **Tailwind CSS**            | Utility-first, JIT build                                             |
| Hosting / CI-CD  | **Vercel (Hobby)**          | Auto-deploy on `main`, preview URLs per PR                           |

---

## 🚀 Quick Start

```bash
# 0 Clone
git clone https://github.com/<your-github>/portfolio.git
cd portfolio

# 1 Install deps
pnpm install        # or npm / yarn / bun

# 2 Run dev server
pnpm dev
# → http://localhost:3000

---
```

## 📂 Project Structure

```text
src/
│
├─ app/                  # Next.js routes
│   ├─ layout.tsx        # Root layout (fonts + Nav)
│   ├─ page.tsx          # Landing page
│   ├─ projects/         # Engineering posts   (next)
│   └─ photography/      # Gallery route       (next)
│
├─ components/           # Re-usable UI
│   ├─ Nav.tsx
│   └─ Card.tsx
│
├─ content/              # MDX project entries (future)
└─ lib/                  # Server-only helpers (future)
```

---

## 🔧 NPM Scripts

| Script        | Action                                       |
| ------------- | -------------------------------------------- |
| `pnpm dev`    | Local dev server (hot reload with Turbopack) |
| `pnpm build`  | Production build → `.next/`                  |
| `pnpm start`  | Run the **built** app locally                |
| `pnpm lint`   | ESLint + TypeScript checks                   |
| `pnpm format` | Prettier via Husky pre-commit hook           |

---

## 🌐 Deploy & Custom Domain

1. **Connect GitHub** repo to Vercel → every push to `main` auto-deploys.
2. **Add domain** `prycetharpe.dev` in **Project ▸ Settings ▸ Domains** and follow DNS instructions.
3. HTTPS is issued automatically.

Manual redeploy of latest commit:

```bash
vercel --prod
```

---

## 🗺️ Roadmap

* [ ] MDX-powered `/projects` list + dynamic pages
* [ ] `/photography` gallery with `next/image` & lightbox
* [ ] `/api/contact` → Resend email relay
* [ ] Lighthouse CI (performance ≥ 90) in GitHub Actions
* [ ] Playwright end-to-end smoke test

---

## 📚 Learn More

* **Next.js Docs** – [https://nextjs.org/docs](https://nextjs.org/docs)
* **Tailwind Docs** – [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
* **Vercel Deploy** – [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)
* **pnpm Guide** – [https://pnpm.io/motivation](https://pnpm.io/motivation)

---

© 2025 Pryce Tharpe

