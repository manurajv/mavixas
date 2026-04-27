import { readFile } from "node:fs/promises"
import { join } from "node:path"

import sharp from "sharp"

import { siteConfig } from "@/lib/data"

/** Rasterized from the same asset as the header (OG + Apple do not support SVG in `<img>`). */
export async function getLogoPngDataUrl(
  sizePx: number
): Promise<string> {
  const path = join(
    process.cwd(),
    "public",
    siteConfig.logoPath.replace(/^\//, "")
  )
  const buf = await readFile(path)
  const png = await sharp(buf)
    .resize(sizePx, sizePx, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()
  return `data:image/png;base64,${png.toString("base64")}`
}
