import { Suspense } from "react"
import Link from "next/link"
import { CalendarClock } from "lucide-react"
import type { Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"
import { PageHero } from "@/components/layout/page-hero"
import { bookingHref, faqs, isExternalBookingHref, siteConfig } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
      <div className="container mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <aside className="text-muted-foreground space-y-6 text-sm leading-relaxed lg:col-span-2">
            <div className="rounded-2xl border border-border/50 bg-zinc-950/35 p-5">
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
            {isExternalBookingHref(bookingHref) ? (
              <div className="rounded-2xl border border-border/50 bg-zinc-950/35 p-5">
                <h2 className="text-foreground font-heading text-sm font-semibold">
                  Schedule a call
                </h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Pick a 30-minute slot in your time zone—no back-and-forth
                  required.
                </p>
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "text-foreground border-white/8 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full"
                  )}
                >
                  <CalendarClock className="size-4" aria-hidden />
                  Open Calendly
                </a>
              </div>
            ) : (
              <p className="max-w-sm">
                Prefer a call? After you submit, we can send a calendar link
                that matches your time zone.
              </p>
            )}
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
            <div className="rounded-2xl border border-border/50 bg-zinc-950/35 p-5">
              <h2 className="text-foreground font-heading text-sm font-semibold">
                Before you send
              </h2>
              <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
                {faqs.slice(0, 3).map((faq) => (
                  <li key={faq.question} className="flex gap-2">
                    <span className="text-brand" aria-hidden>
                      ·
                    </span>
                    {faq.question}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="bg-card/30 border-border/50 rounded-3xl border p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:col-span-3">
            <Suspense fallback={<FormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
