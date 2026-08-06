# Имението — estate-film group-site template (Тракия-РМ build, 2026-08-06)

**Lineage:** /webdesign run for trakia-rm. Direction „Имението" (estate film) chosen from five;
skeleton „Дългият филм" chosen from three variants. Reference families: Jordan Winery + Masseto
(estate film), Cucinelli (family warmth), Better Energy (infrastructure in landscape).
Client copy: Галина Пейчева-Митева, 03.08.2026, verbatim; her rejection of the legacy-derived
build (03.08) is the standing constraint: zero visual lineage from trakia-rm.com.

## Stack

Next.js 16 (app router, `output: "export"`) · Tailwind v4 (utilities; the film system is
bespoke CSS in `app/globals.css`) · Anime.js v4 (credits band, count-ups) · next/font
(Prata + Onest, cyrillic subsets, self-hosted — both BG `locl`-probed clean 2026-08-05).
shadcn/ui deliberately not used: every visible control is bespoke to the film system;
stock primitives had nothing to contribute. Static export, no server required.

## Tokens contract

Everything a re-skin touches lives in `template.config.ts`:
`brand` (name, tagline, colors) · `nap` (phone, address, email) · `media` (all image/video
slots) · `nav` · `copy` (all page copy, per section) · `register` (the big-number facts).
Components never hardcode client facts. CSS custom properties in `globals.css` mirror
`brand.colors` (keep in sync when re-skinning).

## Pages

`/` long-film home (hero film → group band → construction chapter → credits band →
register → agriculture chapter → имоти duo → quiet energy → dusk contact) ·
`/grupata` · `/stroitelstvo` (activities + memberships + register) · `/zemedelie` ·
`/imoti` · `/energia` (deliberately quiet register, one МТ photo) · `/kontakti`.

## Media slots (`public/media/`)

| File | Slot | Note |
|---|---|---|
| lavender.mp4 + lavender-poster.jpg | home hero, grupata hero, zemedelie chapter | WhatsApp-compressed 1024×576; client sending originals — replace files, same names |
| roses.mp4 + roses-poster.jpg | zemedelie hero, home agriculture chapter | same |
| facility.jpg | construction imagery | video frame; replace with real object photos when supplied |
| harvest-topdown.jpg, rose-rows.jpg, lavender-close.jpg | interior heroes/imagery | video frames |
| mt-park.jpg | /energia only (solar kept minimal by client instruction) | МТ drone photo |
| Placeholder slots (`ph-slot`) | имоти ×2, home имоти | REAL photos pending from client; never generate these |

## Signature element

`components/credits-band.tsx`: the six дейности as film credits — anime.js staggered rise +
SVG glyph draw-in (drawn linework icons in `components/glyphs.tsx`). Fail-open (server HTML
is the finished composition; IO + timeout + visibilitychange rescue), reduced-motion renders
final state, zero per-frame work after entry.

## Baseline safety

Fail-open reveal system (`components/reveal.tsx`, three redundant triggers) ·
`prefers-reduced-motion` structural bypass + CSS kill-switch · `:focus-visible` states ·
`overscroll-behavior: contain` + body scroll lock on the menu overlay · Escape closes menu ·
`robots: noindex` until the client signs off.

## Re-skin steps (for /webbuild)

1. Replace `template.config.ts` values (brand, nap, copy, register, nav labels).
2. Update `--*` custom properties in `globals.css` to the new `brand.colors`.
3. Drop client media into `public/media/` under the same slot names.
4. Swap fonts in `app/layout.tsx` only after probing the pairing for Cyrillic + BG `locl`.
5. `npm run build` → deploy `out/` (add real domain to metadata, drop noindex on sign-off).

## Verification record (2026-08-06)

All 7 pages DOM-probed at 375 and 1440: zero horizontal overflow, zero broken media, all
reveals reach opacity 1, fonts loaded. Menu overlay probed at 375: opens full-height,
7 links, closes. Videos readyState 4.

## Open handoff items

- Original (uncompressed) drone videos from the client — replace `lavender.mp4`/`roses.mp4`.
- Real photography: infrastructure at work, имоти portfolio (2 slots), team/building.
- Certification scans (legacy site claimed ISO 14001 + OHSAS beyond ISO 9001 — publish only what current certificates support).
- Client sign-off before removing noindex and deploying.
