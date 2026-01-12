import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-32 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-glass-building-at-sunset-architectural-phot.jpg" alt="Modern glass architecture" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          Ready to Transform
          <br />
          Your Space?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
          Let us bring your architectural vision to life with our expertise in glass and aluminum craftsmanship.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-primary-foreground px-8 text-base text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary-foreground/30 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="/projects">Browse Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
