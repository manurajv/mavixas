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
        "border-b border-border/50 bg-zinc-950/30",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="text-foreground font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
