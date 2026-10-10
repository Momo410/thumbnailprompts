'use client'

import { useState } from 'react'
import Image from 'next/image'

const prompt =
  'YouTube thumbnail, 16:9. Off-white dotted canvas, glossy black app icon with an orange pixel mascot at top center. Huge headline "Motion Design" in heavy black, "Full Tutorial" in inflated glossy red-orange 3D type, framed by tilted UI cards: easing curves, bouncing ball, product tiles.'

const STAGGER_MS = 150

export function ChatCard() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    let ok = false
    try {
      await navigator.clipboard.writeText(prompt)
      ok = true
    } catch {
      // Clipboard API is blocked in some iframes (e.g. previews); fall back to execCommand.
      const textarea = document.createElement('textarea')
      textarea.value = prompt
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      ok = document.execCommand('copy')
      textarea.remove()
    }
    if (!ok) return
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const step = (i: number) => ({ animationDelay: `${300 + i * STAGGER_MS}ms` })

  return (
    <figure
      aria-label="Example: asking for a thumbnail with thumbnailprompts"
      className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-subtle text-left"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-border-strong" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border-strong" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border-strong" aria-hidden="true" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">New chat</span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-6 p-4 sm:p-6">
        <div className="reveal flex justify-end" style={step(0)}>
          <p className="max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-4 py-2.5 text-[15px] leading-relaxed text-background">
            Make me a viral thumbnail for my motion design tutorial
          </p>
        </div>

        <div className="reveal flex flex-col gap-3" style={step(1)}>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex size-6 items-center justify-center rounded-md bg-brand text-[11px] font-semibold text-foreground"
            >
              tp
            </span>
            <span className="text-sm font-medium text-foreground">thumbnailprompts</span>
          </div>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {"Here's a prompt tuned to what's trending in your niche right now:"}
          </p>

          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
              <span className="font-mono text-xs text-muted-foreground">prompt</span>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-md px-2 py-1 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:bg-subtle hover:text-foreground focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none"
              >
                <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="px-4 py-3">
              <p className="line-clamp-3 font-mono text-[13px] leading-6 text-foreground">{prompt}</p>
            </div>
          </div>
        </div>

        <div
          className="reveal relative aspect-video w-full overflow-hidden rounded-xl border border-border"
          style={step(2)}
        >
          <Image
            src="/thumbnails/motion-design-full-tutorial.png"
            alt="Generated thumbnail: Motion Design Full Tutorial headline with a pixel mascot icon, surrounded by tilted motion design UI cards"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </figure>
  )
}
