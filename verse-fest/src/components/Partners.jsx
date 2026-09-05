import Section from './Section.jsx'
import { partners } from '../data.js'

export default function Partners() {
  return (
    <Section id="partners" index="04" label="Partners">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Title sponsors</p>
        <div className="mt-6 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {partners.title.map((p) => (
            <div key={p.name} className="flex items-center justify-center py-10">
              <span className="font-mono text-xl font-semibold text-white sm:text-2xl">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Gold</p>
        <div className="mt-6 grid grid-cols-2 divide-y divide-line border-t border-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {partners.gold.map((p) => (
            <div key={p.name} className="flex items-center justify-center py-8">
              <span className="text-sm text-dim">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 overflow-hidden border-t border-line pt-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-xs uppercase tracking-widest text-dim">
          {partners.marquee.map((name, i) => (
            <span key={name + i} className="flex items-center gap-2">
              {name}
              {i < partners.marquee.length - 1 && <span className="text-lime">/</span>}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
