import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

export function Team() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{siteConfig.team.eyebrow}</p>
          <h2 className="heading heading-lg">{siteConfig.team.title}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.team.items.map((member) => (
            <article key={member.name} className="group">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 50vw, 25vw"
                  quality={70}
                />
              </div>
              <h3 className="heading text-lg">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
