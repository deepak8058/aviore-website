"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { projects, categories } from "@/lib/projects-data"
import { cn } from "@/lib/utils"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" 
      ? projects 
      : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p>
            <h1 className="font-serif text-5xl font-semibold tracking-tight md:text-6xl">Selected Works</h1>
          </div>

          {/* Luxury Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "glass hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Design Grid */}
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group mb-8 block break-inside-avoid">
                <div className="relative overflow-hidden rounded-3xl bg-secondary shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={project.image} 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={project.title} 
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs uppercase tracking-widest mb-2 text-white/80">{project.category}</p>
                    <h3 className="text-xl font-serif font-medium">View Project</h3>
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <h3 className="text-2xl font-serif font-medium tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{project.location} — {project.year}</p>
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