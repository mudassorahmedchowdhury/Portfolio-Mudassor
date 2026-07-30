import { Card, CardContent } from '@/components/ui/card'
import { CardTitleRow } from '@/components/shared/CardTitleRow'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SERVICES } from '@/data/services'

export function ServicesSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="services" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="services"
        title="How I can help"
        subtitle="Flexible QA for startups and teams — from one-off audits to ongoing support."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} lines={2} />)
          : SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title}>
                  <CardTitleRow title={service.title} icon={<Icon className="size-5" />} />
                  <CardContent>
                    <p className="text-[0.88rem] text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
      </div>
    </section>
  )
}
