export default function SectionHeading({ eyebrow, title, body, align = "center", dark = false }: { eyebrow?: string; title: React.ReactNode; body?: string; align?: "center" | "left"; dark?: boolean }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "text-mcd-cyan" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-mcd-navy"}`}>{title}</h2>
      {body && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-mcd-muted"}`}>{body}</p>}
    </div>
  );
}
