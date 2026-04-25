"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { MavixasLogo } from "@/components/brand/mavixas-logo"
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
        "sticky top-0 z-50 w-full border-b border-transparent transition-[background,border,backdrop-filter] duration-300",
        scrolled &&
          "border-border/60 bg-background/70 backdrop-blur-xl supports-backdrop-filter:bg-background/60"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <MavixasLogo />
        <nav
          className="text-muted-foreground hidden items-center gap-1 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 transition-colors hover:text-foreground",
                  active && "text-foreground bg-foreground/5"
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
              "hidden sm:inline-flex"
            )}
          >
            Start project
          </Link>
          <Link
            href="/contact?intent=book"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-8 min-w-[5.5rem] rounded-full min-[900px]:inline-flex"
            )}
          >
            Book call
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "md:hidden"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0">
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
                      className={cn(
                        "hover:bg-foreground/5 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                        active ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Link
                  href="/contact?intent=book"
                  onClick={() => setOpen(false)}
                  className="bg-foreground/5 text-foreground mt-3 rounded-lg px-3 py-2.5 text-center text-sm font-semibold"
                >
                  Book a call
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
