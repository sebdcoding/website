"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export function VerticalProjectSlider() {
  const projects: Project[] = [
    {
      id: "logitech-keyboard",
      title: "Logitech Keyboard Redesign",
      description: "Redesigning one of Logitech's high-end keyboards for the circular economy",
      image: "/images/projects/logitech.jpg",
      category: "Circular Design",
    },
    {
      id: "exposition",
      title: "Exposition of Opportunity",
      description: "Regaining Political trust in Rotterdam through a broadcast of change",
      image: "/images/projects/exposition.jpg",
      category: "Social Design",
    },
    {
      id: "robot-competition",
      title: "TU Delft Robot Competition",
      description: "First place winner in the 2024 TU Delft Robot Competition",
      image: "/images/projects/robotcompetition.jpg",
      category: "Robotics",
    },
    {
      id: "iot-shower",
      title: "IoT Shower Device",
      description: "Collecting data on our shower habits with a dynamo-powered shower device",
      image: "/videos/product-showcase.mp4
      category: "IoT",
    },
    {
      id: "copycat-machine",
      title: "Copycat Machine",
      description: "From G-code to drawn image, the 2D pen-plotter can reproduce almost any shape on paper",
      image: "/placeholder.svg?height=600&width=800",
      category: "Engineering",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"up" | "down">("up")
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to go to the next project
  const nextProject = () => {
    if (isAnimating) return

    setDirection("up")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      setIsAnimating(false)
    }, 500) // Half of the transition time
  }

  // Function to go to the previous project
  const prevProject = () => {
    if (isAnimating) return

    setDirection("down")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
      setIsAnimating(false)
    }, 500) // Half of the transition time
  }

  // Set up automatic timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextProject()
    }, 5000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Reset timer when manually navigating
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      nextProject()
    }, 5000)
  }

  // Handle manual navigation
  const handleNext = () => {
    nextProject()
    resetTimer()
  }

  const handlePrev = () => {
    prevProject()
    resetTimer()
  }

  // Get current and next project
  const currentProject = projects[currentIndex]
  const nextIndex = (currentIndex + 1) % projects.length
  const nextProject2 = projects[nextIndex]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full cursor-pointer ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              setDirection(i > currentIndex ? "up" : "down")
              setCurrentIndex(i)
              resetTimer()
            }}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handlePrev}>
          <ChevronUp className="h-6 w-6" />
          <span className="sr-only">Previous project</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handleNext}>
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Next project</span>
        </Button>
      </div>

      {/* Current project */}
      <div
        className={`absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out ${
          isAnimating && direction === "up"
            ? "-translate-y-full"
            : isAnimating && direction === "down"
              ? "translate-y-full"
              : "translate-y-0"
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentProject.image || "/placeholder.svg"}
            alt={currentProject.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Project info */}
          <div className="absolute bottom-16 left-16 text-white z-10">
            <p className="text-sm uppercase tracking-wider mb-2">{currentProject.category}</p>
            <h2 className="text-4xl uppercase mb-3 font-heading tracking-wide">{currentProject.title}</h2>
            <p className="max-w-md mb-6">{currentProject.description}</p>
            <Link
              href={`/projects/${currentProject.id}`}
              className="text-sm uppercase underline font-heading tracking-wide"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Next project (appears from below) */}
      <div
        className={`absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out ${
          isAnimating && direction === "up" ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ zIndex: isAnimating ? 10 : -1 }}
      >
        <div className="relative w-full h-full">
          <Image
            src={nextProject2.image || "/placeholder.svg"}
            alt={nextProject2.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Project info */}
          <div className="absolute bottom-16 left-16 text-white z-10">
            <p className="text-sm uppercase tracking-wider mb-2">{nextProject2.category}</p>
            <h2 className="text-4xl uppercase mb-3 font-heading tracking-wide">{nextProject2.title}</h2>
            <p className="max-w-md mb-6">{nextProject2.description}</p>
            <Link
              href={`/projects/${nextProject2.id}`}
              className="text-sm uppercase underline font-heading tracking-wide"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Project counter */}
      <div className="absolute bottom-6 right-6 text-white/70 text-sm z-20">
        <span className="font-heading">{currentIndex + 1}</span>
        <span className="mx-1">/</span>
        <span>{projects.length}</span>
      </div>
    </div>
  )
}

