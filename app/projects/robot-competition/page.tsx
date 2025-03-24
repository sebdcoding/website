import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function RobotCompetitionPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <div>
          <Link href="/projects" passHref>
            <Button variant="ghost" className="mb-4 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">TU Delft Robot Competition</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            First place winner in the 2024 TU Delft Robot Competition
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              Humming stepper motors, squeaking tires, unique lifting mechanisms, and personalized controllers to tie it
              all together—these were the sounds and sights of the 2024 TU Delft robot competition. While design often
              prioritizes aesthetics, this competition focused solely on performance.
            </p>
            <p>
              Over the course of seven weeks, participants were tasked with building a high-performing robot to compete
              on the final day. The challenge? To construct a robot capable of stacking as many blocks as possible
              within a limited amount of time.
            </p>
            <p>
              Competing against 12 other contestants, I can proudly say my robot secured first place, outperforming the
              other robots.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Build</h2>
            <p>
              Each contestant was provided with a bag of objects to design and build their robot. These included a frame
              of wood, some screws, two stepper motors, two servo motors and some elastics. Besides that it was allowed
              to 3D print parts.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Robot Capabilities</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">High-speed movement</h3>
                <p className="text-sm text-muted-foreground">Enabled fast navigation across the area field</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Encoded precision movement</h3>
                <p className="text-sm text-muted-foreground">Allowed careful adjustments while stacking blocks</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Effective turning</h3>
                <p className="text-sm text-muted-foreground">Turning on its axis because of omniwheels</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Grabbing mechanism</h3>
                <p className="text-sm text-muted-foreground">Allowed picking up blocks</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">X-bow firing mechanism</h3>
                <p className="text-sm text-muted-foreground">Secret weapon of the robot</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Large falling arm</h3>
                <p className="text-sm text-muted-foreground">Collects blocks</p>
              </div>
            </div>
            <p className="mt-4">
              Building this robot required skills like writing software in python code, hardware itsybitsy wiring, 3D
              printing and concepting. It helped me learn a lot especially on the hardware prototyping side.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

