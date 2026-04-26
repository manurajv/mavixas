"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.28, ease }
        }
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
