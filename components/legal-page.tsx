import { SiteFooter } from '@/components/site-footer'

export const CONTACT_EMAIL = 'momo@thumbnailprompts.com'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-6"
        >
          <a href="/" className="flex shrink-0 items-center" aria-label="thumbnailprompts home">
            <img src="/brand/logo-lockup-white.svg" alt="thumbnailprompts" className="h-6 w-auto sm:h-7" />
          </a>
          <a
            href="/"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition-opacity duration-150 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none"
          >
            Back to home
          </a>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-[720px] px-4 pt-16 pb-24 md:px-6 md:pt-24">
        <h1 className="text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] sm:text-[56px] sm:leading-[1.05] sm:tracking-[-0.03em]">
          {title}
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">Last updated {updated}</p>
        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-t border-border pt-8">
      <h2 className="text-xl leading-snug font-semibold tracking-[-0.01em]">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-brand [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}
