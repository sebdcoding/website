import type React from "react"
import "@/app/globals.css"
import { Inter, Bebas_Neue } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Heading font - bold, condensed similar to Vindra Bold
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata = {
  title: "Seb Dackus - Industrial Designer",
  description: "Portfolio of Seb Dackus, Industrial Designer graduating from TU Delft",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>
        <ThemeProvider defaultTheme="light">
          <div className="relative min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'