import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardTitleRow } from '@/components/shared/CardTitleRow'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SKILL_GROUPS } from '@/data/skills'

export function SkillsSection({ isLoading }: { isLoading: boolean }) {
  return (
    <section id="skills" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="skills"
        title="The testing stack"
        subtitle="A focused, practical QA toolkit — built around finding real issues."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} lines={2} withIcon={false} />)
          : SKILL_GROUPS.map((group) => (
              <Card key={group.title}>
                <CardTitleRow title={group.title} />
                <CardContent className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
      </div>
    </section>
  )
}
