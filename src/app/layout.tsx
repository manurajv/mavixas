import type { Metadata, Viewport } from "next"
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google"
import Script from "next/script"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { siteConfig } from "@/lib/data"

import "./globals.css"

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
})

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

const base = new URL(
  (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "")
)
/** Canonical public origin, no trailing slash (matches sitemap, OG, and JSON-LD). */
const siteUrl = base.href.replace(/\/$/, "")

export const metadata: Metadata = {
  metadataBase: base,
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mavixas",
    "software development",
    "Sri Lanka",
    "Flutter",
    "Next.js",
    "SaaS",
    "AI",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  classification: "Software development company",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteUrl,
    images: [
      {
        url: new URL("/opengraph-image", base).toString(),
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [new URL("/twitter-image", base).toString()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: siteConfig.logoPath, type: "image/svg+xml" }],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { color: "#050508" },
  ],
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.split(",")[0]?.trim() ?? "Sri Lanka",
    addressCountry: "LK",
  },
  sameAs: siteConfig.sameAs.map((s) => s.href),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-full text-balance text-foreground">
        <a
          href="#main"
          className="bg-background/90 text-foreground focus:ring-2 focus:ring-offset-2 focus:ring-offset-background fixed top-4 left-4 z-[100] -translate-y-24 rounded-md px-3 py-2 text-sm font-medium opacity-0 ring-[var(--brand)] transition focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <Script
          id="org-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
