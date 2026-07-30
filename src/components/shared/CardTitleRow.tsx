import type { ReactNode } from 'react'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface CardTitleRowProps {
  title: string
  icon?: ReactNode
  badge?: string
  className?: string
}

/**
 * The one card-title layout every card in the site uses, so alignment/spacing
 * never drifts between sections: icon+title on the left, an optional badge
 * pinned to the right.
 */
export function CardTitleRow({ title, icon, badge, className }: CardTitleRowProps) {
  return (
    <CardHeader className={cn('flex flex-row items-center justify-between gap-2 space-y-0', className)}>
      <div className="flex min-w-0 items-center gap-2">
        {icon && <span className="shrink-0 text-primary">{icon}</span>}
        <CardTitle className="truncate text-base font-semibold">{title}</CardTitle>
      </div>
      {badge && (
        <Badge variant="outline" className="shrink-0">
          {badge}
        </Badge>
      )}
    </CardHeader>
  )
}
