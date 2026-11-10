"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { captureAttribution, getAttribution, track } from "@/lib/track";

type FormCopy = { heading: string; subheading: string; submit: string; consent: string; askCompany: boolean };
type Ctx = { open: (placement: string) => void };

const RegisterCtx = createContext<Ctx>({ open: () => {} });
export const useRegister = () => useContext(RegisterCtx);

/**
 * Holds the registration modal for a funnel. Every RegisterButton on the page opens it.
 * On submit it posts to /api/funnel/register and then sends the visitor to the confirm page,
 * keeping the original query string (UTMs, fbclid) so ad attribution carries through.
 */
export default function RegisterProvider({
  funnelId,
  confirmPath,
  form,
  eventLabel,
  children,
}: {
  funnelId: string;
  confirmPath: string;
  form: FormCopy;
  eventLabel: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [placement, setPlacement] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => { captureAttribution(); }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    if (!isOpen && d.open) d.close();
  }, [isOpen]);

  const open = useCallback((p: string) => {
    setPlacement(p);
    setOpen(true);
    track("register_open", { funnel: funnelId, placement: p });
  }, [funnelId]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = {
      funnel: funnelId,
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      placement,
      attribution: getAttribution(),
    };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/funnel/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong");
      track("webinar_register", { funnel: funnelId, placement });
      try {
        window.fbq?.("track", "CompleteRegistration", { content_name: funnelId });
        sessionStorage.setItem("funnel_first_name", body.firstName);
      } catch { /* ignore */ }
      const qs = window.location.search;
      router.push(confirmPath + qs);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const input = "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--f-primary)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--f-primary)_40%,transparent)]";

  return (
    <RegisterCtx.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === dialogRef.current) setOpen(false); }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-white/10 bg-[var(--f-surface)] p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        aria-labelledby="register-heading"
      >
        <div className="relative p-6 sm:p-8">
          <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <p className="pr-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--f-primary)]">{eventLabel}</p>
          <h2 id="register-heading" className="mt-2 text-2xl font-extrabold">{form.heading}</h2>
          <p className="mt-1 text-sm text-white/65">{form.subheading}</p>
          {/* Progress bar, a common webinar-form pattern */}
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)]" /></div>
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input name="firstName" required autoComplete="given-name" placeholder="First name" aria-label="First name" className={input} />
              <input name="lastName" autoComplete="family-name" placeholder="Last name" aria-label="Last name" className={input} />
            </div>
            <input name="email" type="email" required autoComplete="email" placeholder="Email address" aria-label="Email address" className={input} />
            <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className={input} />
            {form.askCompany ? <input name="company" autoComplete="organization" placeholder="Company (optional)" aria-label="Company" className={input} /> : null}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            <label className="flex items-start gap-3 text-[11px] leading-relaxed text-white/55">
              <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--f-primary)]" />
              <span>{form.consent}</span>
            </label>
            <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)] px-6 py-4 text-base font-bold text-[var(--f-on-primary)] shadow-lg transition hover:brightness-110 disabled:opacity-60">
              {status === "sending" ? "Reserving your seat..." : form.submit}
            </button>
            {status === "error" ? <p role="alert" className="text-center text-sm text-red-300">{error}. Please try again.</p> : null}
          </form>
        </div>
      </dialog>
    </RegisterCtx.Provider>
  );
}
