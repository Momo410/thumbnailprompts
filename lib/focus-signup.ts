export const HERO_EMAIL_ID = 'hero-email'

export function focusSignup() {
  const input = document.getElementById(HERO_EMAIL_ID) as HTMLInputElement | null
  if (!input) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  input.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
  input.focus({ preventScroll: true })
}
