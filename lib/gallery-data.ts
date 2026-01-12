export type GalleryCategory =
  | "all"
  | "glass-facades"
  | "curtain-walls"
  | "aluminum-partitions"
  | "sliding-doors"
  | "windows"
  | "interior-glass"
  | "residential"

export type GalleryItem = {
  id: string
  type: "image" | "video"
  src: string
  thumbnail?: string
  title: string
  description: string
  category: GalleryCategory
  location?: string
  year?: string
}

export const galleryCategories = [
  { id: "all", label: "All Work" },
  { id: "glass-facades", label: "Glass Facades" },
  { id: "curtain-walls", label: "Curtain Walls" },
  { id: "aluminum-partitions", label: "Partitions" },
  { id: "sliding-doors", label: "Sliding Doors" },
  { id: "windows", label: "Windows" },
  { id: "interior-glass", label: "Interior Glass" },
  { id: "residential", label: "Residential" },
]

export const galleryItems: GalleryItem[] = [
  // Videos
  {
    id: "vid-1",
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0041-56XQZAU9VBmYhxYQ1YQuPBghQfxSE8.mp4",
    thumbnail: "/images/image-205.jpg",
    title: "Commercial Curtain Wall Installation",
    description: "Complete installation process of blue reflective glass curtain wall system",
    category: "curtain-walls",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "vid-2",
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0033-cW5qoS5tN2KxFJGsZCMdvV26o8gMTH.mp4",
    thumbnail: "/images/image-x.jpg",
    title: "Sliding Door System Demo",
    description: "Smooth operation demonstration of premium sliding door system",
    category: "sliding-doors",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "vid-3",
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0045-mu18jZ6Z02GyLXlSBbaL5BCCF3mSrq.mp4",
    thumbnail: "/images/image-206.jpg",
    title: "Office Partition Installation",
    description: "Modern glass and aluminum office partition setup",
    category: "aluminum-partitions",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "vid-4",
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0034-3OiP7lLYojWxX8yHVsAxpWyLZpHP4G.mp4",
    thumbnail: "/images/image-204.jpg",
    title: "Window System Showcase",
    description: "Premium window installation and operation demonstration",
    category: "windows",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "vid-5",
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251222-WA0042-e0wFRSo6B1mz3jETYLww6aidDQkOdc.mp4",
    thumbnail: "/images/image-201.jpg",
    title: "Interior Glass Door Operation",
    description: "Elegant glass door with smooth operation and premium finish",
    category: "interior-glass",
    location: "Jaipur",
    year: "2024",
  },
  // Images
  {
    id: "1",
    type: "image",
    src: "/images/image-205.jpg",
    title: "Commercial Glass Facade",
    description: "Blue reflective glass curtain wall system for commercial building",
    category: "curtain-walls",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "2",
    type: "image",
    src: "/images/image-x.jpg",
    title: "Luxury Courtyard Glass Doors",
    description: "Floor-to-ceiling sliding glass doors with black aluminum frames overlooking traditional courtyard",
    category: "sliding-doors",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "3",
    type: "image",
    src: "/images/img-20251222-wa0040.jpg",
    title: "Decorative Glass Partition",
    description: "Glass sliding doors with traditional artwork visible - beautiful Krishna and peacock mural",
    category: "sliding-doors",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "4",
    type: "image",
    src: "/images/image-201.jpg",
    title: "Premium Bathroom Glass Door",
    description: "Elegant glass door with black aluminum frame and marble surround",
    category: "interior-glass",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "5",
    type: "image",
    src: "/images/image-203.jpg",
    title: "Residential Sliding Door",
    description: "Modern white aluminum framed sliding door installation",
    category: "sliding-doors",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "6",
    type: "image",
    src: "/images/image-206.jpg",
    title: "Office Glass Partitions",
    description: "Modern workspace with aluminum and glass partition walls",
    category: "aluminum-partitions",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "7",
    type: "image",
    src: "/images/image-204.jpg",
    title: "Bay Window Installation",
    description: "Corner bay window with white aluminum frames and exterior landscaping",
    category: "windows",
    location: "Jaipur",
    year: "2024",
  },
  {
    id: "8",
    type: "image",
    src: "/images/image-202.jpg",
    title: "Casement Window System",
    description: "White aluminum casement windows with frosted and clear glass panels",
    category: "windows",
    location: "Jaipur",
    year: "2024",
  },
]
