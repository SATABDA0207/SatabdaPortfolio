type DoodleDividerProps = {
  color?: 'orange' | 'teal' | 'dark'
  className?: string
}

function DoodleDivider({ color = 'orange', className = '' }: DoodleDividerProps) {
  const stroke = color === 'teal' ? '#76ABAE' : color === 'dark' ? '#303841' : '#FF5722'

  return (
    <svg
      viewBox="0 0 220 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-56 ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M2 10 Q20 2 38 10 Q56 18 74 10 Q92 2 110 10 Q128 18 146 10 Q164 2 182 10 Q200 18 218 10"
        stroke={stroke}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default DoodleDivider
