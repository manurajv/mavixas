import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { ServiceCards } from "@/components/services/service-cards"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.name} services: mobile (Flutter), web apps, SaaS, AI, and custom software—built in Sri Lanka for global clients.`,
  openGraph: {
    title: `Services — ${siteConfig.name}`,
    description: "Mobile, web, SaaS, and AI product development from discovery to scale.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Product-grade engineering, wherever you are"
        description="Mavixas helps ambitious teams design, build, and ship—Flutter apps, modern web, SaaS, and AI. One studio, one accountable partner."
      />
      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <ServiceCards />
      </div>
    </>
  )
}
