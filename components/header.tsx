"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isHomePage && !scrolled
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`shrink-0 ${isHomePage && !scrolled ? "text-white" : ""}`}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg">
                <Link href="/" className="hover:text-foreground transition-colors font-heading uppercase">
                  Home
                </Link>
                <Link href="/about" className="hover:text-foreground transition-colors font-heading uppercase">
                  About
                </Link>
                <Link href="/projects" className="hover:text-foreground transition-colors font-heading uppercase">
                  Projects
                </Link>
                <Link href="/contact" className="hover:text-foreground transition-colors font-heading uppercase">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="icon" className={`ml-2 ${isHomePage && !scrolled ? "text-white" : ""}`}>
            <User className="h-5 w-5" />
            <span className="sr-only">User</span>
          </Button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <span className={`text-sm lowercase ${isHomePage && !scrolled ? "text-white" : ""}`}>sebdackus.com</span>
          </Link>
        </div>

        <div>
          <span
            className={`text-xs uppercase font-heading tracking-wide ${isHomePage && !scrolled ? "text-white" : ""}`}
          >
            Portfolio
          </span>
        </div>
      </div>
    </header>
  )
}

