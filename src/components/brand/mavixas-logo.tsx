import Link from "next/link"

import { cn } from "@/lib/utils"

type MavixasLogoProps = {
  className?: string
  showWordmark?: boolean
}

export function MavixasLogo({
  className,
  showWordmark = true,
}: MavixasLogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Mavixas home"
    >
      <span
        className="relative size-8 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/50 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]"
        aria-hidden
      >
        <span className="bg-brand/90 absolute inset-[2px] rounded-md shadow-[0_0_24px_rgba(59,130,246,0.45)] transition group-hover:shadow-[0_0_32px_rgba(59,130,246,0.55)]" />
        <span className="relative z-10 flex h-full w-full items-center justify-center text-xs font-bold tracking-tight text-white">
          M
        </span>
      </span>
      {showWordmark && (
        <span className="text-foreground font-heading text-lg font-semibold tracking-tight">
          Mavixas
        </span>
      )}
    </Link>
  )
}
