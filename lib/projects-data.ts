export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  year: string
  location: string
  services: string[]
  gallery?: string[]
  videos?: string[]
}

export const projects: Project[] = [
  // Real Aviore Projects
  {
    id: "jaipur-commercial-facade",
    title: "Commercial Glass Facade",
    category: "Commercial",
    description:
      "A striking blue reflective glass curtain wall system for a commercial building in Jaipur. This project showcases our expertise in large-scale facade installations with thermally efficient glazing and precision aluminum framing.",
    image: "/images/image-205.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Curtain Wall Systems", "Reflective Glass", "Aluminum Framing"],
    gallery: ["/images/image-205.jpg"],
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0041-56XQZAU9VBmYhxYQ1YQuPBghQfxSE8.mp4"],
  },
  {
    id: "luxury-courtyard-residence",
    title: "Luxury Courtyard Residence",
    category: "Residential",
    description:
      "Floor-to-ceiling sliding glass doors with elegant black aluminum frames, designed to seamlessly connect indoor living spaces with a traditional Jaipur courtyard. The installation maximizes natural light while preserving privacy.",
    image: "/images/image-x.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Sliding Door Systems", "Floor-to-Ceiling Glass", "Custom Aluminum Frames"],
    gallery: ["/images/image-x.jpg", "/images/img-20251222-wa0040.jpg"],
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0033-cW5qoS5tN2KxFJGsZCMdvV26o8gMTH.mp4"],
  },
  {
    id: "modern-office-partitions",
    title: "Corporate Office Partitions",
    category: "Office",
    description:
      "Modern glass and aluminum partition systems creating an open yet organized workspace. Features include integrated blinds, sound insulation, and premium white aluminum frames for a clean, professional aesthetic.",
    image: "/images/image-206.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Glass Partitions", "Aluminum Frames", "Sound Insulation"],
    gallery: ["/images/image-206.jpg"],
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0045-mu18jZ6Z02GyLXlSBbaL5BCCF3mSrq.mp4"],
  },
  {
    id: "premium-bathroom-glass",
    title: "Premium Bathroom Installation",
    category: "Residential",
    description:
      "Elegant frameless glass door with slim black aluminum profile, perfectly complementing the marble bathroom interior. This installation demonstrates our attention to detail in luxury residential projects.",
    image: "/images/image-201.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Interior Glass Doors", "Frameless Design", "Slim Profile Frames"],
    gallery: ["/images/image-201.jpg"],
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0042-e0wFRSo6B1mz3jETYLww6aidDQkOdc.mp4"],
  },
  {
    id: "bay-window-residence",
    title: "Bay Window Installation",
    category: "Residential",
    description:
      "Custom corner bay window installation featuring white aluminum frames and energy-efficient glazing. Designed to maximize natural light and provide panoramic views while ensuring weather protection.",
    image: "/images/image-204.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Bay Windows", "Custom Glazing", "Weather Sealing"],
    gallery: ["/images/image-204.jpg", "/images/image-202.jpg"],
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0034-3OiP7lLYojWxX8yHVsAxpWyLZpHP4G.mp4"],
  },
  {
    id: "residential-sliding-system",
    title: "Residential Sliding Door System",
    category: "Residential",
    description:
      "Modern white aluminum framed sliding door system for a contemporary home. Features smooth operation, thermal breaks, and premium hardware for long-lasting performance.",
    image: "/images/image-203.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Sliding Doors", "Thermal Break Frames", "Premium Hardware"],
    gallery: ["/images/image-203.jpg"],
  },
  // Showcase Projects
  {
    id: "crystal-tower-facade",
    title: "Crystal Tower Facade",
    category: "Commercial",
    description:
      "A breathtaking 40-story curtain wall system featuring triple-glazed low-E glass panels with thermally broken aluminum frames. This landmark project showcases our expertise in large-scale commercial installations.",
    image: "/modern-glass-skyscraper-facade-aluminum-frames-clo.jpg",
    year: "2024",
    location: "Mumbai, Maharashtra",
    services: ["Curtain Wall Systems", "Structural Glazing", "Aluminum Framing"],
  },
  {
    id: "museum-entrance",
    title: "Contemporary Art Museum",
    category: "Cultural",
    description:
      "Dramatic entrance pavilion featuring curved glass panels and custom aluminum mullions. A sculptural statement that welcomes visitors while protecting priceless art.",
    image: "/modern-museum-glass-entrance-curved-architecture.jpg",
    year: "2023",
    location: "Delhi, NCR",
    services: ["Curved Glass", "Custom Mullions", "UV Protective Glass"],
  },
]

export const categories = ["All", "Commercial", "Residential", "Office", "Cultural"]
