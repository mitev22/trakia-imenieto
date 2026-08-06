"use client";

/**
 * The signature element: the six дейности as film credits over dusk navy.
 * Lines rise in a stagger and each glyph draws itself on first view.
 * Cost: one IO + one anime timeline per visit, nothing per-frame afterwards.
 * Fail-open: server HTML is the finished composition; motion only ever starts
 * from a JS-applied hidden state, with a timeout + visibilitychange rescue.
 */
import { useEffect, useRef } from "react";
import { animate, stagger, svg as animeSvg } from "animejs";
import { copy } from "@/template.config";
import { Glyph, AtomMark } from "./glyphs";

export function CreditsBand() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lines = Array.from(root.querySelectorAll<HTMLElement>(".credit-line"));
    const strokes = Array.from(
      root.querySelectorAll<SVGGeometryElement>(".glyph path, .glyph circle")
    );
    lines.forEach((l) => {
      l.style.opacity = "0";
      l.style.transform = "translateY(18px)";
    });

    let played = false;
    const finish = () => {
      lines.forEach((l) => {
        l.style.opacity = "";
        l.style.transform = "";
      });
      strokes.forEach((s) => {
        s.style.strokeDasharray = "";
        s.style.strokeDashoffset = "";
      });
    };
    const play = () => {
      if (played) return;
      played = true;
      animate(lines, {
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 750,
        delay: stagger(95),
        ease: "outExpo",
      });
      try {
        const drawables = animeSvg.createDrawable(strokes);
        animate(drawables, {
          draw: ["0 0", "0 1"],
          duration: 900,
          delay: stagger(95, { start: 150 }),
          ease: "inOutCubic",
        });
      } catch {
        /* glyphs simply stay visible */
      }
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        }),
      { threshold: 0.25 }
    );
    io.observe(root);
    const failsafe = window.setTimeout(() => {
      if (!played) {
        played = true;
        finish();
      }
    }, 2600);
    const onVis = () => {
      if (!document.hidden && !played) {
        played = true;
        finish();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const s = copy.stroitelstvo;
  return (
    <section className="credits" ref={rootRef} aria-labelledby="credits-title">
      <AtomMark className="atom-wm" />
      <div className="inner">
        <h2 id="credits-title">
          Какво строи <span className="tint">Тракия-РМ</span>
        </h2>
        <ul className="credit-lines">
          {s.activities.map((a) => (
            <li className="credit-line" key={a.glyph}>
              <Glyph name={a.glyph} className="glyph" />
              <span className="t">{a.text}</span>
            </li>
          ))}
        </ul>
        <div className="colophon">
          <div>
            <b>Членства:</b> {s.memberships.join(" · ")}
          </div>
          <div className="iso">{s.iso}</div>
        </div>
      </div>
    </section>
  );
}
