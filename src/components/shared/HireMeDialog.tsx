import { useState, type FormEvent, type ReactNode } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONTACT_EMAIL = 'Amudassor@gmail.com'
// Formspree form ID (public by design). Set VITE_FORMSPREE_ID in .env.local — see .env.example.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

const PROJECT_TYPES = [
  'Manual / functional testing',
  'API testing',
  'Test automation',
  'Security / multi-tenant QA',
  'Mobile testing',
  'Other',
]

const fieldClass =
  'w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive'

interface FormState {
  name: string
  email: string
  type: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', type: PROJECT_TYPES[0], message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Wraps any trigger element; opens a hire-me form. Submitting opens the visitor's email app, pre-filled. */
export function HireMeDialog({ children }: { children: (open: () => void) => ReactNode }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState<false | 'delivered' | 'mailto'>(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setSent(false)
      setErrors({})
      setSubmitError('')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next: typeof errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'Please tell me a little about the project.'
    setErrors(next)
    setSubmitError('')
    if (Object.keys(next).length > 0) return

    const subject = `QA project enquiry — ${form.type}`

    // No form service configured: fall back to the visitor's email app.
    if (!FORMSPREE_ID) {
      const body = `Hi Mudassor,

${form.message.trim()}

— ${form.name.trim()}
${form.email.trim()}`
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setSent('mailto')
      setForm(EMPTY)
      return
    }

    // Honeypot: real visitors never fill this hidden field; bots do.
    const honeypot = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value
    if (honeypot) {
      setSent('delivered')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          _replyto: form.email.trim(),
          _subject: subject,
          service: form.type,
          message: form.message.trim(),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSent('delivered')
      setForm(EMPTY)
    } catch {
      setSubmitError(`Couldn't send your message. Please try again or email ${CONTACT_EMAIL} directly.`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {children(() => setOpen(true))}
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-[70] max-h-[90vh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-card p-5 text-card-foreground shadow-xl outline-none transition-all data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Dialog.Title className="font-display text-lg font-semibold">Let&rsquo;s work together</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                  Tell me about your project and I&rsquo;ll get back to you.
                </Dialog.Description>
              </div>
              <Dialog.Close render={<Button variant="ghost" size="icon-sm" aria-label="Close" />}>
                <X className="size-4" />
              </Dialog.Close>
            </div>

            {sent ? (
              <div className="mt-5 space-y-3 text-sm" role="status">
                {sent === 'delivered' ? (
                  <p className="text-foreground">Thank you! Your message has been sent. I&rsquo;ll reply by email soon.</p>
                ) : (
                  <>
                    <p className="text-foreground">
                      Your email app should have opened with the message ready to send. Just press send there.
                    </p>
                    <p className="text-muted-foreground">
                      Nothing opened? Email me directly at{' '}
                      <a className="text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </>
                )}
                <Button onClick={() => handleOpenChange(false)}>Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-3.5">
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <div>
                  <label htmlFor="hire-name" className="mb-1 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="hire-name"
                    className={fieldClass}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'hire-name-err' : undefined}
                  />
                  {errors.name && (
                    <p id="hire-name-err" className="mt-1 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="hire-email" className="mb-1 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="hire-email"
                    type="email"
                    className={fieldClass}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'hire-email-err' : undefined}
                  />
                  {errors.email && (
                    <p id="hire-email-err" className="mt-1 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="hire-type" className="mb-1 block text-xs font-medium text-muted-foreground">
                    What do you need?
                  </label>
                  <select
                    id="hire-type"
                    className={fieldClass}
                    value={form.type}
                    onChange={(e) => update('type', e.target.value)}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hire-message" className="mb-1 block text-xs font-medium text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    id="hire-message"
                    rows={4}
                    className={fieldClass}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'hire-message-err' : undefined}
                  />
                  {errors.message && (
                    <p id="hire-message-err" className="mt-1 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p role="alert" className="text-sm text-destructive">
                    {submitError}
                  </p>
                )}
                <Button type="submit" size="lg" className="mt-1" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send message'}
                </Button>
                {!FORMSPREE_ID && (
                  <p className="text-center text-xs text-muted-foreground">
                    Opens your email app with this message pre-filled.
                  </p>
                )}
              </form>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
