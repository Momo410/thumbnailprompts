# thumbnailprompts.com — Design System

Vercel's design discipline (black and white, hairlines, grid, precision) mixed with Mobbin's gallery feel (white space, big rounded cards, real screenshots as the hero). Our own fonts. Read this file before building any page, component, logo, or video frame.

## 1. Principles

- **The thumbnails are the color.** The UI is black, white and grey so the gallery images carry all the color.
- **One accent, used once.** Red appears on one element per screen: the focused card, the cursor, the primary link.
- **Hairlines, not boxes.** Structure comes from 1px borders and the background grid, not from fills or heavy shadows.
- **Real over decorative.** Show real thumbnails and real prompts. No stock illustrations, no gradient blobs, no glow.
- **Quiet motion.** Short, precise, ease-out. Nothing bounces.

## 2. Color

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0A0A0A` | Page background |
| `--bg-subtle` | `#FAFAFA` | `#0D0D0D` | Section bands, code blocks |
| `--fg` | `#141414` | `#EDEDED` | Primary text, primary buttons |
| `--fg-muted` | `#6B6B6B` | `#A1A1A1` | Secondary text, captions |
| `--fg-faint` | `#A3A3A3` | `#5E5E5E` | Placeholders, mono labels |
| `--border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.10)` | Card and divider hairlines |
| `--border-strong` | `rgba(0,0,0,0.16)` | `rgba(255,255,255,0.18)` | Hover borders, inputs |
| `--grid` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.05)` | Background grid lines |
| `--accent` | `#FF2E2E` | `#FF4D4D` | The one accent |
| `--accent-soft` | `rgba(255,46,46,0.10)` | `rgba(255,77,77,0.16)` | Focus rings, selected states |

No other hues in the UI chrome. Success/error states use text and icons first; if a color is unavoidable use `#16A34A` / `#DC2626` at small size.

## 3. Typography

We do **not** use Geist (Vercel's font). Our stack, all free on Google Fonts:

| Role | Font | Notes |
|---|---|---|
| Display + UI | **Instrument Sans** (400–700) | Headlines tight: `letter-spacing: -0.03em` at 48px+, `-0.02em` at 24–40px |
| Accent word | **Instrument Serif Italic** | One word per headline, max. "Stop *guessing* prompts." |
| Mono | **JetBrains Mono** (400–500) | Tool names, prompt text, labels, URLs |

Scale (px / line-height): 72/1.0 · 56/1.05 · 40/1.1 · 28/1.2 · 20/1.4 · 16/1.5 (body) · 14/1.5 · 12/1.4 (mono labels, uppercase off, `letter-spacing: 0`).

Rules: sentence case everywhere. No all-caps eyebrows. Headlines ≤ 8 words.

## 4. Layout

- 12-column grid, max width 1200px, 24px gutters; 16px side padding on mobile.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Background: solid pure black (`#000`) in dark mode. No grid, no radial or linear fade masks anywhere on the site.
- Sections separated by a full-width 1px `--border` line, Vercel-style.

## 5. Shape

| Element | Radius |
|---|---|
| Thumbnail cards | 16px (image), 20px (card shell) |
| Buttons, inputs | 999px (pills) for primary CTAs, 8px for secondary |
| App icon / logo tile | 30% squircle (Mobbin) |
| Chat card (connector UI) | 20px |
| Device frames | 12.22% / 5.65% (Mobbin phone frame) |

Shadows: only one, for lifted cards: `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)`.

## 6. Components

- **Thumbnail card:** 16:9 image, 1px border, below it a mono caption (`prompt · 214 words`) and a title in Instrument Sans 15/600. Hover: border goes `--border-strong`, card lifts 2px.
- **Prompt block:** `--bg-subtle` panel, JetBrains Mono 13px, 1px border, Copy button top-right (black pill, white text).
- **Primary button:** black pill (`--fg` bg, `--bg` text), 40px tall, 16px padding. Secondary: white with 1px border.
- **Tool label (connector):** mono, `--fg-faint`, prefixed with `→`, e.g. `→ thumbnail_prompt.build`.
- **Chat card (inside Claude/ChatGPT):** 20px radius, thumbnail preview on top, prompt excerpt (3 lines, fade), Copy + Open buttons.

## 7. Logo usage

- Mark is monochrome: `--fg` on light, `--bg` on dark. The accent may appear as one small detail, never as the whole mark.
- Wordmark: `thumbnailprompts` lowercase, Instrument Sans 600, `letter-spacing: -0.03em`. `.com` only in URLs.
- Clear space: the height of the mark on every side. Minimum size: 16px (favicon), 24px in UI.

## 8. Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint). Durations 150ms (hover), 300ms (UI), 600–900ms (video moves).
- Reveals: fade + 8px rise. Text types in mono at ~40 chars/s. Cards lift, never spin or bounce.
- Video: white canvas, faint grid, one red cursor; cuts on the beat; no glow, no particles, no lens flares.

## 9. Don'ts

Gradients · glow · neon · glassmorphism blobs · 3D chrome logos · emoji in UI · more than one accent · invented fake UI text · Geist font · all-caps labels.
