import { FinalCta } from '@/components/final-cta'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
