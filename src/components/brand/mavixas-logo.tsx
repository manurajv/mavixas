import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

type MavixasLogoProps = {
  className?: string
  showWordmark?: boolean
}

export function MavixasLogo({
  className,
  showWordmark = true,
}: MavixasLogoProps) {
  const { logoPath, logoIconOnly, name } = siteConfig

  const showNameBesideImage =
    showWordmark && (!logoPath || (logoPath && logoIconOnly))

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${name} home`}
    >
      {logoPath ? (
        <span
          className={cn(
            "relative block h-8 shrink-0",
            logoIconOnly ? "w-8" : "w-[min(9rem,40vw)]"
          )}
        >
          <Image
            src={logoPath}
            alt={name}
            width={logoIconOnly ? 32 : 180}
            height={32}
            unoptimized={logoPath.endsWith(".svg")}
            className={cn(
              "h-8 w-auto object-contain object-left",
              logoIconOnly && "size-8"
            )}
            priority
            sizes={logoIconOnly ? "32px" : "(max-width: 768px) 120px, 9rem"}
          />
        </span>
      ) : (
        <span
          className="relative size-8 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/50 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]"
          aria-hidden
        >
          <span className="bg-brand/90 absolute inset-[2px] rounded-md shadow-[0_0_24px_rgba(59,130,246,0.45)] transition group-hover:shadow-[0_0_32px_rgba(59,130,246,0.55)]" />
          <span className="relative z-10 flex h-full w-full items-center justify-center text-xs font-bold tracking-tight text-white">
            {name.slice(0, 1).toUpperCase()}
          </span>
        </span>
      )}
      {showNameBesideImage && (
        <span className="text-foreground font-heading text-lg font-semibold tracking-tight">
          {name}
        </span>
      )}
    </Link>
  )
}
