import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ABOUT_BIO, BRING, EDUCATION, TESTING_PHILOSOPHY } from '@/data/about'
import { cn } from '@/lib/utils'

export function AboutSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="about" className="scroll-mt-20 py-14">
      <SectionHeading eyebrow="about" title="Quality isn't a phase. It's a habit." />
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
        <div>
          {ABOUT_BIO.map((paragraph, i) => (
            <p key={paragraph.slice(0, 20)} className={cn('text-muted-foreground', i > 0 && 'mt-3')}>
              {paragraph}
            </p>
          ))}
          <Card className="mt-4 rounded-l-none border-l-2 border-l-primary">
            <CardContent>
              <p className="font-mono text-xs text-muted-foreground">testing philosophy</p>
              <p className="mt-1.5 font-medium">&ldquo;{TESTING_PHILOSOPHY}&rdquo;</p>
            </CardContent>
          </Card>
          <p className="mt-4 text-[0.88rem] text-muted-foreground">
            <b className="text-foreground">Education:</b> {EDUCATION}
          </p>
        </div>

        {isLoading ? (
          <CardSkeleton lines={5} withIcon={false} />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>What I bring to your team</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3.5">
              {BRING.map((item) => (
                <div key={item.title} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-primary" />
                  <div>
                    <b className="text-[0.92rem] font-semibold">{item.title}</b>
                    <p className="text-[0.88rem] text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
