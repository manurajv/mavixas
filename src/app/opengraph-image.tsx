import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/data"

export const runtime = "edge"
export const alt = `${siteConfig.name} - ${siteConfig.tagline}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background:
            "radial-gradient(circle at 20% 15%, rgba(59, 130, 246, 0.42), transparent 32%), radial-gradient(circle at 85% 20%, rgba(99, 102, 241, 0.24), transparent 30%), linear-gradient(135deg, #030712 0%, #050816 55%, #020617 100%)",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#2563eb",
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.65)",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 800 }}>
              {siteConfig.name}
            </span>
            <span style={{ color: "#93c5fd", fontSize: 18 }}>
              Sri Lanka-based global software studio
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              width: 84,
              height: 4,
              borderRadius: 999,
              background: "#3b82f6",
            }}
          />
          <h1
            style={{
              margin: 0,
              maxWidth: 860,
              fontSize: 92,
              lineHeight: 0.95,
              letterSpacing: "-0.07em",
              fontWeight: 850,
            }}
          >
            {siteConfig.tagline}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 780,
              color: "#cbd5e1",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Mobile apps, web platforms, SaaS products, and AI-powered software
            for ambitious businesses worldwide.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#94a3b8",
            fontSize: 22,
          }}
        >
          <span>Flutter · Web · SaaS · AI</span>
          <span>{new URL(siteConfig.url).host}</span>
        </div>
      </div>
    ),
    size
  )
}
