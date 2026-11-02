import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "../../lib/utils";

export type ButtonVariant = "primary" | "lime" | "outline" | "subtle" | "ghost" | "link";
export type ButtonSize = "sm" | "default" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  primary: "border border-primary bg-primary text-primary-foreground shadow-sm hover:brightness-95",
  lime: "border border-accent bg-accent text-accent-foreground hover:brightness-95",
  outline: "border border-input bg-card text-foreground hover:bg-muted",
  subtle: "border border-transparent bg-secondary text-secondary-foreground hover:bg-muted",
  ghost: "border border-transparent bg-transparent text-foreground hover:bg-muted",
  link: "border border-transparent bg-transparent p-0 text-primary underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-8 rounded-lg px-3 text-xs",
  default: "min-h-10 rounded-xl px-4 text-sm",
  lg: "min-h-12 rounded-2xl px-6 text-base",
  icon: "size-10 rounded-full p-0",
};

export function buttonVariants({
  variant = "primary",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    sizes[size],
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  ),
);
Button.displayName = "Button";

export { variants as buttonVariantClasses };
