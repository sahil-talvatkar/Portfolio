"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryHeaderProps {
  backTo: "home" | "gallery"
  backUrl: string
  backText: string
}

export default function GalleryHeader({ backTo, backUrl, backText }: GalleryHeaderProps) {
  return (
    <div className="fixed top-6 left-6 z-50">
      <Link href={backUrl}>
        <Button
          variant="outline"
          size="sm"
          className="bg-black/80 backdrop-blur-sm border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {backText}
        </Button>
      </Link>
    </div>
  )
}
