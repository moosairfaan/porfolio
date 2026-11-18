import { PROJECTS } from '../data/site'
import Project from './Project'
import Reveal from './Reveal'
import Section from './Section'

export default function Work() {
  return (
    <Section id="work">
      <Reveal className="mb-[var(--spacing-section)]">
        <p className="cyber-label mb-3">Selected Work</p>
        <h2 className="m-0 font-sans text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.035em] text-ink">
          Ship log
        </h2>
      </Reveal>

      <div className="flex flex-col gap-[var(--spacing-section)]">
        {PROJECTS.map((project, i) => (
          <Project
            key={project.name}
            project={project}
            flip={i % 2 === 1}
            showDivider={i < PROJECTS.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}
