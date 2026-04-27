"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import { BookingLink } from "@/components/navigation/booking-link"
import { buttonVariants } from "@/components/ui/button"
import { engagementModels } from "@/lib/data"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeEngagements() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28" id="engagements">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Engagements"
          title="Clear ways to start"
          description="Whether you need planning, an MVP, or long-term product capacity, we keep scope practical and communication direct."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model, i) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45, ease }}
              className="flex h-full flex-col rounded-3xl border border-border/50 bg-zinc-950/45 p-6 transition hover:-translate-y-1 hover:border-border"
            >
              <p className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">
                {model.range}
              </p>
              <h3 className="text-foreground font-heading mt-4 text-xl font-semibold tracking-tight">
                {model.title}
              </h3>
              <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                {model.description}
              </p>
              <div className="mt-5 rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                <p className="text-foreground text-xs font-semibold uppercase tracking-wider">
                  Best for
                </p>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {model.bestFor}
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {model.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <Check className="text-brand mt-0.5 size-4 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact?intent=project"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full px-6"
            )}
          >
            Start with a scope
            <ArrowRight className="size-4" />
          </Link>
          <BookingLink
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full border-white/12 bg-zinc-950/40 px-6"
            )}
          >
            Book a call
          </BookingLink>
        </div>
      </div>
    </section>
  )
}
