import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl sm:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="bg-brand/70 h-px w-8" aria-hidden />
          <p className="text-brand text-xs font-semibold tracking-[0.22em] uppercase">
            {eyebrow}
          </p>
          <span
            className={cn("bg-brand/70 h-px w-8", align !== "center" && "hidden")}
            aria-hidden
          />
        </div>
      )}
      <h2 className="text-foreground font-heading text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
