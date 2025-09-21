"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MyClicks() {
  const portfolioCategories = [
    { name: "FESTIVALS", image: "/colorful-indian-festival.jpg", link: "/gallery/festivals" },
    { name: "NATURE/SCAPES", image: "/serene-mountain-lake.jpg", link: "/gallery/mountain-serenity" },
    { name: "EVENTS", image: "/event-photography-celebration.jpg", link: "/gallery/events" },
    { name: "WEDDINGS", image: "/indian-wedding-ceremony-photography.jpg", link: "/gallery/wedding" },
    { name: "PORTRAITS", image: "/professional-portrait.jpg", link: "/gallery/portraits" },
    { name: "FAIRS", image: "/traditional-indian-fair-photography.jpg", link: "/gallery/fairs" },
    { name: "URBANSCAPES", image: "/urban-city-architecture-photography.jpg", link: "/gallery/urbanscapes" },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="my-clicks" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 animate-slide-up hover:text-amber-300 transition-colors duration-300 cursor-default">
          My Clicks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-8">
          {portfolioCategories.map((category, index) => (
            <Link key={category.name} href={category.link}>
              <div
                className={`
                  relative group cursor-pointer overflow-hidden rounded-lg aspect-square transform transition-all duration-500 ease-out
                  ${inView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}
                `}
                style={{
                  transitionDelay: `${inView ? index * 120 : 0}ms`, // staggered effect
                }}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-2 md:p-4 transition-all duration-300 group-hover:from-amber-900/60 group-hover:via-black/40">
                  <h3 className="text-white font-medium text-xs md:text-sm tracking-wide transform transition-all duration-300 group-hover:scale-110 group-hover:text-amber-200">
                    {category.name}
                  </h3>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-lg transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link href="/gallery">
            <Button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold px-8 py-3 hover:animate-pulse hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
