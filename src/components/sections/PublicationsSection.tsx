import { FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardTitleRow } from '@/components/shared/CardTitleRow'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PUBLICATIONS } from '@/data/publications'

export function PublicationsSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="publications" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="publications"
        title="Publications & guides"
        subtitle="Sharing what I learn — practical QA writing for the community."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {isLoading
          ? Array.from({ length: 2 }).map((_, i) => <CardSkeleton key={i} lines={3} />)
          : PUBLICATIONS.map((pub) => {
              const card = (
                <Card className={pub.href ? 'h-full transition-colors hover:border-primary' : undefined}>
                  <CardTitleRow title={pub.title} icon={<FileText className="size-5" />} badge={pub.kind} />
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{pub.description}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )

              return pub.href ? (
                <a key={pub.title} href={pub.href} target="_blank" rel="noopener" className="block">
                  {card}
                </a>
              ) : (
                <div key={pub.title}>{card}</div>
              )
            })}
      </div>
    </section>
  )
}
