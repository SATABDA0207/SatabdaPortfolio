import { HoverLift, MotionItem, Reveal, StaggerGroup } from '../components/motion'
import { SkillPill } from '../components/ui'
import { projectsData, type ProjectCard } from '../data/projects'

function stampLabel(type: ProjectCard['type'], company: string) {
  if (type === 'work') return `🏢 work project · ${company}`
  if (type === 'university') return `🎓 university · ${company}`
  return '🛠 side project'
}

function stampClass(type: ProjectCard['type']) {
  if (type === 'work') return 'text-brand-teal border-brand-teal/40'
  if (type === 'university') return 'text-brand-dark/60 border-brand-dark/25'
  return 'text-brand-orange border-brand-orange/40'
}

function badgeClass(type: ProjectCard['type']) {
  if (type === 'work') return 'bg-brand-teal/15 text-brand-teal border-brand-teal/40'
  if (type === 'university') return 'bg-brand-dark/10 text-brand-dark border-brand-dark/35'
  return 'bg-brand-orange/10 text-brand-orange border-brand-orange/40'
}

function impactDot(accent?: 'orange' | 'teal') {
  return accent === 'teal' ? 'border-brand-teal' : 'border-brand-orange'
}

function ProjectsSection() {
  return (
    <section id="projects" className="notebook-surface relative mt-8 overflow-hidden">
      <div className="grid-paper-bg pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex flex-wrap items-center gap-3 border-b-2 border-brand-dark bg-brand-bg px-4 py-5 md:px-8">
        <p className="rounded-pill border-2 border-brand-teal px-3 py-1 handwritten text-base font-bold text-brand-teal">
          chapter 03
        </p>
        <h2 className="text-3xl font-black tracking-tight text-brand-dark md:text-4xl">
          Things I've <span className="text-brand-orange">Built.</span>
        </h2>
        <p className="ml-auto handwritten text-lg text-brand-dark/55">
          work projects + side quests →
        </p>
      </header>

      <Reveal className="relative z-10 p-4 md:p-7">
        <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <MotionItem
              key={project.id}
              className={project.className?.includes('col-span') ? project.className : undefined}
            >
              <HoverLift>
                <article
                  className={`relative flex min-h-[220px] flex-col gap-3 overflow-hidden rounded-[14px] border-[2.5px] border-brand-dark bg-brand-bg p-4 shadow-[4px_4px_0px_#303841] md:p-[18px] ${project.className?.replace('md:col-span-2', '').trim() ?? ''}`.trim()}
                >
                  <p className="absolute right-4 top-3 handwritten text-sm font-bold text-brand-dark/25">
                    {project.panel}
                  </p>

                  <div className="flex items-start gap-3 pr-8">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 text-lg font-black ${badgeClass(project.type)}`}
                    >
                      {project.badge}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`mb-1 inline-flex rounded-pill border px-2 py-0.5 handwritten text-xs font-bold ${stampClass(project.type)}`}
                      >
                        {stampLabel(project.type, project.company)}
                      </p>
                      <h3
                        className={`font-black leading-tight tracking-tight text-brand-dark ${project.id === 'gif' ? 'text-2xl' : 'text-lg'}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed text-brand-dark/75 ${project.id === 'gif' ? 'max-w-[92%]' : ''}`}
                  >
                    {project.description}
                  </p>

                  <hr className="border-t border-dashed border-brand-dark/20" />

                  {project.impacts.length > 0 ? (
                    <div className="space-y-2">
                      {project.impacts.map((impact) => (
                        <div
                          key={impact.text}
                          className="flex items-start gap-2 text-sm leading-relaxed text-brand-dark"
                        >
                          <span
                            className={`mt-1.5 h-2 w-2 rounded-full border-2 ${impactDot(impact.accent)}`}
                          />
                          <span>{impact.text}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <SkillPill key={`${project.id}-${tag}`} label={tag} />
                    ))}
                  </div>

                  <p className="mt-auto pt-1 handwritten text-sm text-brand-dark/60">
                    {project.note}
                  </p>
                </article>
              </HoverLift>
            </MotionItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </section>
  )
}

export default ProjectsSection
