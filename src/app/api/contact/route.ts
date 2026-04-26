import { z } from "zod"
import { NextResponse } from "next/server"

import {
  buildWeb3Payload,
  parseWeb3Response,
  readRequestJson,
  WEB3FORMS_SUBMIT_URL,
} from "@/lib/web3forms"
import { siteConfig } from "@/lib/data"

export const runtime = "nodejs"

const bodySchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Valid email is required"),
  company: z.string().max(200).optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Message should be at least 20 characters")
    .max(10_000),
  intent: z.enum(["project", "book", "other"]).optional(),
})

export async function POST(request: Request) {
  try {
    const json = await readRequestJson(request)
    if (json === null) {
      return NextResponse.json(
        { error: "Invalid or empty JSON body" },
        { status: 400 }
      )
    }

    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      return NextResponse.json(
        { error: first?.message ?? "Validation failed" },
        { status: 400 }
      )
    }

    const { name, email, company, message, intent } = parsed.data
    const key = process.env.WEB3FORMS_ACCESS_KEY?.trim()

    if (!key) {
      if (process.env.NODE_ENV === "development") {
        return NextResponse.json({ ok: true, dev: true } as const)
      }
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY on the server, or use NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY for browser submit.",
        },
        { status: 503 }
      )
    }

    const payload = buildWeb3Payload({
      accessKey: key,
      name,
      email,
      company: company ?? "",
      message,
      intent: intent ?? "other",
      brandName: siteConfig.name,
    })

    const res = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mavixas-Site-Contact/1.0",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    const raw = await res.text()
    const data = parseWeb3Response(raw)
    if (!data) {
      console.error(
        "[mavixas] web3forms non-JSON response",
        res.status,
        raw.slice(0, 200)
      )
      return NextResponse.json(
        {
          error:
            "The email service did not return a valid response. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel to submit from the browser instead of the server.",
        },
        { status: 502 }
      )
    }
    if (!res.ok || !data.success) {
      return NextResponse.json(
        { error: data.message || "Failed to send message" },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true } as const)
  } catch (err) {
    console.error("[mavixas] /api/contact", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    )
  }
}
