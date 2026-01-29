
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import * as React from "react"
import { cn } from "../../utils/cn"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, isLoading, children, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : motion.button

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-premium shadow-primary/20",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/20",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20 shadow-premium",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-lg px-8",
    icon: "h-10 w-10",
  }

  return (
    <Comp
      ref={ref}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button }
