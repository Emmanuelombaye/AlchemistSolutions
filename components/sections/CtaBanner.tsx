import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-white md:py-20">
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={60}
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/55 via-ink/70 to-ink/85" />
      <div className="container-site relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="mb-3 text-[clamp(1.45rem,5vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            {siteConfig.cta.title}
          </h2>
          <p className="text-sm text-white/70 md:text-base">{siteConfig.cta.text}</p>
        </div>
        <Link href={siteConfig.cta.href} className="btn min-h-12 w-full justify-center sm:w-auto">
          {siteConfig.cta.button}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
