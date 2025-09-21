"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5 // Background moves slower than scroll
        backgroundRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ height: "120%", top: "-10%" }}
      >
        <img
          src="/photographer-holding-professional-camera-with-warm.jpg"
          alt="Raj Gawand with camera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
          RAJ GAWAND
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wider animate-slide-up animation-delay-300 hover:text-amber-300 transition-colors duration-300 cursor-default">
          Photographer based in Mumbai, India
        </p>
      </div>
    </section>
  )
}
