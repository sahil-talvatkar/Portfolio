"use client"

import { useEffect, useRef } from "react"
import { Playfair_Display, Montserrat } from "next/font/google"

// Elegant serif (for name)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
})

// Clean sans-serif (for tagline)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
})

export function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        backgroundRef.current.style.transform = `translateY(${parallax}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ height: "120%", top: "8%" }}
      >
        <img
          src="/myphoto.jpg"
          alt="Raj Gawand with camera"
          className="w-full h-full object-cover 
                     sm:object-cover md:object-cover 
                     object-center
                     max-h-[80vh] sm:max-h-[90vh] md:max-h-[120vh]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <h1
          className={`${playfair.className} text-5xl md:text-7xl font-bold mb-4 tracking-[0.15em] uppercase animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default`}
        >
          RAJ GAWAND
        </h1>
        <p
          className={`${montserrat.className} text-lg md:text-xl font-light tracking-wider animate-slide-up animation-delay-300 hover:text-amber-300 transition-colors duration-300 cursor-default`}
        >
          Photographer based in Mumbai, India
        </p>
      </div>
    </section>
  )
}
