"use client";

import { useEffect, useRef } from "react";

// Where the glow rests when there is no pointer (fractions of the hero box).
const REST = { x: 0.5, y: 0.3 };
const EASE = 0.08;

/**
 * Renders the cursor-following glow and publishes the eased pointer position
 * on the parent element as CSS variables:
 *   --glow-x / --glow-y  pixel position of the glow centre
 *   --px / --py          -1..1 offset from centre, used for card parallax
 */
export default function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { ...REST };
    const current = { ...REST };
    let frame = 0;

    const apply = () => {
      const { width, height } = host.getBoundingClientRect();
      host.style.setProperty("--glow-x", `${current.x * width}px`);
      host.style.setProperty("--glow-y", `${current.y * height}px`);
      host.style.setProperty("--px", ((current.x - 0.5) * 2).toFixed(4));
      host.style.setProperty("--py", ((current.y - 0.5) * 2).toFixed(4));
    };

    const tick = () => {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      apply();
      const settled =
        Math.abs(target.x - current.x) < 0.0005 && Math.abs(target.y - current.y) < 0.0005;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = host.getBoundingClientRect();
      target.x = (e.clientX - rect.left) / rect.width;
      target.y = (e.clientY - rect.top) / rect.height;
      start();
    };

    const onLeave = () => {
      target.x = REST.x;
      target.y = REST.y;
      start();
    };

    apply();
    if (reduceMotion) return;

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", apply);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(640px circle at var(--glow-x, 50%) var(--glow-y, 30%), rgb(56 108 158 / 0.30), rgb(40 80 125 / 0.12) 40%, transparent 70%)",
      }}
    />
  );
}
