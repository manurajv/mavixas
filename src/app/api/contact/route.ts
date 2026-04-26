import { z } from "zod"
import { NextResponse } from "next/server"

/** Ensure Node (full fetch + env); avoids odd Edge behavior with some upstream APIs. */
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

type Web3FormsSuccess = { success: boolean; message?: string }

function parseWeb3Response(text: string): Web3FormsSuccess | null {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (trimmed.startsWith("<") || trimmed.startsWith("<!")) {
    return null
  }
  try {
    return JSON.parse(trimmed) as Web3FormsSuccess
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  try {
    let json: unknown
    try {
      json = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
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
        console.log(
          "[mavixas] contact (dev, no WEB3FORMS_ACCESS_KEY):",
          name,
          email,
          intent
        )
        return NextResponse.json({ ok: true, dev: true } as const)
      }
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY on the server.",
        },
        { status: 503 }
      )
    }

    const payload = {
      access_key: key,
      name,
      email,
      subject: `Mavixas contact – ${name}${intent ? ` (${intent})` : ""}`,
      message: [
        `Intent: ${intent ?? "not specified"}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    }

    const res = await fetch("https://api.web3forms.com/submit", {
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
        res.headers.get("content-type"),
        raw.slice(0, 200)
      )
      return NextResponse.json(
        {
          error:
            "The email service did not return a valid response (often: wrong access key, or a temporary block). Check WEB3FORMS_ACCESS_KEY in Vercel and your Web3Forms dashboard.",
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
