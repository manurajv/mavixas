/** Web3Forms API — also works from the browser (public access key). */
export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit"

export type Web3Response = { success: boolean; message?: string }

export function parseWeb3Response(text: string): Web3Response | null {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (trimmed.startsWith("<") || trimmed.trimStart().startsWith("<!")) {
    return null
  }
  try {
    return JSON.parse(trimmed) as Web3Response
  } catch {
    return null
  }
}

export function buildWeb3Payload(args: {
  accessKey: string
  name: string
  email: string
  company: string
  message: string
  intent: string
  brandName: string
}) {
  const { accessKey, name, email, company, message, intent, brandName } = args
  return {
    access_key: accessKey,
    name,
    email,
    subject: `${brandName} contact – ${name} (${intent})`,
    message: [
      `Intent: ${intent}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  }
}

/** Safe JSON body from Next.js Request (avoids unhandled throw on non-JSON bodies). */
export async function readRequestJson(request: Request): Promise<unknown | null> {
  const text = await request.text()
  if (!text.trim()) return null
  try {
    return JSON.parse(text) as unknown
  } catch {
    return null
  }
}
