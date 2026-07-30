import { NAV_SECTIONS } from '@/data/nav'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Container } from '@/components/layout/Container'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SECTION_IDS = NAV_SECTIONS.map((section) => section.id)

export function Navbar() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-[60px] items-center gap-3.5">
        <a href="#overview" className="flex shrink-0 items-center gap-2 font-display font-semibold">
          <span className="size-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Mudassor <span className="text-primary">.qa</span>
        </a>

        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-1 gap-0.5 overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'shrink-0 rounded-full px-3 py-1.5 text-sm transition-colors',
                activeId === section.id
                  ? 'bg-secondary text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a href="mailto:Amudassor@gmail.com" className={buttonVariants({ variant: 'default' })}>
            Hire me
          </a>
        </div>
      </Container>
    </header>
  )
}
