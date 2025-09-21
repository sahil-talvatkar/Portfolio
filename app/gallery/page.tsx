"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, X } from "lucide-react"
import GalleryHeader from "@/components/gallery-header"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos")
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const photos = [
    // Top row - 3 photos
    {
      id: 1,
      src: "/colorful-indian-festival.jpg",
      title: "Cultural Ceremony",
      category: "Festivals",
      clickable: false,
    },
    {
      id: 2,
      src: "/traditional-indian-fair-photography.jpg",
      title: "Traditional Performers",
      category: "Culture",
      clickable: false,
    },
    {
      id: 3,
      src: "/indian-wedding-ceremony-photography.jpg",
      title: "Celebrations",
      category: "Festivals",
      clickable: true,
      link: "/gallery/wedding",
    },
    // Bottom row - 3 photos
    {
      id: 4,
      src: "/urban-city-architecture-photography.jpg",
      title: "Motion Blur Art",
      category: "Abstract",
      clickable: false,
    },
    {
      id: 5,
      src: "/event-photography-celebration.jpg",
      title: "Human Pyramid Festival",
      category: "Events",
      clickable: false,
    },
    {
      id: 6,
      src: "/taj-mahal-monument-photography.jpg",
      title: "Heritage Performers",
      category: "Culture",
      clickable: false,
    },
    {
      id: 7,
      src: "/serene-mountain-lake.jpg",
      title: "Golden Hour Serenity",
      category: "Nature",
      clickable: true,
      link: "/gallery/mountain-serenity",
    },
    // Additional photos for variety
    {
      id: 8,
      src: "/professional-portrait.jpg",
      title: "Portrait Study",
      category: "Portraits",
      clickable: true,
      link: "/gallery/portraits",
    },
    {
      id: 9,
      src: "/candid-people-photography.jpg",
      title: "People Stories",
      category: "People",
      clickable: true,
      link: "/gallery/people-stories",
    },
    {
      id: 10,
      src: "/street-photography-creative-shots.jpg",
      title: "Street Stories",
      category: "Street",
      clickable: false,
    },
    {
      id: 11,
      src: "/miscellaneous-photography-subjects.jpg",
      title: "Creative Vision",
      category: "Others",
      clickable: false,
    },
    {
      id: 12,
      src: "/colorful-indian-festival.jpg",
      title: "Festival Joy",
      category: "Festivals",
      clickable: false,
    },
  ]

  const videos = [
    {
      id: 1,
      thumbnail: "/event-photography-celebration.jpg",
      title: "Wedding Highlights",
      duration: "2:45",
      videoUrl: "/placeholder.mp4",
    },
    {
      id: 2,
      thumbnail: "/colorful-indian-festival.jpg",
      title: "Festival Documentary",
      duration: "4:20",
      videoUrl: "/placeholder.mp4",
    },
    {
      id: 3,
      thumbnail: "/urban-city-architecture-photography.jpg",
      title: "City Timelapse",
      duration: "1:30",
      videoUrl: "/placeholder.mp4",
    },
    {
      id: 4,
      thumbnail: "/serene-mountain-lake.jpg",
      title: "Nature Journey",
      duration: "3:15",
      videoUrl: "/placeholder.mp4",
    },
    {
      id: 5,
      thumbnail: "/street-photography-creative-shots.jpg",
      title: "Street Life",
      duration: "2:10",
      videoUrl: "/placeholder.mp4",
    },
    {
      id: 6,
      thumbnail: "/traditional-indian-fair-photography.jpg",
      title: "Cultural Heritage",
      duration: "5:00",
      videoUrl: "/placeholder.mp4",
    },
  ]

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <GalleryHeader backTo="home" backUrl="/" backText="Back to Home" />

      {/* Parallax Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            scale: "1.1",
          }}
        >
          <img
            src="/vintage-photography-equipment-collection-with-came.jpg"
            alt="Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my complete collection of photographs and videos capturing life's beautiful moments
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 mb-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-8 border-b border-gray-800">
            <button
              onClick={() => setActiveTab("photos")}
              className={`pb-4 px-2 text-lg font-medium transition-colors ${
                activeTab === "photos" ? "text-amber-400 border-b-2 border-amber-400" : "text-gray-400 hover:text-white"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`pb-4 px-2 text-lg font-medium transition-colors ${
                activeTab === "videos" ? "text-amber-400 border-b-2 border-amber-400" : "text-gray-400 hover:text-white"
              }`}
            >
              Videos
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-20 bg-black">
        <div className="max-w-6xl mx-auto">
          {activeTab === "photos" ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
              {photos.map((photo, index) => (
                <div key={photo.id} className="group cursor-pointer">
                  {photo.clickable ? (
                    <Link href={photo.link!}>
                      <div
                        className={`relative overflow-hidden rounded-lg ${index < 3 ? "aspect-[4/3]" : "aspect-[4/3]"}`}
                      >
                        <img
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                            <h3 className="text-white font-semibold text-sm md:text-lg mb-1">{photo.title}</h3>
                            <p className="text-amber-400 text-xs md:text-sm">{photo.category}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`relative overflow-hidden rounded-lg ${index < 3 ? "aspect-[4/3]" : "aspect-[4/3]"}`}
                    >
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                          <h3 className="text-white font-semibold text-sm md:text-lg mb-1">{photo.title}</h3>
                          <p className="text-amber-400 text-xs md:text-sm">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {videos.map((video) => (
  <div key={video.id} className="group cursor-pointer" onClick={() => handleVideoClick(video)}>
    <div className="relative overflow-hidden rounded-lg aspect-video">
      <img
        src={video.thumbnail || "/placeholder.svg"}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="w-8 h-8 sm:w-10 md:w-16 h-8 sm:h-10 md:h-16 bg-amber-500/90 rounded-full flex items-center justify-center group-hover:bg-amber-400 transition-colors">
          <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-black ml-1" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 left-1 sm:left-2 md:left-4 right-1 sm:right-2 md:right-4">
        <h3 className="text-xs sm:text-sm md:text-lg text-white font-semibold mb-1">{video.title}</h3>
        <p className="text-[10px] sm:text-xs md:text-base text-amber-400">{video.duration}</p>
      </div>
    </div>
  </div>
))}
            </div>
          )}
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-black/80 rounded-lg overflow-hidden max-w-4xl w-full max-h-[80vh]">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video player */}
            <div className="aspect-video">
              <video controls autoPlay className="w-full h-full" poster={selectedVideo.thumbnail}>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-amber-400">{selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
