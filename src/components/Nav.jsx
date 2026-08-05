import { useEffect, useRef, useState } from 'react'
import { NAV } from '../data/site'
import useHeaderTheme from '../hooks/useHeaderTheme'

export default function Nav() {
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const { logoTheme, linksTheme } = useHeaderTheme({
    headerRef,
    logoRef,
    linksRef,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const unifiedTheme = logoTheme === linksTheme ? logoTheme : linksTheme

  return (
    <nav
      ref={headerRef}
      aria-label="Primary"
      data-logo-theme={logoTheme}
      data-links-theme={linksTheme}
      className={[
        'site-header fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between',
        'bg-transparent px-[var(--spacing-gutter)]',
        'min-[1440px]:px-[max(var(--spacing-gutter),calc((100vw-1400px)/2+var(--spacing-gutter)))]',
        `header-${unifiedTheme}`,
        `header-logo-${logoTheme}`,
        `header-links-${linksTheme}`,
        scrolled ? 'is-scrolled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <a
        ref={logoRef}
        href="#top"
        className="nav-brand font-serif text-[1.15rem] italic leading-none tracking-[-0.02em]"
      >
        Moosa Irfaan
      </a>
      <ul
        ref={linksRef}
        className="flex items-center gap-3.5 sm:gap-5 md:gap-7"
      >
        {NAV.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="nav-link font-sans text-[0.6875rem] uppercase tracking-[0.12em]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
