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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mavixas.com"
)

export const metadata: Metadata = {
  metadataBase: base,
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
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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
  url: siteConfig.url,
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
