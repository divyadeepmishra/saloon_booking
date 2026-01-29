
import { Scissors } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[98%] max-w-[1920px] rounded-xl border border-primary/20 bg-background/60 backdrop-blur-xl shadow-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center px-6 justify-between max-w-none">
        <div className="mr-8 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="bg-primary/20 p-2 rounded-full">
                <Scissors className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading font-bold inline-block text-xl tracking-tight">
              Luxe Salon
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-1 mr-4">
             <Link
              to="/services"
              className="px-4 py-2 rounded-full transition-colors hover:bg-secondary/50 hover:text-primary text-muted-foreground text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-full transition-colors hover:bg-secondary/50 hover:text-primary text-muted-foreground text-sm font-medium"
            >
              About
            </Link>
          </nav>
          <nav className="flex items-center gap-2">
            <Link to="/auth/login">
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-secondary/50 hover:text-primary">Login</Button>
            </Link>
            <Link to="/services">
                <Button size="sm" className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">Book Now</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
