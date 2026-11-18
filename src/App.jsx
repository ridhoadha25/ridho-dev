import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './sections/Contact'
import { ScrollRevealProvider } from './components/ScrollReveal'

export default function App() {
  const isProjectsPage = new URLSearchParams(window.location.search).get('page') === 'projects'

  return (
    <>
      <Navbar />
      <ScrollRevealProvider>
        {isProjectsPage ? (
          <main>
            <ProjectsPage />
          </main>
        ) : (
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        )}
      </ScrollRevealProvider>
      <Footer />
      <ScrollToTop />
    </>
  )
}