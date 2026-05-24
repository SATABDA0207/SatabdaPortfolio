import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { revealStaggerContainer } from '../../constants/motion'

type StaggerGroupProps = PropsWithChildren<{
  className?: string
}>

function StaggerGroup({ children, className = '' }: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      variants={revealStaggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export default StaggerGroup
