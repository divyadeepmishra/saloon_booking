
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { StatsSection } from "../../components/features/StatsSection";
import { TeamSection } from "../../components/features/TeamSection";
import { PageTransition } from "../../components/layout/PageTransition";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Marquee } from "../../components/ui/Marquee";
import { ParticlesBackground } from "../../components/ui/ParticlesBackground";
import { reviews, services } from "../../data/mock";

export function LandingPage() {
  const featuredServices = services.slice(0, 3);

  return (
    <PageTransition>
      <ParticlesBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 group">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-10 transition-transform duration-[2000ms] ease-in-out group-hover:scale-110 transform">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        </div>

        <div className="w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left pt-12 lg:pt-0 pl-4 md:pl-12">
             <div className="inline-block px-4 py-1 border border-primary/50 text-primary text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
                Est. 2024
             </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tight leading-none"
            >
              Style Meets <br />
              <span className="text-primary italic">
                Precision
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-serif"
            >
              Experience world-class grooming with our expert stylists.
              Where traditional craftsmanship meets modern style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/services">
                <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-widest shadow-lg shadow-primary/20">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="h-16 px-10 text-xl border-primary text-primary hover:bg-primary hover:text-white rounded-none bg-transparent uppercase tracking-widest">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block h-[90vh] w-full overflow-hidden"
          >
             <div className="absolute right-0 top-0 w-full h-full bg-primary/10 backdrop-blur-sm -z-10 border-l border-white/10" />
             <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop"
                alt="Barber working"
                className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-in-out opacity-90 hover:opacity-100 mix-blend-overlay hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/80 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full">
         <Marquee />
      </div>

      {/* Stats Section */}
      <div className="w-full bg-muted/30">
        <StatsSection />
      </div>

      {/* Featured Services */}
      <section className="py-24 bg-background w-full px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Premium <span className="text-primary italic">Services</span></h2>
            <p className="text-muted-foreground text-xl font-serif">
              Indulge in our most popular treatments designed for your relaxation and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="border border-border p-8 hover:border-primary transition-colors duration-300 relative bg-card h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10">
                  {/* Golden Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-primary border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="mb-8 overflow-hidden h-64 w-full relative">
                     <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-md rounded-none uppercase tracking-wider font-bold border-none shadow-sm">{service.category}</Badge>
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                       <h3 className="text-3xl font-heading font-bold">{service.name}</h3>
                       <span className="font-bold text-primary text-2xl">₹{service.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-8 font-serif flex-1 text-lg leading-relaxed">
                      {service.description}
                  </p>

                  <Link to="/services" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:underline mt-auto">
                      Book Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
             <Link to="/services">
                <Button variant="outline" className="h-16 px-12 text-lg border-foreground/20 hover:border-primary hover:text-primary rounded-none uppercase tracking-widest">View All Services</Button>
             </Link>
          </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="container max-w-screen-xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-center mb-16"
            >
              What Our <span className="text-primary">Clients Say</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="p-10 bg-background border border-border relative hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="absolute -top-4 left-8 bg-primary text-white px-3 py-1 text-4xl font-serif">"</div>
                        <div className="flex gap-1 text-primary mb-6">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <p className="italic text-muted-foreground mb-8 font-serif leading-relaxed text-lg">"{review.comment}"</p>
                        <div className="font-bold flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {review.user.charAt(0)}
                            </div>
                           <div>
                                <span className="block text-foreground font-heading uppercase tracking-wider">{review.user}</span>
                                <span className="text-xs text-muted-foreground uppercase">Verified Client</span>
                           </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-multiply" />
           <div className="container max-w-screen-xl px-4 text-center relative z-10 mx-auto">
               <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Ready for a Transformation?</h2>
               <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-serif">
                   Join thousands of satisfied customers who trust us with their look.
               </p>
               <Link to="/services">
                   <Button size="lg" className="h-16 px-12 bg-white text-primary hover:bg-white/90 font-bold text-lg rounded-none uppercase tracking-widest">
                       Book Your Appointment
                   </Button>
               </Link>
           </div>
      </section>
    </PageTransition>
  );
}
