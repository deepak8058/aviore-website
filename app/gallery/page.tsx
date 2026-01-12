"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { galleryItems, galleryCategories, type GalleryItem, type GalleryCategory } from "@/lib/gallery-data"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

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
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Our Work</p>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Gallery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore our portfolio of glass and aluminum installations across residential, commercial, and architectural
            projects.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 pb-8 md:px-8 sticky top-24 z-40">
        <div className="mx-auto max-w-7xl">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden mb-4 rounded-full"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter by Category
          </Button>

          {/* Filter Pills */}
          <div className={cn("flex flex-wrap gap-2", showFilters ? "block" : "hidden md:flex")}>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id as GalleryCategory)
                  setShowFilters(false)
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category.id ? "bg-primary text-primary-foreground" : "glass hover:bg-secondary",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full overflow-hidden rounded-xl"
                >
                  <Image
                    src={item.type === "video" ? item.thumbnail || "" : item.src}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-white/70">{item.location}</p>
                    </div>
                  </div>

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                        <Play className="h-6 w-6 ml-1" />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
          )}
          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          )}

          {/* Content */}
          <div className="max-w-5xl w-full">
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            ) : (
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                {selectedItem.src ? (
                  <video src={selectedItem.src} controls autoPlay className="w-full h-full rounded-lg" />
                ) : (
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Video will play here</p>
                    <p className="text-sm text-white/60 mt-2">Upload your video to enable playback</p>
                  </div>
                )}
              </div>
            )}

            {/* Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium text-white">{selectedItem.title}</h3>
              <p className="text-white/70 mt-1">{selectedItem.description}</p>
              <p className="text-sm text-white/50 mt-2">
                {selectedItem.location} {selectedItem.year && `• ${selectedItem.year}`}
              </p>
            </div>

            {/* Counter */}
            <p className="text-center text-white/50 mt-4 text-sm">
              {currentIndex + 1} / {filteredItems.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
