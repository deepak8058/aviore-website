import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const project = projects.find((p) => p.id === id)

  if (!project) notFound()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* 1. Hero Section (Image Only) */}
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

      {/* 2. Project Description Section */}
      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-4xl font-semibold mb-6">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.services.map(s => (
                <span key={s} className="bg-secondary/80 border px-4 py-2 rounded-full text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-2xl sticky top-32 border">
              <h3 className="font-serif text-xl mb-6">Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4 text-primary" /> {project.location}</div>
                <div className="flex items-center gap-3 text-sm"><Calendar className="w-4 h-4 text-primary" /> {project.year}</div>
              </div>
              <Button asChild className="w-full mt-8 rounded-full h-12 text-md font-bold"><Link href="/contact">Inquire Now</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. New Showcase Section (Videos and Extra Images) */}
      {project.galleryItems && project.galleryItems.length > 0 && (
        <section className="px-4 py-16 md:px-8 bg-secondary/10 border-t">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl mb-12 text-center font-medium tracking-tight">Project Showcase</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.galleryItems.map((item, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-black shadow-2xl">
                  {item.type === "video" ? (
                    <video src={item.url} controls className="w-full aspect-video object-cover" />
                  ) : (
                    <img src={item.url} className="w-full aspect-video object-cover" alt="Installation detail" />
                  )}
                  {item.caption && <div className="p-4 bg-background border-t"><p className="text-sm font-medium">{item.caption}</p></div>}
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