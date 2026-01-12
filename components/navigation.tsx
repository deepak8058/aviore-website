"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo Section - Full visibility with gold accent */}
            <Link href="/" className="relative flex items-center gap-3 group">
              {/* Gold accent bar behind logo */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#b8964b] to-[#d4af61] rounded-full opacity-80" />

              <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo-inkscape.png"
                  alt="Aviore - Design • Luxury • Legacy"
                  fill
                  className={`object-contain ${isScrolled ? "" : "brightness-0 invert drop-shadow-lg"}`}
                  priority
                />
              </div>

              {/* Brand name visible on larger screens */}
              <div className="hidden sm:flex flex-col">
                <span
                  className={`text-xl font-serif font-semibold tracking-wide transition-colors ${
                    isScrolled ? "text-foreground" : "text-white drop-shadow-md"
                  }`}
                >
                  AVIORE<sup className="text-[10px] ml-0.5">™</sup>
                </span>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${
                    isScrolled ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  Design • Luxury • Legacy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? "text-foreground/80 hover:text-foreground hover:bg-accent"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className={`rounded-full px-6 font-medium transition-all ${
                  isScrolled
                    ? "bg-[#b8964b] hover:bg-[#a07f3a] text-white"
                    : "bg-white text-[#1a1a1a] hover:bg-white/90"
                }`}
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/98 backdrop-blur-md border-t border-border/50 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Button asChild className="w-full rounded-full bg-[#b8964b] hover:bg-[#a07f3a] text-white">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
