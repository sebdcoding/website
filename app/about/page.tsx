import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">ABOUT ME</h1>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <p className="text-lg text-muted-foreground">
                My name is Seb Dackus. I am a 22 year old Industrial Designer graduating from TU Delft. Within the field
                of design, I am orientating myself as a designer with a background in Artificial Intelligence.
              </p>
              <p className="text-lg text-muted-foreground">
                During my time at University I mainly developed skills around user research, sketching, 3D modeling,
                storyboarding, prototyping, coding and working with Arduino/ItsyBitsy hardware.
              </p>
              <p className="text-lg text-muted-foreground">
                Besides my design interest I like to keep myself busy with topics like culture, politics, arts, and
                sports. I strive to develop myself broadly—not only because I believe this versatility will enhance my
                growth as a designer, but also because I see it as an essential approach to my life.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Skills & Expertise</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">User Research</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Sketching</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">3D Modeling</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Storyboarding</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Prototyping</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Coding</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Arduino/ItsyBitsy</h3>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Artificial Intelligence</h3>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
          <div className="rounded-lg border p-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-xl font-medium">TU Delft</h3>
                <p className="text-muted-foreground">Industrial Design Engineering</p>
              </div>
              <div className="text-right text-muted-foreground">2020 - 2025</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Contact</h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="mailto:sebdackus@gmail.com" className="flex items-center gap-2">
              <Button className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                sebdackus@gmail.com
              </Button>
            </Link>
            <Link href="tel:+31614601928" className="flex items-center gap-2">
              <Button variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                +31 6 14601928
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

