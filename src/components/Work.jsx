import { PROJECTS } from '../data/site'
import Project from './Project'
import Reveal from './Reveal'
import Section from './Section'

export default function Work() {
  return (
    <Section id="work">
      <Reveal
        as="h2"
        className="mb-[var(--spacing-section)] font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted"
      >
        Selected Work
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
