import { ShieldCheck, ExternalLink, CalendarClock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CardTitleRow } from '@/components/shared/CardTitleRow'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CERT, EXPERIENCE } from '@/data/experience'

export function ExperienceSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="experience" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="experience"
        title="Work & credentials"
        subtitle="The roles that shaped how I test — plus verified certifications."
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6 border-l border-border pl-5">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))
            : EXPERIENCE.map((entry) => (
                <div key={entry.role + entry.date} className="relative">
                  <span className="absolute -left-[27px] top-1.5 size-[11px] rounded-full bg-primary ring-4 ring-background" />
                  <div className="font-mono text-xs text-primary">{entry.date}</div>
                  <h3 className="mt-0.5 font-semibold">{entry.role}</h3>
                  <div className="text-sm text-muted-foreground/80">{entry.org}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.description}</p>
                </div>
              ))}
        </div>

        <div className="flex flex-col gap-3">
          {isLoading ? (
            <CardSkeleton lines={2} />
          ) : (
            <>
              <Card>
                <CardTitleRow title={CERT.title} icon={<ShieldCheck className="size-5" />} />
                <CardContent>
                  <p className="text-xs text-muted-foreground">{CERT.meta}</p>
                  <a
                    href={CERT.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-primary"
                  >
                    Verify credential <ExternalLink className="size-3.5" />
                  </a>
                </CardContent>
              </Card>
              <Card className="border-dashed">
                <CardContent className="flex items-center gap-2.5 text-muted-foreground">
                  <CalendarClock className="size-5" />
                  <span className="text-sm">Next certification — coming soon</span>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
