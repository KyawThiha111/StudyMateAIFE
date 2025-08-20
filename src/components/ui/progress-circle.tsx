import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0-100
  size?: number; // px
  strokeWidth?: number; // px
}

export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ value = 0, size = 48, strokeWidth = 6, className, ...props }, ref) => {
    const clamped = Math.min(100, Math.max(0, value));
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - clamped / 100);

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        aria-label={`Progress ${clamped}%`}
        {...props}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--muted))"
            strokeOpacity={0.5}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <span className="absolute text-xs font-medium" aria-hidden>
          {Math.round(clamped)}%
        </span>
      </div>
    );
  }
);

ProgressCircle.displayName = "ProgressCircle";

export default ProgressCircle;
