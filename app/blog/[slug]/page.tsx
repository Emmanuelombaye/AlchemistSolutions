import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getPost, siteConfig } from "@/lib/site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteConfig.blog.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Article" };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} breadcrumb={`News / ${post.title}`} />
      <section className="section-pad">
        <article className="container-site max-w-3xl">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
            {post.date}
          </p>
          <h2 className="heading heading-md mb-4">{post.title}</h2>
          <p className="mb-4 text-lg leading-relaxed">{post.excerpt}</p>
          <p className="mb-8 leading-relaxed">{post.body}</p>
          <Link href="/blog" className="btn">
            Back to News
          </Link>
        </article>
      </section>
      <CtaBanner />
    </>
  );
}
