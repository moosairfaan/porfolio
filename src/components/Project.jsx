import Reveal from './Reveal'

export default function Project({ project, flip = false, showDivider = true }) {
  return (
    <Reveal as="article" className="group">
      <div
        className={[
          'grid grid-cols-1 gap-10 lg:items-end lg:gap-16',
          flip
            ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
            : 'lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]',
        ].join(' ')}
      >
        <div className={flip ? 'lg:order-2' : ''}>
          <Reveal
            as="span"
            variant="text"
            className="mb-5 block font-mono text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.04em] text-cyan"
          >
            {project.index}
          </Reveal>
          <h3 className="m-0 font-sans text-[clamp(1.75rem,3vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-cyan">
            {project.name}
          </h3>
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            {project.subtitle}
          </p>
          <ul className="mt-7 flex list-none flex-wrap gap-x-4 gap-y-2 p-0">
            {project.tech.map((t) => (
              <li
                key={t}
                className="border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={[
            'flex max-w-[34rem] flex-col justify-end',
            flip ? 'lg:order-1' : '',
          ].join(' ')}
        >
          <p className="m-0 font-sans text-sm leading-[1.75] text-muted">
            {project.paragraph}
          </p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-fit font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cyan transition-colors duration-300 hover:text-ink"
          >
            {project.cta}
          </a>
        </div>
      </div>

      {showDivider ? (
        <div
          className="mt-[var(--spacing-section)] border-t border-line"
          aria-hidden
        />
      ) : null}
    </Reveal>
  )
}
