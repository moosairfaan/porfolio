export const LINKS = {
  github: 'https://github.com/moosairfaan',
  linkedin: 'https://www.linkedin.com/in/moosa-irfaan',
  email: 'moosairfaan03@gmail.com',
  resume: '/resume.pdf',
  // Paste your tech Instagram URL here, e.g. 'https://instagram.com/yourhandle'
  instagram: null,
}

export const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Explore', href: '#explore' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: LINKS.resume, external: true },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  name: 'Moosa Irfaan',
  handle: 'moosairfaan.dev',
  description:
    'Software engineer building AI systems, developer tools, and full-stack applications. Co-founder at Verri Labs.',
  status: [
    'Graduate Student · New York University',
    'M.S. Computer Engineering',
    'New York, NY',
  ],
  portrait: '/profile.jpg',
  portraitAlt: 'Portrait of Moosa Irfaan',
  links: [
    { label: 'GitHub', href: LINKS.github, external: true },
    { label: 'LinkedIn', href: LINKS.linkedin, external: true },
    { label: 'Resume', href: LINKS.resume, external: true },
    { label: 'Email', href: `mailto:${LINKS.email}` },
    ...(LINKS.instagram
      ? [{ label: 'Instagram', href: LINKS.instagram, external: true }]
      : []),
  ],
}

export const ABOUT = {
  lead:
    'I build systems that have to hold up — from Scout at Verri Labs to ML models on financial filings and tools that cut real editing time. NYU Computer Engineering. Prefer clear interfaces, durable backends, and software that stays out of the way.',
  cells: [
    { label: 'Education', value: 'M.S. Computer Engineering, NYU' },
    { label: 'Location', value: 'New York, NY' },
    {
      label: 'Focus',
      value: 'AI systems · full stack · data infrastructure · developer tools',
    },
    {
      label: 'Orgs',
      value:
        'NYU Tandon Consulting Club · Graduate Student Council · IEEE · Space Exploration Club · Entrepreneurial Exchange',
    },
    {
      label: 'Instagram',
      value: LINKS.instagram
        ? 'Tech Instagram linked in the footer'
        : 'Add your tech Instagram URL in src/data/site.js → LINKS.instagram',
    },
    {
      label: 'Beyond the stack',
      value:
        'Game dev · gym · reading sci-fi, dystopian, and fantasy · posting on social media',
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
      'Building Verri Labs’ RFID parking system.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'PeopleTime · Remote',
    period: 'Jan 2025 – June 2025',
    points: [
      'Developed cross-platform mobile application features using Flutter with backend services in Python and Java.',
      'Improved application load performance by 44% through state management and rendering optimizations.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Fred Silver & Company · Ronkonkoma, NY',
    period: 'Nov 2024 – Jan 2025',
    points: [
      'Built an internal inventory management platform that automated manual Excel-based workflows for business operations.',
      'Optimized application performance through caching strategies and efficient data processing pipelines.',
    ],
  },
]

export const TECH = [
  {
    label: 'Languages',
    items: [
      'Python',
      'TypeScript',
      'JavaScript',
      'Java',
      'Dart',
      'SQL',
      'C++',
    ],
  },
  {
    label: 'Frameworks',
    items: [
      'React',
      'FastAPI',
      'Node.js',
      'Flutter',
      'Next.js',
      'scikit-learn',
    ],
  },
  {
    label: 'Infrastructure & AI',
    items: [
      'PostgreSQL',
      'Redis',
      'SQLite',
      'GitHub Actions',
      'Vercel',
      'Railway',
      'Claude API',
      'MediaPipe',
      'faster-whisper',
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

export const TERMINAL = {
  welcome: [
    'moosa@dev — interactive shell',
    'Type help for commands. Esc closes. Site stays usable either way.',
  ],
  commands: {
    help: [
      'whoami     — short intro',
      'work       — jump to selected work',
      'xp         — jump to experience',
      'stack      — jump to tech stack',
      'contact    — jump to contact',
      'play       — launch Patch Protocol (mini-game)',
      'clear      — clear the buffer',
      'exit       — close the terminal',
    ],
    whoami: [
      'Moosa Irfaan',
      'Software engineer · Co-founder, Verri Labs',
      'AI systems, developer tools, full-stack products',
      'NYU M.S. Computer Engineering',
    ],
  },
}
