import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type CTAButtonVariant = 'primary' | 'secondary' | 'outline' | 'teal'

type CTAButtonBaseProps = {
  variant?: CTAButtonVariant
  className?: string
  icon?: ReactNode
  children: ReactNode
}

type CTAButtonAsButton = CTAButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type CTAButtonAsAnchor = CTAButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type CTAButtonProps = CTAButtonAsButton | CTAButtonAsAnchor

function CTAButton(props: CTAButtonProps) {
  const { variant = 'primary', className = '', icon, children, ...rest } = props

  const variantClass =
    variant === 'primary'
      ? 'bg-brand-orange text-white'
      : variant === 'secondary'
        ? 'bg-brand-dark text-brand-bg'
        : variant === 'teal'
          ? 'bg-brand-teal text-brand-dark'
          : 'bg-white text-brand-dark'

  const classes =
    `inline-flex items-center gap-2 rounded-btn border-brand-dark px-5 py-2.5 text-sm font-bold btn-outline-shadow ${variantClass} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as CTAButtonAsAnchor
    return (
      <a href={href} className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as CTAButtonAsButton)}>
      {icon}
      {children}
    </button>
  )
}

export default CTAButton
