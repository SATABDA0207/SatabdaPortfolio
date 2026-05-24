import { HoverLift, MotionItem, Reveal, StaggerGroup } from '../components/motion'
import { CTAButton, DoodleDivider, SkillPill, SocialButton, StickyNote } from '../components/ui'
import { heroData } from '../data/hero'

function HeroSection() {
  return (
    <section className="notebook-surface relative overflow-hidden">
      <div className="grid-paper-bg absolute inset-0 pointer-events-none" />

      <header className="relative z-10 flex items-center justify-between gap-4 border-b-2 border-brand-dark bg-brand-bg px-4 py-4 md:px-8">
        <p className="text-2xl font-black tracking-tight text-brand-dark">
          SM<span className="text-brand-orange">.</span>
        </p>

        <a
          href="#contact"
          className="rounded-pill border-[2.5px] border-solid border-brand-dark bg-brand-dark px-4 py-1.5 text-xs font-bold text-brand-bg md:hidden"
        >
          say hi!
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {heroData.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.cta
                  ? 'rounded-pill border-[2.5px] border-solid border-brand-dark bg-brand-dark px-4 py-1.5 text-xs font-bold text-brand-bg'
                  : 'rounded-pill border-[2.5px] border-solid border-transparent px-3 py-1.5 text-xs font-medium text-brand-dark transition-colors hover:border-brand-dark'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <Reveal className="relative z-10 px-4 pb-8 pt-8 md:px-8 md:pb-10 md:pt-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,760px)_minmax(320px,360px)] lg:justify-center lg:gap-10">
          <StaggerGroup className="space-y-6">
            <MotionItem>
              <div className="inline-flex items-center gap-2 handwritten text-2xl font-semibold text-brand-dark/75">
                <span className="inline-block origin-[70%_70%] motion-safe:animate-[sticky-wobble_2.2s_ease-in-out_infinite]">
                  👋
                </span>
                <span>{heroData.greeting}</span>
              </div>
            </MotionItem>

            <MotionItem>
              <h1 className="leading-[0.95] tracking-[-3px]">
                <span className="block text-6xl font-black text-brand-dark md:text-8xl">
                  {heroData.titleTop}
                </span>
                <span className="block text-6xl font-black text-brand-orange md:text-8xl">
                  {heroData.titleBottom}
                  <span className="ml-1 inline-block h-[0.95em] w-[3px] animate-pulse bg-brand-orange align-middle" />
                </span>
              </h1>
            </MotionItem>

            <MotionItem>
              <DoodleDivider color="teal" className="w-64" />
            </MotionItem>

            <MotionItem>
              <p className="max-w-xl text-base leading-relaxed text-brand-dark/85 md:text-lg">
                Building <strong>{heroData.tagline.lead}</strong> —<br />
                {heroData.tagline.line2}
                <br />
                {heroData.tagline.line3}
              </p>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-wrap gap-2">
                {heroData.pills.map((pill) => (
                  <SkillPill key={pill.label} label={pill.label} tag={pill.tag} />
                ))}
              </div>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <HoverLift>
                  <CTAButton
                    variant="primary"
                    href={heroData.ctas.work.href}
                    className="w-[180px] justify-center md:w-[210px]"
                  >
                    {heroData.ctas.work.label}
                  </CTAButton>
                </HoverLift>
                <HoverLift>
                  <CTAButton
                    variant="outline"
                    href={heroData.ctas.resume.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[180px] justify-center md:w-[210px]"
                  >
                    {heroData.ctas.resume.label}
                  </CTAButton>
                </HoverLift>
              </div>
            </MotionItem>

            <MotionItem>
              <div className="flex flex-wrap gap-2">
                {heroData.socials.map((social) => (
                  <HoverLift key={social.label}>
                    <SocialButton
                      href={social.href}
                      label={social.label}
                      target="_blank"
                      rel="noreferrer"
                    />
                  </HoverLift>
                ))}
              </div>
            </MotionItem>
          </StaggerGroup>

          <StaggerGroup className="mx-auto w-full max-w-[360px] space-y-3 lg:pt-2 lg:self-start">
            <MotionItem>
              <p className="handwritten px-1 text-center text-base text-brand-teal lg:text-left">
                psst, fun facts ↓
              </p>
            </MotionItem>
            {heroData.stickyNotes.map((note) => (
              <MotionItem key={note.label}>
                <HoverLift>
                  <StickyNote
                    variant={note.variant}
                    label={note.label}
                    className="mx-auto w-full max-w-[340px] lg:max-w-none"
                  >
                    {note.value}
                  </StickyNote>
                </HoverLift>
              </MotionItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>

      <div className="relative z-10 border-t-2 border-brand-dark bg-brand-bg">
        <div className="grid grid-cols-2 divide-x divide-brand-dark/15 md:grid-cols-4">
          {heroData.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-4 text-center ${index % 2 === 0 ? 'bg-brand-orange/5' : 'bg-brand-teal/10'}`}
            >
              <p className="text-3xl font-black tracking-tight text-brand-dark">
                <span
                  className={
                    stat.accent === 'orange'
                      ? 'text-brand-orange'
                      : stat.accent === 'teal'
                        ? 'text-brand-teal'
                        : ''
                  }
                >
                  {stat.value}
                </span>
              </p>
              <p className="handwritten text-sm font-semibold text-brand-dark/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center border-t border-brand-teal/30 bg-brand-bg py-2">
        <p className="handwritten text-lg text-brand-teal">scroll down to see more ↓</p>
        <span className="text-2xl text-brand-orange motion-safe:animate-bounce">⌄</span>
      </div>
    </section>
  )
}

export default HeroSection
