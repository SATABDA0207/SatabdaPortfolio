import type { ReactNode } from 'react'

type SectionHeaderProps = {
  chapterLabel?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleAccent?: ReactNode
}

function SectionHeader({
  chapterLabel,
  title,
  subtitle,
  align = 'left',
  className = '',
  titleAccent,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <header className={`flex flex-col gap-3 ${alignClass} ${className}`.trim()}>
      {chapterLabel ? <p className="handwritten text-2xl text-brand-teal">{chapterLabel}</p> : null}
      <h2 className="section-title">
        {title}
        {titleAccent ? <span className="text-brand-orange"> {titleAccent}</span> : null}
      </h2>
      {subtitle ? <p className="section-copy text-muted">{subtitle}</p> : null}
    </header>
  )
}

export default SectionHeader
