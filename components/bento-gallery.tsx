"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function BentoGallery() {
  // Logic: 
  // 1. Filter for projects you marked as 'featured: true' in lib/projects-data.ts
  // 2. Take the first 6 of those
  const featured = projects
    .filter((project) => project.featured === true)
    .slice(0, 6)

  // Fallback: If no projects are marked as featured, show the first 6 projects
  const displayProjects = featured.length > 0 ? featured : projects.slice(0, 6)

  return (
    <section className="px-4 py-24 md:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Portfolio Highlights
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Crafting Transparent Masterpieces
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[240px] sm:auto-rows-[300px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              // This href now correctly matches your [id] pages (e.g., /projects/jaipur-commercial-facade)
              href={`/projects/${project.id}`}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/5 ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2" // Featured big tile
                  : index === 3
                    ? "lg:row-span-2" // Tall tile
                    : index === 5
                      ? "sm:col-span-2" // Wide tile at bottom
                      : ""
              }`}
            >
              {/* Main Project Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
                <div className="translate-y-6 transition-all duration-500 group-hover:translate-y-0">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary/90">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl md:text-4xl leading-[1.1]">
                    {project.title}
                  </h3>
                  
                  {/* Location & Year reveal on hover */}
                  <div className="mt-4 flex items-center gap-4 text-white/50 text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>{project.location}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Floating Arrow Icon */}
                <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Subtle bottom text */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm italic font-serif">
            Precision engineering for architectural glass and aluminum solutions.
          </p>
        </div>
      </div>
    </section>
  )
}