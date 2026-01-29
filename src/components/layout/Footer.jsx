
import { Facebook, Instagram, MapPin, Scissors, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background pt-20 pb-10">
      <div className="container max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Essential Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                  <Scissors className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">Luxe Salon</span>
            </div>
            <ul className="space-y-3 font-medium text-muted-foreground">
               <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
               <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
               <li><Link to="/careers" className="hover:text-primary transition-colors">Barbers</Link></li>
               <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
               <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Social Follow */}
          <div className="space-y-6">
             <h3 className="font-heading font-bold text-lg">Social Follow</h3>
             <ul className="space-y-3 font-medium text-muted-foreground">
                <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Facebook className="w-4 h-4" /> FACEBOOK</li>
                <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Youtube className="w-4 h-4" /> YOUTUBE</li>
                <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Instagram className="w-4 h-4" /> INSTAGRAM</li>
                <li className="flex items-center gap-2 hover:text-primary cursor-pointer"><Twitter className="w-4 h-4" /> TWITTER</li>
             </ul>
          </div>

          {/* Column 3: Other Branches */}
          <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg">Our Branches</h3>
              <ul className="space-y-3 font-medium text-muted-foreground">
                  <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-primary" />
                      <div>
                          <span className="block text-foreground font-bold">New York</span>
                          <span className="text-sm">123 Beauty Lane, NY 10001</span>
                      </div>
                  </li>
                  <li className="flex items-start gap-2">
                       <MapPin className="w-4 h-4 mt-1 text-primary" />
                      <div>
                          <span className="block text-foreground font-bold">Los Angeles</span>
                          <span className="text-sm">456 Sunset Blvd, CA 90028</span>
                      </div>
                  </li>
              </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg">Opening Hours</h3>
              <ul className="space-y-3 font-medium text-muted-foreground text-sm">
                  <li className="flex justify-between border-b border-border pb-2">
                      <span>Mon - Fri</span>
                      <span className="text-foreground">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                      <span>Saturday</span>
                      <span className="text-foreground">10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                      <span>Sunday</span>
                      <span className="text-primary italic">Closed</span>
                  </li>
              </ul>
              <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Need an appointment?</p>
                   <a href="tel:+15551234567" className="text-2xl font-heading font-bold text-primary hover:underline">+1 (555) 123-4567</a>
              </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Luxe Salon. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  )
}
