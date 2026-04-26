import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"

import { MavixasLogo } from "@/components/brand/mavixas-logo"
import { navLinks, siteConfig } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const legalYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-zinc-950/50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 0%, oklch(0.42 0.16 255 / 14%), transparent 65%)",
        }}
      />
      <div className="container relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
          <div className="space-y-4">
            <MavixasLogo />
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-muted-foreground flex w-fit items-center gap-2 rounded-full border border-white/6 bg-white/[0.03] px-3 py-1.5 text-xs">
              <MapPin className="text-brand size-3.5 shrink-0" aria-hidden />
              {siteConfig.location} · Global delivery
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-heading text-sm font-semibold tracking-wide">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center transition hover:translate-x-0.5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-heading text-sm font-semibold tracking-wide">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Flutter & mobile", "Web & SaaS", "AI & automation", "Custom platforms"].map(
                (service) => (
                  <li key={service} className="flex items-center gap-2">
                    <span className="text-brand" aria-hidden>
                      ·
                    </span>
                    {service}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
            <h3 className="text-foreground font-heading text-sm font-semibold tracking-wide">
              Start a conversation
            </h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Share your roadmap—we&apos;ll respond with a clear next step, scope,
              and timeline.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "mt-5 inline-flex h-9 w-fit rounded-full gap-1.5 px-4"
              )}
            >
              Get in touch
              <ArrowUpRight className="size-3.5 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand mt-4 block text-sm font-medium hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border/40 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {legalYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.sameAs.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="hover:text-foreground transition"
                rel="noreferrer"
                target="_blank"
              >
                {s.label}
              </a>
            ))}
            <span className="text-zinc-600">Sri Lanka · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
