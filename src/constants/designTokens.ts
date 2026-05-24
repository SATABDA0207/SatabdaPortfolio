export const designTokens = {
  colors: {
    bg: '#F5F5F5',
    dark: '#303841',
    orange: '#FF5722',
    teal: '#76ABAE',
  },
  typography: {
    primary: 'Archivo',
    secondary: 'Caveat',
  },
  shadows: {
    sketchSm: '2px 2px 0px #303841',
    sketchMd: '3px 3px 0px #303841',
    sketchLg: '4px 4px 0px #303841',
  },
  radius: {
    card: '16px',
    btn: '10px',
    pill: '9999px',
  },
  spacing: {
    sectionX: '1.5rem',
    sectionY: '2.5rem',
  },
} as const

export type DesignTokens = typeof designTokens
