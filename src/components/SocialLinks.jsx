import { socials } from '../data/socials'

export default function SocialLinks({ centered = false }) {
  return (
    <div className={`flex gap-3 ${centered ? 'justify-center' : ''}`}>
      {socials.map((social) => (
        <a key={social.label} href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-primary">
          <img src={social.icon} alt="" aria-hidden="true" className="h-4.75 w-4.75" />
        </a>
      ))}
    </div>
  )
}