export default function Section({
  id,
  theme = 'light',
  as: Tag = 'section',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      data-theme={theme}
      className={[
        'mx-auto max-w-site border-t border-line px-[var(--spacing-gutter)] py-[var(--spacing-section)]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
