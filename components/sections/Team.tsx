"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { useI18n } from "@/lib/i18n/provider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Team() {
  const { t } = useI18n();
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <Reveal from="up" className="mb-10 max-w-2xl">
          <p className="eyebrow">{t.team.eyebrow}</p>
          <h2 className="heading heading-lg">{t.team.title}</h2>
        </Reveal>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {t.team.items.map((member, index) => (
            <StaggerItem key={member.name} from={index % 2 === 0 ? "up" : "scale"}>
              <article className="group">
                <div className="relative mb-4 aspect-[4/5] overflow-hidden">
                  <Image
                    src={siteConfig.team.items[index]?.image ?? "/images/team-1.webp"}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 50vw, 25vw"
                    quality={70}
                  />
                </div>
                <h3 className="heading text-lg">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
                  {member.role}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
