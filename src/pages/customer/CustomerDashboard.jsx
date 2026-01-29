
import { addDays, format } from "date-fns";
import { Calendar, Clock, MapPin, Scissors, User } from "lucide-react";
import { PageTransition } from "../../components/layout/PageTransition";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { GlassContainer } from "../../components/ui/glass-container";

export function CustomerDashboard() {
  // Mock appointments data
  const appointments = [
    {
      id: 1,
      service: "Haircut & Styling",
      stylist: "Elena Rossi",
      date: addDays(new Date(), 2),
      time: "14:00",
      status: "upcoming",
      price: 65,
    },
    {
      id: 2,
      service: "Manicure & Pedicure",
      stylist: "Sarah Johnson",
      date: addDays(new Date(), -5),
      time: "10:00",
      status: "completed",
      price: 55,
    },
    {
      id: 3,
      service: "Deep Tissue Massage",
      stylist: "David Chen",
      date: addDays(new Date(), -20),
      time: "16:00",
      status: "cancelled",
      price: 90,
    },
  ];

  return (
    <PageTransition>
      <div className="container max-w-screen-xl pt-32 pb-12 px-4 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-muted-foreground">Manage your bookings and profile.</p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-full shadow-lg shadow-primary/20 cursor-pointer">Book New Appointment</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            {appointments.filter(a => a.status === 'upcoming').length > 0 ? (
                appointments.filter(a => a.status === 'upcoming').map(appt => (
                    <GlassContainer key={appt.id} className="p-6 border-l-4 border-l-primary flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                        <div className="flex gap-4 items-start">
                             <div className="bg-primary/10 p-3 rounded-xl">
                                <Calendar className="w-6 h-6 text-primary" />
                             </div>
                             <div>
                                 <h3 className="font-bold text-lg">{appt.service}</h3>
                                 <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground mt-1">
                                     <span className="flex items-center gap-1"><User className="w-3 h-3" /> {appt.stylist}</span>
                                     <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {format(appt.date, 'MMM d, yyyy')} at {appt.time}</span>
                                 </div>
                             </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Button variant="outline" className="flex-1 md:flex-none">Reschedule</Button>
                            <Button variant="destructive" className="flex-1 md:flex-none">Cancel</Button>
                        </div>
                    </GlassContainer>
                ))
            ) : (
                <GlassContainer className="p-8 text-center">
                    <p className="text-muted-foreground">No upcoming appointments.</p>
                </GlassContainer>
            )}

            <h2 className="text-xl font-semibold pt-4">Past Appointments</h2>
            <div className="space-y-4">
                {appointments.filter(a => a.status !== 'upcoming').map(appt => (
                    <GlassContainer key={appt.id} className="p-4 flex justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
                         <div className="flex items-center gap-4">
                             <div className="bg-secondary p-2 rounded-lg">
                                <Scissors className="w-4 h-4" />
                             </div>
                             <div>
                                 <p className="font-semibold">{appt.service}</p>
                                 <p className="text-xs text-muted-foreground">{format(appt.date, 'MMM d, yyyy')}</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-4">
                             <span className="font-medium">₹{appt.price}</span>
                             <Badge variant={appt.status === 'completed' ? 'secondary' : 'destructive'}>
                                 {appt.status}
                             </Badge>
                         </div>
                    </GlassContainer>
                ))}
            </div>
          </div>

          {/* Sidebar - Profile */}
          <div className="space-y-6">
             <GlassContainer className="p-6 text-center">
                 <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary">
                    JD
                 </div>
                 <h2 className="text-xl font-bold">John Doe</h2>
                 <p className="text-muted-foreground text-sm mb-6">Member since 2023</p>
                 <Button variant="outline" className="w-full mb-2">Edit Profile</Button>
                 <Button variant="ghost" className="w-full text-destructive hover:bg-destructive/10">Sign Out</Button>
             </GlassContainer>

             <GlassContainer className="p-6">
                 <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Your Salon
                 </h3>
                 <p className="text-sm font-medium">Luxe Salon Downtown</p>
                 <p className="text-xs text-muted-foreground mt-1">123 Fashion Ave, NY 10001</p>
                 <p className="text-xs text-muted-foreground mt-1">+1 (555) 123-4567</p>
             </GlassContainer>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
