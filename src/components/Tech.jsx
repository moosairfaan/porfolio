import { TECH } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Tech() {
  return (
    <Section id="tech">
      <Reveal
        as="h2"
        variant="text"
        className="mb-[var(--spacing-section)] font-serif text-[clamp(3.5rem,9vw,6rem)] font-normal italic leading-[0.9] tracking-[-0.035em] text-ink"
      >
        Tech Stack
      </Reveal>

      <div className="grid grid-cols-1 gap-14 border-t border-line pt-[clamp(2.5rem,5vw,4rem)] md:grid-cols-3 md:gap-12">
        {TECH.map((group) => (
          <Reveal key={group.label}>
            <p className="mb-6 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
              {group.label}
            </p>
            <ul className="m-0 list-none space-y-3 p-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] tracking-[-0.015em] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
