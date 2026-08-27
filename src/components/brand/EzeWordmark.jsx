export function EzeWordmark({ className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-baseline gap-1.5 whitespace-nowrap uppercase',
        className,
      ].filter(Boolean).join(' ')}
    >
      <span className="font-black italic tracking-[-0.075em]">EZE</span>
      <span className="text-[0.62em] font-semibold tracking-[0.18em]">STUDIO</span>
    </span>
  )
}
