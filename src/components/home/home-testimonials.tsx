"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import { trustSignals } from "@/lib/data"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeTestimonials() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28" id="testimonials">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Trust"
          title="What you can expect"
          description="Until we have public case studies we can share, we keep the promise simple: clear communication, clean execution, and no inflated claims."
          align="center"
          className="mx-auto"
        />
        <div className="mt-2 grid gap-5 md:grid-cols-3">
          {trustSignals.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease }}
              className="bg-card/30 flex h-full flex-col rounded-3xl border border-border/50 p-6 transition hover:-translate-y-1 hover:border-border"
            >
              <CheckCircle2
                className="text-brand/80 mb-4 size-6 shrink-0"
                aria-hidden
              />
              <h3 className="text-foreground font-heading text-lg font-semibold">
                {t.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {t.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
