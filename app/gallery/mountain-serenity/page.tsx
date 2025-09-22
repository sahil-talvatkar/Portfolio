"use client";

import { useState, useEffect, useRef } from "react";
import GalleryHeader from "@/components/gallery-header";

export default function MountainSerenityPage() {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false); // For smooth zoom animation

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const mountainPhotos = [
    {
      id: 1,
      src: "/m1.jpg",
      title: "Alpine Lake",
      description: "Crystal clear mountain lake reflection",
    },
    {
      id: 2,
      src: "/m2.jpg",
      title: "Misty Peaks",
      description: "Morning fog embracing mountain tops",
    },
    {
      id: 3,
      src: "/m3.jpg",
      title: "Golden Hour",
      description: "Sunset painting the mountains gold",
    },
    {
      id: 4,
      src: "/m4.jpg",
      title: "Valley View",
      description: "Panoramic valley from mountain peak",
    },
    {
      id: 5,
      src: "/m5.jpg",
      title: "Forest Trail",
      description: "Winding path through mountain forest",
    },
    {
      id: 6,
      src: "/m6.jpg",
      title: "Snow Caps",
      description: "Majestic snow-capped mountain range",
    },
    {
      id: 7,
      src: "/m7.jpg",
      title: "Wildflower Meadow",
      description: "Colorful flowers in mountain meadow",
    },
    {
      id: 8,
      src: "/m8.jpeg",
      title: "Starry Night",
      description: "Mountain silhouette under starlit sky",
    },
    {
      id: 9,
      src: "/m9.jpeg",
      title: "Hidden Stream",
      description: "A quiet stream in the valley",
    },
  ];

  const openPopup = (src: string) => {
    setPopupImage(src);
    setIsZoomed(true);
  };

  const closePopup = () => {
    setIsZoomed(false);
    setTimeout(() => setPopupImage(null), 200); // Delay to allow zoom-out animation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <GalleryHeader
        backTo="gallery"
        backUrl="/gallery"
        backText="Back to Gallery"
      />

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
              <span className="text-emerald-300 text-sm font-medium">
                Nature Photography
              </span>
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
            Finding peace and tranquility in nature's most majestic landscapes,
            where towering peaks meet endless skies in perfect harmony.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Grid Gallery with Animations */}
      <div
        ref={sectionRef}
        className="px-6 py-12 bg-gradient-to-b from-gray-900/50 to-black/80"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {mountainPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-700/50 transition-all duration-500 group
                  ${
                    inView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openPopup(photo.src)}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <h3 className="text-white font-semibold text-sm md:text-lg mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-gray-200 text-xs md:text-sm">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className={`relative transition-transform duration-200 ${
              isZoomed ? "scale-100" : "scale-0"
            }`}
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
              className="max-w-[85vw] max-h-[60vh] rounded-xl shadow-2xl"
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
  );
}
