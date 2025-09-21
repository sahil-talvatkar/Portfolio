import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MyClicks() {
  const portfolioCategories = [
    { name: "FESTIVALS", image: "/colorful-indian-festival.jpg" },
    { name: "NATURE/SCAPES", image: "/serene-mountain-lake.jpg" },
    { name: "EVENTS", image: "/event-photography-celebration.jpg" },
    { name: "WEDDINGS", image: "/indian-wedding-ceremony-photography.jpg" },
    { name: "PORTRAITS", image: "/professional-portrait.jpg" },
    { name: "FAIRS", image: "/traditional-indian-fair-photography.jpg" },
    { name: "URBANSCAPES", image: "/urban-city-architecture-photography.jpg" },
    { name: "STREET/CREATIVE", image: "/street-photography-creative-shots.jpg" },
    { name: "MONUMENTS", image: "/taj-mahal-monument-photography.jpg" },
    { name: "PEOPLE", image: "/candid-people-photography.jpg" },
    { name: "OTHERS", image: "/miscellaneous-photography-subjects.jpg" },
  ]

  return (
    <section id="my-clicks" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 animate-slide-up hover:text-amber-300 transition-colors duration-300 cursor-default">
          My Clicks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.name}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
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
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link href="/gallery">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 hover:animate-pulse hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
