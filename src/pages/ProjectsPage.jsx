import { ArrowLeft } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <section className="section-shell section-padding min-h-screen pt-43">
      <ScrollReveal>
        <a href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:gap-3 hover:text-primary">
          <ArrowLeft size={17} /> Back to portfolio
        </a>
        <SectionTitle
          eyebrow="Portfolio"
          title="All Projects"
          description="Jelajahi semua project yang saya bangun untuk belajar dan mengembangkan kemampuan dalam pengembangan web."
        />
      </ScrollReveal>
      {projects.length > 0 ? (
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <ScrollReveal>
          <p className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
            Belum ada project untuk ditampilkan.
          </p>
        </ScrollReveal>
      )}
    </section>
  )
}
