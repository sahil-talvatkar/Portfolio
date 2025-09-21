import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import PageTransition from "../components/page-transition"
import "./globals.css"

export const metadata: Metadata = {
  title: "Raj Gawand - Photographer",
  description:
    "Professional photographer based in Mumbai, India. Specializing in festivals, weddings, portraits, and street photography.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
