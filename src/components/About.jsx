import { ABOUT } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about">
      <Reveal
        as="h2"
        variant="text"
        className="mb-[clamp(2.5rem,5vw,4rem)] font-serif text-[clamp(4rem,11vw,7rem)] font-normal italic leading-[0.88] tracking-[-0.04em] text-ink"
      >
        About
      </Reveal>

      <Reveal
        as="p"
        className="m-0 max-w-[38rem] font-serif text-[clamp(1.4rem,2.3vw,1.85rem)] italic leading-[1.4] tracking-[-0.02em] text-ink"
      >
        {ABOUT.lead}
      </Reveal>

      <Reveal className="mt-[var(--spacing-section)] grid grid-cols-1 gap-10 border-t border-line pt-[clamp(2.5rem,5vw,4rem)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
        {ABOUT.cells.map((cell) => (
          <div key={cell.label}>
            <p className="mb-4 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
              {cell.label}
            </p>
            <p className="m-0 font-sans text-sm leading-[1.7] text-ink">
              {cell.value}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
