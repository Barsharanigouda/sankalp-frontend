import Section from './Section.jsx'
import { clubZone } from '../data.js'

export default function Clubs() {
  return (
    <Section id="clubs" index="03.5" label="Club zone">
      <p className="font-mono text-xs uppercase tracking-widest text-lime">{clubZone.timing}</p>

      <div className="mt-8 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {clubZone.clubs.map((club) => (
          <div key={club.name} className="py-6 sm:px-6 sm:first:pl-0">
            <p className="font-medium text-white">{club.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-dim">{club.game}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
