"use client"

import { useState, useEffect } from "react"
import GalleryHeader from "@/components/gallery-header"

export default function MountainSerenityPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mountainPhotos = [
    { id: 1, src: "/serene-mountain-lake.jpg", title: "Alpine Lake", description: "Crystal clear mountain lake reflection" },
    { id: 2, src: "/serene-mountain-lake.jpg", title: "Misty Peaks", description: "Morning fog embracing mountain tops" },
    { id: 3, src: "/serene-mountain-lake.jpg", title: "Golden Hour", description: "Sunset painting the mountains gold" },
    { id: 4, src: "/serene-mountain-lake.jpg", title: "Valley View", description: "Panoramic valley from mountain peak" },
    { id: 5, src: "/serene-mountain-lake.jpg", title: "Forest Trail", description: "Winding path through mountain forest" },
    { id: 6, src: "/serene-mountain-lake.jpg", title: "Snow Caps", description: "Majestic snow-capped mountain range" },
    { id: 7, src: "/serene-mountain-lake.jpg", title: "Wildflower Meadow", description: "Colorful flowers in mountain meadow" },
    { id: 8, src: "/serene-mountain-lake.jpg", title: "Starry Night", description: "Mountain silhouette under starlit sky" },
    { id: 9, src: "/serene-mountain-lake.jpg", title: "Hidden Stream", description: "A quiet stream in the valley" },
    { id: 10, src: "/serene-mountain-lake.jpg", title: "Sunrise Glow", description: "Golden light on mountain tops" },
    { id: 11, src: "/serene-mountain-lake.jpg", title: "Rocky Path", description: "Hiking trail through rugged terrain" },
    { id: 12, src: "/serene-mountain-lake.jpg", title: "Evening Calm", description: "Mountains resting under twilight" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <GalleryHeader backTo="gallery" backUrl="/gallery" backText="Back to Gallery" />

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, scale: "1.1" }}
        >
          <img
            src="/mountain-serenity-header-bg.jpg"
            alt="Mountain Serenity Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-black/20 to-teal-900/30"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 mb-6">
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-emerald-300 text-sm font-medium">Nature Photography</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Mountain Serenity
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Finding peace and tranquility in nature's most majestic landscapes, where towering peaks meet endless skies
            in perfect harmony.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {mountainPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-2xl border border-gray-700/50 transition-all duration-300 group"
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <h3 className="text-white font-semibold text-sm md:text-lg mb-1">{photo.title}</h3>
                    <p className="text-gray-200 text-xs md:text-sm">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
