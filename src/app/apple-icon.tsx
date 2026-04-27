import { ImageResponse } from "next/og"

import { getLogoPngDataUrl } from "@/lib/logo-raster"

export const runtime = "nodejs"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const logoSrc = await getLogoPngDataUrl(132)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4), transparent 40%), linear-gradient(145deg, #020617 0%, #0f172a 45%, #020617 100%)",
        }}
      >
        <img
          src={logoSrc}
          width={132}
          height={132}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  )
}
