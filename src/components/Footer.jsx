import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="section-shell border-t border-slate-200 py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <p className="text-sm text-slate-400">Built with <span className="font-mono text-primary">React</span> & <span className="font-mono text-primary">Tailwind CSS</span></p>
      </div>
    </footer>
  )
}