import type { Metadata } from 'next'
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service — thumbnailprompts',
  description: 'The terms for using thumbnailprompts.com and joining the thumbnailprompts waitlist.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 10, 2026">
      <LegalSection title="Agreement">
        <p>
          These terms apply to your use of thumbnailprompts.com and the thumbnailprompts waitlist, run by
          thumbnailprompts (&ldquo;we&rdquo;, &ldquo;us&rdquo;), based in India. By using the site or joining the
          waitlist, you agree to them. If you don&rsquo;t agree, please don&rsquo;t use the site.
        </p>
      </LegalSection>

      <LegalSection title="The waitlist">
        <p>
          The thumbnailprompts connector is in development. Joining the waitlist is free and does not guarantee access,
          a launch date or any particular feature. When the connector launches it may come with its own terms and
          pricing, which we will show you before you use it.
        </p>
        <p>You must be at least 18 years old to join the waitlist.</p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>When you use the site, and later the connector, you agree not to:</p>
        <ul>
          <li>Sign up others without their permission or use fake or automated sign-ups.</li>
          <li>Try to break, overload, scrape or get unauthorized access to the site or its systems.</li>
          <li>
            Use our prompts to create images of real people without their consent, or images that infringe someone
            else&rsquo;s trademarks, copyrights or likeness.
          </li>
          <li>Use the service for anything illegal, harmful or misleading.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Our content">
        <p>
          The thumbnailprompts name, logo, website design, text and prompt library belong to us. You may share links to
          the site, but you may not copy or resell our content or prompt library without our written permission.
        </p>
        <p>
          The example thumbnails in the gallery belong to their respective creators and are shown as examples of what
          our prompts can produce.
        </p>
      </LegalSection>

      <LegalSection title="Your thumbnails">
        <p>
          The images you create with prompts from thumbnailprompts belong to you, subject to the terms of the image tool
          you use. Tools such as Claude, ChatGPT and Gemini are run by other companies, and their own terms apply when
          you use them.
        </p>
      </LegalSection>

      <LegalSection title="No guarantees">
        <p>
          The site and any prompts are provided &ldquo;as is&rdquo;. We work hard on quality, but we don&rsquo;t
          promise that a prompt will produce a particular image or that a thumbnail will get more views, clicks or
          revenue.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the extent the law allows, we are not liable for any indirect or consequential loss, or for lost profits,
          views or data, arising from your use of the site. Nothing in these terms limits any rights you have that
          cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          How we handle your data is explained in our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="Changes and governing law">
        <p>
          We may update these terms as the product grows. We will change the date at the top of this page whenever we do,
          and email the waitlist about any important change. These terms are governed by the laws of India, and the
          courts of Coimbatore, Tamil Nadu have jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalSection>
    </LegalPage>
  )
}
