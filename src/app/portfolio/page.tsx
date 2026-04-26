import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Representative product systems from ${siteConfig.name}: SaaS, mobile, AI, and custom software patterns for ambitious teams.`,
  openGraph: {
    title: `Portfolio — ${siteConfig.name}`,
    description:
      "Representative build examples across mobile, SaaS, AI, and custom software.",
  },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Build examples with real product thinking"
        description="These are representative product directions, not public client case studies. They show the kind of architecture, UX, and delivery thinking we bring into paid engagements."
      />
      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <PortfolioGrid />
      </div>
    </>
  )
}
