"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header";
  gradient?: boolean;
}

/**
 * A highly polished Glassmorphism card component.
 * Features:
 * - Adaptive blur and transparency
 * - Subtle border-glow
 * - Framer Motion integration for layout & hover animations
 */
const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, as = "div", gradient = false, ...props }, ref) => {
    const Component = motion[as as keyof typeof motion] as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-[2rem]",
          // The base "Glass" layer
          "border border-white/10 bg-slate-950/40 backdrop-blur-xl",
          // The inner "Gloss" highlight
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
          // Shadow for depth
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
          className
        )}
        {...props}
      >
        {/* Optional animated gradient beam background */}
        {gradient && (
          <div className="absolute inset-0 z-0">
            <div className="absolute -inset-[100%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-10" />
          </div>
        )}

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </Component>
    );
  }
);

GlassCard.displayName = "GlassCard";

/**
 * Sub-component for standardized card padding and spacing
 */
const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("p-6 md:p-8", className)}>
    {children}
  </div>
);

export { GlassCard, CardContent };