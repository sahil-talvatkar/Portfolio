export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">About Me</h2>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer with over 5 years of experience crafting digital experiences that
                users love. My expertise lies at the intersection of design and development, creating interfaces that
                are not only visually appealing but also highly functional and accessible.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm a Senior Frontend Engineer at TechCorp, where I specialize in React, TypeScript, and
                modern web technologies. I contribute to building scalable applications that serve millions of users
                worldwide.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Git"].map(
                    (tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Senior Frontend Engineer</h4>
                      <span className="text-sm text-muted-foreground">2022 — Present</span>
                    </div>
                    <p className="text-muted-foreground">TechCorp</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Frontend Developer</h4>
                      <span className="text-sm text-muted-foreground">2020 — 2022</span>
                    </div>
                    <p className="text-muted-foreground">StartupXYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
