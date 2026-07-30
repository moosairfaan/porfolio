import { motion, useReducedMotion } from 'framer-motion'
import { HERO } from '../data/site'
import { ease } from '../lib/motion'
import Reveal from './Reveal'

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header
      id="top"
      className="mx-auto grid min-h-dvh max-w-site grid-cols-1 border-b border-line lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
    >
      <div className="flex min-h-auto flex-col justify-between gap-16 px-[var(--spacing-gutter)] pb-14 pt-[max(6.5rem,calc(env(safe-area-inset-top)+5rem))] lg:min-h-dvh lg:gap-0 lg:pb-[clamp(3rem,6vh,4.5rem)] lg:pr-10 lg:pt-[max(7rem,calc(env(safe-area-inset-top)+5.5rem))]">
        <div className="max-w-[32rem]">
          <Reveal
            as="h1"
            variant="text"
            delay={0.06}
            className="m-0 font-serif text-[clamp(3.5rem,10vw,6.5rem)] font-normal italic leading-[0.9] tracking-[-0.04em] text-ink"
          >
            {HERO.name}
          </Reveal>

          <Reveal
            as="p"
            delay={0.2}
            className="mt-8 max-w-[28rem] font-sans text-[clamp(0.95rem,1.8vw,1.05rem)] font-normal leading-[1.65] tracking-[0.005em] text-muted"
          >
            {HERO.description}
          </Reveal>

          <Reveal as="ul" delay={0.34} className="mt-10 list-none space-y-1 p-0">
            {HERO.status.map((line) => (
              <li
                key={line}
                className="font-sans text-[0.6875rem] uppercase leading-[1.9] tracking-[0.12em] text-muted"
              >
                {line}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="ul"
          delay={0.48}
          className="m-0 flex list-none flex-wrap gap-x-7 gap-y-5 p-0"
        >
          {HERO.links.map((link) => (
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
      </div>

      <Reveal
        variant="media"
        delay={0.14}
        className="relative min-h-[min(70vh,540px)] overflow-hidden border-t border-line bg-ink lg:min-h-dvh lg:border-l lg:border-t-0"
      >
        <motion.img
          src={HERO.portrait}
          alt={HERO.portraitAlt}
          width={1200}
          height={1600}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-[37%_25%] grayscale contrast-[1.06]"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.9, ease }}
        />
      </Reveal>
    </header>
  )
}
