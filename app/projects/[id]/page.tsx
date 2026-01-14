import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await (params)
  const project = projects.find((p) => p.id === id)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="px-4 pt-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] bg-secondary shadow-2xl">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12">
            
            {/* Left Column: Description & Gallery */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{project.category}</span>
              <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
              <p className="mt-8 text-xl leading-relaxed text-muted-foreground">{project.description}</p>

              {/* Showcase Grid (Starts directly under description) */}
              {project.galleryItems && project.galleryItems.length > 0 && (
                <div className="mt-20 space-y-12">
                  <h2 className="font-serif text-3xl font-medium border-b pb-4">Project Showcase</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {project.galleryItems.map((item, idx) => (
                      <div key={idx} className="group rounded-[1.5rem] overflow-hidden bg-black shadow-xl">
                        {item.type === "video" ? (
                          <video src={item.url} controls className="w-full aspect-video object-cover" />
                        ) : (
                          <img src={item.url} className="w-full object-cover" alt="Installation Detail" />
                        )}
                        {item.caption && (
                          <div className="p-6 bg-white border-t">
                            <p className="text-sm font-medium text-foreground/80">{item.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="glass p-8 rounded-[2rem] border border-white/20 shadow-xl">
                  <h3 className="font-serif text-2xl mb-8">Specifications</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Completion Year</p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Services Rendered</p>
                      <ul className="space-y-3">
                        {project.services.map(s => (
                          <li key={s} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4 text-primary" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-10 rounded-full h-14 text-lg shadow-lg hover:shadow-primary/20">
                    <Link href="/contact">Request Similar Project</Link>
                  </Button>
                </div>
                
                {/* Visual accent for high-end feel */}
                <div className="p-8 rounded-[2rem] bg-primary text-primary-foreground hidden lg:block">
                  <p className="font-serif text-xl italic leading-tight">"Precision in every panel, excellence in every frame."</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}