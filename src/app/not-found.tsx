import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-hero text-white">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow text-mcd-cyan">404</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">We couldn&apos;t find that page.</h1>
        <p className="mt-3 max-w-md text-white/70">But we never miss a call. Head back home or see pricing.</p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/pricing" variant="ghost">Pricing</Button>
        </div>
        <Link href="/faq" className="mt-6 text-sm text-white/60 underline">Help center</Link>
      </div>
    </section>
  );
}
