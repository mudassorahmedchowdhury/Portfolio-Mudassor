export interface BringItem {
  title: string
  description: string
}

export const BRING: BringItem[] = [
  { title: 'Thorough coverage', description: 'Functional, regression, UI, cross-browser & responsive.' },
  { title: 'Clear bug reports', description: 'Steps, expected vs actual, severity, evidence — every time.' },
  { title: 'API confidence', description: 'Postman collections, status codes, schema & edge cases.' },
  { title: 'Security & multi-tenant', description: 'RBAC, ACL, tenant-level data isolation, threat pipelines.' },
  { title: 'Agile-ready', description: 'Jira — plugged into sprint planning & SQA activities.' },
]

export const ABOUT_BIO = [
  "I approach every product like a first-time user and a determined skeptic at the same time. My job is to find the problems before your customers do — and to report them so clearly that they get fixed fast.",
  'I specialize in manual testing across web and mobile, API validation with Postman, and building clear, reproducible bug reports. I care about coverage, communication, and shipping software teams can trust.',
]

export const TESTING_PHILOSOPHY =
  "A test that never fails isn't proving quality — it's just checking a box. I test to learn where things break, not to confirm they work."

export const EDUCATION = 'B.Sc. in CSE — Daffodil International University (CGPA 3.18, 2023)'
