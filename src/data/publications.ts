export interface Publication {
  kind: string
  title: string
  description: string
  tags: string[]
  href?: string
}

export const PUBLICATIONS: Publication[] = [
  {
    kind: 'Research publication',
    title: 'Detecting Vulnerabilities in Websites Using Multi-Scale Approaches',
    description:
      'An approach for identifying malicious content and vulnerabilities in websites using multi-scale techniques. Published in IJECE.',
    tags: ['Security', 'Vulnerability detection', 'Research'],
    href: '/documents/detecting-vulnerabilities-multi-scale-approaches.pdf',
  },
  {
    kind: 'Testing guide',
    title: 'Apache Airflow SQA Testing Guide',
    description:
      'A practical guide to quality assurance for Apache Airflow data pipelines — test strategy, cases, and reporting.',
    tags: ['Airflow', 'STLC', 'PDF / DOCX'],
  },
]
