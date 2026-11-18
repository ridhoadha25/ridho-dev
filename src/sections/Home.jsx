import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { socialIconUrls } from '../data/socials'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const homeRef = useRef(null)
  const [avatarIndex, setAvatarIndex] = useState(0)
  const [avatarFailed, setAvatarFailed] = useState(false)
  const reduceMotion = useReducedMotion()
  const isHomeVisible = useInView(homeRef, { amount: 0.1 })
  const avatarFrames = portfolio.avatarFrames

  useEffect(() => {
    if (reduceMotion || !isHomeVisible) return undefined

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return
      setAvatarIndex((current) => (current + 1) % avatarFrames.length)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [avatarFrames.length, isHomeVisible, reduceMotion])

  return (
    <section ref={homeRef} id="home" className="relative flex min-h-svh items-center overflow-hidden border-b border-slate-100 pt-19">
      <div className="dot-pattern absolute inset-x-0 top-0 h-[60%] opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-[#fafafa]" />

      <ScrollReveal className="hero-shell relative z-10 grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="lg:-translate-y-12">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-2 text-sm font-semibold text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.12)]" />
            {portfolio.availability}
          </div>

          <p className="mb-5 text-lg font-medium text-slate-600">{portfolio.greeting}</p>
          <h1 className="pixel-title max-w-3xl text-[clamp(40px,12vw,50px)] sm:text-[clamp(50px,6.4vw,76px)] text-primary">{portfolio.shortName}</h1>
          <div className="mt-6 flex items-center gap-3 font-mono text-sm tracking-[0.12em] text-primary sm:text-base">
            <span className="h-px w-10 bg-primary/50" />
            {portfolio.role.toUpperCase()}
          </div>
          <p className="mt-6 max-w-xl text-base leading-[1.65] text-slate-600 sm:text-lg">
            Saya senang mengubah ide menjadi <strong className="font-semibold text-slate-900">pengalaman digital yang menarik, mudah digunakan, dan bermanfaat</strong> melalui teknologi web.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700">
              <img src={socialIconUrls.linkedin} alt="" aria-hidden="true" className="h-4.25 w-4.25 brightness-0 invert" /> LinkedIn
            </a>
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-200 hover:text-primary">
              <img src={socialIconUrls.github} alt="" aria-hidden="true" className="h-4.75 w-4.75" /> Github
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 font-mono text-xs font-medium text-slate-400">TECH:</span>
            {portfolio.techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-500"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>

        <div className="relative mx-auto flex w-full max-w-105 flex-col items-center justify-center">
          <div className="relative flex h-80 w-full items-center justify-center sm:h-100 lg:h-115">
            <div className="absolute h-66 w-66 rounded-full bg-blue-200/50 blur-[80px] sm:h-88 sm:w-88" />
            <div className="absolute left-[8%] top-[25%] text-amber-400"><Sparkles size={27} fill="currentColor" /></div>
            <div className="relative z-10 h-full w-full">
              {avatarFailed ? (
                <div className="grid h-full place-items-center">
                  <span className="font-pixel text-6xl text-primary">RA</span>
                </div>
              ) : (
                <img
                  key={avatarFrames[avatarIndex]}
                  src={avatarFrames[avatarIndex]}
                  alt={`Ilustrasi pixel art M. Ridho Adha ${avatarIndex === 0 ? 'sedang membuat website' : avatarIndex === 1 ? 'merayakan keberhasilan' : 'sedang berpikir'}`}
                  onError={() => setAvatarFailed(true)}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 sm:flex">
        <span className="font-mono text-[10px] font-semibold tracking-[0.3em]">SCROLL</span>
        <span className="grid h-8 w-5 place-items-start justify-center rounded-full border-2 border-slate-300 p-1"><span className="h-1.5 w-1 rounded-full bg-slate-400" /></span>
        <ArrowDown size={13} className="animate-bounce" />
      </a>
    </section>
  )
}
