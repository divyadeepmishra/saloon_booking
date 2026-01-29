
import { Clock, Scissors, Trophy, Users } from "lucide-react";
import { stats } from "../../data/mock";

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scissors className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold">{stats.bookings}+</div>
                    <div className="text-muted-foreground uppercase tracking-wider text-sm">Haircuts</div>
                </div>
                 <div className="text-center space-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold">{stats.customers}+</div>
                    <div className="text-muted-foreground uppercase tracking-wider text-sm">Happy Clients</div>
                </div>
                 <div className="text-center space-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold">15+</div>
                    <div className="text-muted-foreground uppercase tracking-wider text-sm">Awards Won</div>
                </div>
                 <div className="text-center space-y-2">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold">10+</div>
                    <div className="text-muted-foreground uppercase tracking-wider text-sm">Years Experience</div>
                </div>
            </div>
        </div>
    </section>
  );
}
