import type { PropsWithChildren } from 'react'

type StickyNoteVariant = 'default' | 'teal' | 'orange' | 'dark'

type StickyNoteProps = PropsWithChildren<{
  label?: string
  variant?: StickyNoteVariant
  className?: string
}>

function StickyNote({ label, variant = 'default', className = '', children }: StickyNoteProps) {
  const variantClass =
    variant === 'teal'
      ? 'border-brand-teal bg-brand-teal/15 shadow-[3px_3px_0px_#76ABAE]'
      : variant === 'orange'
        ? 'border-brand-orange bg-brand-orange/10 shadow-[3px_3px_0px_#FF5722]'
        : variant === 'dark'
          ? 'border-brand-dark bg-brand-dark/5 shadow-[3px_3px_0px_#303841]'
          : 'border-brand-dark bg-white shadow-[3px_3px_0px_#303841]'

  const labelClass =
    variant === 'orange'
      ? 'text-brand-orange'
      : variant === 'teal'
        ? 'text-brand-teal'
        : variant === 'dark'
          ? 'text-brand-dark'
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
      <div className="handwritten mt-1 text-lg font-bold leading-snug text-brand-dark">
        {children}
      </div>
    </aside>
  )
}

export default StickyNote
