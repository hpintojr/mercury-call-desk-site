import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "white" | "outline";
  size?: "md" | "lg";
  className?: string;
  full?: boolean;
  /** Fired on click, before navigation (e.g. to stash state in localStorage for a same-origin page the link opens/redirects to). */
  onClick?: () => void;
};

const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition tap active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-mcd-sky focus-visible:ring-offset-2";
const sizes = { md: "px-5 py-3 text-sm", lg: "px-7 py-4 text-base" };
const variants = {
  primary: "bg-gradient-to-r from-mcd-blue via-mcd-sky to-mcd-cyan text-mcd-navy shadow-lg shadow-mcd-sky/30 hover:brightness-110",
  ghost: "border border-white/25 text-white hover:bg-white/10",
  white: "bg-white text-mcd-navy hover:bg-mcd-surface",
  outline: "border border-mcd-navy/20 text-mcd-navy hover:border-mcd-blue hover:text-mcd-blue",
};

export default function Button({ href, children, variant = "primary", size = "md", className = "", full, onClick }: Props) {
  const external = /^https?:|^tel:|^mailto:/.test(href);
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""} ${className}`;
  if (external) return <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" onClick={onClick}>{children}</a>;
  return <Link href={href} className={cls} onClick={onClick}>{children}</Link>;
}
