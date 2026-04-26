"use client"

import { motion } from "framer-motion"

import { proofPoints } from "@/lib/data"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeProofStrip() {
  return (
    <section className="border-t border-border/50 bg-zinc-950/20 py-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, i) => (
            <motion.article
              key={point.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease }}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="text-brand font-heading text-2xl font-semibold tracking-tight">
                {point.value}
              </p>
              <h2 className="text-foreground mt-2 text-sm font-semibold">
                {point.label}
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
