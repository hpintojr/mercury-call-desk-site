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

## Sales team dial script (`/dial-script`)

Internal, password-protected call script for agents. Copy lives in `src/content/dial-script.ts`
(pricing constant, sections, objections). The gate is `src/middleware.ts` + `src/lib/dial-script-auth.ts`:
set `DIAL_SCRIPT_PASSWORD` in Vercel → Settings → Environment Variables (Production), redeploy, and share
that password with the team. Changing it signs everyone out. Not indexed (robots + `X-Robots-Tag`).
