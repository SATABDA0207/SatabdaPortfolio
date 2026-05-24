import { HoverLift, MotionItem, Reveal, StaggerGroup } from '../components/motion'
import { SkillPill } from '../components/ui'
import { exploringTopics, skillsCategories, skillsStatus, type SkillCategory } from '../data/skills'

function panelHeaderTheme(theme: SkillCategory['theme']) {
  if (theme === 'backend') return 'bg-brand-teal text-brand-dark'
  if (theme === 'ai') return 'bg-brand-orange text-white'
  return 'bg-brand-dark text-brand-bg'
}

function SkillPanel({ category }: { category: SkillCategory }) {
  return (
    <HoverLift>
      <article className="overflow-hidden rounded-[14px] border-2 border-brand-dark bg-white/90 shadow-[4px_4px_0px_#303841]">
        <header
          className={`flex items-center justify-between border-b-2 border-brand-dark px-4 py-2.5 ${panelHeaderTheme(category.theme)}`}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
            </div>
            <p className="font-mono text-xs font-medium opacity-90">{category.file}</p>
          </div>
        </header>

        <div className="space-y-4 p-4">
          <p className="font-mono text-sm font-semibold text-brand-dark">
            <span className="mr-1 text-brand-orange">⌘</span>
            {category.title}
          </p>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={`${category.id}-${skill}`}
                className="rounded-[10px] border-2 border-brand-dark bg-brand-bg px-3 py-1.5 font-mono text-xs font-semibold text-brand-dark transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#303841]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </HoverLift>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="notebook-surface relative mt-8 overflow-hidden">
      <div className="grid-paper-bg pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex flex-wrap items-center gap-3 border-b-2 border-brand-dark bg-brand-bg px-4 py-5 md:px-8">
        <p className="rounded-pill border-2 border-brand-teal px-3 py-1 handwritten text-base font-bold text-brand-teal">
          chapter 04
        </p>
        <h2 className="text-3xl font-black tracking-tight text-brand-dark md:text-4xl">
          Tools I Build <span className="text-brand-orange">With.</span>
        </h2>
        <p className="ml-auto handwritten text-lg text-brand-dark/55">
          backend systems + infra + ai →
        </p>
      </header>

      <Reveal className="relative z-10 p-4 md:p-7">
        <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <StaggerGroup className="space-y-4">
            {skillsCategories.map((category) => (
              <MotionItem key={category.id}>
                <SkillPanel category={category} />
              </MotionItem>
            ))}
          </StaggerGroup>

          <StaggerGroup className="space-y-4">
            <MotionItem>
              <article className="space-y-4 rounded-[14px] border-2 border-brand-dark bg-brand-dark p-5 text-brand-bg shadow-[4px_4px_0px_#303841]">
                <p className="font-mono text-xs text-brand-teal">current_status.json</p>
                <h3 className="text-3xl font-black leading-tight tracking-tight">
                  {skillsStatus.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">{skillsStatus.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {skillsStatus.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[10px] border-2 border-white/15 p-3">
                      <p className="text-2xl font-black text-brand-orange">{metric.value}</p>
                      <p className="mt-1 font-mono text-[11px] text-white/65">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </MotionItem>

            <MotionItem>
              <article className="rounded-[14px] border-2 border-brand-dark bg-gradient-to-br from-brand-teal/10 to-brand-orange/10 p-5 shadow-[4px_4px_0px_#303841]">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-black tracking-tight text-brand-dark">
                    Currently Exploring
                  </h3>
                  <p className="handwritten text-lg text-brand-orange">always learning →</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exploringTopics.map((topic) => (
                    <SkillPill key={topic} label={topic} tag="teal" />
                  ))}
                </div>
              </article>
            </MotionItem>
          </StaggerGroup>
        </div>
      </Reveal>
    </section>
  )
}

export default SkillsSection
