"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects, categories as galleryCategories } from "@/lib/projects-data"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)

  // 1. "Flatten" the data: Every hero image and every galleryItem becomes a separate tile
  const allMediaItems = useMemo(() => {
    const items: any[] = []
    
    projects.forEach((project) => {
      // Add the Main Hero Image as an individual tile
      items.push({
        id: `${project.id}-hero`,
        projectId: project.id,
        title: project.title,
        category: project.category,
        location: project.location,
        type: "image",
        url: project.image,
      })

      // Add every additional image/video from the project's gallery
      project.galleryItems.forEach((media, index) => {
        items.push({
          id: `${project.id}-item-${index}`,
          projectId: project.id,
          title: project.title,
          category: project.category,
          location: project.location,
          type: media.type,
          url: media.url,
          caption: media.caption
        })
      })
    })
    return items
  }, [])

  const filteredItems =
    activeCategory === "All" 
      ? allMediaItems 
      : allMediaItems.filter((item) => item.category === activeCategory)

  const currentIndex = selectedItem ? filteredItems.findIndex((item) => item.id === selectedItem.id) : -1

  const goToPrevious = () => {
    if (currentIndex > 0) setSelectedItem(filteredItems[currentIndex - 1])
  }

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) setSelectedItem(filteredItems[currentIndex + 1])
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 pb-12 pt-32 md:px-8 text-center">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-serif text-5xl font-semibold mb-6">Gallery</h1>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all",
                  activeCategory === cat ? "bg-primary text-primary-foreground shadow-md" : "glass hover:bg-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid: Shows every single image and video separately */}
      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full overflow-hidden rounded-2xl bg-secondary"
                >
                  {item.type === "video" ? (
                    <div className="relative aspect-video flex items-center justify-center bg-black">
                      <video src={item.url} className="w-full h-full object-cover opacity-80" muted />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                          <Play className="h-5 w-5 fill-white text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={600}
                      height={800}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-medium">{item.title}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal: Full Screen view of the individual image/video */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          <button onClick={() => setSelectedItem(null)} className="absolute top-6 right-6 text-white/50 hover:text-white"><X className="h-10 w-10" /></button>
          
          <div className="max-w-5xl w-full">
            <div className="relative aspect-video flex items-center justify-center">
              {selectedItem.type === "video" ? (
                <video src={selectedItem.url} controls autoPlay className="max-h-[80vh] w-full" />
              ) : (
                <img src={selectedItem.url} className="max-h-[80vh] object-contain" alt="" />
              )}
            </div>
            <div className="mt-6 text-center text-white">
              <h3 className="text-xl font-serif">{selectedItem.title}</h3>
              <p className="text-white/60 text-sm mt-1">{selectedItem.location}</p>
              <Button asChild variant="link" className="text-primary mt-4">
                <Link href={`/projects/${selectedItem.projectId}`}>Go to Full Project →</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}