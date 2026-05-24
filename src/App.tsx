import {
  CTAButton,
  DoodleDivider,
  NotebookCard,
  SectionHeader,
  SkillPill,
  SocialButton,
  StickyNote,
} from './components/ui'
import { HoverLift, MotionItem, Reveal, StaggerGroup } from './components/motion'

function App() {
  return (
    <main className="min-h-screen">
      <div className="page-shell">
        <Reveal>
          <NotebookCard className="section-block space-y-8 motion-reveal">
            <SectionHeader
              chapterLabel="Shared UI Primitives"
              title="Component"
              titleAccent="Library Ready"
              subtitle="Reusable building blocks are now prepared for the hero and all portfolio sections."
            />

            <DoodleDivider />

            <StaggerGroup className="space-y-8">
              <MotionItem>
                <div className="flex flex-wrap gap-2">
                  <SkillPill label="SDE @ Razorpay" tag="orange" />
                  <SkillPill label="Ex-Amazon" tag="teal" />
                  <SkillPill label="Go · Java · Python" />
                </div>
              </MotionItem>

              <MotionItem>
                <div className="flex flex-wrap gap-3">
                  <HoverLift>
                    <CTAButton variant="primary">See My Work</CTAButton>
                  </HoverLift>
                  <HoverLift>
                    <CTAButton variant="secondary">Resume</CTAButton>
                  </HoverLift>
                  <HoverLift>
                    <CTAButton variant="outline">Contact</CTAButton>
                  </HoverLift>
                  <HoverLift>
                    <CTAButton variant="teal">Let's Build</CTAButton>
                  </HoverLift>
                </div>
              </MotionItem>

              <MotionItem>
                <div className="grid gap-4 md:grid-cols-3">
                  <HoverLift>
                    <StickyNote variant="teal" label="currently at" caption="Bangalore, India">
                      Razorpay
                    </StickyNote>
                  </HoverLift>
                  <HoverLift>
                    <StickyNote
                      variant="orange"
                      label="payments weekly"
                      caption="real money, real scale"
                    >
                      5Cr+
                    </StickyNote>
                  </HoverLift>
                  <HoverLift>
                    <StickyNote label="leetcode grind" caption="questions solved">
                      500+
                    </StickyNote>
                  </HoverLift>
                </div>
              </MotionItem>

              <MotionItem>
                <div className="flex flex-wrap gap-2">
                  <HoverLift>
                    <SocialButton href="#" label="GitHub" />
                  </HoverLift>
                  <HoverLift>
                    <SocialButton href="#" label="LinkedIn" />
                  </HoverLift>
                  <HoverLift>
                    <SocialButton href="#" label="Email" />
                  </HoverLift>
                </div>
              </MotionItem>
            </StaggerGroup>
          </NotebookCard>
        </Reveal>
      </div>
    </main>
  )
}

export default App
