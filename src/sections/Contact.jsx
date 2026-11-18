import SocialLinks from '../components/SocialLinks'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="section-shell border-t border-slate-100 py-14 sm:py-16">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <img
              src="/assets/avatar.png"
              alt="Avatar M. Ridho Adha"
              className="h-28 w-28 object-contain sm:h-36 sm:w-36"
            />
            <h2 className="pixel-title text-[clamp(2rem,8vw,5.5rem)] text-primary">
              ridho.dev
            </h2>
          </div>
          <div className="mt-7">
            <SocialLinks centered />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}