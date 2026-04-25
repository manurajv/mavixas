import { z } from "zod"
import { NextResponse } from "next/server"

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

export async function POST(request: Request) {
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
  const key = process.env.WEB3FORMS_ACCESS_KEY

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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = (await res.json()) as Web3FormsSuccess
  if (!res.ok || !data.success) {
    return NextResponse.json(
      { error: data.message || "Failed to send message" },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true } as const)
}
