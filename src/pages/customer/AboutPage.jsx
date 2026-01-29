
import { motion } from "framer-motion";
import { Award, Heart, Scissors, Users } from "lucide-react";
import { PageTransition } from "../../components/layout/PageTransition";
import { GlassContainer } from "../../components/ui/glass-container";

export function AboutPage() {
  return (
    <PageTransition>
      <div className="container py-12 md:py-20 max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            About Luxe Salon
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-muted-foreground"
          >
             Where artistry meets elegance. We are dedicated to providing the best grooming and beauty experiences.
          </motion.p>
        </section>

        <GlassContainer className="p-8 md:p-12">
           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                  <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                      Founded in 2020, Luxe Salon started with a simple mission: to revolutionize the traditional salon experience through technology and premium service.
                  </p>
                  <p className="text-muted-foreground">
                      We believe that self-care should be effortless and enjoyable. That's why we've combined top-tier styling with a seamless digital booking experience.
                  </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm shadow-xl">
                      <Scissors className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className="font-bold text-xl">5000+</div>
                      <div className="text-xs text-muted-foreground">Haircuts</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/10 p-6 rounded-2xl text-center backdrop-blur-sm shadow-xl">
                      <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="font-bold text-xl">2000+</div>
                      <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10 p-6 rounded-2xl text-center backdrop-blur-sm shadow-xl">
                      <Award className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="font-bold text-xl">15</div>
                      <div className="text-xs text-muted-foreground">Awards Won</div>
                  </div>
                   <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/10 p-6 rounded-2xl text-center backdrop-blur-sm shadow-xl">
                      <Heart className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                      <div className="font-bold text-xl">100%</div>
                      <div className="text-xs text-muted-foreground">Passion</div>
                  </div>
              </div>
           </div>
        </GlassContainer>

        <section>
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { name: "Elena Rossi", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
                    { name: "David Chen", role: "Color Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
                    { name: "Sarah Johnson", role: "Nail Artist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" }
                ].map((member, i) => (
                    <GlassContainer key={i} className="p-6 text-center" hoverEffect>
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                    </GlassContainer>
                ))}
            </div>
        </section>
      </div>
    </PageTransition>
  );
}
