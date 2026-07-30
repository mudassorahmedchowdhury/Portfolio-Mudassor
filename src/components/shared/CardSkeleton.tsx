import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton({ lines = 3, withIcon = true }: { lines?: number; withIcon?: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 space-y-0">
        {withIcon && <Skeleton className="size-8 shrink-0 rounded-lg" />}
        <Skeleton className="h-4 w-32" />
      </CardHeader>
      <CardContent className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className={i === lines - 1 ? 'h-3 w-2/3' : 'h-3 w-full'} />
        ))}
      </CardContent>
    </Card>
  )
}
