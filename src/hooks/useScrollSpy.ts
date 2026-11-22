import { useEffect, useState } from 'react'

/** Highlights whichever section is currently around the vertical middle of the viewport. */
export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const key = sectionIds.join(',')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActiveId(topMost.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))

    // The last section is often too short to reach the observer's middle band,
    // so force it active once the page is scrolled to the bottom.
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) setActiveId(elements[elements.length - 1].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return activeId
}
