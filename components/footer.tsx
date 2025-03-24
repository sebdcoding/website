export function Footer() {
  return (
    <footer className="py-8 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-xs uppercase font-heading tracking-wide">SEB DACKUS</p>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

