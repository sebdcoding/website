import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ExpositionPage() {
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Exposition of Opportunity</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Regaining Political trust in Rotterdam through a broadcast of change
          </p>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p>
              "Echte Rotterdammers denken mee, doen mee" a motto that encapsulates the essence of the project
              "Exposition of Opportunity". This initiative tries to address the contrast between Rotterdam's proactive
              culture and its low political participation rates, particularly in Rotterdam Zuid, where only 28% of
              residents voted in recent municipal elections.
            </p>
            <p>
              Doing research in this neighborhood revealed that many residents in this area feel unheard by politics and
              express a strong desire for autonomy. Despite this, numerous government-funded projects exist in the
              neighborhood, though they often go unnoticed by the public. This raised the question on how to make these
              opportunities more visible.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <p>
              The Exposition of Opportunity aims to bridge this gap by showcasing impactful local initiatives and
              resources, such as subsidies, food banks, and employment programs. By highlighting these opportunities in
              an art-inspired format, the project tries to connect residents with the tools and knowledge needed to take
              action, supporting an improved sense of autonomy and community involvement.
            </p>
            <div className="rounded-lg border p-4 bg-muted/30">
              <p className="italic text-muted-foreground">Chosen as most promising concept</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Prototyping</h2>
            <p>
              I prototyped my concept by writing a background story on the neighborhood project "Van Wijk naar Werk,"
              which helps reduce food insecurity through communal service. By providing an in-depth narrative on how
              these projects contribute to the Rotterdam-Zuid community and linking a QR code that directs people to a
              participation page, I aimed to test the effectiveness of this approach.
            </p>
            <p>
              Additionally, the prototype included QR-codes that led to other related projects, further connecting
              residents with available opportunities.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted"></div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Testing</h2>
            <p>
              To evaluate the project and gather information, I conducted a testing phase by hanging the prototype at a
              station in the Feyenoord neighborhood. The results were surprisingly positive. Within just half a day, the
              QR codes on the prototype received a total of 18 interactions, indicating a positive response to the
              posters.
            </p>
            <p>
              During the first hour, I did a few on-site interviews with some of the individuals who engaged with the
              prototype. One of them being a local politician who expressed his interest in supporting the project and
              exploring ways to integrate it in the neighborhood. Through the interviews I discovered that many people
              were excited about the potential of the project to facilitate community engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

