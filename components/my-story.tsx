import { Instagram, MessageCircle } from "lucide-react"

export function MyStory() {
  return (
    <section id="my-story" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Portrait image */}
          <div className="relative">
            <img
              src="/professional-portrait-of-young-indian-photographer.jpg"
              alt="Raj Gawand Portrait"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          {/* Right side - Story content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My Story</h2>
            <h3 className="text-xl font-semibold">Raj Gawand • Photographer</h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="font-semibold">Hi there!</p>

              <p>Welcome to my world of capturing moments forever.</p>

              <p>
                I am Raj Gawand, a Photographer based in Mumbai. If you haven't met me yet, let me tell you a bit about
                myself. I am basically a passionate photographer and a hardcore food lover who believes in living life
                to the fullest. Capturing moments and making people smile is something that I love doing and also is my
                Camera, which is also my best friend.
              </p>

              <p>
                Speaking a word about myself which keeps me going and always motivates me to just never stop. I believe
                in living a simple life and finding purpose in everything that I do.
              </p>

              <p>
                A huge shout of my life has also revolved around food. During my free time I love to explore new places
                and try different cuisines. I have been to various places and I must say I have the experience of
                working as a Chef at renowned 5 Star kitchens.
              </p>

              <p>
                Coming back to my Photography side, well, I am passionate about clicking pictures and I love to capture
                the most beautiful and the most real moments of them.
              </p>

              <p>
                In this Website, you will get to see the world through my lens and can ensure that I'll be a fun ride.
              </p>

              <p>Are you ready? Let's dive in!</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
