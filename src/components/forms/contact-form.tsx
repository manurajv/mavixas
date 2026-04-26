"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/data"
import {
  buildWeb3Payload,
  parseWeb3Response,
  WEB3FORMS_SUBMIT_URL,
} from "@/lib/web3forms"
import { cn } from "@/lib/utils"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm({ className }: { className?: string }) {
  const searchParams = useSearchParams()
  const intentParam = searchParams.get("intent")

  const defaultIntent = useMemo(() => {
    if (intentParam === "book") return "book"
    if (intentParam === "project") return "project"
    return "other"
  }, [intentParam])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [intent, setIntent] = useState<"project" | "book" | "other">(
    defaultIntent
  )
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIntent(defaultIntent)
  }, [defaultIntent])

  function bumpEdit() {
    if (state === "success") setState("idle")
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState("submitting")
    setError(null)

    const publicKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()

    const finishSuccess = () => {
      setState("success")
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
    }

    const parseApiJson = async (res: Response) => {
      const text = await res.text()
      try {
        return (text
          ? (JSON.parse(text) as { error?: string; ok?: boolean })
          : {}) as { error?: string; ok?: boolean }
      } catch {
        return { error: `Invalid response (${res.status})` }
      }
    }

    try {
      if (publicKey) {
        const payload = buildWeb3Payload({
          accessKey: publicKey,
          name,
          email,
          company,
          message,
          intent,
          brandName: siteConfig.name,
        })
        const res = await fetch(WEB3FORMS_SUBMIT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        })
        const text = await res.text()
        const w3 = parseWeb3Response(text)
        if (!w3) {
          setError(
            "The email service did not return a valid response. Check your key and Web3Forms settings."
          )
          setState("error")
          return
        }
        if (!res.ok || !w3.success) {
          setError(w3.message || "Failed to send. Please try again.")
          setState("error")
          return
        }
        finishSuccess()
        return
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, intent }),
      })
      const data = await parseApiJson(res)
      if (!res.ok) {
        setError(
          data.error ??
            "Request failed. For production, set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel to the same value as your Web3Forms key."
        )
        setState("error")
        return
      }
      finishSuccess()
    } catch {
      const isOffline = typeof navigator !== "undefined" && !navigator.onLine
      setError(
        isOffline
          ? "You appear to be offline. Check your connection and try again."
          : "Request failed. Check your connection or ad blockers, then try again."
      )
      setState("error")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-5", className)}
      noValidate
    >
      <fieldset className="space-y-2">
        <legend className="text-muted-foreground mb-1 text-xs font-medium">
          I want to
        </legend>
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "project" as const, label: "Start a project" },
              { id: "book" as const, label: "Book a call" },
              { id: "other" as const, label: "Something else" },
            ] as const
          ).map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => {
                bumpEdit()
                setIntent(o.id)
              }}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                intent === o.id
                  ? "bg-brand/15 text-foreground border-brand/40"
                  : "border-border/60 text-muted-foreground hover:text-foreground"
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => {
              bumpEdit()
              setName(e.target.value)
            }}
            autoComplete="name"
            placeholder="Your name"
            className="h-10 border-border/50 bg-zinc-950/40"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              bumpEdit()
              setEmail(e.target.value)
            }}
            autoComplete="email"
            placeholder="you@company.com"
            className="h-10 border-border/50 bg-zinc-950/40"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          name="company"
          value={company}
          onChange={(e) => {
            bumpEdit()
            setCompany(e.target.value)
          }}
          autoComplete="organization"
          placeholder="Acme Inc."
          className="h-10 border-border/50 bg-zinc-950/40"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => {
            bumpEdit()
            setMessage(e.target.value)
          }}
          rows={5}
          placeholder="Goals, timeline, and anything we should know up front…"
          className="min-h-32 border-border/50 bg-zinc-950/40 resize-y"
        />
      </div>
      <AnimatePresence mode="wait">
        {error && state === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-destructive text-sm"
            role="alert"
          >
            {error}
          </motion.p>
        )}
        {state === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-emerald-400/90"
            role="status"
          >
            Thanks—your message is on its way. We’ll reply within one business
            day.
          </motion.p>
        )}
      </AnimatePresence>
      <Button
        type="submit"
        className="h-10 w-full rounded-full sm:w-auto"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send message
            <Send className="size-3.5" />
          </>
        )}
      </Button>
    </form>
  )
}
