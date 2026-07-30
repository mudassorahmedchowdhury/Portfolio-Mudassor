import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div className="max-w-[52ch]">
        <span className="font-mono text-[0.78rem] text-primary">{eyebrow}</span>
        <h2 className="mt-1.5 text-2xl font-semibold sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
