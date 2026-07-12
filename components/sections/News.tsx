import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site.config";

export function News({ limit }: { limit?: number }) {
  const items = limit
    ? siteConfig.blog.items.slice(0, limit)
    : siteConfig.blog.items;

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{siteConfig.blog.eyebrow}</p>
          <h2 className="heading heading-lg">{siteConfig.blog.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((post) => (
            <article key={post.slug} className="group overflow-hidden bg-white">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="border border-t-0 border-line p-6">
                <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-brand">
                  {post.date}
                </p>
                <h3 className="heading mb-3 text-xl">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-ink no-underline hover:text-brand"
                >
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
