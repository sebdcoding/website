import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function LogitechKeyboardPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Logitech Keyboard Redesign</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Redesigning one of Logitech's high-end keyboards for the circular economy
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              With environmental pressures rising, it becomes a challenge to get everyone on the same page when it comes
              to circularity. Change is required not only on individual levels, but also from companies and governments
              to make a difference. While, in an ideal world, the environment would be prioritized as it should be, the
              reality often reveals that economic value takes the upperhand.
            </p>
            <p>
              For a company like Logitech, that makes an annual profit of 836 million per year in the Keyboard and Mouse
              segment, preparing a good strategy for a circular future can make a lot of difference. In the period of 10
              weeks I made an attempt to provide such a strategy for their Logitech TKL G913 keyboard.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Current Model</h2>
            <p>
              An important part in circularity is the waste of our products. At the end-of-life, a product's nutrients
              should be utilized for reuse when considering them for a circular loop. In any circular strategy, ease of
              disassembly is an important part.
            </p>
            <p>
              In examining the keyboard I took apart the whole keyboard, which raised several challenges for
              circularity. Hidden screws under keycaps and rubber feet, the battery, and an information sticker
              complicated the process, with the sticker being destroyed during removal, leaving users without product
              details post-repair.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Redesign</h2>
            <p>
              One of the most notable changes is the shift to hot-swappable switches, eliminating the need for soldering
              and making repairs accessible to users without technical expertise. The design also simplifies the screw
              layout, reducing the number of screws from 36 to 6, all accessible with a single Phillips 1 screwdriver.
            </p>
            <p>
              The redesign is based around the idea of a prolonging strategy, which is the first loop in the circular
              economy.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 rounded-lg border p-4">
                <h3 className="font-medium">Current Scenario</h3>
                <p className="text-sm text-muted-foreground">
                  Switch not working? Throw the keyboard away and buy a new one
                </p>
              </div>
              <div className="space-y-2 rounded-lg border p-4">
                <h3 className="font-medium">New Scenario</h3>
                <p className="text-sm text-muted-foreground">
                  Switch not working? Order a new hot swappable switch and replace/repair it yourself!
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">New Business Model</h2>
            <p>
              While the keyboard industry presents itself as an evolving field, the fundamental design of keyboards has
              remained unchanged since its origin. This highlights why prolonging the lifespan of a keyboard might be a
              good strategy, as the functionality will not change much.
            </p>
            <p>
              The new business model focuses on a standardization of the basic functionality of keyboard, while allowing
              options for customizability and upgradability. By standardizing the functional components of the keyboard,
              we can ensure that essential and environmentally impactful parts are preserved while offering a sense of
              renewal through modular upgrades.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

