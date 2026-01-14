export type ProjectMedia = {
  type: "image" | "video";
  url: string;
  caption?: string;
};

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string; 
  year: string;
  location: string;
  services: string[];
  galleryItems: ProjectMedia[]; 
}

export const projects: Project[] = [
  {
    id: "jaipur-commercial-facade",
    title: "Commercial Glass Facade",
    featured: true,
    category: "Commercial",
    description: "A striking blue reflective glass curtain wall system for a commercial building in Jaipur. This project showcases our expertise in large-scale facade installations.",
    image: "/images/image-205.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Curtain Wall Systems", "Reflective Glass", "Aluminum Framing"],
    galleryItems: [
      { type: "video", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0041-56XQZAU9VBmYhxYQ1YQuPBghQfxSE8.mp4", caption: "Installation Process" }
    ],
  },
  {
    id: "luxury-courtyard-residence",
    title: "Luxury Courtyard Residence",
    featured: true,
    category: "Residential",
    description: "Floor-to-ceiling sliding glass doors with elegant black aluminum frames, designed to seamlessly connect indoor living spaces with a traditional Jaipur courtyard.",
    image: "/images/image-x.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Sliding Door Systems", "Floor-to-Ceiling Glass", "Custom Aluminum Frames"],
    galleryItems: [
      { type: "video", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0033-cW5qoS5tN2KxFJGsZCMdvV26o8gMTH.mp4", caption: "Sliding Operation" },
      { type: "image", url: "/images/img-20251222-wa0040.jpg", caption: "Traditional Artwork Integration" }
    ],
  },
  {
    id: "modern-office-partitions",
    title: "Corporate Office Partitions",
    featured: true,
    category: "Office",
    description: "Modern glass and aluminum partition systems creating an open yet organized workspace with sound insulation.",
    image: "/images/image-206.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Glass Partitions", "Aluminum Frames", "Sound Insulation"],
    galleryItems: [
      { type: "video", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0045-mu18jZ6Z02GyLXlSBbaL5BCCF3mSrq.mp4", caption: "Workspace Layout" }
    ],
  },
  {
    id: "premium-bathroom-glass",
    title: "Premium Bathroom Installation",
    category: "Residential",
    description: "Elegant frameless glass door with slim black aluminum profile, perfectly complementing the marble bathroom interior.",
    image: "/images/image-201.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Interior Glass Doors", "Frameless Design", "Slim Profile Frames"],
    galleryItems: [
      { type: "video", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0042-e0wFRSo6B1mz3jETYLww6aidDQkOdc.mp4", caption: "Soft-Close Operation" }
    ],
  },
  {
    id: "bay-window-residence",
    title: "Bay Window Installation",
    featured: true,
    category: "Residential",
    description: "Custom corner bay window installation featuring white aluminum frames and energy-efficient glazing.",
    image: "/images/image-204.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Bay Windows", "Custom Glazing", "Weather Sealing"],
    galleryItems: [
      { type: "video", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0034-3OiP7lLYojWxX8yHVsAxpWyLZpHP4G.mp4", caption: "System Showcase" },
      { type: "image", url: "/images/image-202.jpg", caption: "Interior Detail" }
    ],
  },
  {
    id: "residential-sliding-system",
    title: "Residential Sliding Door System",
    category: "Residential",
    description: "Modern white aluminum framed sliding door system for a contemporary home, featuring premium hardware.",
    image: "/images/image-203.jpg",
    year: "2024",
    location: "Jaipur, Rajasthan",
    services: ["Sliding Doors", "Thermal Break Frames", "Premium Hardware"],
    galleryItems: [],
  },
  {
    id: "crystal-tower-facade",
    title: "Crystal Tower Facade",
    featured: true,
    category: "Commercial",
    description: "A breathtaking 40-story curtain wall system featuring triple-glazed low-E glass panels with thermally broken aluminum frames.",
    image: "/modern-glass-skyscraper-facade-aluminum-frames-clo.jpg",
    year: "2024",
    location: "Mumbai, Maharashtra",
    services: ["Curtain Wall Systems", "Structural Glazing", "Aluminum Framing"],
    galleryItems: [],
  },
  {
    id: "museum-entrance",
    title: "Contemporary Art Museum",
    featured: true,
    category: "Cultural",
    description: "Dramatic entrance pavilion featuring curved glass panels and custom aluminum mullions.",
    image: "/modern-museum-glass-entrance-curved-architecture.jpg",
    year: "2023",
    location: "Delhi, NCR",
    services: ["Curved Glass", "Custom Mullions", "UV Protective Glass"],
    galleryItems: [],
  }
];

export const categories = ["All", "Commercial", "Residential", "Office", "Cultural"];