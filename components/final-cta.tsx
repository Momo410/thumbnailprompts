import { WaitlistForm } from '@/components/waitlist-form'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-border bg-subtle">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-24 text-center md:px-6 md:py-32">
        <h2
          id="cta-heading"
          className="text-[36px] leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-[56px]"
        >
          Be first when it goes live.
        </h2>
        <div className="flex w-full flex-col items-center gap-4">
          <WaitlistForm source="footer" />
          <p className="text-sm text-muted-foreground">No spam. One email when the MCP launches.</p>
        </div>
      </div>
    </section>
  )
}
