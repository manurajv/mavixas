"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SectionHeader } from "@/components/home/section-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { services } from "@/lib/data"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function HomeServicesGrid() {
  return (
    <section className="border-t border-border/50 py-20 sm:py-24" id="services">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What we do"
          title="Engineering, design, and delivery—end to end"
          description="From Flutter apps to production AI, we own outcomes with a senior team and transparent cadence."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease }}
              >
                <Card
                  className={cn(
                    "group h-full border-border/50 bg-zinc-950/40 transition hover:border-border",
                    "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_20px_50px_rgba(0,0,0,0.35)]"
                  )}
                >
                  <CardHeader>
                    <div className="bg-brand/10 text-brand group-hover:bg-brand/15 mb-3 inline-flex size-10 items-center justify-center rounded-lg border border-white/5 transition">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {s.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground space-y-1.5 text-sm">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="text-brand" aria-hidden>
                            ·
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex rounded-full border-white/10 bg-zinc-950/40 px-5"
            )}
          >
            Explore services
            <ArrowUpRight className="size-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
