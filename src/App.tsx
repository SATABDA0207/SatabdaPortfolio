import HeroSection from './sections/HeroSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {
  return (
    <main className="min-h-screen">
      <div className="page-shell">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </main>
  )
}

export default App
