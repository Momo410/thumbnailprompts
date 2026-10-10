import { ChatCard } from '@/components/chat-card'
import { WaitlistForm } from '@/components/waitlist-form'
import { HERO_EMAIL_ID } from '@/lib/focus-signup'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-4 pt-16 pb-24 text-center md:px-6 md:pt-24 md:pb-32">
        <div className="flex flex-col items-center gap-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="pulse-dot relative inline-block size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {'Coming soon'}
          </p>
          <h1 className="max-w-3xl text-[44px] leading-[1.02] font-semibold tracking-[-0.03em] text-balance sm:text-[64px] lg:text-[72px] lg:leading-none">
            Viral thumbnail prompts, made with{' '}
            <span className="font-serif font-normal italic tracking-[-0.01em]">taste.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            A Claude connector that writes trend-aware thumbnail prompts for your video — with your face in it.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <WaitlistForm source="hero" inputId={HERO_EMAIL_ID} />
          <p className="font-mono text-xs text-muted-foreground">{'Works with Claude · ChatGPT · Cursor'}</p>
        </div>

        <ChatCard />
      </div>
    </section>
  )
}
