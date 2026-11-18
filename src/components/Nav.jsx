import { useEffect, useState } from 'react'
import { NAV } from '../data/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav
      aria-label="Primary"
      className={[
        'site-header fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between',
        'px-[var(--spacing-gutter)]',
        'min-[1440px]:px-[max(var(--spacing-gutter),calc((100vw-1400px)/2+var(--spacing-gutter)))]',
        scrolled ? 'is-scrolled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <a
        href="#top"
        className="nav-brand font-sans text-[1.05rem] font-semibold tracking-[-0.02em]"
      >
        <span className="text-cyan">~/</span>moosa
      </a>

      <ul className="hidden items-center gap-6 md:flex lg:gap-8">
        {NAV.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="nav-link font-mono text-[0.6875rem] uppercase tracking-[0.14em]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="nav-link font-mono text-[0.6875rem] uppercase tracking-[0.14em] md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-[72px] border-b border-line bg-bg/95 px-[var(--spacing-gutter)] py-6 backdrop-blur-md md:hidden"
        >
          <ul className="flex list-none flex-col gap-4 p-0">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
