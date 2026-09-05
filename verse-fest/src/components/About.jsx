import Section from './Section.jsx'
import { stats } from '../data.js'

export default function About() {
  return (
    <Section id="about" index="01" label="What Sankalp is">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Nine editions in, Sankalp is still run entirely by students — from the
            arena build to the last sound check.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 text-sm leading-relaxed text-dim sm:grid-cols-2">
            <p>
              It started in 2018 as a two-day departmental tech meet in the CS block. It now takes
              over the entire NIST campus for three days each March, with participants travelling
              in from more than sixty colleges across Odisha, Andhra Pradesh, West Bengal and
              Telangana.
            </p>
            <p>
              The tech half stays deliberately hard — real problem statements from partner
              companies, live defence in front of judges, no participation trophies. The cultural
              half exists because the campus deserves a proper stage. Both halves run at the same
              time, on purpose.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
            Edition 08 — November 2026
          </p>
          <dl className="mt-4 divide-y divide-line border-t border-line">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between py-5">
                <dt className="text-sm text-dim">{s.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-lime">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}