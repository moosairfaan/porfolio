import { motion, useReducedMotion } from 'framer-motion'
import { HERO } from '../data/site'
import { ease } from '../lib/motion'
import Reveal from './Reveal'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header
      id="top"
      data-theme="dark"
      className="mx-auto grid min-h-dvh max-w-site grid-cols-1 border-b border-line lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
    >
      <div className="flex min-h-auto flex-col justify-between gap-14 px-[var(--spacing-gutter)] pb-14 pt-[max(6.5rem,calc(env(safe-area-inset-top)+5rem))] lg:min-h-dvh lg:gap-0 lg:pb-[clamp(3rem,6vh,4.5rem)] lg:pr-10 lg:pt-[max(7rem,calc(env(safe-area-inset-top)+5.5rem))]">
        <div className="max-w-[36rem]">
          <Reveal
            as="p"
            delay={0.04}
            className="cyber-label mb-6"
          >
            {HERO.handle} · online
          </Reveal>

          <Reveal
            as="h1"
            variant="text"
            delay={0.08}
            className="m-0 font-sans text-[clamp(3.25rem,9vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-ink"
          >
            {HERO.name}
          </Reveal>

          <Reveal
            as="p"
            delay={0.22}
            className="mt-8 max-w-[30rem] font-sans text-[clamp(1rem,1.8vw,1.125rem)] leading-[1.65] text-muted"
          >
            {HERO.description}
          </Reveal>

          <Reveal as="ul" delay={0.34} className="mt-8 list-none space-y-2 p-0">
            {HERO.status.map((line) => (
              <li
                key={line}
                className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted"
              >
                <span className="mr-2 text-cyan">▸</span>
                {line}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="ul"
          delay={0.46}
          className="m-0 flex list-none flex-wrap gap-x-6 gap-y-4 p-0"
        >
          {HERO.links.map((link) => (
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
          <li>
            <a
              href="#explore"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cyan transition-colors duration-300 hover:text-ink"
            >
              Open terminal →
            </a>
          </li>
        </Reveal>
      </div>

      <Reveal
        variant="media"
        delay={0.14}
        className="relative min-h-[min(62vh,520px)] overflow-hidden border-t border-line bg-panel lg:min-h-dvh lg:border-l lg:border-t-0"
      >
        <div className="scanlines absolute inset-0 z-[1]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] flex items-center justify-between border-b border-line bg-bg/70 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted backdrop-blur-sm"
          aria-hidden
        >
          <span>cam_01 · portrait</span>
          <span className="text-cyan">live</span>
        </div>
        <motion.img
          src={HERO.portrait}
          alt={HERO.portraitAlt}
          width={1200}
          height={1600}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-[37%_25%] grayscale contrast-[1.08] saturate-[0.2]"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.9, ease }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-bg via-transparent to-cyan/5"
          aria-hidden
        />
      </Reveal>
    </header>
  )
}
