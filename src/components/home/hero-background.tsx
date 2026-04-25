"use client"

import { motion } from "framer-motion"

export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute -top-1/2 left-1/2 h-[60rem] w-[80rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, oklch(0.4 0.2 255 / 18%), transparent 65%)",
        }}
      />
      <motion.div
        className="bg-brand/25 absolute top-[20%] right-[10%] size-[34rem] rounded-full blur-[100px]"
        animate={{ y: [0, 24, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[5%] size-[28rem] rounded-full bg-indigo-500/15 blur-[90px]"
        animate={{ y: [0, -20, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950" />
    </div>
  )
}
