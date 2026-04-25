"use client"

import { motion } from "framer-motion"

import { SectionHeader } from "@/components/home/section-header"
import { whyMavixas } from "@/lib/data"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeWhy() {
  return (
    <section className="border-t border-border/50 py-20 sm:py-24" id="why">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Mavixas"
          title="A partner, not a ticket queue"
          description="We merge startup velocity with enterprise discipline—so your roadmap stays on track and your codebase stays ownable."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {whyMavixas.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease }}
              className={cn(
                "rounded-2xl border border-border/50 bg-zinc-950/45 p-6 sm:p-7",
                "hover:border-border transition"
              )}
            >
              <h3 className="text-foreground font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
