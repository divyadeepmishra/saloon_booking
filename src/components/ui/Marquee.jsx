
import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="py-12 bg-primary overflow-hidden whitespace-nowrap select-none">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
             <span key={i} className="text-6xl md:text-8xl font-heading font-bold text-primary-foreground/90 mx-8 uppercase">
                Expert Grooming Consultations • Luxury Styling • Premium Care •
             </span>
        ))}
      </motion.div>
    </div>
  );
}
