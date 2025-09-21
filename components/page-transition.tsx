"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {children}
      <div
        className={`fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  )
}
