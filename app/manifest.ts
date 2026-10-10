import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      { src: '/brand/app-icon-180.png', sizes: '180x180', type: 'image/png' },
      { src: '/brand/app-icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/brand/app-icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }
}
