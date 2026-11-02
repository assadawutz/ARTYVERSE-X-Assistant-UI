import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const WAVE_HEIGHTS = [7, 13, 9, 19, 11, 24, 15, 8, 18, 12, 22, 10, 16, 6, 20, 12, 8, 17, 11, 23, 14, 7, 18, 10];

export function LiveStatus({
  active = true,
  className,
  children = "กำลังฟัง",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-2 rounded-full bg-secondary px-3 text-xs font-medium text-secondary-foreground",
        className,
      )}
      role="status"
      aria-live="polite"
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn("size-2 rounded-full", active ? "bg-accent" : "bg-muted-foreground")}
      />
      {children}
    </span>
  );
}

export function AudioWaveform({
  active = true,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex h-7 items-center gap-[2px]", className)}
      data-active={active}
    >
      <style>{`
        @keyframes artyverse-wave {
          0%, 100% { transform: scaleY(.42); opacity: .66; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .artyverse-wave-bar {
          display: block;
          width: 2px;
          border-radius: 99px;
          background: hsl(var(--primary));
          transform-origin: center;
        }
        [data-active="true"] > .artyverse-wave-bar {
          animation: artyverse-wave 760ms ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-active="true"] > .artyverse-wave-bar { animation: none; }
        }
      `}</style>
      {WAVE_HEIGHTS.map((height, index) => (
        <i
          key={index}
          className="artyverse-wave-bar"
          style={{
            height: `${height}px`,
            animationDelay: `${(index % 8) * 55}ms`,
          }}
        />
      ))}
    </span>
  );
}
