import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CopycatMachinePage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Copycat Machine</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From G-code to drawn image, the 2D pen-plotter can reproduce almost any shape on paper
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              From G-code to drawn image, the 2D pen-plotter can reproduce almost any shape on paper. The Copycat
              project was as much a design challenge as it was an engineering challenge.
            </p>
            <p>
              While many copycat designs exist online, the first and foremost difficulty lay in creating one with
              reliable functionality. The robust design of this Copycat takes inspiration from the mechanics of 3D
              printers. Powered by two DC motors working together through a CoreXY mechanism, this device precisely
              maneuvers a pen across the paper to achieve accuracy drawings.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Technical Details</h2>
            <p>To show how the copycat is made I present you with this diagram:</p>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>
            <ul className="space-y-2 pl-6 list-disc">
              <li>The turqoise parts are 3D moddeled and printed</li>
              <li>The dark grey parts are cut to lenght aluminum beams</li>
              <li>The light grey parts are cut to lenght aluminum tubes</li>
              <li>The black blocks represent the stepper motors</li>
              <li>And the purple dots represent the pulleys</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Results</h2>
            <p>
              The Copycat Machine successfully demonstrates the principles of precision engineering and mechanical
              design. It can accurately reproduce digital designs onto paper, making it a valuable tool for artists,
              designers, and engineers.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted"></div>
              <div className="aspect-square overflow-hidden rounded-xl bg-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

