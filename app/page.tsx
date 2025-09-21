import { Hero } from "@/components/hero"
import { MyClicks } from "@/components/my-clicks"
import { MyStory } from "@/components/my-story"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <MyClicks />
      <MyStory />
    </main>
  )
}
