"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { HeroBackground } from "@/components/home/hero-background"
import { siteConfig } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeHero() {
  return (
    <section className="relative min-h-[min(92vh,860px)] overflow-hidden">
      <HeroBackground />
      <div className="container relative mx-auto flex max-w-6xl flex-col justify-center gap-10 px-4 pb-24 pt-24 sm:px-6 sm:pt-32 md:min-h-[82vh] md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/8 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-400 backdrop-blur sm:text-sm"
        >
          <Sparkles className="text-brand size-3.5 shrink-0" aria-hidden />
          <span className="text-zinc-300">
            {siteConfig.location} · Software for global teams
          </span>
        </motion.div>
        <div className="max-w-3xl">
          <motion.h1
            className="text-foreground font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease }}
          >
            {siteConfig.tagline.split(" ")[0]}{" "}
            <span className="from-brand to-sky-200 bg-gradient-to-r bg-clip-text text-transparent">
              {siteConfig.tagline.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground mt-6 max-w-2xl text-balance text-lg leading-relaxed sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease }}
          >
            We build mobile apps, web platforms and AI-powered software for
            ambitious businesses worldwide.
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          <Link
            href="/contact?intent=project"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 w-full min-w-[10rem] justify-center rounded-full px-6 sm:w-auto"
            )}
          >
            Start project
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/contact?intent=book"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 w-full min-w-[10rem] justify-center rounded-full border-white/10 bg-zinc-950/30 px-6 backdrop-blur sm:w-auto"
            )}
          >
            Book call
          </Link>
        </motion.div>
        <motion.dl
          className="grid max-w-3xl gap-3 border-t border-white/6 pt-8 text-sm sm:grid-cols-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45 }}
        >
          {[
            { k: "Engagement", v: "Fixed & retainers" },
            { k: "Time zones", v: "APAC · EU · US" },
            { k: "Stack", v: "Flutter · Web · AI" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur"
            >
              <dt className="text-muted-foreground text-xs uppercase tracking-wider">
                {row.k}
              </dt>
              <dd className="text-foreground mt-1 font-medium">{row.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
