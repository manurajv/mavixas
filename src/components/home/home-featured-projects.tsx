"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { featuredHomeProjects, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const accent: Record<Project["accent"], string> = {
  blue: "from-sky-500/25 to-blue-600/5",
  violet: "from-violet-500/25 to-fuchsia-600/5",
  cyan: "from-cyan-500/20 to-sky-600/5",
  indigo: "from-indigo-500/25 to-violet-600/5",
}

export function HomeFeaturedProjects() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28" id="work">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Work"
          title="Representative builds"
          description="Examples of the product systems Mavixas is built to design and deliver—from MVPs to scalable platforms."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredHomeProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.45, ease }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-zinc-950/50 transition hover:-translate-y-1 hover:border-border"
            >
              <div
                className={cn(
                  "h-36 bg-gradient-to-br",
                  accent[p.accent],
                  "relative"
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(255,255,255,0.08),transparent)]" />
                <p className="text-muted-foreground group-hover:text-foreground/90 absolute right-3 bottom-3 text-xs font-medium transition">
                  {p.category}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-foreground font-heading text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-muted-foreground border border-white/5 bg-white/5 font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-brand hover:text-brand/80 inline-flex"
            )}
          >
            View build examples
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
