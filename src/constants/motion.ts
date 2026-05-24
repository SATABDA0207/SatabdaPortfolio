import type { Variants } from 'framer-motion'

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const revealStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const hoverLift = {
  y: -3,
  transition: { duration: 0.2, ease: 'easeOut' as const },
}

export const tapPress = {
  y: 0,
  scale: 0.98,
  transition: { duration: 0.12, ease: 'easeOut' as const },
}

export const stickyWobble = {
  rotate: [0, -1.2, 0.8, -0.5, 0],
  transition: {
    duration: 0.45,
    ease: 'easeInOut' as const,
  },
}
