import { skills } from '../data/skills'
import ScrollReveal from '../components/ScrollReveal'

const skillGroups = skills.reduce((groups, skill) => {
  const group = groups.find((item) => item.category === skill.category)

  if (group) {
    group.skills.push(skill)
  } else {
    groups.push({ category: skill.category, skills: [skill] })
  }

  return groups
}, [])

export default function Skills() {
  return (
    <section id="skills" className="border-y border-blue-100 bg-[#f3f7ff]">
      <div className="section-shell section-padding">
        <ScrollReveal className="mb-10">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">WHAT I WORK WITH</p>
          <h2 className="section-heading pixel-title">Skills &amp; Tools</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Teknologi dan tools yang saya gunakan untuk belajar, bereksperimen, dan membangun project.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm shadow-blue-950/5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 border-b border-slate-100 p-5 last:border-b-0 sm:grid-cols-[minmax(130px,0.28fr)_1fr] sm:items-center sm:gap-6 sm:px-7"
              >
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                    >
                      <span className="flex items-center gap-0.5" aria-hidden="true">
                        {skill.icons.map((icon) => (
                          <img
                            key={icon}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg`}
                            alt=""
                            loading="lazy"
                            className="h-5 w-5"
                          />
                        ))}
                      </span>
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
