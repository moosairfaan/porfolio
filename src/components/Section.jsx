export default function Section({
  id,
  as: Tag = 'section',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
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
