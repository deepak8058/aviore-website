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
    <main className="min-h-screen">
      <Navigation />
      <section className="px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-serif text-5xl font-semibold mb-6">Our Projects</h1>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-medium transition-all",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "glass hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group">
                <div className="overflow-hidden rounded-2xl bg-secondary aspect-[4/3]">
                  <img 
                    src={project.image} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={project.title} 
                  />
                </div>
                <div className="mt-4 text-left">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
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