"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { SECTIONS, OBJECTIONS, dialScript as cfg, type Block, type Objection, type Section } from "@/content/dial-script";

/* ────────────────────────────────────────────────────────────
   Text helpers
   ──────────────────────────────────────────────────────────── */

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/** Replace {price} / {brand} tokens. */
const subst = (s: string) =>
  s.replace(/\{price\}/g, money(cfg.priceMonthly))
    .replace(/\{trial\}/g, money(cfg.trialPrice))
    .replace(/\{days\}/g, String(cfg.trialDays))
    .replace(/\{brand\}/g, cfg.brand);

/** Plain text of a block (tokens substituted, <b> stripped) — used for the search index. */
const plain = (s: string) => subst(s).replace(/<\/?b>/g, "");

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Wrap search tokens in <mark>. */
function highlight(text: string, toks: string[], keyBase: string): ReactNode[] {
  if (!toks.length) return [text];
  const re = new RegExp("(" + toks.filter(Boolean).map(escapeRe).join("|") + ")", "gi");
  return text.split(re).map((part, i) =>
    i % 2 === 1 ? <mark key={keyBase + i}>{part}</mark> : part,
  );
}

/** Colour [placeholders] amber, then highlight. */
function placeholders(text: string, toks: string[], keyBase: string): ReactNode[] {
  return text.split(/(\[[^\]]+\])/g).flatMap<ReactNode>((part, i) =>
    /^\[[^\]]+\]$/.test(part)
      ? [<span key={keyBase + "p" + i} className="ph">{highlight(part, toks, keyBase + "p" + i)}</span>]
      : highlight(part, toks, keyBase + "t" + i),
  );
}

/** Render note text: supports <b>…</b> and search highlighting. */
function rich(text: string, toks: string[], keyBase = "r"): ReactNode[] {
  return subst(text).split(/(<b>.*?<\/b>)/g).flatMap<ReactNode>((part, i) => {
    const m = part.match(/^<b>(.*?)<\/b>$/);
    if (m) return [<b key={keyBase + "b" + i}>{highlight(m[1], toks, keyBase + "b" + i)}</b>];
    return highlight(part, toks, keyBase + "n" + i);
  });
}

/* ────────────────────────────────────────────────────────────
   Blocks
   ──────────────────────────────────────────────────────────── */

function BlockView({ b, toks = [] }: { b: Block; toks?: string[] }) {
  switch (b.t) {
    case "say":
      return <div className="say">{placeholders(subst(b.text), toks, "s")}</div>;
    case "cue":
      return <p className="cue">{subst(b.text)}</p>;
    case "note":
      return <p className="note">{rich(b.text, toks)}</p>;
    case "key":
      return (
        <div className="key">
          <b>{b.label}</b>
          {subst(b.text)}
        </div>
      );
    case "h3":
      return <h3>{subst(b.text)}</h3>;
    default:
      return null;
  }
}

function ObjectionCard({ o, suffix = "" }: { o: Objection; suffix?: string }) {
  return (
    <details className="obj" id={o.id + suffix}>
      <summary>
        <span className="qi">●</span>
        <span>{o.q}</span>
        <span className="ar">❯</span>
      </summary>
      <div className="objbody">
        {o.full.length ? o.full.map((b, i) => <BlockView key={i} b={b} />) : <p className="note">{subst(o.short)}</p>}
      </div>
    </details>
  );
}

/* ────────────────────────────────────────────────────────────
   Missed-call calculator
   ──────────────────────────────────────────────────────────── */

function Calculator() {
  const [calls, setCalls] = useState("4");
  const [ticket, setTicket] = useState("500");
  const [phone, setPhone] = useState("");
  const [marketing, setMarketing] = useState("");
  const c = Math.max(0, +calls || 0);
  const t = Math.max(0, +ticket || 0);
  const ph = Math.max(0, +phone || 0);
  const mk = Math.max(0, +marketing || 0);
  const week = c * t, month = week * 4, year = week * 52;
  const spend = ph + mk;
  const price = cfg.priceMonthly;
  const spendLine = spend > 0
    ? `And you're already spending about ${money(spend)} a month on phone service and marketing to get those calls in the first place. ` +
      `This just makes sure the calls you're already paying for actually get picked up.`
    : "";
  const line =
    `So let's make it easy. Say it's ${c} missed call${c === 1 ? "" : "s"} a week, average job is ${money(t)}, ` +
    `that's ${money(week)} a week, times four weeks, around ${money(month)} a month potentially slipping through the cracks. ` +
    `Our service normally starts around ${money(price)} a month.`;

  return (
    <div className="calc">
      <h3>Missed-call math</h3>
      <p className="hint">Punch in their numbers while they are on the line, then read the last line out loud.</p>
      <div className="fields">
        <div className="field">
          <label htmlFor="c-calls">Missed calls / week</label>
          <input id="c-calls" type="number" min={0} step={1} inputMode="numeric" value={calls} onChange={(e) => setCalls(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="c-ticket">Average ticket ($)</label>
          <input id="c-ticket" type="number" min={0} step={25} inputMode="numeric" value={ticket} onChange={(e) => setTicket(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Current phone bill / month ($)</label>
          <input id="c-phone" type="number" min={0} step={10} inputMode="numeric" placeholder="optional" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="c-marketing">Marketing spend / month ($)</label>
          <input id="c-marketing" type="number" min={0} step={50} inputMode="numeric" placeholder="optional" value={marketing} onChange={(e) => setMarketing(e.target.value)} />
        </div>
      </div>
      <div className="calcout">
        <p className="calcline">Per week: <b>{money(week)}</b></p>
        <p className="calcline">Per month: <b>{money(month)}</b> &nbsp;·&nbsp; Per year: <b>{money(year)}</b></p>
        <p className="calcline small">
          At {money(price)}/mo that is <b>{month > 0 ? Math.round(month / price) + "x" : "—"}</b> the cost of the service.
        </p>
        {spend > 0 ? (
          <p className="calcline small">
            Already spending <b>{money(spend)}</b>/mo to make the phone ring (phone + marketing) — {money(price)} is about{" "}
            <b>{Math.round((price / spend) * 100)}%</b> on top of that, and it&apos;s what makes the rest pay off.
          </p>
        ) : null}
        <div className="say calcsay">{line}{spendLine ? " " + spendLine : ""}</div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Sections
   ──────────────────────────────────────────────────────────── */

function SectionView({ s }: { s: Section }) {
  return (
    <section className="sec" id={s.id}>
      <div className="num">{s.n}</div>
      <h2>
        {s.title}
        {s.tag ? <span className="tag">{subst(s.tag)}</span> : null}
      </h2>
      {s.goal ? (
        <div className="goal">
          <b>Goal</b>
          <span>{s.goal}</span>
        </div>
      ) : null}
      <div className="blocks">
        {s.objections ? OBJECTIONS.filter((o) => o.early).map((o) => <ObjectionCard key={o.id} o={o} />) : null}
        {s.objectionsAll ? OBJECTIONS.map((o) => <ObjectionCard key={o.id} o={o} suffix={o.early ? "--ref" : ""} />) : null}
        {s.blocks.map((b, i) => <BlockView key={i} b={b} />)}
        {s.calc ? <Calculator /> : null}
        {s.phrases ? (
          <div className="phrases">
            {s.phrases.map((p) => <div key={p} className="phrase">{p}</div>)}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Search index
   ──────────────────────────────────────────────────────────── */

type Entry = {
  kind: "objection" | "section";
  where: string;
  id: string;
  sectionId: string;
  title: string;
  blocks: Block[];
  phrases?: string[];
  blob: string;
};

function buildIndex(): Entry[] {
  const idx: Entry[] = [];
  OBJECTIONS.forEach((o) => {
    const blocks = o.full.length ? o.full : [{ t: "note" as const, text: o.short }];
    idx.push({
      kind: "objection", where: "Objection", id: o.id,
      sectionId: o.early ? "brushoffs" : "objections",
      title: o.q, blocks,
      blob: (o.q + " " + plain(o.short) + " " + blocks.map((b) => plain(b.text)).join(" ")).toLowerCase(),
    });
  });
  SECTIONS.forEach((s) => {
    if (s.objections || s.objectionsAll) return;
    const blocks = s.blocks.filter((b) => b.t !== "h3");
    const extra = (s.phrases ?? []).join(" ");
    idx.push({
      kind: "section",
      where: /^\d/.test(s.n) ? `Step ${s.n} · ${s.title}` : s.title,
      id: s.id, sectionId: s.id, title: s.title, blocks, phrases: s.phrases,
      blob: (s.title + " " + (s.tag ?? "") + " " + (s.goal ?? "") + " " + extra + " " + blocks.map((b) => plain(b.text)).join(" ")).toLowerCase(),
    });
  });
  return idx;
}

function ResultCard({ r, toks, selected, onPick }: { r: Entry; toks: string[]; selected: boolean; onPick: () => void }) {
  const hits = r.blocks.filter((b) => toks.every((t) => plain(b.text).toLowerCase().includes(t)));
  const show = r.kind === "objection" ? r.blocks : hits.length ? hits : r.blocks.slice(0, 2);
  const extra = (r.phrases ?? []).filter((p) => toks.every((t) => p.toLowerCase().includes(t)));
  return (
    <button type="button" className={"res" + (selected ? " sel" : "")} onClick={onPick} data-res>
      <div className="rwhere">{r.where}</div>
      <div className="rtitle">{highlight(r.title, toks, "rt")}</div>
      {show.map((b, i) =>
        b.t === "say"
          ? <div key={i} className="rsay">{placeholders(subst(b.text), toks, "rs" + i)}</div>
          : <div key={i} className="rnote">{highlight(plain(b.text), toks, "rn" + i)}</div>,
      )}
      {extra.map((p, i) => <div key={"x" + i} className="rsay">{highlight(p, toks, "rx" + i)}</div>)}
    </button>
  );
}

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function DialScript() {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(-1);
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(0);
  const [showKbd, setShowKbd] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);
  const pending = useRef<{ secId: string; objId?: string } | null>(null);

  const index = useMemo(buildIndex, []);
  const query = q.trim().toLowerCase();
  const searching = query.length > 0;
  const toks = useMemo(() => query.split(/\s+/).filter(Boolean), [query]);

  const results = useMemo(() => {
    if (!searching) return [] as Entry[];
    const hits = index.filter((r) => toks.every((t) => r.blob.includes(t)));
    const inTitle = (r: Entry) => (toks.every((t) => r.title.toLowerCase().includes(t)) ? 0 : 1);
    hits.sort((a, b) => {
      const d = inTitle(a) - inTitle(b);
      if (d !== 0) return d;
      if (a.kind !== b.kind) return a.kind === "objection" ? -1 : 1;
      return 0;
    });
    return hits;
  }, [index, toks, searching]);

  const objs = results.filter((r) => r.kind === "objection");
  const secs = results.filter((r) => r.kind === "section");

  /* ---- scrollspy ---- */
  useEffect(() => {
    let ticking = false;
    const spy = () => {
      ticking = false;
      if (searching) return;
      let idx = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) idx = i;
      });
      setActive(idx);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(spy); }
    };
    addEventListener("scroll", onScroll, { passive: true });
    spy();
    return () => removeEventListener("scroll", onScroll);
  }, [searching]);

  useEffect(() => {
    setShowKbd(matchMedia("(pointer:fine)").matches);
  }, []);

  /* ---- jump to a section / objection ---- */
  const goTo = useCallback((secId: string, objId?: string) => {
    pending.current = { secId, objId };
    setQ("");
    setSel(-1);
    setNav(false);
  }, []);

  useEffect(() => {
    if (searching || !pending.current) return;
    const { secId, objId } = pending.current;
    pending.current = null;
    const details = objId ? (document.getElementById(objId) as HTMLDetailsElement | null) : null;
    if (details) details.open = true;
    const target = details ?? document.getElementById(secId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.remove("flash");
      void (target as HTMLElement).offsetWidth;
      target.classList.add("flash");
    }
  }, [searching, q]);

  /* ---- keyboard ---- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA)$/.test((document.activeElement as HTMLElement | null)?.tagName ?? "");
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setNav(true);
        searchRef.current?.focus();
        searchRef.current?.select();
        return;
      }
      if (e.key === "Escape") {
        if (q) { setQ(""); setSel(-1); }
        else { searchRef.current?.blur(); setNav(false); }
        return;
      }
      if (!searching || !results.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setSel((s) => {
          const n = e.key === "ArrowDown" ? Math.min(s + 1, results.length - 1) : Math.max(s - 1, 0);
          document.querySelectorAll<HTMLElement>("[data-res]")[n]?.scrollIntoView({ block: "nearest" });
          return n;
        });
      }
      if (e.key === "Enter" && sel > -1) {
        e.preventDefault();
        const r = results[sel];
        if (r) goTo(r.sectionId, r.kind === "objection" ? r.id : undefined);
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [q, searching, results, sel, goTo]);

  const ordered = [...objs, ...secs];

  return (
    <div className={"ds-root" + (nav ? " nav" : "")}>
      <div className="scrim" onClick={() => setNav(false)} />
      <div className="shell">
        <aside className="side">
          <div className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mcd-logo-dark.svg" alt={cfg.brand} />
            <div className="co">Sales team · outbound reference</div>
            <div className="nm">Dial Script</div>
            <div className="sub">{cfg.version} · updated {cfg.updated}</div>
          </div>
          <div className="searchwrap">
            <div className="searchbox">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                ref={searchRef}
                className="q"
                type="search"
                placeholder="Search script & objections"
                autoComplete="off"
                spellCheck={false}
                value={q}
                onChange={(e) => { setQ(e.target.value); setSel(-1); }}
                aria-label="Search script and objections"
              />
              <button type="button" className={"clearbtn" + (q ? " on" : "")} aria-label="Clear search" onClick={() => { setQ(""); setSel(-1); searchRef.current?.focus(); }}>
                ×
              </button>
              <span className={"kbd" + (showKbd ? "" : " hide")}>/</span>
            </div>
          </div>
          <nav>
            <ul className="toc">
              {SECTIONS.map((s, i) => (
                <Fragment key={s.id}>
                  {i === 0 ? <li className="grp">The call flow</li> : null}
                  {s.id === "voicemail" ? <li className="grp">Reference</li> : null}
                  <li>
                    <a href={"#" + s.id} className={i === active && !searching ? "active" : ""} onClick={() => setNav(false)}>
                      <span className="n">{s.n}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>
          <div className="sidefoot">
            <span>{cfg.brand}</span>
            <a href="/api/dial-script/logout">Sign out</a>
          </div>
        </aside>

        <div className="main">
          <div className="mtop">
            <button type="button" className="mb" onClick={() => setNav((v) => !v)}>☰&nbsp; Menu</button>
            <button type="button" className="msearch" onClick={() => { setNav(true); setTimeout(() => searchRef.current?.focus(), 50); }}>Search</button>
          </div>

          <div hidden={searching}>
            <header className="hero">
              <div className="eyebrow">{cfg.brand} · Outbound call script</div>
              <h1>Dial Script</h1>
              <p className="lede">{subst(cfg.lede)}</p>
              <p className="legend">
                Amber text like <span className="ph">[their close time]</span> is a placeholder — swap in the real detail, don&apos;t read it out.
                Anything in a <b>SAY</b> box is meant to be said close to word-for-word; grey text is coaching, not script.
              </p>
              <div className="stats">
                {cfg.stats.map((st) => (
                  <div key={st.small} className="stat">
                    <b>{subst(st.big)}</b>
                    <span>{subst(st.small)}</span>
                  </div>
                ))}
              </div>
            </header>
            <div>{SECTIONS.map((s) => <SectionView key={s.id} s={s} />)}</div>
          </div>

          {searching ? (
            <div className="results">
              <p className="rescount">
                <b>{results.length}</b> result{results.length === 1 ? "" : "s"} for &ldquo;{q.trim()}&rdquo;
              </p>
              {!results.length ? (
                <p className="nores">Nothing matched. Try a shorter word — &ldquo;email&rdquo;, &ldquo;busy&rdquo;, &ldquo;price&rdquo;, &ldquo;google&rdquo;.</p>
              ) : null}
              {objs.length ? <p className="resgrp">Objections &amp; brush-offs</p> : null}
              {objs.map((r) => (
                <ResultCard key={r.id} r={r} toks={toks} selected={ordered.indexOf(r) === sel} onPick={() => goTo(r.sectionId, r.id)} />
              ))}
              {secs.length ? <p className="resgrp">Script sections</p> : null}
              {secs.map((r) => (
                <ResultCard key={r.id} r={r} toks={toks} selected={ordered.indexOf(r) === sel} onPick={() => goTo(r.sectionId)} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
