import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './sections/Contact'

export default function App() {
  const isProjectsPage = new URLSearchParams(window.location.search).get('page') === 'projects'

  return (
    <>
      <Navbar />
      {isProjectsPage ? (
        <main>
          <ProjectsPage />
        </main>
      ) : (
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer />
      <ScrollToTop />
    </>
  )
}
