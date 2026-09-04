import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function Logo({ variant = "dark", className = "h-16 w-auto sm:h-20 lg:h-24" }: { variant?: "dark" | "light"; className?: string }) {
  const src = variant === "dark" ? "/brand/mcd-logo-dark.svg" : "/brand/mcd-logo-light.svg";
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center">
      <Image src={src} alt={`${site.name} - ${site.tagline}`} width={1930} height={700} priority unoptimized className={className} />
    </Link>
  );
}
