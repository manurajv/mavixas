"use client"

import { motion } from "framer-motion"

import { SectionHeader } from "@/components/home/section-header"
import { processSteps } from "@/lib/data"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeProcess() {
  return (
    <section className="border-t border-border/50 py-20 sm:py-24" id="process">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How we work"
          title="A clear process, predictable delivery"
          description="Every engagement starts with shared understanding—so builds stay focused and launches stay calm."
        />
        <ol className="relative mt-2 max-w-2xl">
          {processSteps.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease }}
              className="relative flex gap-4 pb-10 last:pb-0"
            >
              {i < processSteps.length - 1 && (
                <span
                  className="bg-border/70 absolute top-10 left-[0.9rem] h-[calc(100%-0.5rem)] w-px"
                  aria-hidden
                />
              )}
              <span
                className="bg-background text-brand border-brand/35 relative z-10 flex h-7 min-w-7 items-center justify-center rounded-full border text-xs font-bold"
                aria-hidden
              >
                {p.step}
              </span>
              <div>
                <h3 className="text-foreground font-heading text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
