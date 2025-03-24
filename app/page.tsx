import { VerticalProjectSlider } from "@/components/vertical-project-slider"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Vertical Project Slider */}
      <VerticalProjectSlider />

      {/* About Section */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl uppercase mb-8 font-heading tracking-wide">About</h2>
              <p className="text-sm mb-6 max-w-md">
                My name is Seb Dackus. I am a 22 year old Industrial Designer graduating from TU Delft. Within the field
                of design, I am orientating myself as a designer with a background in Artificial Intelligence.
              </p>
              <p className="text-sm mb-8 max-w-md">
                During my time at University I mainly developed skills around user research, sketching, 3D modeling,
                storyboarding, prototyping, coding and working with Arduino/ItsyBitsy hardware.
              </p>
              <Link href="/about" className="text-sm uppercase underline">
                Read more
              </Link>
            </div>
            <div>
              <h2 className="text-3xl uppercase mb-8 font-heading tracking-wide">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-4">
                  <p className="font-heading uppercase">User Research</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">Sketching</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">3D Modeling</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">Storyboarding</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">Prototyping</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">Coding</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">Arduino/ItsyBitsy</p>
                </div>
                <div className="border p-4">
                  <p className="font-heading uppercase">AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="max-w-md">
            <h2 className="text-3xl uppercase mb-8 font-heading tracking-wide">Contact</h2>
            <div className="space-y-4">
              <p className="text-sm">
                <span className="text-muted-foreground">Email: </span>
                <Link href="mailto:sebdackus@gmail.com" className="hover:underline">
                  sebdackus@gmail.com
                </Link>
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Phone: </span>
                <Link href="tel:+31614601928" className="hover:underline">
                  +31 6 14601928
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

