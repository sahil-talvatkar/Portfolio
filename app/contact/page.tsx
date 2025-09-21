"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Camera, Instagram, Facebook, Twitter, ArrowLeft } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelector(".parallax-bg") as HTMLElement
      if (parallax) {
        const speed = 0.5
        parallax.style.transform = `translateY(${scrolled * speed}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Link href="/" className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-black/20 backdrop-blur-sm border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Home
        </Button>
      </Link>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 bg-gradient-to-b from-black/80 to-black overflow-hidden">
        <div
          className="parallax-bg absolute inset-0 bg-[url('/photographer-holding-professional-camera-with-warm.jpg')] bg-cover bg-center opacity-20 scale-110 will-change-transform"
          style={{ transform: "translateY(0px)" }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance">
            Let's Create
            <span className="block text-amber-400">Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to capture your special moments? I'd love to hear about your vision and bring it to life through my
            lens.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-light mb-6 text-amber-400">Get In Touch</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Whether you're planning a wedding, need professional portraits, or want to capture a special event,
                  I'm here to help tell your story through photography. Let's discuss your vision and create something
                  beautiful together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">ramnarayan@photographer.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">Mumbai, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center">
                    <Camera className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Specialties</p>
                    <p className="text-gray-300">Weddings, Portraits, Events, Street Photography</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-light mb-4 text-white">Follow My Work</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center hover:bg-amber-400/20 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-amber-400" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center hover:bg-amber-400/20 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-amber-400" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center hover:bg-amber-400/20 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your photography needs, event details, preferred style, timeline, and any specific requirements..."
                      rows={6}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Raj Gawand. Capturing moments, creating memories.</p>
        </div>
      </footer>
    </div>
  )
}
