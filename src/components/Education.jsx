import { EDUCATION } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education">
      <Reveal
        as="h2"
        variant="text"
        className="mb-[var(--spacing-section)] font-serif text-[clamp(3.5rem,9vw,6rem)] font-normal italic leading-[0.9] tracking-[-0.035em] text-ink"
      >
        Education
      </Reveal>

      <div className="flex flex-col">
        {EDUCATION.map((item, i) => (
          <Reveal
            key={item.school}
            className={[
              'grid grid-cols-1 gap-4 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)_minmax(0,0.8fr)] md:items-baseline md:gap-12',
              i === 0 ? 'border-t border-line' : '',
              'border-b border-line',
            ].join(' ')}
          >
            <h3 className="m-0 font-serif text-[clamp(1.5rem,2.5vw,1.85rem)] font-normal tracking-[-0.02em] text-ink">
              {item.school}
            </h3>
            <p className="m-0 font-sans text-sm text-muted">{item.degree}</p>
            <p className="m-0 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted md:text-right">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
