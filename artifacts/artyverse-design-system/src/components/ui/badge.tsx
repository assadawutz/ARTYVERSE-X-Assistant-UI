import * as React from "react";
import { cn } from "../../lib/utils";

export type BadgeVariant = "pink" | "lime" | "neutral" | "outline" | "danger";

const variants: Record<BadgeVariant, string> = {
  pink: "border-transparent bg-primary text-primary-foreground",
  lime: "border-transparent bg-accent text-accent-foreground",
  neutral: "border-transparent bg-secondary text-secondary-foreground",
  outline: "border-border bg-card text-foreground",
  danger: "border-transparent bg-destructive text-destructive-foreground",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function badgeVariants(variant: BadgeVariant = "pink") {
  return variants[variant];
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "pink", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex min-h-6 items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold leading-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
