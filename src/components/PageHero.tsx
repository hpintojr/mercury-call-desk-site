import Link from "next/link";

export default function PageHero({ title, body, crumb }: { title: string; body: string; crumb: string }) {
  return (
    <section className="bg-hero text-white">
      <div className="container-x py-14 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/60">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white/90">{crumb}</li>
          </ol>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{body}</p>
      </div>
    </section>
  );
}
