import Link from "next/link"
import type { AnchorHTMLAttributes, ReactNode } from "react"

import { bookingHref, isExternalBookingHref } from "@/lib/data"
import { cn } from "@/lib/utils"

type BookingLinkProps = {
  href?: string
  className?: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * Uses Next.js `Link` for internal booking (`/contact?…`) and a safe external `<a>` for Calendly/HTTPS links.
 */
export function BookingLink({
  href = bookingHref,
  className,
  children,
  ...rest
}: BookingLinkProps) {
  if (isExternalBookingHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cn(className)} {...rest}>
      {children}
    </Link>
  )
}
