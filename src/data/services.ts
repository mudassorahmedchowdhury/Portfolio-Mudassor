import { Globe, Smartphone, Server, RefreshCw, Bug, Headset, Zap, Lock, type LucideIcon } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    icon: Globe,
    title: 'Website testing',
    description: 'End-to-end functional, UI, cross-browser and responsive testing so your site works everywhere.',
  },
  {
    icon: Smartphone,
    title: 'Mobile app testing',
    description: 'Real-device manual testing for Android & iOS — usability, flows, and edge cases.',
  },
  {
    icon: Server,
    title: 'API testing',
    description: 'Postman-driven validation of endpoints, status codes, payloads, schemas and errors.',
  },
  {
    icon: RefreshCw,
    title: 'Regression testing',
    description: "Structured, repeatable suites so new releases don't break old features.",
  },
  {
    icon: Bug,
    title: 'Bug reporting',
    description: 'Reproducible reports with severity, evidence and clear steps your devs will love.',
  },
  {
    icon: Headset,
    title: 'QA consultation',
    description: 'Set up your QA process from scratch — strategy, tooling, and reporting standards.',
  },
  {
    icon: Zap,
    title: 'Automation testing',
    description: 'Hybrid E2E and regression automation with Java, Selenium, Playwright and TestNG.',
  },
  {
    icon: Lock,
    title: 'Security & multi-tenant QA',
    description: 'RBAC, ACL and tenant-isolation validation, plus threat-detection pipeline testing.',
  },
]
