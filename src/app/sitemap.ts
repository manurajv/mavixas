import type { MetadataRoute } from "next"

import { projects, siteConfig } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(
    /\/$/,
    ""
  )
  const now = new Date()
  const paths = [
    "/",
    "/services",
    "/portfolio",
    ...projects.map((project) => `/portfolio/${project.slug}`),
    "/about",
    "/contact",
  ] as const
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/portfolio/") ? 0.7 : 0.8,
  }))
}
