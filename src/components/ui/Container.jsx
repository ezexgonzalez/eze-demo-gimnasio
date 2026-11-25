export function Container({ as: Component = 'div', className = '', children, ...props }) {
  return <Component className={['container-fit', className].filter(Boolean).join(' ')} {...props}>{children}</Component>
}
