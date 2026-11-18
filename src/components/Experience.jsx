import { EXPERIENCE } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal className="mb-[var(--spacing-section)]">
        <p className="cyber-label mb-3">Experience</p>
        <h2 className="m-0 font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.035em] text-ink">
          Signal path
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <Reveal
            key={`${item.company}-${item.period}`}
            as="article"
            className={[
              'grid grid-cols-1 gap-8 py-[clamp(2.25rem,4vw,3.25rem)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)_minmax(0,1.6fr)] md:items-start md:gap-10',
              i === 0 ? 'border-t border-line' : '',
              'border-b border-line',
            ].join(' ')}
          >
            <div>
              <h3 className="m-0 font-sans text-[clamp(1.35rem,2.2vw,1.65rem)] font-semibold tracking-[-0.02em] text-ink">
                {item.role}
              </h3>
              <p className="mt-3 font-sans text-sm text-muted">{item.company}</p>
            </div>
            <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-cyan md:pt-2">
              {item.period}
            </p>
            <ul className="m-0 list-none space-y-4 p-0">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-4 font-sans text-sm leading-[1.7] text-muted before:absolute before:left-0 before:text-cyan before:content-['▸']"
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
