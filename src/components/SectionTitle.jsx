export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {description && <p className={`mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg ${centered ? 'mx-auto' : ''}`}>{description}</p>}
    </div>
  )
}