import { LINKS } from '../data/site'
import Reveal from './Reveal'

const footerLinks = [
  { label: 'GitHub', href: LINKS.github, external: true },
  { label: 'LinkedIn', href: LINKS.linkedin, external: true },
  { label: 'Email', href: `mailto:${LINKS.email}` },
  { label: 'Resume', href: LINKS.resume, external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="mx-auto max-w-site border-t border-line px-[var(--spacing-gutter)] pb-12 pt-[var(--spacing-section)]"
    >
      <Reveal
        as="h2"
        variant="text"
        className="m-0 max-w-[14ch] font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-normal italic leading-[0.92] tracking-[-0.03em] text-ink"
      >
        Let&apos;s build something interesting.
      </Reveal>

      <Reveal
        as="ul"
        className="mt-[clamp(3.5rem,8vw,5.5rem)] flex list-none flex-wrap gap-x-10 gap-y-6 p-0"
      >
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-ink transition-colors duration-700 ease-[var(--ease-editorial)] hover:text-hover"
            >
              {link.label}
            </a>
          </li>
        ))}
      </Reveal>

      <hr className="mt-[var(--spacing-section)] border-0 border-t border-line" />
      <p className="mt-8 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
        © {year} Moosa Irfaan
      </p>
    </footer>
  )
}
