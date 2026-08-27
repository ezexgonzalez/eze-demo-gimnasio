function Icon({ children, className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  )
}

export function MenuIcon({ open = false, ...props }) {
  return (
    <Icon {...props}>
      {open ? (
        <>
          <path d="M5 5 19 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M19 5 5 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </>
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M4 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M4 17H20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </>
      )}
    </Icon>
  )
}

export function ArrowRightIcon(props) {
  return <Icon {...props}><path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /><path d="m14 7 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></Icon>
}

export function ArrowDownRightIcon(props) {
  return <Icon {...props}><path d="M6 6 18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /><path d="M9 18H18V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></Icon>
}

export function CheckIcon(props) {
  return <Icon {...props}><path d="m5 12.5 4.2 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></Icon>
}
