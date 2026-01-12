import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-luxury-glass-building-interior-with-aluminu.jpg"
          alt="Luxury glass architecture interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Premium Architectural Solutions
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            Where Glass Meets
            <br />
            <span className="italic">Elegance</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Transforming spaces with precision-crafted glass and aluminum installations. Experience the pinnacle of
            architectural excellence.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group rounded-full px-8 text-base">
              <Link href="/projects">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 md:right-12">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground [writing-mode:vertical-lr]">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
