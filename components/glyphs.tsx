/**
 * Drawn linework glyphs for the six дейности. Stroke-only so the credits band
 * can draw them in; styling (stroke colour/width) comes from the parent class.
 */
import type { GlyphName } from "@/template.config";

const PATHS: Record<GlyphName, React.ReactNode> = {
  water: (
    <>
      <path d="M8 14h16a10 10 0 0 1 10 10v10" />
      <path d="M8 20h10" />
      <path d="M34 40c0-3 4-6 4-9 0 3 4 6 4 9a4 4 0 0 1-8 0Z" />
    </>
  ),
  road: (
    <>
      <path d="M16 42 24 6" />
      <path d="M40 42 32 6" />
      <path d="M28 12v5M28 22v5M28 32v5" />
    </>
  ),
  slope: (
    <>
      <path d="M6 40 26 18l16 22" />
      <path d="M14 34l6 6M20 28l8 12M28 24l4 4" />
    </>
  ),
  leaf: (
    <>
      <path d="M24 42V22" />
      <path d="M24 22C14 22 10 14 10 8c8 0 14 4 14 14 0-10 6-14 14-14 0 6-4 14-14 14Z" />
    </>
  ),
  factory: (
    <>
      <path d="M8 42V22l10 6v-6l10 6v-6l12 7v13Z" />
      <path d="M12 16V8h4v8" />
      <path d="M8 42h32" />
    </>
  ),
  estate: (
    <>
      <path d="M10 42V24l8-6 8 6v18" />
      <path d="M26 42V16l12-6v32" />
      <path d="M4 42h40" />
    </>
  ),
};

export function Glyph({ name, className }: { name: GlyphName; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export function AtomMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="32" cy="32" r="5" />
      <ellipse cx="32" cy="32" rx="25" ry="10.5" />
      <ellipse cx="32" cy="32" rx="25" ry="10.5" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="25" ry="10.5" transform="rotate(120 32 32)" />
    </svg>
  );
}
