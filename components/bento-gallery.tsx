import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Commercial Glass Facade",
    category: "Commercial",
    image: "/images/image-205.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Courtyard Glass Doors",
    category: "Residential",
    image: "/images/image-x.jpg",
    size: "medium",
  },
  {
    id: 3,
    title: "Office Glass Partitions",
    category: "Office",
    image: "/images/image-206.jpg",
    size: "medium",
  },
  {
    id: 4,
    title: "Premium Glass Door",
    category: "Interior",
    image: "/images/image-201.jpg",
    size: "tall",
  },
  {
    id: 5,
    title: "Bay Window Installation",
    category: "Residential",
    image: "/images/image-204.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "Decorative Glass Partition",
    category: "Residential",
    image: "/images/img-20251222-wa0040.jpg",
    size: "wide",
  },
]

export function BentoGallery() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured Projects
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Crafting Transparent
              <br />
              Masterpieces
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid auto-rows-[200px] sm:auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : index === 3
                    ? "lg:row-span-2"
                    : index === 5
                      ? "sm:col-span-2"
                      : ""
              }`}
            >
              {/* Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-lg font-medium text-primary-foreground sm:text-xl md:text-2xl">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary-foreground/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
