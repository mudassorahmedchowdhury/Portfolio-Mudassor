import { ExternalLink, Info, Mail, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { ImageWithSkeleton } from '@/components/shared/ImageWithSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TESTIMONIALS } from '@/data/testimonials'

const LINKEDIN_RECOMMENDATIONS_URL = 'https://www.linkedin.com/in/mudassor/details/recommendations/'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export function TestimonialsSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="testimonials" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="testimonials"
        title="What people say"
        subtitle="From managers, engineers and collaborators I've worked with."
        action={
          <a
            href={LINKEDIN_RECOMMENDATIONS_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-1 text-sm text-primary hover:underline"
          >
            Verify on LinkedIn <ExternalLink className="size-3.5" />
          </a>
        }
      />
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-4 break-inside-avoid">
                <CardSkeleton lines={3} withIcon={false} />
              </div>
            ))
          : TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="mb-4 break-inside-avoid">
                <Card>
                  <CardContent>
                    <span className="text-[1.4rem] leading-none text-primary/60">&ldquo;</span>
                    <p className="mt-0.5 text-sm text-muted-foreground">{testimonial.quote}</p>
                    <div className="mt-3 flex items-center gap-2.5 border-t border-border pt-3">
                      <ImageWithSkeleton
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="size-9 shrink-0 rounded-full"
                        fallback={
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground">
                            {initials(testimonial.name)}
                          </div>
                        }
                      />
                      <div className="min-w-0 flex-1">
                        <b className="text-sm font-medium">{testimonial.name}</b>
                        <div className="truncate text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              aria-label={`Contact info for ${testimonial.name}`}
                            />
                          }
                        >
                          <Info className="size-4 text-muted-foreground" />
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-64">
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <div className="mt-1.5 flex flex-col gap-1.5 text-xs text-muted-foreground">
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener"
                              className="flex items-center gap-1.5 hover:text-primary"
                            >
                              <ExternalLink className="size-3.5 shrink-0" />
                              LinkedIn profile
                            </a>
                            {testimonial.email && (
                              <a
                                href={`mailto:${testimonial.email}`}
                                className="flex items-center gap-1.5 hover:text-primary"
                              >
                                <Mail className="size-3.5 shrink-0" />
                                {testimonial.email}
                              </a>
                            )}
                            {testimonial.phone && (
                              <a
                                href={`tel:${testimonial.phone}`}
                                className="flex items-center gap-1.5 hover:text-primary"
                              >
                                <Phone className="size-3.5 shrink-0" />
                                {testimonial.phone}
                              </a>
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
      </div>
    </section>
  )
}
