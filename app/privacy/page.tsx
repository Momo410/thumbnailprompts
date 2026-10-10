import type { Metadata } from 'next'
import { CONTACT_EMAIL, LegalPage, LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy — thumbnailprompts',
  description: 'What data thumbnailprompts collects, why, who it is shared with, and how to delete it.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 10, 2026">
      <LegalSection title="Who we are">
        <p>
          thumbnailprompts (&ldquo;we&rdquo;, &ldquo;us&rdquo;) runs thumbnailprompts.com and is building a Claude
          connector that writes YouTube thumbnail prompts. We are based in India. This policy explains what personal
          data this website collects and what we do with it. We keep it short because we collect very little.
        </p>
        <p>
          Questions or requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <ul>
          <li>
            <strong>Your email address</strong>, when you join the waitlist, plus which sign-up form you used and when.
          </li>
          <li>
            <strong>A hashed version of your IP address</strong>, created when you submit the form. We use it only to
            stop spam and repeated sign-ups. We never store your raw IP address in our database.
          </li>
          <li>
            <strong>Anonymous usage statistics</strong>, such as page views, referring site, country and device type,
            through Vercel Web Analytics. It does not use cookies and does not identify you personally.
          </li>
          <li>
            <strong>Standard server logs</strong> kept by our hosting provider (IP address, browser type, time of
            request) for security and reliability.
          </li>
        </ul>
        <p>We do not ask for your name, payment details, photos or any other personal information on this website.</p>
      </LegalSection>

      <LegalSection title="Why we use it">
        <ul>
          <li>To email you when the thumbnailprompts connector launches and when your early access is ready.</li>
          <li>To protect the waitlist from bots and abuse.</li>
          <li>To understand, in aggregate, how people find and use the site so we can improve it.</li>
        </ul>
        <p>
          We process your email because you gave it to us for this purpose (your consent). You can withdraw that
          consent at any time. We never sell your data and we never use it for advertising.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          This website does not set cookies and does not use tracking pixels or third-party advertising scripts. Our
          fonts are served from our own domain, not from Google.
        </p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>We use a small number of service providers who process data on our behalf:</p>
        <ul>
          <li>
            <strong>Vercel</strong> hosts the website and provides the cookie-free analytics.
          </li>
          <li>
            <strong>Supabase</strong> stores the waitlist database.
          </li>
          <li>
            <strong>Spacemail</strong> handles our email.
          </li>
        </ul>
        <p>
          These providers may store data on servers outside India, including in the United States. We do not share
          your data with anyone else unless the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep your email on the waitlist until the product launches and you have been invited, or until you ask us
          to remove it, whichever comes first. Spam-protection records are kept only as long as needed to block abuse.
          Hosting logs are kept by Vercel for a short period under their own policy.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask us to access, correct or delete your data, or to stop emailing you, at any time. Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the address you signed up with and we will reply
          within 30 days.
        </p>
        <p>
          If you are in India, you have these rights under the Digital Personal Data Protection Act, 2023, including
          the right to nominate someone to act for you and to raise a complaint with the Data Protection Board of
          India. If you are in the EU or UK, you also have rights under the GDPR, including the right to object and to
          complain to your local data protection authority. Please contact us first so we can fix the issue.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          The site is served over HTTPS only. Waitlist data is stored with access restricted to us, and IP addresses
          are hashed before they are saved. No system is perfectly secure, but we take reasonable steps to protect your
          data.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          thumbnailprompts is not intended for anyone under 18. We do not knowingly collect data from children. If you
          believe a child has signed up, email us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          When the connector launches, it will collect more information (for example, the prompts you request), and we
          will update this policy before that happens. We will change the date at the top of this page whenever we make
          an update, and email the waitlist about any important change.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
