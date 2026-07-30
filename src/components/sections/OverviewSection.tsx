import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { ImageWithSkeleton } from '@/components/shared/ImageWithSkeleton'
import { MetricTile } from '@/components/shared/MetricTile'
import { Skeleton } from '@/components/ui/skeleton'
import { useInView } from '@/hooks/useInView'
import { STATS } from '@/data/stats'
import { PROJECTS } from '@/data/projects'
import { TESTIMONIALS } from '@/data/testimonials'
import { cn } from '@/lib/utils'

const EXPLORE_LINKS = [
  { title: '8 QA services', description: 'Web, mobile, API, automation, security & more.', href: '#services' },
  { title: 'Publications', description: 'Practical QA writing, shared openly.', href: '#publications' },
  { title: 'ISTQB certified', description: 'Foundation Level 4.0 — verified.', href: '#experience' },
]

export function OverviewSection({ isLoading }: { isLoading: boolean }) {
  const { ref: metricsRef, isInView: metricsInView } = useInView<HTMLDivElement>({ threshold: 0.4 })
  const featuredProject = PROJECTS[0]
  const featuredQuote = TESTIMONIALS[0]

  return (
    <section id="overview" className="scroll-mt-20 pb-8">
      <div className="mb-8 grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.78rem] text-primary">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Available for freelance QA work
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-[2.9rem]">
            Ship with <span className="text-primary">confidence.</span>
            <br />I break it so users don't.
          </h1>
          <p className="mt-3.5 max-w-[46ch] text-muted-foreground">
            Detail-oriented SQA Engineer across manual, API, and automation testing — currently testing a
            multi-tenant security SaaS platform (ThreatIDR &amp; Risk Sensor), with a track record spanning
            Diagnostics, POS, HRMS, Loan Management and EdTech.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a href="mailto:Amudassor@gmail.com" className={buttonVariants({ variant: 'default' })}>
              Hire me <ArrowRight className="size-4" />
            </a>
            <a href="#projects" className={buttonVariants({ variant: 'outline' })}>
              View work
            </a>
            <a href="/resume.pdf" download className={buttonVariants({ variant: 'outline' })}>
              Download résumé
            </a>
          </div>
        </div>
        <ImageWithSkeleton
          src="/images/1776926451174.png"
          alt="Mudassor Ahmed Chowdhury"
          className="order-first size-24 shrink-0 rounded-full border-2 border-primary/35 lg:order-none lg:size-[150px]"
          fallback={
            <div className="order-first flex size-24 shrink-0 items-center justify-center rounded-full border-2 border-primary/35 bg-card font-display text-2xl text-primary lg:order-none lg:size-[150px]">
              MC
            </div>
          }
        />
      </div>

      <div ref={metricsRef} className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <Skeleton className="mb-2 h-6 w-12" />
                <Skeleton className="h-3 w-20" />
              </div>
            ))
          : STATS.map((stat) => <MetricTile key={stat.label} stat={stat} active={metricsInView} />)}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        {isLoading ? (
          <>
            <CardSkeleton lines={4} withIcon={false} />
            <CardSkeleton lines={3} withIcon={false} />
          </>
        ) : (
          <>
            <Card>
              <CardContent>
                <Badge variant="outline">{featuredProject.label}</Badge>
                <h3 className="mt-3 text-[1.15rem] font-semibold">{featuredProject.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{featuredProject.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {featuredProject.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-3 text-sm text-muted-foreground">
                  <span className="font-mono text-xs text-primary">RESULT&nbsp;&nbsp;</span>
                  {featuredProject.result}
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardContent className="flex flex-1 flex-col">
                <span className="text-2xl leading-none text-primary/60">&ldquo;</span>
                <p className="mt-1 text-sm text-muted-foreground">{featuredQuote.quote}</p>
                <div className="mt-auto pt-4">
                  <b className="font-medium">{featuredQuote.name}</b>
                  <div className="text-xs text-muted-foreground">{featuredQuote.role}</div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} lines={1} withIcon={false} />)
          : EXPLORE_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary'
                )}
              >
                <div className="flex items-center justify-between">
                  <b className="font-semibold">{item.title}</b>
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </a>
            ))}
      </div>
    </section>
  )
}
