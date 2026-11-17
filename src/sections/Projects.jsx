import { ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-padding">
      <SectionTitle title="Featured Projects" description="Beberapa project yang saya bangun sebagai proses belajar dan mengembangkan kemampuan dalam pengembangan web." />
      <div className="space-y-8">
        {projects.filter((project) => project.featured).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="/?page=projects" className="inline-flex items-center gap-3 font-semibold text-slate-600 transition hover:gap-4 hover:text-primary">
          View all projects <ArrowRight size={19} />
        </a>
      </div>
    </section>
  )
}
