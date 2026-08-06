"use client";

/**
 * Fail-open reveal system. Server HTML is fully visible; only once JS runs is
 * `js` stamped on <body> (hiding .r elements), and three redundant triggers
 * bring them back: IntersectionObserver, a polling failsafe, visibilitychange.
 * Content can never be left invisible. Reduced motion: never hide at all.
 */
import { useEffect } from "react";

export function RevealRoot() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add("js");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".r"));
    const show = (el: HTMLElement) => el.classList.add("in");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    const failsafe = window.setTimeout(() => els.forEach(show), 2600);
    const onVis = () => {
      if (!document.hidden) els.forEach(show);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return null;
}
