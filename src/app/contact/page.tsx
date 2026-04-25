import { Suspense } from "react"
import Link from "next/link"
import type { Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"
import { PageHero } from "@/components/layout/page-hero"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} to start a project or book a call. We respond within one business day.`,
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description: "Start a project or book a call with the Mavixas team.",
  },
}

function FormFallback() {
  return (
    <div className="text-muted-foreground animate-pulse rounded-2xl border border-border/50 bg-zinc-950/30 p-8 text-sm">
      Loading form…
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build the next version"
        description="Share your goals, timeline, and constraints. We’ll reply with a focused plan—or a short call to align before we write a proposal."
      />
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="text-muted-foreground space-y-6 text-sm leading-relaxed lg:col-span-2">
            <div>
              <h2 className="text-foreground font-heading text-sm font-semibold">
                Direct
              </h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand mt-1 inline-block font-medium hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <p>
              Prefer a call? After you submit, we can send a calendar link that
              matches your time zone.
            </p>
            <p>
              <Link
                href="/services"
                className="text-foreground hover:underline"
              >
                See services
              </Link>{" "}
              ·{" "}
              <Link
                href="/portfolio"
                className="text-foreground hover:underline"
              >
                View portfolio
              </Link>
            </p>
          </aside>
          <div className="bg-card/30 border-border/50 rounded-2xl border p-6 sm:p-8 lg:col-span-3">
            <Suspense fallback={<FormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
