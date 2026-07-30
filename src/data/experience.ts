export interface ExperienceEntry {
  date: string
  role: string
  org: string
  description: string
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    date: '17 May 2026 — Present',
    role: 'SQA Engineer',
    org: 'Pipeline Co., Ltd · Dhaka',
    description:
      'Manual, API and automation testing for a multi-tenant SaaS platform (ThreatIDR & Risk Sensor). Validated RBAC, tenant-level data isolation and risk-detection accuracy. Tested AWS pipelines (S3, Athena) and Airflow workflows.',
  },
  {
    date: '1 Sep 2025 — 30 Nov 2025',
    role: 'SQA Trainer',
    org: 'DIU Micro-Credentials Academy · Dhaka',
    description:
      'Ran a 10-week (38-hour) online SQA program: SDLC, STLC, test case design, bug lifecycle, API testing (Postman) and Jira. Mentored learners through hands-on projects.',
  },
  {
    date: '2 Oct 2023 — 15 May 2026',
    role: 'Associate — SQA Engineer',
    org: 'Softzino Technologies · Dhaka',
    description:
      'Tested Diagnostic Management, POS, Loan Management, HRMS and Retail. Multi-tenancy & ACL testing, UI/sanity/smoke/regression/integration and DB testing across Web and Mobile. Built a hybrid Selenium suite.',
  },
  {
    date: '1 Dec 2022 — 30 Jul 2023',
    role: 'SQA — Project Base',
    org: 'Creative Soft Technology Ltd. · Dhaka',
    description:
      'UI/UX validation and manual testing for Konnect.edu.bd (EdTech). API testing via Postman; led test planning, execution and reporting to stakeholders.',
  },
]

export interface Certification {
  title: string
  meta: string
  url: string
}

export const CERT: Certification = {
  title: 'ISTQB® Certified Tester — Foundation Level 4.0',
  meta: 'Cert No. 25-CTFL 4-259052-12 · Passed 16/03/2025',
  url: 'https://zertdb.isqi.org/en/certification/verification/t/F9_fxx-c%24bv133pR3Hh3',
}
