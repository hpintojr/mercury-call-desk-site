import Icon, { type IconName } from "./Icon";

export default function FeatureCard({ title, body, icon = "bolt", dark = false }: { title: string; body: string; icon?: IconName; dark?: boolean }) {
  return (
    <article className={`rounded-xl2 border p-6 transition hover:-translate-y-0.5 ${dark ? "border-white/10 bg-white/5 text-white hover:bg-white/10" : "border-mcd-line bg-white text-mcd-ink shadow-sm hover:shadow-md"}`}>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mcd-blue via-mcd-sky to-mcd-cyan text-mcd-navy">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className={`mt-4 text-lg font-bold ${dark ? "text-white" : "text-mcd-navy"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-mcd-muted"}`}>{body}</p>
    </article>
  );
}
