import { TECH } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Tech() {
  return (
    <Section id="tech">
      <Reveal className="mb-[var(--spacing-section)]">
        <p className="cyber-label mb-3">Tech Stack</p>
        <h2 className="m-0 font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.035em] text-ink">
          Toolkit
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 border-t border-line pt-[clamp(2.25rem,4vw,3.5rem)] md:grid-cols-3 md:gap-5">
        {TECH.map((group) => (
          <Reveal key={group.label} className="cyber-panel p-5">
            <p className="cyber-label mb-5">{group.label}</p>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-sans text-[clamp(1.05rem,1.6vw,1.2rem)] tracking-[-0.015em] text-ink"
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
