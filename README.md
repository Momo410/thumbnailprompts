<p align="center">
  <a href="https://thumbnailprompts.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/brand/logo-lockup-white.svg">
      <img src="public/brand/logo-lockup.svg" alt="thumbnailprompts" width="360">
    </picture>
  </a>
</p>

<p align="center">
  <strong>Viral YouTube thumbnail prompts, made with taste — right inside Claude.</strong>
</p>

<p align="center">
  <a href="https://thumbnailprompts.com"><strong>thumbnailprompts.com</strong></a>
  ·
  <a href="https://thumbnailprompts.com/#how-it-works">How it works</a>
  ·
  <a href="https://thumbnailprompts.com/#gallery">Gallery</a>
</p>

<p align="center">
  <img alt="Status: early access" src="https://img.shields.io/badge/status-early%20access-FF2E2E">
  <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs">
  <img alt="MCP" src="https://img.shields.io/badge/Claude-MCP%20connector-141414">
</p>

---

## What it is

**thumbnailprompts** is a Claude connector (MCP server) for YouTube creators. You describe your video, and it writes a ready-to-render thumbnail prompt — layout, typography, colors and your own face — based on a curated library of thumbnail designs that have already performed well. You paste the prompt into an image model (ChatGPT, Gemini) with your face photo and get a finished thumbnail.

This repository is the public website and early-access waitlist, live at **[thumbnailprompts.com](https://thumbnailprompts.com)**.

## How it works

1. **Connect the MCP** — add thumbnailprompts to Claude in one click.
2. **Ask for a thumbnail** — describe your video (or paste the transcript). Claude reads it and picks a trending layout that fits the topic.
3. **Paste & generate** — run the prompt in ChatGPT or Gemini with your face photo.

### How it uses LLMs

- **Claude** does the reasoning: it reads the video topic or transcript, finds the hook, chooses a proven thumbnail pattern from the library and writes the final image prompt.
- **The MCP server** gives Claude tools to search the prompt library, fetch a pattern with its full prompt, and save new results back.
- **Image models** (GPT Image, Gemini) render the prompt with the creator's face as a reference.

## Status

| Part | Status |
|---|---|
| Website + waitlist | Live at [thumbnailprompts.com](https://thumbnailprompts.com) |
| Thumbnail prompt library | In progress (curated from real client thumbnails) |
| MCP connector for Claude | In development — early access via the waitlist |
| Public prompt gallery | Planned |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, server actions)
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Supabase](https://supabase.com) for the waitlist (with IP-hashed rate limiting and a honeypot)
- [Vercel](https://vercel.com) hosting
- Fonts: Instrument Sans, Instrument Serif, JetBrains Mono

## Run it locally

```bash
pnpm install
cp .env.example .env.local   # add your Supabase URL and anon key
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/          page, layout, global styles, waitlist server action
components/   hero, how it works, gallery, chat card, waitlist form
lib/          gallery data and helpers
public/brand/ logo, app icon, favicon and OG image (vector + PNG)
UI.md         design system: colors, type, spacing, components
```

## Brand

Black, white and one red accent (`#FF2E2E`). The thumbnails carry the color; the UI stays quiet. See [UI.md](UI.md) for the full design system.

---

<p align="center">
  <a href="https://thumbnailprompts.com">thumbnailprompts.com</a> · © 2026 thumbnailprompts
</p>
