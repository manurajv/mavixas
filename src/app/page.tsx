import { HomeFeaturedProjects } from "@/components/home/home-featured-projects"
import { HomeEngagements } from "@/components/home/home-engagements"
import { HomeFaq } from "@/components/home/home-faq"
import { HomeFit } from "@/components/home/home-fit"
import { HomeFinalCta } from "@/components/home/home-final-cta"
import { HomeHero } from "@/components/home/home-hero"
import { HomeProcess } from "@/components/home/home-process"
import { HomeProofStrip } from "@/components/home/home-proof-strip"
import { HomeServicesGrid } from "@/components/home/home-services-grid"
import { HomeTestimonials } from "@/components/home/home-testimonials"
import { HomeWhy } from "@/components/home/home-why"
import { siteConfig } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProofStrip />
      <HomeServicesGrid />
      <HomeWhy />
      <HomeProcess />
      <HomeEngagements />
      <HomeFit />
      <HomeFeaturedProjects />
      <HomeTestimonials />
      <HomeFaq />
      <HomeFinalCta />
    </>
  )
}
