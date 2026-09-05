import { useEffect, useState } from 'react'
import { nav } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(198,255,47,0.25)]' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-lg font-semibold tracking-wide">
          SANKALP<span className="text-lime">_</span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-dim md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#register"
          className="hidden rounded-sm bg-lime px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-90 md:inline-block"
        >
          Register
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-mono text-xs uppercase tracking-widest">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-line px-6 py-6 font-mono text-sm uppercase tracking-[0.15em] text-dim md:hidden">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="mt-2 inline-block w-fit rounded-sm bg-lime px-4 py-2 text-xs font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Register
          </a>
        </nav>
      )}
    </header>
  )
}
