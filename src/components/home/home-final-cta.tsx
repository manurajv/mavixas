"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeFinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
          className="bg-brand/8 relative overflow-hidden rounded-3xl border border-white/8 px-6 py-14 text-center sm:px-10"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.5 0.2 255 / 20%), transparent)",
            }}
          />
          <h2 className="text-foreground font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to build what&apos;s next?
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-balance text-sm sm:text-base">
            Tell us about your product—timeline, team, and goals. We&apos;ll
            follow up with a focused proposal.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?intent=project"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 justify-center rounded-full px-6"
              )}
            >
              Start your project
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact?intent=book"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 justify-center rounded-full border-white/12 bg-zinc-950/40 px-6 backdrop-blur"
              )}
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
