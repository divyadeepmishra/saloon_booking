
import { PageTransition } from "../../components/layout/PageTransition";
import { Button } from "../../components/ui/button";
import { GlassContainer } from "../../components/ui/glass-container";

export function CareersPage() {
  const openings = [
    { title: "Senior Hair Stylist", type: "Full-time", location: "New York, NY" },
    { title: "Nail Art Specialist", type: "Part-time", location: "New York, NY" },
    { title: "Salon Manager", type: "Full-time", location: "New York, NY" },
  ];

  return (
    <PageTransition>
      <div className="container max-w-screen-xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">We are always looking for talented individuals to join our family.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((job, index) => (
                <GlassContainer key={index} hoverEffect className="p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full mt-4 hover:bg-primary hover:text-white transition-colors"
                        onClick={() => window.location.href = `mailto:careers@luxesalon.com?subject=Application for ${job.title}`}
                    >
                        Apply Now
                    </Button>
                </GlassContainer>
            ))}
        </div>

        <div className="mt-16 text-center">
             <p className="text-muted-foreground mb-4">Don't see a position that fits? Send us your portfolio.</p>
             <Button onClick={() => window.location.href = "mailto:careers@luxesalon.com?subject=General Inquiry"}>
                Contact Hiring Team
             </Button>
        </div>
      </div>
    </PageTransition>
  );
}
