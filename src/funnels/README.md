# Webinar / VSL funnel template

Two pages driven by one config file:

| Page | Route (Mercury) | Component |
| --- | --- | --- |
| Register (VSL + signup form) | `/webinar` | `src/components/funnel/RegisterPage.tsx` |
| Confirmation / next steps | `/webinar/confirm` | `src/components/funnel/ConfirmPage.tsx` |

Every CTA opens the registration modal. On submit the lead goes to the CRM through
`/api/funnel/register` and the visitor lands on the confirm page with their UTMs/fbclid kept.

## Edit the Mercury funnel

Everything lives in `src/funnels/mercury-webinar.ts`:

- **Videos:** paste a YouTube, Vimeo, Wistia, Loom or `.mp4` URL into `register.video.url` and
  `confirm.video.url`. Empty = 16:9 placeholder.
- **Event:** `event.startsAt` (ISO with offset), `event.timeLabel`, `event.joinUrl`.
- **Copy:** every headline, card, FAQ and button label.
- **Results:** replace the sample cards with real, approved numbers, then set `results.samples = false`
  (this removes the "Sample" labels).
- **Links:** resource links / intake form left as `"#"` show "Coming soon" instead of a dead link.

## Make one for a new client

1. Copy `mercury-webinar.ts` to `src/funnels/<client>.ts`. Change `id`, `basePath` (e.g. `/acme-webinar`),
   `brand` (logo in `/public`, colors, contact info, legal links) and the copy.
2. Register it in `src/funnels/index.ts` (this also hides the main site header/footer on its routes).
3. Copy `src/app/webinar/` to `src/app/<basePath>/` and change the import to the new config.
4. CRM: set the env vars named in `crm.webhookUrlEnv` / `crm.webhookSecretEnv` in Vercel to the client's
   inbound webhook (optional HMAC secret). Unset = the site's default `CRM_WEBHOOK_URL`.

## Tracking

Pushes `register_open` and `webinar_register` to `dataLayer`, and fires Meta `CompleteRegistration`
on a successful signup.
