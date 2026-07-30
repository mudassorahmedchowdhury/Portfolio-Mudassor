import { Mail, Phone, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/Container'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4 0 4.75 2.65 4.75 6.1V24h-4v-7c0-1.67-.03-3.8-2.3-3.8-2.3 0-2.65 1.8-2.65 3.68V24H8z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border/60">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
        <div className="flex flex-wrap gap-4">
          <a href="mailto:Amudassor@gmail.com" className="flex items-center gap-1.5 hover:text-primary">
            <Mail className="size-4 text-primary" />
            Amudassor@gmail.com
          </a>
          <a href="tel:+8801311773124" className="flex items-center gap-1.5 hover:text-primary">
            <Phone className="size-4 text-primary" />
            +880 1311 773124
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4 text-primary" />
            Uttara, Dhaka, Bangladesh
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/mudassor/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-primary"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Mudassor-Ahmed-Chowdhury"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="hover:text-primary"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>
    </footer>
  )
}
