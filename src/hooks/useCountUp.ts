import { useEffect, useState } from 'react'

const NUMERIC = /^(\d+)(\+?)$/

/** Animates a "6+" / "3" / "ISTQB"-style stat value once `active` becomes true. */
export function useCountUp(raw: string, active: boolean) {
  const [display, setDisplay] = useState(() => {
    const match = raw.match(NUMERIC)
    return match ? `0${match[2]}` : raw
  })

  useEffect(() => {
    if (!active) return

    const match = raw.match(NUMERIC)
    if (!match) {
      setDisplay(raw)
      return
    }

    const target = Number(match[1])
    const suffix = match[2]
    const step = Math.max(1, Math.round(target / 22))
    let current = 0
    let frame: number

    const tick = () => {
      current = Math.min(target, current + step)
      setDisplay(`${current}${suffix}`)
      if (current < target) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [active, raw])

  return display
}
