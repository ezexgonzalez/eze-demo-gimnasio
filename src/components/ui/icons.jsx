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

export function PlayIcon(props) {
  return <Icon {...props}><circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.4" /><path d="m10.4 8.9 4.7 3.1-4.7 3.1V8.9Z" fill="currentColor" /></Icon>
}

export function CoachIcon(props) {
  return <Icon {...props}><circle cx="12" cy="7.25" r="3.25" stroke="currentColor" strokeWidth="1.5" /><path d="M5.75 19c.45-3.55 2.55-5.55 6.25-5.55s5.8 2 6.25 5.55" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></Icon>
}

export function GroupIcon(props) {
  return <Icon {...props}><circle cx="9" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.5" /><circle cx="16.4" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5" /><path d="M3.8 19c.35-3.25 2.1-5.05 5.2-5.05s4.85 1.8 5.2 5.05" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /><path d="M14.2 14.15c3.45-.55 5.45 1.1 5.8 4.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></Icon>
}

export function TargetIcon(props) {
  return <Icon {...props}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="1.15" fill="currentColor" /><path d="m14.8 9.2 4.1-4.1M16.5 5.1h2.4v2.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></Icon>
}
