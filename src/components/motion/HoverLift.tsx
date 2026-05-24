import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { hoverLift, tapPress } from '../../constants/motion'

type HoverLiftProps = PropsWithChildren<{
  className?: string
  disabled?: boolean
}>

function HoverLift({ children, className = '', disabled = false }: HoverLiftProps) {
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} whileHover={hoverLift} whileTap={tapPress}>
      {children}
    </motion.div>
  )
}

export default HoverLift
