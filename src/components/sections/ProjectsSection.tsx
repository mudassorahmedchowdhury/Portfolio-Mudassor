import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CardTitleRow } from '@/components/shared/CardTitleRow'
import { CardSkeleton } from '@/components/shared/CardSkeleton'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PROJECTS, type ProjectCategory } from '@/data/projects'

type Filter = 'all' | ProjectCategory

export function ProjectsSection({ isLoading }: { isLoading: boolean }) {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter)

  return (
    <section id="projects" className="scroll-mt-20 py-14">
      <SectionHeading
        eyebrow="projects"
        title="Selected work"
        subtitle="Projects I've tested end-to-end solo, and ones I've contributed QA to alongside a team."
      />
      <Tabs value={filter} onValueChange={(value) => setFilter(value as Filter)} className="mb-5">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="solo">Solo QA</TabsTrigger>
          <TabsTrigger value="contrib">Contributions</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} lines={4} withIcon={false} />)
          : filtered.map((project) => (
              <Card key={project.title}>
                <CardTitleRow title={project.title} badge={project.label} />
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3 space-y-1 border-t border-border pt-3 text-sm text-muted-foreground">
                    <p>
                      <span className="font-mono text-xs text-primary">SCOPE&nbsp;&nbsp;</span>
                      {project.scope}
                    </p>
                    <p>
                      <span className="font-mono text-xs text-primary">RESULT&nbsp;</span>
                      <b className="text-foreground">{project.result}</b>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </section>
  )
}
