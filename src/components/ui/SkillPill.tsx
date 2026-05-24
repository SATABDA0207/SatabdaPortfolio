type SkillPillProps = {
  label: string
  tag?: 'teal' | 'orange' | 'default'
  className?: string
}

function SkillPill({ label, tag = 'default', className = '' }: SkillPillProps) {
  const variantClass =
    tag === 'teal'
      ? 'border-brand-teal bg-brand-teal/10 text-brand-teal'
      : tag === 'orange'
        ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
        : 'border-brand-dark bg-white text-brand-dark'

  return (
    <span
      className={`inline-flex items-center rounded-pill border-2 px-3.5 py-1.5 text-xs font-bold tracking-wide ${variantClass} ${className}`.trim()}
    >
      {label}
    </span>
  )
}

export default SkillPill
