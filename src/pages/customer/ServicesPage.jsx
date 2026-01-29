
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Search } from "lucide-react";
import { useState } from "react";
import { BookingWizard } from "../../components/features/BookingWizard";
import { PageTransition } from "../../components/layout/PageTransition";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { categories, services } from "../../data/mock";
import { cn } from "../../utils/cn";

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "All" || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="w-full pt-32 pb-12 px-6 md:px-12 min-h-screen bg-background">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
          <div>
             <div className="inline-block px-3 py-1 border border-primary/50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                Our Treatments
             </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-4">
               Premium <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-muted-foreground font-serif text-lg max-w-xl">
                Discover the perfect treatment for you. From precision cuts to relaxing therapies.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search services..."
              className="pl-10 bg-background border-border focus:border-primary rounded-none h-12 font-serif transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 pb-4 mb-12 no-scrollbar scroll-smooth">
          <Button
            variant={activeCategory === "All" ? "default" : "outline"}
            className={cn("rounded-none whitespace-nowrap h-10 px-6 font-bold tracking-wide uppercase", activeCategory === "All" ? "bg-primary text-white" : "border-border hover:border-primary hover:text-primary")}
            onClick={() => setActiveCategory("All")}
          >
            All Services
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={activeCategory === cat.name ? "default" : "outline"}
              className={cn("rounded-none whitespace-nowrap h-10 px-6 font-bold tracking-wide gap-2 uppercase", activeCategory === cat.name ? "bg-primary text-white" : "border-border hover:border-primary hover:text-primary")}
              onClick={() => setActiveCategory(cat.name)}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const isSelected = selectedServices.some(s => s.id === service.id);
              return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
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
                           <h3 className="text-3xl font-heading font-bold max-w-[70%] leading-tight">{service.name}</h3>
                           <span className="font-bold text-primary text-2xl">₹{service.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-8 font-serif flex-1 text-lg leading-relaxed tracking-wide">
                          {service.description}
                      </p>

                        <div className="flex items-center justify-end mt-auto pt-6 border-t border-border/50">

                          <Button
                            variant={isSelected ? "secondary" : "default"}
                            className={cn("rounded-none transition-all h-12 w-full font-bold uppercase tracking-widest text-sm shadow-md", isSelected && "bg-green-600 hover:bg-green-700 text-white")}
                            onClick={() => {
                                if (isSelected) {
                                    setSelectedServices(prev => prev.filter(s => s.id !== service.id));
                                } else {
                                    setSelectedServices(prev => [...prev, service]);
                                }
                            }}
                          >
                              {isSelected ? (
                                  <>Selected <Check className="w-4 h-4 ml-2" /></>
                              ) : (
                                  <>Add to Booking <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>
                              )}
                          </Button>
                        </div>
                    </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </div>

        {/* Floating Booking Bar */}
        <AnimatePresence>
            {selectedServices.length > 0 && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50"
                >
                    <div className="bg-background/60 backdrop-blur-xl border-t border-primary/20 p-6 shadow-2xl supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-heading font-bold text-xl">
                                    {selectedServices.length}
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-serif uppercase tracking-wider">Estimated Total</p>
                                    <p className="font-heading font-bold text-3xl">₹{selectedServices.reduce((acc, s) => acc + s.price, 0)}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                 <Button variant="outline" className="flex-1 md:flex-none h-14 rounded-none border-foreground/20 uppercase tracking-widest font-bold hover:bg-destructive hover:text-white hover:border-destructive" onClick={() => setSelectedServices([])}>Clear</Button>
                                 <BookingWizard initialServices={selectedServices}>
                                    <Button size="lg" className="flex-1 md:flex-none h-14 min-w-[200px] rounded-none bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
                                        Proceed to Book
                                    </Button>
                                 </BookingWizard>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {filteredServices.length === 0 && (
            <div className="text-center py-32">
                <p className="text-2xl font-heading font-bold text-muted-foreground mb-4">No services found matching your criteria.</p>
                <Button variant="link" onClick={() => {setActiveCategory("All"); setSearchQuery("");}} className="text-primary text-lg">Clear Filters</Button>
            </div>
        )}
      </div>
    </PageTransition>
  );
}
