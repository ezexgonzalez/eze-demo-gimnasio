export function Eyebrow({ as: Component = 'p', className = '', children }) {
  return (
    <Component
      className={[
        'text-xs font-bold uppercase tracking-[0.24em] text-[var(--theme-accent)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </Component>
  )
}
