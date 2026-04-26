import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getProjectBySlug, projects, siteConfig, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

const accent: Record<Project["accent"], string> = {
  blue: "from-sky-500/25 to-blue-600/5",
  violet: "from-violet-500/25 to-fuchsia-600/5",
  cyan: "from-cyan-500/20 to-sky-600/5",
  indigo: "from-indigo-500/25 to-violet-600/5",
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Build example not found",
      robots: { index: false, follow: true },
    }
  }

  return {
    title: project.title,
    description: project.headline,
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.headline,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50 bg-zinc-950/30">
        <div
          className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", accent[project.accent])}
          aria-hidden
        />
        <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Link
            href="/portfolio"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-brand mb-4 text-xs font-semibold tracking-[0.22em] uppercase">
                {project.category}
              </p>
              <h1 className="text-foreground font-heading max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                {project.headline}
              </p>
            </div>
            <aside className="rounded-3xl border border-white/8 bg-black/20 p-5 backdrop-blur">
              <dl className="space-y-5">
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-wider">
                    Ideal for
                  </dt>
                  <dd className="text-foreground mt-1 text-sm font-medium">
                    {project.idealFor}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-wider">
                    Typical timeline
                  </dt>
                  <dd className="text-foreground mt-1 text-sm font-medium">
                    {project.timeline}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="text-foreground font-heading text-lg font-semibold">
                Stack direction
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="border border-white/5 bg-white/5 font-normal text-muted-foreground"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border/50 bg-zinc-950/35 p-5">
              <p className="text-muted-foreground text-sm leading-relaxed">
                This is a representative build example. We tailor architecture,
                scope, and delivery plan to each real engagement.
              </p>
            </div>
          </aside>

          <div className="space-y-10">
            <section>
              <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight">
                Deliverables
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-border/50 bg-card/30 p-4 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="text-brand mt-0.5 size-4 shrink-0"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight">
                Delivery approach
              </h2>
              <ol className="mt-5 space-y-4">
                {project.approach.map((item, index) => (
                  <li
                    key={item}
                    className="grid gap-4 rounded-2xl border border-border/50 bg-zinc-950/35 p-5 sm:grid-cols-[auto_1fr]"
                  >
                    <span className="text-brand font-mono text-sm font-semibold">
                      0{index + 1}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight">
                Want this adapted for your business?
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                Share your goals and constraints. We&apos;ll turn this into a
                practical scope, timeline, and launch plan.
              </p>
              <Link
                href="/contact?intent=project"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 h-11 rounded-full px-6"
                )}
              >
                Start project
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
