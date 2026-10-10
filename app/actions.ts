'use server'

import { createHash } from 'node:crypto'
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: 'invalid_email' | 'rate_limited' | 'unexpected' }

const MAX_ATTEMPTS_PER_WINDOW = 5

const schema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email().max(254)),
  source: z.enum(['hero', 'footer']),
})

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Supabase env vars are missing')
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
}

async function getIpHash() {
  const h = await headers()
  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown'
  return createHash('sha256').update(`thumbnailprompts:${ip}`).digest('hex')
}

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  // Honeypot: real users never see or fill this field. Pretend success so bots don't retry.
  const honeypot = formData.get('company')
  if (typeof honeypot === 'string' && honeypot.length > 0) return { ok: true }

  const parsed = schema.safeParse({
    email: formData.get('email') ?? '',
    source: formData.get('source') === 'footer' ? 'footer' : 'hero',
  })
  if (!parsed.success) return { ok: false, error: 'invalid_email' }

  try {
    const supabase = getSupabase()

    const { data: attempts, error: rateError } = await supabase.rpc('register_waitlist_attempt', {
      p_ip_hash: await getIpHash(),
    })
    if (rateError) {
      console.error('[waitlist] rate limit check failed', rateError.message)
      return { ok: false, error: 'unexpected' }
    }
    if (typeof attempts === 'number' && attempts > MAX_ATTEMPTS_PER_WINDOW) {
      return { ok: false, error: 'rate_limited' }
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: parsed.data.email, source: parsed.data.source })

    // 23505 = unique violation: the email is already on the list, which is a success for the visitor.
    if (error && error.code !== '23505') {
      console.error('[waitlist] insert failed', error.code, error.message)
      return { ok: false, error: 'unexpected' }
    }

    return { ok: true }
  } catch (err) {
    console.error('[waitlist] unexpected error', err)
    return { ok: false, error: 'unexpected' }
  }
}
