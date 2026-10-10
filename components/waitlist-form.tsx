'use client'

import { useId, useState, useTransition } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { joinWaitlist } from '@/app/actions'
import { cn } from '@/lib/utils'

const errorCopy = {
  invalid_email: 'Please enter a valid email address.',
  rate_limited: 'Too many attempts. Please try again in a few minutes.',
  unexpected: 'Something went wrong. Please try again.',
} as const

type ErrorKey = keyof typeof errorCopy

export function WaitlistForm({
  source,
  inputId,
  className,
}: {
  source: 'hero' | 'footer'
  inputId?: string
  className?: string
}) {
  const generatedId = useId()
  const id = inputId ?? generatedId
  const helperId = `${id}-helper`
  const [error, setError] = useState<ErrorKey | null>(null)
  const [done, setDone] = useState(false)
  const [pending, startTransition] = useTransition()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setError(null)
    startTransition(async () => {
      const result = await joinWaitlist(formData)
      if (result.ok) setDone(true)
      else setError(result.error)
    })
  }

  if (done) {
    return (
      <div
        role="status"
        className={cn(
          'flex h-11 w-full max-w-md items-center justify-center gap-2 rounded-full border border-border text-[15px] font-medium text-brand',
          className,
        )}
      >
        {"You're on the list"}
        <Check className="size-4" aria-hidden="true" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn('flex w-full max-w-md flex-col gap-2', className)}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@channel.com"
          aria-invalid={error === 'invalid_email' || undefined}
          aria-describedby={error ? helperId : undefined}
          disabled={pending}
          className="h-11 min-w-0 flex-1 rounded-full border border-border-strong bg-background px-5 text-[15px] text-foreground transition-colors duration-150 placeholder:text-faint focus-visible:border-brand focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none aria-invalid:border-danger disabled:opacity-60"
        />
        <input type="hidden" name="source" value={source} />
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${id}-company`}>Company</label>
          <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-semibold text-background transition-opacity duration-150 hover:opacity-90 focus-visible:ring-4 focus-visible:ring-brand-soft focus-visible:outline-none disabled:opacity-70"
        >
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {pending ? 'Signing up' : 'Sign up'}
        </button>
      </div>
      {error && (
        <p id={helperId} role="alert" className="px-5 text-left text-[13px] text-danger">
          {errorCopy[error]}
        </p>
      )}
      <p className="px-5 text-[12px] leading-relaxed text-muted-foreground">
        By signing up you agree to our{' '}
        <a href="/terms" className="underline underline-offset-2 transition-colors duration-150 hover:text-foreground">
          Terms
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline underline-offset-2 transition-colors duration-150 hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
