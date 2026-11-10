import Icon from "@/components/Icon";
import type { FunnelConfig } from "@/funnels/types";
import FunnelShell from "./FunnelShell";
import FunnelHeader from "./FunnelHeader";
import FunnelFooter from "./FunnelFooter";
import VideoEmbed from "./VideoEmbed";
import Countdown from "./Countdown";
import FirstName from "./FirstName";
import { calendarLinks, eventDateLabel } from "./calendar";

const wrap = "mx-auto w-full max-w-5xl px-4 sm:px-6";
const card = "rounded-2xl border border-white/10 bg-[var(--f-surface)]";
const btnGhost = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--f-primary)] hover:text-[var(--f-primary)]";

/** "#" or empty means the link isn't ready yet: show it as "Coming soon" instead of a dead link. */
const ready = (href: string) => !!href && href !== "#";

/** Page 2 of the webinar funnel: confirmation + next steps. */
export default function ConfirmPage({ config }: { config: FunnelConfig }) {
  const c = config.confirm;
  const b = config.brand;
  const cal = calendarLinks(config);
  const date = eventDateLabel(config);

  return (
    <FunnelShell config={config}>
      <FunnelHeader config={config} />

      {/* 2. Hero confirmation */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,color-mix(in_srgb,var(--f-primary)_22%,transparent),transparent_70%)]" />
        <div className={`${wrap} relative pt-10 text-center sm:pt-16`}>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">
            <Icon name="check" className="h-4 w-4" />
            {c.eyebrow}<FirstName />
          </p>
          {/* Progress bar: registration done, one step left (watch the briefing) */}
          <div className="mx-auto mt-6 max-w-md">
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)]" /></div>
            <p className="mt-2 text-xs font-semibold text-white/60">90% complete</p>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-[1.85rem] font-extrabold leading-[1.15] sm:text-5xl">{c.headline}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">{c.subheadline}</p>
        </div>
      </section>

      {/* 3. Onboarding video */}
      <section className={`${wrap} mt-8 max-w-4xl sm:mt-10`}>
        <VideoEmbed video={c.video} title={`${b.name} onboarding briefing`} />
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-white/85">{date} · {config.event.timeLabel}</p>
          <div className="mt-3"><Countdown to={config.event.startsAt} /></div>
        </div>
      </section>

      {/* 4. Action checklist */}
      <section className={`${wrap} py-16 sm:py-20`}>
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Do These 3 Things Now</h2>
        <ol className="mt-10 space-y-5">
          {c.steps.map((s, i) => (
            <li key={s.title} className={`${card} flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-7`}>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--f-primary)] to-[var(--f-secondary)] text-2xl font-extrabold text-[var(--f-on-primary)]">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--f-primary)]">Step {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
                {s.calendar ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href={cal.google} target="_blank" rel="noopener" className={btnGhost}><Icon name="calendar" className="h-4 w-4" />Google Calendar</a>
                    <a href={cal.ics} download={`${config.id}.ics`} className={btnGhost}><Icon name="calendar" className="h-4 w-4" />Apple / Outlook (.ics)</a>
                  </div>
                ) : null}
                {s.cta ? (
                  <div className="mt-4">
                    {ready(s.cta.href) ? (
                      <a href={s.cta.href} target={s.cta.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className={btnGhost}>{s.cta.label}<Icon name="arrow" className="h-4 w-4" /></a>
                    ) : (
                      <span className={`${btnGhost} cursor-default opacity-50`}>{s.cta.label} · Coming soon</span>
                    )}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Resources */}
      <section className={`${wrap} pb-16 sm:pb-20`}>
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">{c.resources.heading}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {c.resources.links.map((l) =>
            ready(l.href) ? (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className={`${card} group flex items-center gap-3 p-5 transition hover:border-[color-mix(in_srgb,var(--f-primary)_50%,transparent)]`}>
                <Icon name={l.icon} className="h-5 w-5 text-[var(--f-primary)]" />
                <span className="flex-1 font-semibold">{l.label}</span>
                <Icon name="arrow" className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-[var(--f-primary)]" />
              </a>
            ) : (
              <div key={l.label} className={`${card} flex items-center gap-3 p-5 opacity-60`}>
                <Icon name={l.icon} className="h-5 w-5 text-[var(--f-primary)]" />
                <span className="flex-1 font-semibold">{l.label}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Coming soon</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* 6. Support */}
      <section className={`${wrap} pb-20 sm:pb-24`}>
        <div className={`${card} relative overflow-hidden p-7 text-center sm:p-10`}>
          <div aria-hidden className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--f-primary)_18%,transparent)] blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-extrabold sm:text-3xl">{c.support.heading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/65">{c.support.body}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${b.supportEmail}`} className={btnGhost}><Icon name="mail" className="h-4 w-4" />{b.supportEmail}</a>
              <a href={b.supportPhoneHref} className={btnGhost}><Icon name="phone" className="h-4 w-4" />{c.support.dispatchLabel}: {b.supportPhone}</a>
            </div>
          </div>
        </div>
      </section>

      <FunnelFooter config={config} />
    </FunnelShell>
  );
}
