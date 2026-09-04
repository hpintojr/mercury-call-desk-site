# Mercury Call Desk — Website

Mobile-first marketing site for [Mercury Call Desk](https://mercurycalldesk.com). Next.js 15 · Tailwind v4 · Vercel.

```bash
npm install
node scripts/fetch-logos.mjs   # downloads the 29 partner logos into public/integrations/ (commit them)
npm run dev      # http://localhost:3000
npm run build
```

- Copy: `src/content/*.ts` · Brand + links: `src/config/site.ts` · Tokens: `src/app/globals.css`
- Full spec, deploy steps and launch checklist: [`docs/SPEC.md`](docs/SPEC.md)
- Env vars: see `.env.example`
