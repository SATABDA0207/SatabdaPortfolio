import {
  CTAButton,
  DoodleDivider,
  NotebookCard,
  SectionHeader,
  SkillPill,
  SocialButton,
  StickyNote,
} from './components/ui'

function App() {
  return (
    <main className="min-h-screen">
      <div className="page-shell">
        <NotebookCard className="section-block space-y-8">
          <SectionHeader
            chapterLabel="Shared UI Primitives"
            title="Component"
            titleAccent="Library Ready"
            subtitle="Reusable building blocks are now prepared for the hero and all portfolio sections."
          />

          <DoodleDivider />

          <div className="flex flex-wrap gap-2">
            <SkillPill label="SDE @ Razorpay" tag="orange" />
            <SkillPill label="Ex-Amazon" tag="teal" />
            <SkillPill label="Go · Java · Python" />
          </div>

          <div className="flex flex-wrap gap-3">
            <CTAButton variant="primary">See My Work</CTAButton>
            <CTAButton variant="secondary">Resume</CTAButton>
            <CTAButton variant="outline">Contact</CTAButton>
            <CTAButton variant="teal">Let's Build</CTAButton>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StickyNote variant="teal" label="currently at" caption="Bangalore, India">
              Razorpay
            </StickyNote>
            <StickyNote variant="orange" label="payments weekly" caption="real money, real scale">
              5Cr+
            </StickyNote>
            <StickyNote label="leetcode grind" caption="questions solved">
              500+
            </StickyNote>
          </div>

          <div className="flex flex-wrap gap-2">
            <SocialButton href="#" label="GitHub" />
            <SocialButton href="#" label="LinkedIn" />
            <SocialButton href="#" label="Email" />
          </div>
        </NotebookCard>
      </div>
    </main>
  )
}

export default App
