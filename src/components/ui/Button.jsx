export function Button({ children, href, variant = 'primary', className = '', external = false, ...props }) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')
  if (href) {
    return <a className={classes} href={href} target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined} {...props}>{children}</a>
  }
  return <button type="button" className={classes} {...props}>{children}</button>
}
