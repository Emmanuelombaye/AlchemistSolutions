import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getProject, siteConfig } from "@/lib/site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteConfig.projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero title={project.title} breadcrumb={`Projects / ${project.title}`} />
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
            {project.category}
          </p>
          <h2 className="heading heading-md mb-4">{project.title}</h2>
          <p className="mb-4 leading-relaxed">{project.excerpt}</p>
          <p className="mb-8 leading-relaxed">{project.body}</p>
          <Link href="/projects" className="btn">
            Back to Projects
          </Link>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
