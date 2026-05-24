import type { AnchorHTMLAttributes, ReactNode } from 'react'

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: ReactNode
  label: string
}

function SocialButton({ icon, label, className = '', ...rest }: SocialButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-lg border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-bold text-brand-dark shadow-sketch-sm ${className}`.trim()}
      {...rest}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default SocialButton
