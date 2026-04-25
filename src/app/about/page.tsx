import Link from "next/link"
import { Target, Users, Globe2, Zap } from "lucide-react"
import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
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
      body: `We've delivered across time zones from ${siteConfig.location} with async collaboration that keeps momentum high.`,
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
        description="We started Mavixas to give ambitious companies access to a focused product studio: senior talent, clear communication, and the engineering discipline to ship and scale—without the enterprise bloat."
      />
      <div className="container mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 sm:py-20">
        <section>
          <h2 className="text-foreground font-heading text-2xl font-semibold">
            Our focus
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            {siteConfig.name} partners with growth-stage companies and
            well-funded teams who need a reliable long-term engineering partner.
            We specialize in our core strengths:
            high-quality Flutter apps, performant web platforms, SaaS that needs
            to feel enterprise-grade, and practical AI you can run in
            production—not slide decks.
          </p>
        </section>
        <ul className="grid gap-4 sm:grid-cols-2">
          {getValues().map((v) => {
            const I = v.icon
            return (
              <li
                key={v.title}
                className="bg-card/30 border-border/50 flex gap-3 rounded-2xl border p-4"
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
