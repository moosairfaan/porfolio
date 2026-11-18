import { EDUCATION } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education">
      <Reveal className="mb-[var(--spacing-section)]">
        <p className="cyber-label mb-3">Education</p>
        <h2 className="m-0 font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.035em] text-ink">
          Training data
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {EDUCATION.map((item, i) => (
          <Reveal
            key={item.school}
            className={[
              'grid grid-cols-1 gap-3 py-9 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)_minmax(0,0.8fr)] md:items-baseline md:gap-10',
              i === 0 ? 'border-t border-line' : '',
              'border-b border-line',
            ].join(' ')}
          >
            <h3 className="m-0 font-sans text-[clamp(1.35rem,2.2vw,1.65rem)] font-semibold tracking-[-0.02em] text-ink">
              {item.school}
            </h3>
            <p className="m-0 font-sans text-sm text-muted">{item.degree}</p>
            <p className="m-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-cyan md:text-right">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
