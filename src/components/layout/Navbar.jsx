import { AnimatePresence, motion } from "framer-motion"
import { Menu, Scissors, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[98%] max-w-[1920px] rounded-xl border border-primary/20 bg-background/60 backdrop-blur-xl shadow-premium supports-[backdrop-filter]:bg-background/60">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-1 mr-4">
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

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-border/20 bg-background/95 backdrop-blur-xl rounded-b-xl"
            >
                <nav className="flex flex-col p-6 space-y-4">
                    <Link
                        to="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium px-4 py-2 hover:bg-secondary/50 rounded-lg transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium px-4 py-2 hover:bg-secondary/50 rounded-lg transition-colors"
                    >
                        About
                    </Link>
                    <div className="h-px bg-border/50 my-2" />
                    <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start text-lg rounded-lg">Login</Button>
                    </Link>
                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full text-lg rounded-sm shadow-lg font-bold">Book Appointment</Button>
                    </Link>
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
