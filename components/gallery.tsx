'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lock } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { focusSignup } from '@/lib/focus-signup'
import { thumbnails, type Thumbnail } from '@/lib/thumbnails'

const lockedPreview =
  'YouTube thumbnail, 16:9, creator from reference photo, expression and framing tuned to the layout, lighting, background, typography, headline treatment, color direction, composition notes and negative prompt for the image model.'

export function Gallery() {
  const [active, setActive] = useState<Thumbnail | null>(null)

  function handleUnlock() {
    setActive(null)
    // Let the dialog finish closing and restore focus before moving focus to the form.
    setTimeout(focusSignup, 200)
  }

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 py-24 md:px-6">
        <h2
          id="gallery-heading"
          className="text-[32px] leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-[40px]"
        >
          Prompts that already worked.
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {thumbnails.map((thumb) => (
            <li key={thumb.src}>
              <button
                type="button"
                onClick={() => setActive(thumb)}
                className="group flex w-full flex-col gap-3 rounded-2xl text-left focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none"
              >
                <span className="relative block aspect-video w-full overflow-hidden rounded-2xl border border-border transition-[transform,border-color] duration-150 ease-out-quint group-hover:-translate-y-0.5 group-hover:border-border-strong">
                  <Image
                    src={thumb.src}
                    alt={thumb.title}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-col gap-1 px-1">
                  <span className="text-[15px] leading-snug font-semibold">{thumb.title}</span>
                  <span className="font-mono text-xs text-muted-foreground">{thumb.caption}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] gap-5 overflow-y-auto rounded-[20px] border border-border bg-subtle p-4 ring-0 sm:max-w-3xl sm:p-6">
          {active && (
            <>
              <div className="flex flex-col gap-1 pr-10">
                <DialogTitle className="text-lg font-semibold tracking-[-0.01em]">{active.title}</DialogTitle>
                <DialogDescription className="font-mono text-xs text-muted-foreground">
                  {active.caption}
                </DialogDescription>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
                <Image src={active.src} alt={active.title} fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-background">
                <p aria-hidden="true" className="select-none p-4 font-mono text-[13px] leading-6 text-foreground blur-[5px]">
                  {lockedPreview}
                </p>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/40">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Lock className="size-3.5" aria-hidden="true" />
                    Prompt locked
                  </span>
                  <button
                    type="button"
                    onClick={handleUnlock}
                    className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity duration-150 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none"
                  >
                    Sign up to unlock
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
