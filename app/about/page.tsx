import Link from "next/link"
import { ArrowRight, Award, Users, Globe, Leaf } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every detail, from material selection to final installation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with architects, designers, and clients to bring visions to life.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Embracing cutting-edge technologies and sustainable practices in glass and aluminum work.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices and energy-efficient solutions.",
  },
]

const team = [
  {
    name: "Shashank Jain",
    role: "Partner & Interior Expert",
    image: "/professional-business-portrait-male-ceo-modern-off.jpg",
  },
  {
    name: "Deepak Jain",
    role: "Partner & Strategy Head",
    image: "/professional-business-portrait-female-designer-mod.jpg",
  },
  {
    name: "Kritika Jain",
    role: "Interior Architect",
    image: "/professional-business-portrait-male-engineer-moder.jpg",
  },
  {
    name: "Shweta Jain",
    role: "Sales & Admin",
    image: "/professional-business-portrait-female-manager-mode.jpg",
  },
]

const milestones = [
  { year: "2009", event: "Aviore founded with a vision for architectural excellence" },
  { year: "2012", event: "Completed first major commercial facade project" },
  { year: "2015", event: "Expanded operations to West Coast" },
  { year: "2018", event: "Launched sustainable glass solutions division" },
  { year: "2021", event: "Achieved 200+ completed projects milestone" },
  { year: "2024", event: "International expansion to UAE and Europe" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Our Story</p>
              <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
                Crafting
                <br />
                <span className="italic">Transparency</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Since 2009, Aviore has been at the forefront of architectural glass and aluminum solutions. We transform
                spaces through the interplay of light, glass, and precision-engineered aluminum systems.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our commitment to excellence has made us the trusted partner for architects, developers, and homeowners
                seeking to push the boundaries of what's possible in modern architecture.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="/images/aviore-at-work.jpg"
                  alt="Aviore team at work"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-6 -left-6 rounded-xl p-6">
                <p className="font-serif text-4xl font-semibold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Our Values</p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-medium text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Leadership</p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              The visionaries and experts behind Aviore's success, bringing decades of combined experience in
              architecture and glass technology.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary px-4 py-24 text-primary-foreground md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Milestones & Growth
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-primary-foreground/20 md:left-1/2 md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <div className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
                      <span className="font-serif text-2xl font-semibold">{milestone.year}</span>
                      <p className="mt-2 text-primary-foreground/80">{milestone.event}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 hidden h-3 w-3 rounded-full bg-primary-foreground md:left-1/2 md:block md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Ready to Work Together?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Let's discuss how Aviore can bring your architectural vision to life with our expertise in glass and
            aluminum solutions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group rounded-full px-8 text-base">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
