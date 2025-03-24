import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IoTShowerPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">IoT Shower Device</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Collecting data on our shower habits with a dynamo-powered shower device
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              In the world of the Internet of Things (IoT), the devices in our homes form interconnected networks
              powered by sensors, software, and data. Tasked with designing a product for this environment, I developed
              the dynamo-powered shower device.
            </p>
            <p>
              One of the key benefits of receiving data from smart home devices is the ability to gain insights that
              help improve our daily habits. In the case of a showering device, it could provide valuable information
              about our water usage.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <p>
              Although a hard reality for people in the Netherlands, for places with seasons of extreme droughts it is
              essential we think carefully about water usage. Over time, managing our water usage will be increasingly
              important.
            </p>
            <p>
              As a simple nudge, this device gives us some insights to how much water we are actually using in a day.
              Just so that our awareness that fresh water is not an unlimited resource.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <p>
              The dynamo-powered shower device is designed to be installed in the shower and collect data on water
              usage. It is powered by the flow of water, eliminating the need for batteries or external power sources.
            </p>
            <p>
              The device connects to a smartphone app that provides users with insights into their water usage patterns,
              helping them make more informed decisions about their consumption.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

