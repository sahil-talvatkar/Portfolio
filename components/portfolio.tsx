import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    image: "/preview/project4.png",
    technologies: ["React", "D3.js", "Weather API", "CSS Grid"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
    image: "/creative-portfolio-website.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-balance hover:text-accent transition-colors duration-300 cursor-default">
              Selected Work
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto animate-glow"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-300">
              A collection of projects that showcase my skills in frontend development, user experience design, and
              modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                /* Enhanced card animations with staggered delays and better hover effects */
                className="group overflow-hidden bg-card border-border hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Project</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default transform hover:scale-105"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" asChild className="text-xs md:text-sm hover:animate-pulse">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="text-xs md:text-sm bg-transparent hover:bg-accent/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
