"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu } from "lucide-react"

import { MavixasLogo } from "@/components/brand/mavixas-logo"
import { BookingLink } from "@/components/navigation/booking-link"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-[background,border,box-shadow,backdrop-filter] duration-300",
        scrolled &&
          "border-border/60 bg-background/72 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl supports-backdrop-filter:bg-background/60"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <MavixasLogo />
        <nav
          className="text-muted-foreground hidden items-center gap-1 rounded-full border border-white/6 bg-white/[0.03] p-1 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  active && "text-foreground bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact?intent=project"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "hidden rounded-full border border-white/6 bg-white/[0.06] px-3.5 sm:inline-flex"
            )}
          >
            Start project
          </Link>
          <BookingLink
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-8 min-w-[5.5rem] rounded-full px-3.5 min-[900px]:inline-flex"
            )}
          >
            Book call
            <ArrowRight className="size-3.5 transition-transform group-hover/button:translate-x-0.5" />
          </BookingLink>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-full md:hidden"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,21rem)] gap-0 border-white/10 bg-zinc-950/95 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1 border-t border-border/60 py-3">
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "hover:bg-foreground/5 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                        active
                          ? "bg-white/[0.06] text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <BookingLink
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-center text-sm font-semibold"
                >
                  Book a call
                  <ArrowRight className="size-3.5" />
                </BookingLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
