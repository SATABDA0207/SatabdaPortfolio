import type { PropsWithChildren } from 'react'

type StickyNoteVariant = 'default' | 'teal' | 'orange'

type StickyNoteProps = PropsWithChildren<{
  label?: string
  caption?: string
  variant?: StickyNoteVariant
  className?: string
}>

function StickyNote({
  label,
  caption,
  variant = 'default',
  className = '',
  children,
}: StickyNoteProps) {
  const variantClass =
    variant === 'teal'
      ? 'border-brand-teal bg-brand-teal/15 shadow-[3px_3px_0px_#76ABAE]'
      : variant === 'orange'
        ? 'border-brand-orange bg-brand-orange/10 shadow-[3px_3px_0px_#FF5722]'
        : 'border-brand-dark bg-white shadow-sketch-md'

  const labelClass =
    variant === 'orange'
      ? 'text-brand-orange'
      : variant === 'teal'
        ? 'text-brand-teal'
        : 'text-brand-dark/70'

  return (
    <aside
      className={`motion-sticky-wobble rounded-lg border-2 p-4 ${variantClass} ${className}`.trim()}
    >
      {label ? (
        <p className={`handwritten text-sm font-semibold uppercase tracking-wide ${labelClass}`}>
          {label}
        </p>
      ) : null}
      <div className="mt-1 text-2xl font-black tracking-tight text-brand-dark">{children}</div>
      {caption ? <p className="handwritten mt-1 text-base text-brand-dark/80">{caption}</p> : null}
    </aside>
  )
}

export default StickyNote
