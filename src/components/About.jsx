import { ABOUT, LINKS } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about">
      <Reveal
        as="p"
        className="cyber-label mb-4"
      >
        // about
      </Reveal>
      <Reveal
        as="h2"
        variant="text"
        className="mb-[clamp(2rem,4vw,3rem)] font-sans text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink"
      >
        Corner of the net
      </Reveal>

      <Reveal
        as="p"
        className="m-0 max-w-[40rem] font-sans text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.65] text-muted"
      >
        {ABOUT.lead}
      </Reveal>

      <Reveal className="mt-[var(--spacing-section)] grid grid-cols-1 gap-8 border-t border-line pt-[clamp(2.25rem,4vw,3.5rem)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {ABOUT.cells.map((cell) => (
          <div key={cell.label} className="cyber-panel p-5">
            <p className="cyber-label mb-3">{cell.label}</p>
            <p className="m-0 font-sans text-sm leading-[1.7] text-ink">
              {cell.value}
            </p>
            {cell.label === 'Instagram' && LINKS.instagram ? (
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cyan"
              >
                Open Instagram →
              </a>
            ) : null}
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
