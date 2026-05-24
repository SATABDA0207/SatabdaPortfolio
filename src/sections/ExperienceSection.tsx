import { useState } from 'react'
import { HoverLift, MotionItem, Reveal, StaggerGroup } from '../components/motion'
import { DoodleDivider, SkillPill } from '../components/ui'
import { experienceData, type ExperienceBullet, type ExperienceItem } from '../data/experience'

type Accent = 'orange' | 'teal' | 'dark'

function accentClasses(accent: Accent) {
  if (accent === 'orange') {
    return {
      dot: 'border-brand-orange',
      company: 'bg-brand-orange/10 text-brand-orange border-brand-dark',
      timelineDot: 'bg-brand-orange text-white',
    }
  }

  if (accent === 'teal') {
    return {
      dot: 'border-brand-teal',
      company: 'bg-brand-teal/15 text-brand-teal border-brand-dark',
      timelineDot: 'bg-brand-teal text-white',
    }
  }

  return {
    dot: 'border-brand-dark',
    company: 'bg-brand-dark/10 text-brand-dark border-brand-dark',
    timelineDot: 'bg-brand-dark text-white',
  }
}

function BulletList({ bullets }: { bullets: ExperienceBullet[] }) {
  return (
    <ul className="space-y-2">
      {bullets.map((bullet, index) => {
        const accent = bullet.accent ?? 'dark'
        const dot =
          accent === 'orange'
            ? 'border-brand-orange'
            : accent === 'teal'
              ? 'border-brand-teal'
              : 'border-brand-dark'

        return (
          <li
            key={`${bullet.text}-${index}`}
            className="flex items-start gap-2 text-sm leading-relaxed text-brand-dark"
          >
            <span className={`mt-1.5 h-2 w-2 rounded-full border-2 ${dot}`} />
            <span>{bullet.text}</span>
          </li>
        )
      })}
    </ul>
  )
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false)
  const accent = accentClasses(item.dotAccent)
  const sideShadow =
    item.side === 'left' ? 'shadow-[-4px_4px_0px_#303841]' : 'shadow-[4px_4px_0px_#303841]'

  return (
    <HoverLift>
      <article
        className={`overflow-hidden rounded-xl border-[2.5px] border-brand-dark bg-white ${sideShadow}`}
      >
        <header className="flex items-center gap-3 border-b-2 border-brand-dark px-4 py-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border-2 font-black ${accent.company}`}
          >
            {item.companyInitial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-2 text-lg font-black tracking-tight text-brand-dark">
              {item.company}
              {item.isCurrent ? (
                <span className="inline-flex items-center gap-1 rounded-pill border border-emerald-700 bg-emerald-100 px-2 py-0.5 handwritten text-sm font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-700" />
                  current
                </span>
              ) : null}
            </p>
            <p className="handwritten text-base text-brand-dark/70">
              {item.role} · {item.duration}
            </p>
          </div>
        </header>

        <div className="space-y-3 px-4 py-3">
          <BulletList bullets={expanded ? item.bulletsFull : item.bulletsPreview} />

          <div className="flex flex-wrap gap-1.5 border-t border-dashed border-brand-dark/20 pt-2.5">
            {item.tags.map((tag) => (
              <SkillPill key={tag} label={tag} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="handwritten inline-flex items-center gap-1 text-lg font-bold text-brand-teal"
          >
            {expanded ? 'see less' : 'see more'}
            <span className={`text-sm transition-transform ${expanded ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </button>
        </div>
      </article>
    </HoverLift>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="notebook-surface relative mt-8 overflow-hidden">
      <div className="grid-paper-bg pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex flex-wrap items-center gap-3 border-b-2 border-brand-dark bg-brand-bg px-4 py-5 md:px-8">
        <p className="rounded-pill border-2 border-brand-teal px-3 py-1 handwritten text-base font-bold text-brand-teal">
          chapter 02
        </p>
        <h2 className="text-3xl font-black tracking-tight text-brand-dark md:text-4xl">
          Work <span className="text-brand-orange">Experience.</span>
        </h2>
        <p className="ml-auto handwritten text-lg text-brand-dark/55">3 companies · 3 years →</p>
      </header>

      <Reveal className="relative z-10 px-4 py-8 md:px-8 md:py-10">
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-2 hidden w-[3px] -translate-x-1/2 bg-brand-dark lg:block" />

          <StaggerGroup className="space-y-8">
            {experienceData.map((item, index) => {
              const accent = accentClasses(item.dotAccent)
              const isRight = item.side === 'right'

              return (
                <MotionItem key={item.id}>
                  <div className="relative">
                    <div className="grid gap-3 lg:grid-cols-[1fr_56px_1fr] lg:items-start">
                      <div className={`${isRight ? 'hidden lg:block' : 'block'}`}>
                        {!isRight ? <ExperienceCard item={item} /> : null}
                      </div>

                      <div className="relative hidden flex-col items-center pt-2 lg:flex">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-brand-dark text-[11px] font-black ${accent.timelineDot}`}
                        >
                          {item.companyInitial}
                        </div>
                        <p className="mt-1 handwritten text-sm font-semibold text-brand-dark/60">
                          {item.yearLabel}
                        </p>
                      </div>

                      <div className={`${isRight ? 'block' : 'hidden lg:block'}`}>
                        {isRight ? <ExperienceCard item={item} /> : null}
                      </div>
                    </div>

                    {index < experienceData.length - 1 ? (
                      <p className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] hidden -translate-x-1/2 handwritten text-sm font-bold text-brand-orange lg:block">
                        ⬆ levelled up!
                      </p>
                    ) : null}
                  </div>
                </MotionItem>
              )
            })}
          </StaggerGroup>
        </div>
      </Reveal>

      <div className="relative z-10 flex justify-center border-t border-brand-teal/30 bg-brand-bg px-4 py-3">
        <DoodleDivider color="dark" className="w-56 opacity-70" />
      </div>
    </section>
  )
}

export default ExperienceSection
