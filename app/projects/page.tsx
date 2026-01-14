import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: Promise<{ id: string }> | { id: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // This handles both Next.js 14 and 15
  const resolvedParams = await params
  const id = resolvedParams.id
  
  const project = projects.find((p) => p.id === id)

  // If this triggers, it means the ID in the URL doesn't match projects-data.ts
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="px-4 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-secondary">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-4xl font-semibold mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
          </div>
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-2xl">
              <h3 className="font-serif text-lg mb-4">Details</h3>
              <p className="text-sm">Location: {project.location}</p>
              <p className="text-sm">Year: {project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      {project.galleryItems && project.galleryItems.length > 0 && (
        <section className="px-4 py-16 bg-secondary/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              {project.galleryItems.map((item, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden">
                  {item.type === "video" ? (
                    <video src={item.url} controls className="w-full aspect-video object-cover" />
                  ) : (
                    <img src={item.url} className="w-full aspect-video object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}