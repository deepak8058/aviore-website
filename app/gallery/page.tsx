"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { projects as galleryItems, categories as galleryCategories } from "@/lib/projects-data"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const currentIndex = selectedItem ? filteredItems.findIndex((item) => item.id === selectedItem.id) : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Visual Portfolio</p>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A visual showcase of our premium glass and aluminum craftsmanship across Jaipur and beyond.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 pb-8 md:px-8 sticky top-24 z-40">
        <div className="mx-auto max-w-7xl">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mb-4 rounded-full glass"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>

          <div className={cn("flex flex-wrap gap-2", showFilters ? "block" : "hidden md:flex")}>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setShowFilters(false)
                }}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === cat ? "bg-primary text-primary-foreground shadow-md" : "glass hover:bg-secondary",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredItems.map((item) => {
              // Check if project has a video
              const hasVideo = item.galleryItems.some((m: any) => m.type === "video")
              
              return (
                <div key={item.id} className="mb-4 break-inside-avoid">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="group relative w-full overflow-hidden rounded-2xl bg-secondary"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={1000}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{item.category}</p>
                        <p className="font-medium text-white">{item.title}</p>
                      </div>
                    </div>

                    {/* Video Play Icon Indicator */}
                    {hasVideo && (
                      <div className="absolute top-4 right-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                          <Play className="h-4 w-4 fill-white" />
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              )
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-32 glass rounded-3xl">
              <p className="text-muted-foreground">No projects currently listed in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
          >
            <X className="h-10 w-10" />
          </button>

          {/* Navigation */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all hidden md:block"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
          )}
          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all hidden md:block"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          )}

          {/* Lightbox Content Container */}
          <div className="max-w-6xl w-full">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl">
              {/* Decision: If video exists in galleryItems, play it. Otherwise show hero Image */}
              {selectedItem.galleryItems.find((m: any) => m.type === "video") ? (
                <video 
                  src={selectedItem.galleryItems.find((m: any) => m.type === "video").url} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain" 
                />
              ) : (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 px-2">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{selectedItem.category}</span>
                <h3 className="text-3xl font-serif font-medium text-white mt-2">{selectedItem.title}</h3>
                <p className="text-white/60 mt-2 flex items-center gap-2">
                  {selectedItem.location} • {selectedItem.year}
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="rounded-full px-8 h-12">
                  <Link href={`/projects/${selectedItem.id}`}>Full Project Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}