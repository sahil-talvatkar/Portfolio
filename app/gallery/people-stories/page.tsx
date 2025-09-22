"use client"

import { useState, useEffect,useRef } from "react"
import GalleryHeader from "@/components/gallery-header"

export default function PeopleStoriesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [popupImage, setPopupImage] = useState<string | null>(null)
  const [isZoomed, setIsZoomed] = useState(false) // For smooth zoom animation

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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


  const peoplePhotos = [
    { id: 1, src: "/c1.jpg", title: "Festival Ceremony", description: "Traditional cultural ceremony by the water" },
    { id: 2, src: "/c2.jpg", title: "Cultural Performers", description: "Traditional dancers in ceremonial attire" },
    { id: 3, src: "/c3.jpg", title: "Henna Celebrations", description: "Beautiful henna art during festivities" },
    { id: 4, src: "/c4.jpg", title: "Community Festival", description: "People celebrating together in unity" },
    { id: 5, src: "/c5.jpg", title: "Heritage Gathering", description: "Traditional costume celebration" },
    { id: 6, src: "/c6.jpg", title: "Golden Hour Moments", description: "Serene moments captured at sunset" },
    { id: 7, src: "/c7.jpg", title: "Cultural Heritage", description: "Preserving traditions through generations" },
  ]

  const openPopup = (src: string) => {
    setPopupImage(src)
    setIsZoomed(true)
  }

  const closePopup = () => {
    setIsZoomed(false)
    setTimeout(() => setPopupImage(null), 200) // Delay to allow zoom-out animation
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <GalleryHeader backTo="gallery" backUrl="/gallery" backText="Back to Gallery" />

      {/* Header Section */}
      <div className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, scale: "1.1" }}
        >
          <img
            src="/people-stories-header-bg.jpg"
            alt="People Stories Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black/20 to-red-900/30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 mb-6">
            <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-orange-300 text-sm font-medium">Street Photography</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
              People & Stories
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capturing the human experience through candid moments and authentic emotions that tell the stories of
            everyday life and extraordinary people.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={sectionRef} className="px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {peoplePhotos.map((photo,index) => (
              <div
                key={photo.id}
                className={`group cursor-pointer aspect-square relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl border border-gray-700/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gray-600/70
                ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openPopup(photo.src)}
              >
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
            ))}
          </div>
        </div>
      </div>

      {/* Popup overlay */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className={`relative transition-transform duration-200 ${isZoomed ? "scale-100" : "scale-0"}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image box
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 z-50"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={popupImage}
              alt="Popup"
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
            />

            {/* Action icons */}
            <div className="absolute bottom-2 right-2 flex gap-2">
              {/* Download */}
              <a
                href={popupImage}
                download
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
                title="Download"
              >
                ⬇️
              </a>

              {/* Fullscreen */}
              <button
                className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full"
                onClick={() => window.open(popupImage, "_blank")}
                title="View Fullscreen"
              >
                ⬜
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
