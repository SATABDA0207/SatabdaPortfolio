import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { revealUp } from '../../constants/motion'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  once?: boolean
}>

function Reveal({ children, className = '', delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
