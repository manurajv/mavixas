import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/data"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

/** PWA / “Add to Home Screen” and Apple link previews. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4), transparent 40%), linear-gradient(145deg, #020617 0%, #0f172a 45%, #020617 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 112,
            height: 112,
            borderRadius: 28,
            background: "#2563eb",
            boxShadow: "0 0 48px rgba(59, 130, 246, 0.6)",
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
          }}
        >
          M
        </div>
        <div
          style={{
            marginTop: 12,
            color: "#e2e8f0",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size }
  )
}
