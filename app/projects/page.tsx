"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects, categories } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Our Portfolio</p>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Projects That
            <br />
            <span className="italic">Define Excellence</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore our collection of transformative glass and aluminum installations, each crafted with precision and
            artistic vision.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={`relative ${index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="mb-3 flex items-center gap-4">
                      <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                        {project.category}
                      </span>
                      <span className="text-xs text-primary-foreground/50">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-primary-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/70">{project.location}</p>
                  </div>

                  <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
