import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/data"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base.replace(/\/$/, "")}/sitemap.xml`,
  }
}
