import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { revealUp } from '../../constants/motion'

type MotionItemProps = PropsWithChildren<{
  className?: string
}>

function MotionItem({ children, className = '' }: MotionItemProps) {
  return (
    <motion.div className={className} variants={revealUp}>
      {children}
    </motion.div>
  )
}

export default MotionItem
