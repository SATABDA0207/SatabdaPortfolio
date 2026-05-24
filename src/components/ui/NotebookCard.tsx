import type { PropsWithChildren } from 'react'

type NotebookCardProps = PropsWithChildren<{
  className?: string
  padded?: 'sm' | 'md' | 'lg'
}>

function NotebookCard({ children, className = '', padded = 'md' }: NotebookCardProps) {
  const paddingClass = padded === 'sm' ? 'p-4' : padded === 'lg' ? 'p-8 md:p-10' : 'p-6 md:p-8'

  return (
    <article
      className={`notebook-surface grid-paper-bg shadow-sketch-md ${paddingClass} ${className}`.trim()}
    >
      {children}
    </article>
  )
}

export default NotebookCard
