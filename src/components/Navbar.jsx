import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScroll } from '../hooks/useScroll'

const navLinks = [
  { label: 'Home', anchor: 'home' },
  { label: 'About', anchor: 'about' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Contact', anchor: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScroll(12)
  const isProjectsPage = window.location.pathname.replace(/\/+$/, '') === '/projects'

  const closeMenu = () => setOpen(false)
  const getLinkHref = (anchor) => {
    if (anchor === 'projects') return isProjectsPage ? '/projects' : '#projects'
    return isProjectsPage ? `/#${anchor}` : `#${anchor}`
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="section-shell flex h-19 items-center justify-between">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="Kembali ke Home">
          <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-slate-200 bg-blue-50 text-lg">
            <img src="/assets/avatar.png" alt="" className="h-full w-full object-cover" />
            <span className="font-pixel text-[10px] text-primary">RA</span>
          </div>
          <span className="font-pixel text-[12px] tracking-[-0.08em] sm:text-[15px]">ridho.dev</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.anchor} href={getLinkHref(link.anchor)} className="text-[15px] font-semibold text-primary transition hover:text-blue-900">
              {link.label}
            </a>
          ))}
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.anchor} href={getLinkHref(link.anchor)} onClick={closeMenu} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}