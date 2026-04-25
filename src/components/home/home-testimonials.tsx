"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import { testimonials } from "@/lib/data"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeTestimonials() {
  return (
    <section className="border-t border-border/50 py-20 sm:py-24" id="testimonials">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Trust"
          title="Leaders we ship with"
          description="Results and relationships—built in the same sprint cycle."
          align="center"
          className="mx-auto"
        />
        <div className="mt-2 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.45, ease }}
              className="bg-card/30 flex h-full flex-col rounded-2xl border border-border/50 p-6"
            >
              <Quote
                className="text-brand/80 mb-3 size-6 shrink-0"
                aria-hidden
              />
              <p className="text-foreground text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-muted-foreground mt-5 text-xs not-italic">
                <p className="text-foreground font-medium">{t.name}</p>
                <p>{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
