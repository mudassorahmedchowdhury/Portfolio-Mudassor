export type ProjectCategory = 'solo' | 'contrib'

export interface Project {
  category: ProjectCategory
  label: string
  title: string
  description: string
  tags: string[]
  scope: string
  result: string
}

export const PROJECTS: Project[] = [
  {
    category: 'solo',
    label: 'Pipeline Co., Ltd',
    title: 'ThreatIDR & Risk Sensor — SaaS QA',
    description: 'Manual, API and automation testing for a multi-tenant threat-detection SaaS platform.',
    tags: ['RBAC', 'Tenant isolation', 'AWS S3/Athena', 'Airflow'],
    scope: 'Security workflows, tenant-level data isolation',
    result: 'End-to-end validation of log ingestion → alert generation',
  },
  {
    category: 'contrib',
    label: 'Softzino Technologies',
    title: 'Diagnostic, POS, HRMS & Loan Management QA',
    description: 'QA across Diagnostic Management, Petty Cash, Inventory & POS, Loan Management, HRMS and Retail.',
    tags: ['Multi-tenancy', 'ACL', 'Web & Mobile (APK)', 'Postman'],
    scope: 'UI, sanity, smoke, regression, integration & DB testing',
    result: 'Verified pagination, lazy loading & API data accuracy',
  },
  {
    category: 'solo',
    label: 'Softzino Technologies',
    title: 'Hybrid Selenium E2E & Regression Suite',
    description: 'Built a hybrid automation script covering end-to-end flows and regression checks.',
    tags: ['Java', 'Selenium', 'TestNG', 'Data-driven'],
    scope: 'E2E & regression automation for core workflows',
    result: 'Reduced manual regression effort each release cycle',
  },
  {
    category: 'solo',
    label: 'Publication',
    title: 'Apache Airflow — Testing Guide',
    description: 'Authored a practical SQA testing guide for Apache Airflow workflows (published resource).',
    tags: ['Documentation', 'Airflow', 'STLC'],
    scope: 'Test strategy, cases & reporting for data pipelines',
    result: 'Published as a document on LinkedIn',
  },
  {
    category: 'contrib',
    label: 'DIU Micro-Credentials',
    title: 'SQA Training Program — Mentor',
    description: 'Conducted a 10-week (38-hour) SQA training program covering SDLC, STLC and API testing.',
    tags: ['SDLC', 'STLC', 'Postman', 'Jira'],
    scope: 'Mentoring learners through hands-on projects',
    result: 'Assessed progress across the full cohort',
  },
]
