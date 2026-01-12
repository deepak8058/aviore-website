import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Layers } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Back Button */}
      <section className="px-4 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {project.category}
              </span>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.description}</p>

              {/* Services */}
              <div className="mt-10">
                <h2 className="mb-4 font-serif text-xl font-medium text-foreground">Services Provided</h2>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-6 font-serif text-lg font-medium text-foreground">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</p>
                      <p className="mt-1 text-sm text-foreground">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Completed</p>
                      <p className="mt-1 text-sm text-foreground">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</p>
                      <p className="mt-1 text-sm text-foreground">{project.category}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full rounded-full">
                    <Link href="/contact">Start Similar Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-4 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">Related Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/projects/${related.id}`}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                      {related.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-medium text-primary-foreground">{related.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
