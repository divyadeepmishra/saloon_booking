
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon, User } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { staff } from "../../data/mock";
import { cn } from "../../utils/cn";


const steps = ["Review", "Stylist", "Time", "Confirm"];

export function BookingWizard({ children, initialServices = [] }) {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    services: initialServices,
    stylist: null,
    date: new Date(),
    time: null,
  });

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
        setBookingData(prev => ({ ...prev, services: initialServices }));
        setCurrentStep(0);
    }
  };

  const nextStep = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const handleBook = () => {
    // Logic to save booking would go here
    console.log("Booking:", bookingData);
    setOpen(false);
    // Reset or show success
    alert("Booking Confirmed! We look forward to seeing you.");
  };

  const totalPrice = bookingData.services.reduce((sum, s) => sum + s.price, 0);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] glass p-0 overflow-hidden border-none text-foreground">
        <div className="p-6 bg-background/80 backdrop-blur-xl h-full flex flex-col">
            <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                <span>Book Appointment</span>
                <span className="text-sm font-normal text-muted-foreground">Step {currentStep + 1} of 4</span>
            </DialogTitle>
            {/* Progress Bar */}
            <div className="h-1 w-full bg-secondary mt-4 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                />
            </div>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto min-h-[300px] pr-2 custom-scrollbar">
                <AnimatePresence mode="wait">
                    {currentStep === 0 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <h3 className="font-semibold mb-2">Selected Services</h3>
                             {bookingData.services.length === 0 ? (
                                <p className="text-muted-foreground">No services selected.</p>
                             ) : (
                                <div className="grid gap-3">
                                    {bookingData.services.map((service, idx) => (
                                        <div
                                            key={`${service.id}-${idx}`}
                                            className="p-4 rounded-xl border border-border bg-card flex items-center gap-4"
                                        >
                                            <img src={service.image} alt={service.name} className="w-12 h-12 rounded-lg object-cover" />
                                            <div className="flex-1">
                                                <div className="flex justify-between font-semibold">
                                                    <span>{service.name}</span>
                                                    <span>₹{service.price}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground">{service.duration} mins</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex justify-between font-bold text-lg pt-4 border-t">
                                        <span>Total</span>
                                        <span>₹{totalPrice}</span>
                                    </div>
                                </div>
                             )}
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                        >
                            <h3 className="font-semibold mb-2">Select a Stylist</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    onClick={() => { setBookingData({...bookingData, stylist: "Any"}); nextStep(); }}
                                     className={cn(
                                        "p-4 rounded-xl border border-border cursor-pointer transition-all hover:bg-accent flex flex-col items-center text-center gap-2",
                                        bookingData.stylist === "Any" ? "bg-accent border-primary" : ""
                                    )}
                                >
                                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <span className="font-medium">Any Professional</span>
                                </div>
                                {staff.map(member => (
                                    <div
                                        key={member.id}
                                        onClick={() => { setBookingData({...bookingData, stylist: member}); nextStep(); }}
                                        className={cn(
                                            "p-4 rounded-xl border border-border cursor-pointer transition-all hover:bg-accent flex flex-col items-center text-center gap-2",
                                            bookingData.stylist?.id === member.id ? "bg-accent border-primary" : ""
                                        )}
                                    >
                                        <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                                        <div>
                                            <span className="font-medium block">{member.name}</span>
                                            <span className="text-xs text-muted-foreground">{member.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                         <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                             <div>
                                <h3 className="font-semibold mb-4">Select Date</h3>
                                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory w-full">
                                    {[0,1,2,3,4,5,6].map(offset => {
                                        const d = new Date();
                                        d.setDate(d.getDate() + offset);
                                        const isSelected = bookingData.date.getDate() === d.getDate();

                                        return (
                                            <button
                                                key={offset}
                                                onClick={() => setBookingData({...bookingData, date: d})}
                                                className={cn(
                                                    "flex flex-col items-center justify-center min-w-[70px] h-20 rounded-xl border border-border transition-all snap-center flex-shrink-0",
                                                    isSelected ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent"
                                                )}
                                            >
                                                <span className="text-xs uppercase opacity-70">{format(d, 'EE')}</span>
                                                <span className="text-xl font-bold">{format(d, 'd')}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                             </div>

                             <div>
                                <h3 className="font-semibold mb-4">Select Time</h3>
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                    {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].map(t => (
                                        <button
                                            key={t}
                                            onClick={() => { setBookingData({...bookingData, time: t}); nextStep(); }}
                                            className={cn(
                                                "py-3 rounded-lg border border-border text-sm hover:bg-accent transition-colors",
                                                bookingData.time === t ? "bg-primary text-primary-foreground border-primary" : ""
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                             </div>
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="bg-secondary/50 p-6 rounded-2xl space-y-4">
                                <h3 className="font-semibold text-lg">Booking Summary</h3>

                                <div className="space-y-3">
                                    {bookingData.services.map((s, i) => (
                                         <div key={i} className="flex justify-between text-sm">
                                            <span>{s.name}</span>
                                            <span className="font-medium">₹{s.price}</span>
                                         </div>
                                    ))}
                                    <div className="border-t pt-2 flex justify-between font-bold">
                                        <span>Total</span>
                                        <span className="text-primary">₹{totalPrice}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-4">
                                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Stylist</p>
                                        <p className="font-medium">{bookingData.stylist?.name || "Any Professional"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                                        <CalendarIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Date & Time</p>
                                        <p className="font-medium">{format(bookingData.date, 'MMMM d, yyyy')} at {bookingData.time}</p>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={handleBook} size="lg" className="w-full text-lg h-12">
                                Confirm Appointment
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-between">
                <Button
                    variant="ghost"
                    onClick={currentStep === 0 ? () => setOpen(false) : prevStep}
                >
                    {currentStep === 0 ? "Cancel" : "Back"}
                </Button>
                {currentStep === 0 && bookingData.services.length > 0 && (
                     <Button onClick={nextStep}>
                        Select Stylist
                     </Button>
                )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
