import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { OverviewSection } from '@/components/sections/OverviewSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { PublicationsSection } from '@/components/sections/PublicationsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Container className="pt-8 pb-5">
          <OverviewSection isLoading={isLoading} />
          <AboutSection isLoading={isLoading} />
          <SkillsSection isLoading={isLoading} />
          <ServicesSection isLoading={isLoading} />
          <ProjectsSection isLoading={isLoading} />
          <ExperienceSection isLoading={isLoading} />
          <PublicationsSection isLoading={isLoading} />
          <TestimonialsSection isLoading={isLoading} />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
