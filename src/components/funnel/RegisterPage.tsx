import Image from "next/image";
import Icon from "@/components/Icon";
import type { FunnelConfig } from "@/funnels/types";
import FunnelShell from "./FunnelShell";
import FunnelHeader from "./FunnelHeader";
import FunnelFooter from "./FunnelFooter";
import VideoEmbed from "./VideoEmbed";
import RegisterProvider from "./RegisterProvider";
import RegisterButton from "./RegisterButton";
import Countdown from "./Countdown";
import { eventDateLabel } from "./calendar";

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const card = "rounded-2xl border border-white/10 bg-[var(--f-surface)]";
const eyebrowCls = "text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--f-primary)] sm:text-xs";
const h2 = "text-3xl font-extrabold leading-tight sm:text-4xl";

function Highlight({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)] bg-clip-text text-transparent">{highlight}</span>
      {after}
    </>
  );
}

function IconBadge({ name }: { name: Parameters<typeof Icon>[0]["name"] }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--f-primary)_14%,transparent)] text-[var(--f-primary)] ring-1 ring-[color-mix(in_srgb,var(--f-primary)_30%,transparent)]">
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}

/** Page 1 of the webinar funnel: VSL + registration. Everything comes from the funnel config. */
export default function RegisterPage({ config }: { config: FunnelConfig }) {
  const r = config.register;
  const date = eventDateLabel(config);

  return (
    <FunnelShell config={config}>
      <RegisterProvider funnelId={config.id} confirmPath={`${config.basePath}/confirm`} form={r.form} eventLabel={`${date} · ${config.event.timeLabel}`}>
        <FunnelHeader config={config} cta={r.headerCta} />

        {/* 2. Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,color-mix(in_srgb,var(--f-primary)_22%,transparent),transparent_70%)]" />
          <div className={`${wrap} relative pt-10 text-center sm:pt-16`}>
            <p className={`${eyebrowCls} inline-flex rounded-full border border-[color-mix(in_srgb,var(--f-primary)_40%,transparent)] bg-[color-mix(in_srgb,var(--f-primary)_10%,transparent)] px-4 py-2`}>
              {r.eyebrow}
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-[1.85rem] font-extrabold leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
              <Highlight text={r.headline} highlight={r.headlineHighlight} />
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base text-white/70 sm:text-lg">{r.subheadline}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/85">
              <span className="inline-flex items-center gap-2"><Icon name="calendar" className="h-4 w-4 text-[var(--f-primary)]" />{date}</span>
              <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-[var(--f-primary)]" />{config.event.timeLabel}</span>
              <span className="inline-flex items-center gap-2"><Icon name="users" className="h-4 w-4 text-[var(--f-primary)]" />Hosted by {config.host.name}</span>
            </div>
          </div>
        </section>

        {/* 3. VSL */}
        <section className={`${wrap} relative mt-8 max-w-4xl sm:mt-10`}>
          <VideoEmbed video={r.video} title={`${config.brand.name} presentation`} />
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <RegisterButton placement="below-video" pulse>{r.cta}</RegisterButton>
            <p className="text-xs text-white/55">{r.ctaSubtext}</p>
            <div className="mt-3"><Countdown to={config.event.startsAt} /></div>
          </div>
        </section>

        {/* 4. Trust bar */}
        <section className="mt-14 border-y border-white/10 bg-white/[0.02] py-8 sm:mt-20">
          <div className={`${wrap} text-center`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{r.trust.heading}</p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {r.trust.logos.map((l) => (
                <li key={l.name} className="flex h-8 items-center opacity-60 grayscale transition hover:opacity-100">
                  {l.src ? (
                    <Image src={l.src} alt={l.name} width={140} height={32} unoptimized className="h-6 w-auto brightness-0 invert sm:h-7" />
                  ) : (
                    <span className="text-lg font-bold tracking-tight text-white sm:text-xl">{l.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Problem */}
        <section className={`${wrap} py-16 sm:py-24`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={h2}>{r.problem.heading}</h2>
            {r.problem.intro ? <p className="mt-4 text-white/65">{r.problem.intro}</p> : null}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {r.problem.items.map((it) => (
              <div key={it.title} className={`${card} p-6 sm:p-7`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-300 ring-1 ring-red-400/25">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{it.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Solution: alternating blocks */}
        <section className="bg-gradient-to-b from-transparent via-[color-mix(in_srgb,var(--f-surface)_60%,transparent)] to-transparent py-16 sm:py-24">
          <div className={wrap}>
            <div className="mx-auto max-w-2xl text-center">
              <p className={eyebrowCls}>{r.solution.eyebrow}</p>
              <h2 className={`${h2} mt-3`}>{r.solution.heading}</h2>
            </div>
            <div className="mt-12 space-y-10 sm:space-y-16">
              {r.solution.blocks.map((b, i) => (
                <div key={b.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div className={i % 2 ? "md:order-2" : ""}>
                    <IconBadge name={b.icon} />
                    <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">{b.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/70">{b.body}</p>
                  </div>
                  <div className={`${card} relative overflow-hidden p-8 sm:p-10 ${i % 2 ? "md:order-1" : ""}`}>
                    <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--f-primary)_20%,transparent)] blur-3xl" />
                    <div className="relative">
                      <p className="bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)] bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">{b.stat}</p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/55">{b.statLabel}</p>
                      <div className="mt-8 space-y-3" aria-hidden>
                        {[90, 70, 82].map((w, k) => (
                          <div key={k} className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--f-primary)_20%,transparent)] text-[var(--f-primary)]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                            <span className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Features 2x2 */}
        <section className={`${wrap} py-16 sm:py-24`}>
          <h2 className={`${h2} mx-auto max-w-2xl text-center`}>{r.features.heading}</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {r.features.items.map((f) => (
              <div key={f.title} className={`${card} flex gap-4 p-6 transition hover:border-[color-mix(in_srgb,var(--f-primary)_45%,transparent)]`}>
                <IconBadge name={f.icon} />
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><RegisterButton placement="features">{r.cta}</RegisterButton></div>
        </section>

        {/* 8. Results */}
        <section className="border-t border-white/10 py-16 sm:py-24">
          <div className={wrap}>
            <h2 className={`${h2} mx-auto max-w-3xl text-center`}>{r.results.heading}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {r.results.items.map((t, i) => (
                <figure key={i} className={`${card} relative flex flex-col p-6 sm:p-7`}>
                  {r.results.samples ? (
                    <span className="absolute right-4 top-4 rounded-full border border-amber-300/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200">Sample</span>
                  ) : null}
                  <p className="bg-gradient-to-r from-[var(--f-primary)] to-[var(--f-secondary)] bg-clip-text text-5xl font-extrabold text-transparent">{t.metric}</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{t.metricLabel}</p>
                  <div className="mt-3 flex gap-0.5 text-amber-300" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, k) => <Icon key={k} name="star" className="h-4 w-4" />)}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/65">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4 text-sm">
                    <span className="font-bold">{t.name}</span>
                    <span className="block text-white/50">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className={`${wrap} max-w-3xl pb-16 sm:pb-24`}>
          <h2 className={`${h2} text-center`}>{r.faq.heading}</h2>
          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[var(--f-surface)]">
            {r.faq.items.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-white/[0.03]">
                  <span>{f.q}</span>
                  <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-[var(--f-primary)] transition-transform" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 10. Footer CTA */}
        <section className="relative overflow-hidden border-t border-white/10 bg-black/40 py-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,color-mix(in_srgb,var(--f-primary)_20%,transparent),transparent_70%)]" />
          <div className={`${wrap} relative max-w-3xl text-center`}>
            <h2 className={h2}>{r.footerCta.heading}</h2>
            <p className="mt-4 text-white/70">{r.footerCta.body}</p>
            <p className="mt-4 text-sm font-semibold text-white/85">{date} · {config.event.timeLabel}</p>
            <div className="mt-8"><RegisterButton placement="footer" pulse>{r.footerCta.cta}</RegisterButton></div>
          </div>
        </section>

        <FunnelFooter config={config} />
      </RegisterProvider>
    </FunnelShell>
  );
}
