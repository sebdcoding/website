import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: "logitech-keyboard",
      title: "Logitech Keyboard Redesign",
      description: "Redesigning one of Logitech's high-end keyboards for the circular economy",
      category: "Circular Design",
      year: "2025",
    },
    {
      id: "exposition",
      title: "Exposition of Opportunity",
      description: "Regaining Political trust in Rotterdam through a broadcast of change",
      category: "Social Design",
      year: "2025",
    },
    {
      id: "robot-competition",
      title: "TU Delft Robot Competition",
      description: "First place winner in the 2024 TU Delft Robot Competition",
      category: "Robotics",
      year: "2024",
    },
    {
      id: "iot-shower",
      title: "IoT Shower Device",
      description: "Collecting data on our shower habits with a dynamo-powered shower device",
      category: "IoT",
      year: "2024",
    },
    {
      id: "copycat-machine",
      title: "Copycat Machine",
      description: "From G-code to drawn image, the 2D pen-plotter can reproduce almost any shape on paper",
      category: "Engineering",
      year: "2024",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
          <p className="text-lg text-muted-foreground">A collection of my design and engineering projects</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden bg-muted">
                  <div className="h-full w-full bg-muted"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.category} • {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-start p-0 text-sm font-medium text-primary">
                    View Project
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

