import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Code2, GraduationCap, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { portfolio } from '../data/portfolio'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="section-shell section-padding">
      <SectionTitle title="About" description="Saya menciptakan pengalaman digital yang terasa jelas, nyaman, dan berguna dalam penggunaan sehari-hari." />

      <div className="grid gap-4 lg:grid-cols-3">
        <Motion.article whileHover={{ y: -4 }} className="relative flex min-h-61.25 flex-col overflow-hidden rounded-2xl border border-emerald-200 bg-[#dcfce9] p-7">
          <p className="mb-4 text-xs font-bold tracking-wider text-emerald-700">ABOUT ME</p>
          <p className="relative z-10 max-w-[65%] leading-7 text-slate-700">Mahasiswa Sistem Informasi yang senang belajar teknologi, membangun antarmuka web, dan mengeksplorasi desain UI/UX.</p>
          <a href="#contact" className="relative z-10 mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-emerald-700 hover:gap-3">Get in touch <ArrowUpRight size={17} /></a>
          <img
            src="/assets/Hero%20about.jpeg"
            alt="Potret M. Ridho Adha"
            className="absolute bottom-0 right-0 h-full w-[35%] object-cover object-[center_32%] mix-blend-multiply"
          />
        </Motion.article>

        <Motion.article whileHover={{ y: -4 }} className="min-h-61.25 rounded-2xl border border-blue-200 bg-[#e8eefc] p-7">
          <p className="mb-5 text-xs font-bold tracking-wider text-primary">CURRENT FOCUS</p>
          <div className="flex items-center gap-3"><Code2 className="text-primary" size={24} /><h3 className="text-lg font-bold">Frontend Developer</h3></div>
          <p className="mt-3 leading-7 text-slate-600">Fokus mempelajari dan membangun website menggunakan teknologi frontend modern.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-3 py-2 font-mono text-xs text-primary">{portfolio.focus}</div>
        </Motion.article>

        <Motion.article whileHover={{ y: -4 }} className="min-h-61.25 rounded-2xl border border-pink-200 bg-[#fce7f3] p-7">
          <p className="mb-5 text-xs font-bold tracking-wider text-pink-600">EDUCATION</p>
          <div className="flex gap-3">
            <GraduationCap className="mt-1 shrink-0 text-pink-600" size={22} />
            <div><h3 className="font-bold text-slate-800">{portfolio.education.degree}</h3><p className="mt-1 text-sm text-slate-500">{portfolio.education.institution}</p><p className="mt-2 text-xs text-slate-400">{portfolio.education.period}</p></div>
          </div>
          <div className="mt-6 border-t border-pink-200 pt-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-pink-700"><BookOpen size={16} /> Learning Journey</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">Terus mengembangkan kemampuan melalui latihan, eksplorasi, dan project pribadi.</p>
          </div>
        </Motion.article>
      </div>

      <div className="mt-4 rounded-2xl border border-orange-200 bg-[#ffedd5] p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-xs font-bold tracking-wider text-orange-600">TECH STACK & TOOLS</p>
          <span className="font-mono text-xs text-orange-500">{skills.length} skills</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill.name} className="flex min-h-11 items-center gap-2 rounded-xl border border-orange-300 bg-white/40 px-3 py-2 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:bg-white/80">
              <span className="inline-flex shrink-0 items-center gap-1" aria-hidden="true">
                {skill.icons.map((icon) => (
                  <img
                    key={icon}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${icon}/${icon}-original.svg`}
                    alt=""
                    loading="lazy"
                    className="h-6 w-6"
                  />
                ))}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-slate-400"><MapPin size={15} /> {portfolio.location}</div>
    </section>
  )
}