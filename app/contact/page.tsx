import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out directly via email or phone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <Link href="mailto:sebdackus@gmail.com" className="text-sm text-muted-foreground hover:underline">
                    sebdackus@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <Link href="tel:+31614601928" className="text-sm text-muted-foreground hover:underline">
                    +31 6 14601928
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input id="name" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Input id="email" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

