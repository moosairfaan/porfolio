export const LINKS = {
  github: 'https://github.com/moosairfaan',
  linkedin: 'https://www.linkedin.com/in/moosa-irfaan',
  email: 'moosairfaan0325@outlook.com',
  resume: '/resume.pdf',
}

export const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: LINKS.resume, external: true },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  name: 'Moosa Irfaan',
  description:
    'Software Engineer building AI systems, developer tools, and full-stack applications.',
  status: ['Graduate Student', 'New York University'],
  portrait: '/profile.jpg',
  portraitAlt: 'Portrait of Moosa Irfaan',
  links: [
    { label: 'GitHub', href: LINKS.github, external: true },
    { label: 'LinkedIn', href: LINKS.linkedin, external: true },
    { label: 'Resume', href: LINKS.resume, external: true },
    { label: 'Email', href: `mailto:${LINKS.email}` },
  ],
}

export const ABOUT = {
  lead:
    'M.S. Computer Engineering student at NYU focused on AI systems, machine learning, full-stack engineering, data infrastructure, and developer tools. I care about software that feels considered — clear interfaces, durable systems, and work that stays out of the way.',
  cells: [
    { label: 'Education', value: 'M.S. Computer Engineering, NYU' },
    { label: 'Location', value: 'New York' },
    {
      label: 'Interests',
      value: 'AI systems, developer tools, media tooling',
    },
    {
      label: 'Current Focus',
      value: 'Machine learning · full stack · data infrastructure',
    },
  ],
}

export { PROJECTS } from './projects'

export const EXPERIENCE = [
  {
    role: 'Co-Founder & Engineer',
    company: 'Verri Labs Inc. · New York, NY',
    period: 'June 2026 – Present',
    points: [
      'Building Scout, an automated security response platform: Python/FastAPI backend, Next.js dashboard, GitHub App integration, and Claude API orchestration for automated finding triage.',
      'Designed the system architecture end-to-end and shipped supporting infra (Vercel deployment, Resend + Supabase for waitlist/email).',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'PeopleTime',
    period: '2025',
    points: [
      'Developed Flutter mobile application features with Python and Java backend services.',
      'Improved application performance by 44%.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Fred Silver & Company',
    period: '2024–2025',
    points: [
      'Built an internal inventory management platform replacing manual Excel workflows.',
      'Optimized application performance using caching and efficient backend processing.',
    ],
  },
]

export const TECH = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'FastAPI', 'Node.js', 'Flutter'],
  },
  {
    label: 'Infrastructure',
    items: [
      'PostgreSQL',
      'Redis',
      'SQLite',
      'GitHub Actions',
      'Railway',
      'Playwright',
      'Vite',
      'ffmpeg',
    ],
  },
]

export const EDUCATION = [
  {
    school: 'New York University',
    degree: 'M.S. Computer Engineering',
    detail: '2026–2027',
  },
  {
    school: "St. Joseph's University",
    degree: 'B.S. Computer Science & Mathematics',
    detail: '2022–2026',
  },
]
