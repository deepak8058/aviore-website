"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Quote, ChevronLeft, ChevronRight, Star, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    type: "video" as const,
    name: "Rajesh Sharma",
    role: "CEO, Sharma Constructions",
    company: "Sharma Constructions",
    location: "Jaipur",
    thumbnail: "/modern-office-building-glass-facade-india.jpg",
    videoUrl: "", // Will be replaced with actual video
    quote:
      "Aviore transformed our commercial complex with stunning glass facades. Exceptional quality and professionalism.",
    rating: 5,
  },
  {
    id: 2,
    type: "text" as const,
    name: "Priya Mehra",
    role: "Interior Designer",
    company: "Mehra Design Studio",
    location: "Delhi",
    avatar: "/professional-indian-woman-portrait.png",
    quote:
      "Working with Aviore has been a pleasure. Their attention to detail in aluminum partitions and glass installations is unmatched. They delivered our office project ahead of schedule with impeccable quality.",
    rating: 5,
  },
  {
    id: 3,
    type: "video" as const,
    name: "Amit Patel",
    role: "Director, Patel Properties",
    company: "Patel Properties",
    location: "Ahmedabad",
    thumbnail: "/luxury-residential-glass-balcony-india.jpg",
    videoUrl: "",
    quote:
      "The glass balcony railings and curtain walls Aviore installed have elevated our residential project to new heights.",
    rating: 5,
  },
  {
    id: 4,
    type: "text" as const,
    name: "Sunita Agarwal",
    role: "Owner",
    company: "Agarwal Jewellers",
    location: "Jaipur",
    avatar: "/indian-businesswoman-portrait.png",
    quote:
      "Our showroom's glass storefront by Aviore has become a landmark in the city. The frameless design showcases our jewelry beautifully while ensuring security. Truly world-class work!",
    rating: 5,
  },
  {
    id: 5,
    type: "text" as const,
    name: "Dr. Vikram Singh",
    role: "Managing Director",
    company: "Singh Healthcare",
    location: "Udaipur",
    avatar: "/professional-indian-doctor-businessman-portrait.jpg",
    quote:
      "Aviore's aluminum and glass partition work in our hospital is not only aesthetically pleasing but also meets all healthcare standards. Their team understood our specific requirements perfectly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="px-4 py-24 md:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Client Stories</p>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Hear from the architects, designers, and property owners who have trusted Aviore with their vision.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Media Side */}
          <div className="relative">
            {activeTestimonial.type === "video" ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden glass">
                <Image
                  src={activeTestimonial.thumbnail || "/placeholder.svg"}
                  alt={activeTestimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => {
                      setIsVideoPlaying(true)
                      setPlayingVideo(activeTestimonial.videoUrl)
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary transition-transform hover:scale-110"
                    aria-label="Play video testimonial"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                  <p className="text-sm font-medium text-foreground">{activeTestimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{activeTestimonial.role}</p>
                </div>
              </div>
            ) : (
              <div className="glass rounded-2xl p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={activeTestimonial.avatar || ""}
                      alt={activeTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{activeTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{activeTestimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{activeTestimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground italic">"{activeTestimonial.quote}"</p>
              </div>
            )}
          </div>

          {/* Quote Side (for video testimonials) or Navigation */}
          <div className="space-y-6">
            {activeTestimonial.type === "video" && (
              <div className="glass rounded-2xl p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-foreground italic mb-4">"{activeTestimonial.quote}"</p>
                <p className="text-sm text-muted-foreground">
                  {activeTestimonial.company}, {activeTestimonial.location}
                </p>
              </div>
            )}

            {/* Testimonial Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative aspect-square rounded-xl overflow-hidden transition-all",
                    activeIndex === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100",
                  )}
                >
                  <Image
                    src={testimonial.type === "video" ? testimonial.thumbnail : testimonial.avatar || ""}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  {testimonial.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {activeIndex + 1} / {testimonials.length}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => {
                setIsVideoPlaying(false)
                setPlayingVideo(null)
              }}
              className="absolute -top-12 right-0 text-white hover:text-white/80"
            >
              <X className="h-8 w-8" />
            </button>
            {/* Video player placeholder - will use actual video when provided */}
            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
              <p className="text-white text-center">
                Video testimonial will play here
                <br />
                <span className="text-sm text-white/60">Upload your video to enable playback</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
