export function Eyebrow({ as: Component = 'p', className = '', children }) {
  return <Component className={['eyebrow', className].filter(Boolean).join(' ')}>{children}</Component>
}
