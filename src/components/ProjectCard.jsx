import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { socialIconUrls } from '../data/socials'

export default function ProjectCard({ project, index = 0 }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <ScrollReveal delay={index * 0.08}>
      <Motion.article
      className="group grid gap-6 border-b border-slate-200 pb-8 md:grid-cols-[minmax(250px,375px)_1fr] md:items-center md:gap-8"
      >
      <div className="relative aspect-[4/2.65] overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-blue-100 via-sky-50 to-indigo-100">
        {!imageFailed ? (
          <img src={project.image} alt={`Preview ${project.title}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" onError={() => setImageFailed(true)} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="font-pixel text-2xl text-primary">{project.title.slice(0, 2).toUpperCase()}</span>
            <span className="text-sm font-semibold text-slate-500">{project.title}</span>
          </div>
        )}
      </div>

      <div className="flex min-h-47.5 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
          <span className="text-sm text-slate-400">|</span>
          <span className="text-sm font-medium text-slate-400">{project.category}</span>
        </div>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-500">{tech}</span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`} className="inline-flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-primary">
              <img src={socialIconUrls.github} alt="" aria-hidden="true" className="h-4.75 w-4.75" />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} Live demo`} className="inline-flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-primary">
              <ArrowUpRight size={19} />
              <span>Live demo</span>
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noreferrer" aria-label={`${project.title} Figma prototype`} className="inline-flex items-center gap-2 rounded-lg p-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-primary">
              <span className="font-semibold">Figma</span>
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
      </Motion.article>
    </ScrollReveal>
  )
}