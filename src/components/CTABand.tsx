import Button from "./Button";
import Image from "next/image";

export default function CTABand({ eyebrow, title, body, cta, href }: { eyebrow: string; title: string; body: string; cta: string; href: string }) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <Image src="/brand/mcd-icon.svg" alt="" width={660} height={480} aria-hidden unoptimized className="pointer-events-none absolute -right-16 -top-10 w-64 opacity-10 sm:w-96 lg:w-[30rem]" />
      <div className="container-x relative py-16 text-center sm:py-24">
        <p className="eyebrow text-mcd-cyan">{eyebrow}</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/75 sm:text-lg">{body}</p>
        <div className="mt-8 flex justify-center">
          <Button href={href} size="lg">{cta}</Button>
        </div>
      </div>
    </section>
  );
}
