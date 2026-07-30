import { EXPERIENCE } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal
        as="h2"
        variant="text"
        className="mb-[var(--spacing-section)] font-serif text-[clamp(3.5rem,9vw,6rem)] font-normal italic leading-[0.9] tracking-[-0.035em] text-ink"
      >
        Experience
      </Reveal>

      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <Reveal
            key={`${item.company}-${item.period}`}
            as="article"
            className={[
              'grid grid-cols-1 gap-8 py-[clamp(2.5rem,5vw,3.5rem)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12 md:items-start',
              i === 0 ? 'border-t border-line' : '',
              'border-b border-line',
            ].join(' ')}
          >
            <div>
              <h3 className="m-0 font-serif text-[clamp(1.5rem,2.5vw,1.85rem)] font-normal tracking-[-0.02em] text-ink">
                {item.role}
              </h3>
              <p className="mt-3 font-sans text-sm text-muted">{item.company}</p>
            </div>
            <p className="m-0 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted md:pt-2">
              {item.period}
            </p>
            <ul className="m-0 list-none space-y-4 p-0">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="font-sans text-sm leading-[1.7] text-muted"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
