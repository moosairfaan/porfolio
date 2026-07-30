import Reveal from './Reveal'

export default function Project({ project, flip = false, showDivider = true }) {
  return (
    <Reveal as="article" className="group">
      <div
        className={[
          'grid grid-cols-1 gap-10 lg:items-end lg:gap-20',
          flip
            ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
            : 'lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]',
        ].join(' ')}
      >
        <div className={flip ? 'lg:order-2' : ''}>
          <Reveal
            as="span"
            variant="text"
            className="mb-6 block font-serif text-[clamp(3.5rem,8vw,6rem)] italic leading-[0.85] tracking-[-0.03em] text-ink"
          >
            {project.index}
          </Reveal>
          <h3 className="m-0 font-serif text-[clamp(2rem,3.4vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.025em] text-ink transition-colors duration-700 ease-[var(--ease-editorial)] group-hover:text-hover">
            {project.name}
          </h3>
          <p className="mt-3 font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
            {project.subtitle}
          </p>
          <ul className="mt-8 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            {project.tech.map((t) => (
              <li
                key={t}
                className="font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-muted"
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
            className="relative mt-10 inline-block w-fit font-sans text-[0.6875rem] uppercase tracking-[0.12em] text-ink after:absolute after:inset-x-0 after:-bottom-[0.15em] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-700 after:ease-[var(--ease-editorial)] group-hover:after:scale-x-100 hover:text-hover hover:after:scale-x-100"
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
