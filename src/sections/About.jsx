import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Code2, GraduationCap, MapPin } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section-shell section-padding">
      <ScrollReveal>
        <SectionTitle title="About" description="Saya menciptakan pengalaman digital yang terasa jelas, nyaman, dan berguna dalam penggunaan sehari-hari." />
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-3">
        <ScrollReveal className="h-full">
        <Motion.article whileHover={{ y: -4 }} className="relative flex h-full min-h-61.25 flex-col overflow-hidden rounded-2xl border border-emerald-200 bg-[#dcfce9] p-7">
          <p className="mb-4 text-xs font-bold tracking-wider text-emerald-700">ABOUT ME</p>
          <p className="relative z-10 max-w-[65%] leading-7 text-slate-700">Saya senang mempelajari teknologi baru dan membangun website yang fungsional, responsif, serta mudah digunakan untuk memberikan pengalaman yang baik bagi pengguna.</p>
          <a href="#contact" className="relative z-10 mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-emerald-700 hover:gap-3">Get in touch <ArrowUpRight size={17} /></a>
          <img
            src="/assets/Hero%20about.jpeg"
            alt="Potret M. Ridho Adha"
            className="absolute bottom-0 right-0 h-full w-[35%] object-cover object-[center_32%] mix-blend-multiply"
          />
        </Motion.article>
        </ScrollReveal>

        <ScrollReveal className="h-full" delay={0.06}>
        <Motion.article whileHover={{ y: -4 }} className="h-full min-h-61.25 rounded-2xl border border-blue-200 bg-[#e8eefc] p-7">
          <p className="mb-5 text-xs font-bold tracking-wider text-primary">CURRENT FOCUS</p>
          <div className="flex items-center gap-3"><Code2 className="text-primary" size={24} /><h3 className="text-lg font-bold">Frontend Developer</h3></div>
          <p className="mt-3 leading-7 text-slate-600">Saat ini saya mendalami pengembangan frontend dan fullstack, dari membangun antarmuka interaktif hingga menghubungkannya dengan API dan database.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white/60 px-3 py-2 font-mono text-xs text-primary">{portfolio.focus}</div>
        </Motion.article>
        </ScrollReveal>

        <ScrollReveal className="h-full" delay={0.12}>
        <Motion.article whileHover={{ y: -4 }} className="h-full min-h-61.25 rounded-2xl border border-pink-200 bg-[#fce7f3] p-7">
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
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-5">
        <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin size={15} /> {portfolio.location}</div>
      </ScrollReveal>
    </section>
  )
}