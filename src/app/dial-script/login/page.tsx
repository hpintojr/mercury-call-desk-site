import type { Metadata } from "next";
import { dialScript as cfg } from "@/content/dial-script";
import { isConfigured, safeNext } from "@/lib/dial-script-auth";

export const metadata: Metadata = { title: "Sales team sign in" };

type Search = { error?: string; next?: string };

export default async function DialScriptLogin({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  const next = safeNext(sp.next);
  const configured = isConfigured();
  const error = sp.error;

  return (
    <div className="ds-root login">
      <form className="card" method="post" action="/api/dial-script/login">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mcd-logo-dark.svg" alt={cfg.brand} />
        <h1>Sales team sign in</h1>
        <p>Enter the team password to open the {cfg.brand} dial script.</p>
        <input type="hidden" name="next" value={next} />
        <label htmlFor="password">Team password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" autoFocus required disabled={!configured} />
        {error === "1" ? <p className="err">That password didn&apos;t match. Try again.</p> : null}
        {!configured || error === "config" ? (
          <p className="err">The team password hasn&apos;t been set yet — add DIAL_SCRIPT_PASSWORD in Vercel and redeploy.</p>
        ) : null}
        <button type="submit" disabled={!configured}>Open the dial script</button>
        <p className="foot">Internal use only. Ask Hamilton if you need the password.</p>
      </form>
    </div>
  );
}
