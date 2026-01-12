import { Layers, Grid3X3, Sparkles, Shield } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Glass Facades",
    description:
      "Stunning curtain walls and facade systems that redefine building aesthetics while ensuring optimal thermal performance.",
  },
  {
    icon: Grid3X3,
    title: "Aluminum Systems",
    description:
      "Precision-engineered aluminum frames and structural systems designed for durability and contemporary elegance.",
  },
  {
    icon: Sparkles,
    title: "Interior Glass",
    description:
      "From partitions to feature walls, creating seamless interior spaces with crystal-clear glass installations.",
  },
  {
    icon: Shield,
    title: "Custom Solutions",
    description:
      "Bespoke architectural elements tailored to your unique vision, combining innovation with craftsmanship.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary/50 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">What We Do</p>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Expertise in Every Detail
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="glass group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
