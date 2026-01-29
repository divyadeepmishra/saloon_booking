
import { cn } from "../../utils/cn";

export function GlassContainer({ children, className, hoverEffect = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/20 bg-white/25 backdrop-blur-md shadow-premium",
        "dark:bg-black/30 dark:border-white/10 dark:shadow-premium",
        hoverEffect && "transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 duration-500 pointer-events-auto cursor-pointer",
        "cursor-default", // Default cursor unless hoverEffect or overridden
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
