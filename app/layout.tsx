import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const title = 'thumbnailprompts — viral thumbnail prompts inside Claude'
const description =
  'A Claude connector (MCP) that writes handcrafted, trend-aware YouTube thumbnail prompts with your own face in them. Sign up for early access.'

export const metadata: Metadata = {
  metadataBase: new URL('https://thumbnailprompts.com'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://thumbnailprompts.com',
    siteName: 'thumbnailprompts',
    type: 'website',
    images: [{ url: '/brand/og-image-1200.png', width: 1200, height: 630, alt: 'thumbnailprompts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/brand/og-image-1200.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/brand/favicon.svg', type: 'image/svg+xml' }],
    apple: '/brand/app-icon-180.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
