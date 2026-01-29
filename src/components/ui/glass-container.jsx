
import { cn } from "../../utils/cn";

export function GlassContainer({ children, className, hoverEffect = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/20 bg-white/25 backdrop-blur-md shadow-lg",
        "dark:bg-black/30 dark:border-white/10 dark:shadow-2xl",
        hoverEffect && "transition-transform hover:scale-[1.02] duration-300 pointer-events-auto cursor-pointer",
        "cursor-default", // Default cursor unless hoverEffect or overridden
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
