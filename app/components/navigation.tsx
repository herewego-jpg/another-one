"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const stylizedName = (
    <span
      className="font-mono text-2xl sm:text-3xl md:text-4xl text-red-600 font-black uppercase"
      style={{
        fontFamily: "var(--font-jetbrains-mono)",
        textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
        letterSpacing: "-0.02em",
        fontWeight: "900",
      }}
    >
      <span className="text-2xl sm:text-3xl md:text-4xl">E</span>mily{" "}
      <span className="text-2xl sm:text-3xl md:text-4xl">R</span>ose{" "}
      <span className="text-2xl sm:text-3xl md:text-4xl">W</span>
      einstein
    </span>
  )

  const navLinks = [
    { href: "/", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <Link href="/">{stylizedName}</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-wider text-xs lg:text-sm transition-colors ${
                  pathname === link.href ? "text-yellow-400 font-medium" : "text-yellow-400 font-light"
                } hover:text-yellow-300`}
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
                  letterSpacing: "0.15em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6 text-yellow-400" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase tracking-wider text-sm transition-colors ${
                    pathname === link.href ? "text-yellow-400 font-medium" : "text-yellow-400 font-light"
                  } hover:text-yellow-300`}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
                    letterSpacing: "0.15em",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
