import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

/** Tab favicon — PNG for broad browser and crawler support (SVG is inconsistent for `rel=icon`). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)",
          color: "white",
          fontSize: 20,
          fontWeight: 800,
          fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
        }}
      >
        M
      </div>
    ),
    { ...size }
  )
}
