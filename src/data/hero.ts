export type HeroNavItem = {
  label: string
  href: string
  cta?: boolean
}

export type HeroSticky = {
  label: string
  value: string
  variant?: 'default' | 'teal' | 'orange' | 'dark'
}

export type HeroStat = {
  value: string
  accent?: 'orange' | 'teal'
  label: string
}

export type HeroSocial = {
  label: string
  href: string
}

export const heroData = {
  nav: [
    { label: 'experience', href: '#experience' },
    { label: 'projects', href: '#projects' },
    { label: 'skills', href: '#skills' },
    { label: 'say hi!', href: '#contact', cta: true },
  ] as HeroNavItem[],
  greeting: "hey there, I'm a software developer",
  titleTop: 'Satabda',
  titleBottom: 'Mandal.',
  tagline: {
    lead: 'systems that move money at scale',
    line2: 'from payments infra to RAG-powered AI.',
    line3: 'Currently shipping at Razorpay, ex-Amazon.',
  },
  pills: [
    { label: 'SDE @ Razorpay', tag: 'orange' as const },
    { label: 'Ex-Amazon', tag: 'teal' as const },
    { label: 'Go · Java · Python' },
    { label: 'AI / RAG', tag: 'teal' as const },
    { label: 'AWS' },
  ],
  ctas: {
    work: { label: 'see my work', href: '#projects' },
    resume: { label: 'resume', href: '/resume/Satabda_Mandal_Resume_2026.pdf' },
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'email', href: 'mailto:hello@example.com' },
  ] as HeroSocial[],
  stickyNotes: [
    {
      label: 'status',
      value: 'open to founding eng roles 🎯',
      variant: 'teal' as const,
    },
    {
      label: 'scale',
      value: '30Cr/day flows through my code 💸',
      variant: 'orange' as const,
    },
    {
      label: 'languages',
      value: 'fluent in Go, Java, C++ & sarcasm 😄',
      variant: 'dark' as const,
    },
  ] as HeroSticky[],
  stats: [
    { value: '3+', accent: 'orange' as const, label: 'years experience' },
    { value: '2', accent: 'teal' as const, label: 'top companies' },
    { value: 'CP', accent: 'orange' as const, label: 'competitive programmer' },
    { value: 'High', accent: 'teal' as const, label: 'scale systems builder' },
  ] as HeroStat[],
}
