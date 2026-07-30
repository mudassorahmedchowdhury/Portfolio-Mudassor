export interface SkillGroup {
  title: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Testing types',
    skills: [
      'Manual',
      'Functional',
      'Regression',
      'Smoke',
      'Sanity',
      'Integration',
      'UI/UX',
      'Cross-browser',
      'Multi-tenancy',
      'ACL / RBAC',
      'Database',
    ],
  },
  {
    title: 'Automation & API',
    skills: ['Postman', 'Selenium', 'Playwright (JS)', 'Java', 'TestNG', 'Data-driven', 'API testing'],
  },
  {
    title: 'Tools & platforms',
    skills: ['Jira', 'Git', 'GitHub', 'Hyper-V', 'MobaXterm', 'Apache Airflow', 'AWS S3', 'AWS Athena', 'SDLC', 'STLC'],
  },
]
