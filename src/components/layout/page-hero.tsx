import { cn } from "@/lib/utils"

type PageHeroProps = {
  title: string
  description: string
  eyebrow?: string
  className?: string
}

export function PageHero({ title, description, eyebrow, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border/50 bg-zinc-950/30",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 0%, oklch(0.42 0.17 255 / 16%), transparent 65%)",
        }}
      />
      <div className="container relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <span className="bg-brand/70 h-px w-8" aria-hidden />
            <p className="text-brand text-xs font-semibold tracking-[0.22em] uppercase">
              {eyebrow}
            </p>
          </div>
        )}
        <h1 className="text-foreground font-heading max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
