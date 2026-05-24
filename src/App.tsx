import HeroSection from './sections/HeroSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  return (
    <main className="min-h-screen">
      <div className="page-shell">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </main>
  )
}

export default App
