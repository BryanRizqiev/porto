import './App.css'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar name={portfolioData.name} />
      <main>
        <HeroSection data={portfolioData} />
        <ExperienceSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </div>
  )
}

export default App
