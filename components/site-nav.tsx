'use client'

import { focusSignup } from '@/lib/focus-signup'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-6"
      >
        <a href="#top" className="flex shrink-0 items-center" aria-label="thumbnailprompts home">
          <img src="/brand/logo-lockup-white.svg" alt="thumbnailprompts" className="h-6 w-auto sm:h-7" />
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="#how-it-works"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground sm:inline-flex"
          >
            How it works
          </a>
          <a
            href="#gallery"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground sm:inline-flex"
          >
            Gallery
          </a>
          <button
            type="button"
            onClick={focusSignup}
            className="ml-1 inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition-opacity duration-150 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none"
          >
            Sign up
          </button>
        </div>
      </nav>
    </header>
  )
}
