"use client";

/**
 * Corner chrome: „Меню" + telephone in the two top corners (no menu bar), a
 * full-screen dusk overlay for navigation, and the site footer.
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { brand, nap, nav } from "@/template.config";

export function CornerChrome({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className={`chrome-top${solid ? " dark-on-light" : ""}`}>
        <button type="button" className="chrome-link" onClick={() => setOpen(true)}>
          Меню
        </button>
        <a className="chrome-link" href={nap.phoneHref}>
          {nap.phoneDisplay}
        </a>
      </div>
      {open && (
        <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Навигация">
          <button
            type="button"
            ref={closeRef}
            className="chrome-link menu-close"
            onClick={() => setOpen(false)}
          >
            Затвори
          </button>
          <nav>
            <Link href="/" onClick={() => setOpen(false)}>
              Начало
            </Link>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="m-nap">
              {nap.phoneDisplay}
              <br />
              {nap.address} · {nap.email}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="row">
        <span>
          {brand.legalName} · {nap.address}
        </span>
        <span>
          <a href={nap.phoneHref}>{nap.phoneDisplay}</a>
          {" · "}
          <a href={`mailto:${nap.email}`}>{nap.email}</a>
        </span>
      </div>
    </footer>
  );
}
