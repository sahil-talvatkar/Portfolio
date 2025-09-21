"use client"

import { useState, useEffect } from "react"
import GalleryHeader from "@/components/gallery-header"

export default function WeddingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const weddingPhotos = [
    {
      id: 1,
      src: "/indian-wedding-ceremony-photography.jpg",
      title: "Sacred Vows",
      description: "Traditional wedding ceremony moments",
    },
    {
      id: 2,
      src: "/event-photography-celebration.jpg",
      title: "Celebration Joy",
      description: "Guests celebrating the union",
    },
    {
      id: 3,
      src: "/indian-wedding-ceremony-photography.jpg",
      title: "Bridal Portrait",
      description: "Beautiful bride in traditional attire",
    },
    {
      id: 4,
      src: "/event-photography-celebration.jpg",
      title: "Ring Exchange",
      description: "Intimate moment of commitment",
    },
    {
      id: 5,
      src: "/indian-wedding-ceremony-photography.jpg",
      title: "Family Gathering",
      description: "Families coming together in joy",
    },
    {
      id: 6,
      src: "/event-photography-celebration.jpg",
      title: "Reception Dance",
      description: "First dance as married couple",
    },
    {
      id: 7,
      src: "/indian-wedding-ceremony-photography.jpg",
      title: "Mehendi Ceremony",
      description: "Pre-wedding celebration rituals",
    },
    {
      id: 8,
      src: "/event-photography-celebration.jpg",
      title: "Wedding Feast",
      description: "Traditional wedding banquet",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <GalleryHeader backTo="gallery" backUrl="/gallery" backText="Back to Gallery" />

      <div className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            scale: "1.1",
          }}
        >
          <img src="/wedding-header-bg.jpg" alt="Wedding Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-black/20 to-pink-900/30"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 mb-6">
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-rose-300 text-sm font-medium">Wedding Photography</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-rose-200 to-pink-200 bg-clip-text text-transparent">
              Wedding
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Documenting love stories and sacred moments that last a lifetime, capturing the joy, emotion, and beauty of
            your special day.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {weddingPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="break-inside-avoid mb-3 md:mb-4 group cursor-pointer"
                style={{
                  aspectRatio: index % 4 === 0 ? "3/4" : index % 4 === 1 ? "4/3" : index % 4 === 2 ? "1/1" : "4/5",
                }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-gray-700/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gray-600/70">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                      <h3 className="text-white font-semibold text-sm md:text-lg mb-1">{photo.title}</h3>
                      <p className="text-gray-200 text-xs md:text-sm">{photo.description}</p>
                    </div>
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
