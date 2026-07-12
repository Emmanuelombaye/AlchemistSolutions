import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function AboutPreview() {
  const { about } = siteConfig;
  return (
    <section className="section-pad bg-surface">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="relative grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden md:col-span-1 md:aspect-[3/4] md:mt-10">
            <Image
              src={about.image}
              alt="Tile installation craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 40vw"
              quality={70}
            />
          </div>
          <div className="relative hidden aspect-[3/4] overflow-hidden md:block">
            <Image
              src={about.imageSecondary}
              alt="Finished flooring interior"
              fill
              className="object-cover"
              sizes="40vw"
              quality={70}
            />
          </div>
          <div className="absolute -bottom-4 left-4 bg-brand px-5 py-4 text-white md:left-auto md:right-8">
            <p className="text-3xl font-bold leading-none">{about.years}</p>
            <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.1em]">
              {about.yearsLabel}
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="heading heading-lg mb-4">{about.title}</h2>
          <p className="mb-6 leading-relaxed">{about.text}</p>
          <ul className="mb-8 space-y-3">
            {about.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn">
            More About Us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
