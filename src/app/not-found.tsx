import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.35 0.12 255 / 25%), transparent)",
        }}
      />
      <p className="text-brand mb-4 text-xs font-semibold tracking-[0.25em] uppercase">
        404
      </p>
      <h1 className="text-foreground font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="text-muted-foreground mt-3 max-w-md text-center text-sm leading-relaxed sm:text-base">
        The link may be broken or the page was moved. Head back to{" "}
        {siteConfig.name} and keep building.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 min-w-[10rem] rounded-full justify-center gap-2"
          )}
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 min-w-[10rem] rounded-full border-white/10 bg-zinc-950/40 justify-center gap-2 backdrop-blur"
          )}
        >
          <Sparkles className="size-4 text-brand" />
          Contact
        </Link>
      </div>
    </div>
  )
}
