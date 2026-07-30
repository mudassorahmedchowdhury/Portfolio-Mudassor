import { useCountUp } from '@/hooks/useCountUp'
import type { Stat } from '@/data/stats'

export function MetricTile({ stat, active }: { stat: Stat; active: boolean }) {
  const display = useCountUp(stat.value, active)

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-semibold text-primary">{display}</div>
      <div className="text-xs text-muted-foreground">{stat.label}</div>
    </div>
  )
}
