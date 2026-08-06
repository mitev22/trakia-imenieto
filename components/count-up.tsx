"use client";

/**
 * Count-up figure. SSR renders the final value (never 0); with motion allowed
 * the number tweens in on first view via an anime.js object tween. One shared
 * formatter serves SSR and every frame so the format cannot drift.
 */
import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function CountUp({ value, plain = false }: { value: number; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (v: number) =>
    plain ? String(Math.round(v)) : Math.round(v).toLocaleString("bg-BG");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || done) return;
          done = true;
          io.disconnect();
          const state = { v: Math.max(0, value - Math.min(value, 140)) };
          animate(state, {
            v: value,
            duration: 1100,
            ease: "outExpo",
            onUpdate: () => {
              el.textContent = fmt(state.v);
            },
          });
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    const failsafe = window.setTimeout(() => {
      if (!done) el.textContent = fmt(value);
    }, 2600);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, plain]);

  return <span ref={ref}>{fmt(value)}</span>;
}
