import arrowDark from '../../assets/icons/arrow-dark.svg'
import arrowCoral from '../../assets/icons/arrow-coral.svg'
import { Button } from './Button'

export function SessionButton({ label, onSession, variant = 'primary', arrow, className }) {
  return (
    <Button variant={variant} className={className} onClick={onSession} aria-haspopup="dialog">
      <span>{label}</span>
      <img src={arrow ?? (variant === 'primary' ? arrowDark : arrowCoral)} alt="" />
    </Button>
  )
}
