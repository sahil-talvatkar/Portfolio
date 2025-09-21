"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, User } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/#home" },
  { name: "MY CLICKS", href: "/#my-clicks" },
  { name: "MY STORY", href: "/#my-story" },
  { name: "CONTACT", href: "/contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 },
      )

      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      return () => observer.disconnect()
    }
  }, [pathname])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActiveNavItem = (item: (typeof navItems)[0]) => {
    if (item.href === "/contact") {
      return pathname === "/contact"
    }
    if (pathname === "/" && item.href.startsWith("/#")) {
      return activeSection === item.href.slice(2)
    }
    return false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif italic text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 transform"
          >
            Raj Gawand
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-yellow-400 relative group transform hover:scale-110 animate-fade-in",
                  isActiveNavItem(item) ? "text-yellow-400" : "text-white",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          
          </div>

          <button
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 animate-slide-up">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 transform animate-fade-in",
                    isActiveNavItem(item) ? "text-yellow-400" : "text-white",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                <User size={16} className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
