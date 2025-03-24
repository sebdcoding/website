"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  image: string
}

export function ScrollingProjects() {
  const projects: Project[] = [
    { id: "logitech-keyboard", title: "Logitech Keyboard Redesign", image: "/placeholder.svg?height=300&width=500" },
    { id: "exposition", title: "Exposition of Opportunity", image: "/placeholder.svg?height=300&width=500" },
    { id: "robot-competition", title: "TU Delft Robot Competition", image: "/placeholder.svg?height=300&width=500" },
    { id: "iot-shower", title: "IoT Shower Device", image: "/placeholder.svg?height=300&width=500" },
    { id: "copycat-machine", title: "Copycat Machine", image: "/placeholder.svg?height=300&width=500" },
  ]

  // Duplicate projects to create a seamless loop
  const allProjects = [...projects, ...projects]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    // Reset animation when it completes
    const handleAnimationEnd = () => {
      scrollElement.style.animation = "none"
      // Force reflow
      void scrollElement.offsetWidth
      scrollElement.style.animation = ""
    }

    scrollElement.addEventListener("animationend", handleAnimationEnd)

    return () => {
      scrollElement.removeEventListener("animationend", handleAnimationEnd)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden py-12 bg-background border-y border-muted">
      <div
        ref={scrollRef}
        className="flex animate-marquee"
        style={{
          animationDuration: `${projects.length * 5}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {allProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}`}
            href={`/projects/${project.id}`}
            className="group mx-4 flex-shrink-0 overflow-hidden rounded-lg transition-all hover:shadow-lg"
          >
            <div className="relative h-[200px] w-[300px] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

