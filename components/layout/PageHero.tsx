import Image from "next/image";

export function PageHero({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-12 text-white sm:py-20 md:py-28">
      <Image
        src="/images/hero-1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={65}
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/45 via-ink/50 to-ink/70" />
      <div className="container-site relative">
        <p className="mb-2 truncate text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand sm:mb-3 sm:text-xs sm:tracking-[0.14em]">
          Home / {breadcrumb}
        </p>
        <h1 className="max-w-3xl text-[clamp(1.6rem,6.5vw,3.4rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
