import Link from "next/link"
import { CheckCircle2, XCircle } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import { buttonVariants } from "@/components/ui/button"
import { fitSignals } from "@/lib/data"
import { cn } from "@/lib/utils"

export function HomeFit() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28" id="fit">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Fit"
          title="Who we work best with"
          description="The best projects start with alignment. Here is what makes a strong Mavixas engagement—and what usually does not."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="size-5 text-emerald-400" />
              <h3 className="text-foreground font-heading text-xl font-semibold">
                Good fit
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {fitSignals.goodFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/8 bg-zinc-950/45 p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <XCircle className="size-5 text-zinc-500" />
              <h3 className="text-foreground font-heading text-xl font-semibold">
                Probably not a fit
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {fitSignals.notBestFit.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-brand/15 bg-brand/[0.06] p-6 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            {fitSignals.pricingNote}
          </p>
          <Link
            href="/contact?intent=project"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-5 rounded-full border-white/10 bg-zinc-950/30 px-5"
            )}
          >
            Ask for a scope
          </Link>
        </div>
      </div>
    </section>
  )
}
