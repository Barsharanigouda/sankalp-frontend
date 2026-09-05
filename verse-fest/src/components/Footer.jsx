import { nav } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl font-bold text-white">
            SANKALP<span className="text-lime">.</span>
          </p>
          <p className="mt-3 text-sm text-dim">
            Two days in November 2026 (dates TBA) · NIST University, Berhampur, Odisha
          </p>
          <div className="mt-4 flex gap-4 font-mono text-xs uppercase tracking-widest">
            <a href="#" className="underline decoration-lime underline-offset-4 hover:text-lime">
              Instagram
            </a>
            <a href="#" className="underline decoration-lime underline-offset-4 hover:text-lime">
              WhatsApp community
            </a>
            <a href="mailto:verse@nist.edu" className="underline decoration-lime underline-offset-4 hover:text-lime">
              Email
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Sections</p>
          <ul className="mt-4 space-y-2 text-sm text-dim">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Find the campus</p>
          <div className="mt-4 overflow-hidden border border-line">
            <iframe
              title="NIST University campus map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=84.7550%2C19.2350%2C84.8150%2C19.2750&layer=mapnik"
              className="h-40 w-full grayscale"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-dim">
            Institute Park, Pallur Hills, Berhampur 761008, Odisha
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© 2027 Sankalp — NIST University</p>
          <p>Built by the Sankalp web team</p>
        </div>
      </div>
    </footer>
  )
}
