import Link from "next/link"
import Image from "next/image"
import { Target, Users, Globe2, Zap } from "lucide-react"
import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { buttonVariants } from "@/components/ui/button"
import { founder, siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}—a Sri Lankan software company building world-class products for global teams with Flutter, web, and AI.`,
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description: "Engineering and product sense from the heart of APAC—shipping for the world.",
  },
}

function getValues() {
  return [
    {
      title: "Craft over churn",
      body: "We take fewer concurrent engagements so we can stay deep in the details—code quality, UX polish, and reliable releases.",
      icon: Target,
    },
    {
      title: "Operator mindset",
      body: "We align with your KPIs, not just the backlog. Design and engineering decisions trace back to business outcomes.",
      icon: Zap,
    },
    {
      title: "One accountable team",
      body: "You get senior engineers and clear owners—no surprise handoffs, no black-box outsourcing.",
      icon: Users,
    },
    {
      title: "Global by design",
      body: `Built from ${siteConfig.location} for global collaboration: async updates, clear demos, and timezone-aware planning.`,
      icon: Globe2,
    },
  ] as const
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mavixas"
        title="A Sri Lankan team building for the world"
        description="Mavixas exists to give ambitious businesses a focused product partner: modern engineering, clear communication, and the discipline to move from idea to launch without unnecessary complexity."
      />
      <div className="container mx-auto max-w-4xl space-y-14 px-4 py-20 sm:px-6 sm:py-24">
        <section className="rounded-3xl border border-border/50 bg-zinc-950/35 p-6 sm:p-8">
          <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight">
            Our focus
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-relaxed sm:text-lg">
            {siteConfig.name} is focused on a clear lane: high-quality Flutter
            apps, performant web platforms, SaaS products that can grow with
            the business, and practical AI features that solve real workflow
            problems. We keep the team lean, the communication direct, and the
            work grounded in launch-ready outcomes.
          </p>
        </section>
        <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 15% 0%, oklch(0.42 0.16 255 / 16%), transparent 60%)",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
            <div className="mx-auto md:mx-0">
              {founder.imagePath ? (
                <Image
                  src={founder.imagePath}
                  alt={founder.name}
                  width={176}
                  height={176}
                  className="size-40 rounded-3xl border border-white/10 object-cover shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:size-44"
                />
              ) : (
                <div
                  className="from-brand to-sky-300 flex size-40 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br text-4xl font-bold tracking-tight text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:size-44"
                  aria-hidden
                >
                  MVA
                </div>
              )}
            </div>
            <div>
              <p className="text-brand mb-3 text-xs font-semibold tracking-[0.22em] uppercase">
                Founder-led delivery
              </p>
              <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {founder.name}
              </h2>
              <p className="text-foreground/80 mt-1 text-sm font-medium">
                {founder.role} · {founder.location}
              </p>
              <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed sm:text-base">
                {founder.bio}
              </p>
              <div className="mt-6">
                <h3 className="text-foreground text-sm font-semibold">
                  Education
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {founder.education.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand" aria-hidden>
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ul className="grid gap-4 sm:grid-cols-2">
          {getValues().map((v) => {
            const I = v.icon
            return (
              <li
                key={v.title}
                className="bg-card/30 border-border/50 flex gap-3 rounded-3xl border p-5 transition hover:-translate-y-1 hover:border-border"
              >
                <div className="text-brand">
                  <I className="size-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-semibold">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="text-center">
          <Link
            href="/contact?intent=book"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex rounded-full"
            )}
          >
            Talk to the team
          </Link>
        </div>
      </div>
    </>
  )
}
