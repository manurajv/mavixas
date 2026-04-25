"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { services } from "@/lib/data"
import { cn } from "@/lib/utils"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function ServiceCards() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (i % 4) * 0.04, duration: 0.45, ease }}
            >
              <Card
                className="group h-full border-border/50 bg-zinc-950/40"
                data-size="sm"
              >
                <CardHeader>
                  <div className="bg-brand/10 text-brand group-hover:bg-brand/15 mb-2 inline-flex size-11 items-center justify-center rounded-xl border border-white/5">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {s.highlights.map((h) => (
                      <Badge
                        key={h}
                        variant="secondary"
                        className="border border-white/5 bg-white/5 text-xs font-normal"
                      >
                        {h}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
      <div className="mt-14 text-center">
        <Link
          href="/contact?intent=project"
          className={cn(
            buttonVariants({ size: "lg" }),
            "inline-flex rounded-full"
          )}
        >
          Start a project
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}
