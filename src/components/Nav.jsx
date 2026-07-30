import { useEffect, useState } from 'react'
import { NAV } from '../data/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={[
        'fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between',
        'bg-transparent px-[var(--spacing-gutter)] transition-[border-color] duration-700 ease-[var(--ease-editorial)]',
        'min-[1440px]:px-[max(var(--spacing-gutter),calc((100vw-1400px)/2+var(--spacing-gutter)))]',
        scrolled ? 'border-b border-line' : 'border-b border-transparent',
      ].join(' ')}
    >
      <a
        href="#top"
        className="font-serif text-[1.15rem] italic leading-none tracking-[-0.02em] text-white mix-blend-difference transition-opacity duration-700 ease-[var(--ease-editorial)] hover:opacity-55"
      >
        Moosa Irfaan
      </a>
      <ul className="flex items-center gap-3.5 sm:gap-5 md:gap-7">
        {NAV.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-white mix-blend-difference transition-opacity duration-700 ease-[var(--ease-editorial)] hover:opacity-55"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
