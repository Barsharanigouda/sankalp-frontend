import Section from './Section.jsx'
import { team } from '../data.js'

export default function Team() {
  return (
    <Section id="team" index="06" label="Core committee">
      <div className="grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.name} className="px-0 py-8 sm:px-8 sm:first:pl-0">
            <p className="font-mono text-xs uppercase tracking-widest text-lime">{member.role}</p>
            <p className="mt-3 text-lg font-medium text-white">{member.name}</p>
            <p className="mt-1 text-sm text-dim">{member.dept}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
