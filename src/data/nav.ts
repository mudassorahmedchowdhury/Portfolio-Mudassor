export interface NavSection {
  id: string
  label: string
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'testimonials', label: 'Testimonials' },
]
