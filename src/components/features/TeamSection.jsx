
import { staff } from "../../data/mock";
import { GlassContainer } from "../ui/glass-container";

export function TeamSection() {
  return (
    <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Expert Grooming Consultations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our team of expert barbers and stylists are dedicated to providing the best grooming experience.</p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {staff.map((member) => (
                <GlassContainer key={member.id} className="min-w-[85vw] md:min-w-0 snap-center group overflow-hidden rounded-none border-none bg-transparent shadow-none">
                    <div className="relative h-[400px] overflow-hidden mb-6 rounded-lg">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                             <div>
                                <p className="text-gold font-bold">{member.role}</p>
                             </div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold font-heading">{member.name}</h3>
                    <p className="text-muted-foreground">{member.specialties.join(", ")}</p>
                </GlassContainer>
            ))}
        </div>
    </section>
  );
}
