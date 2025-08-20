import { useEffect, useRef } from "react";

// Subtle cursor-following spotlight using design tokens
export const GradientSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(40%_40%_at_var(--x)_var(--y),black,transparent)]"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-30" />
    </div>
  );
};

export default GradientSpotlight;
