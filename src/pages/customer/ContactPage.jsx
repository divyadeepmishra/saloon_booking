
import { Mail, MapPin, Phone } from "lucide-react";
import { PageTransition } from "../../components/layout/PageTransition";
import { Button } from "../../components/ui/button";
import { GlassContainer } from "../../components/ui/glass-container";

export function ContactPage() {
  return (
    <PageTransition>
      <div className="container max-w-screen-xl mx-auto py-12 px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                 <p className="text-xl text-muted-foreground mb-8">
                    We'd love to hear from you. Book an appointment or ask us anything.
                 </p>

                 <div className="space-y-6">
                    <GlassContainer className="p-6 flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                            <MapPin className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Visit Us</h3>
                            <p className="text-muted-foreground">123 Beauty Lane<br/>New York, NY 10001</p>
                        </div>
                    </GlassContainer>

                    <GlassContainer className="p-6 flex items-start gap-4">
                         <div className="bg-primary/20 p-3 rounded-full">
                            <Phone className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Call Us</h3>
                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                    </GlassContainer>

                    <GlassContainer className="p-6 flex items-start gap-4">
                         <div className="bg-primary/20 p-3 rounded-full">
                            <Mail className="text-primary w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email Us</h3>
                            <p className="text-muted-foreground">hello@luxesalon.com</p>
                        </div>
                    </GlassContainer>
                 </div>
            </div>

            <GlassContainer className="p-8">
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                             <label className="text-sm font-medium">First Name</label>
                             <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-medium">Last Name</label>
                             <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm font-medium">Email</label>
                         <input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm font-medium">Message</label>
                         <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" placeholder="How can we help you?" />
                    </div>
                    <Button size="lg" className="w-full">Send Message</Button>
                </form>
            </GlassContainer>
         </div>
      </div>
    </PageTransition>
  );
}
