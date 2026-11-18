import { LINKS } from '../data/site'
import Reveal from './Reveal'

const footerLinks = [
  { label: 'GitHub', href: LINKS.github, external: true },
  { label: 'LinkedIn', href: LINKS.linkedin, external: true },
  { label: 'Email', href: `mailto:${LINKS.email}` },
  { label: 'Resume', href: LINKS.resume, external: true },
  ...(LINKS.instagram
    ? [{ label: 'Instagram', href: LINKS.instagram, external: true }]
    : []),
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      data-theme="dark"
      className="mx-auto max-w-site border-t border-line px-[var(--spacing-gutter)] pb-12 pt-[var(--spacing-section)]"
    >
      <Reveal as="p" className="cyber-label mb-4">
        Contact
      </Reveal>
      <Reveal
        as="h2"
        variant="text"
        className="m-0 max-w-[16ch] font-sans text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink"
      >
        Let’s build something that holds up.
      </Reveal>

      <Reveal
        as="ul"
        className="mt-[clamp(3rem,7vw,4.5rem)] flex list-none flex-wrap gap-x-8 gap-y-5 p-0"
      >
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:text-cyan"
            >
              {link.label}
            </a>
          </li>
        ))}
        {!LINKS.instagram ? (
          <li className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            Instagram — pending URL
          </li>
        ) : null}
      </Reveal>

      <hr className="mt-[var(--spacing-section)] border-0 border-t border-line" />
      <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
        © {year} Moosa Irfaan · moosairfaan.dev
      </p>
    </footer>
  )
}
