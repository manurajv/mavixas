import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work from ${siteConfig.name}—SaaS, fintech, mobile, and data platforms for global clients.`,
  openGraph: {
    title: `Portfolio — ${siteConfig.name}`,
    description: "A snapshot of platforms we have shipped with founders and product teams.",
  },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Outcomes, not just outputs"
        description="A curated view of the kinds of products we help teams launch. Every engagement is tailored—here’s a sense of the craft and range."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <PortfolioGrid />
      </div>
    </>
  )
}
