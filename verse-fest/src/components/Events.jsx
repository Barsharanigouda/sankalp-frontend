import { useState } from 'react'
import Section from './Section.jsx'
import { events } from '../data.js'

export default function Events() {
  const [openId, setOpenId] = useState(events.find((e) => e.expanded)?.id ?? null)

  return (
    <Section id="events" index="02" label="Flagship events">
      <div className="border-t border-line">
        {events.map((ev) => {
          const isOpen = openId === ev.id
          return (
            <div key={ev.id} className="border-b border-line">
              <button
                onClick={() => setOpenId(isOpen ? null : ev.id)}
                className="flex w-full items-center gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="w-16 shrink-0 font-mono text-xs text-dim">{ev.id}</span>
                <span className="font-display flex-1 text-2xl font-semibold text-white sm:text-4xl md:text-5xl">
                  {ev.name}
                </span>
                <span className="hidden shrink-0 font-mono text-xs text-dim sm:block">{ev.tag}</span>
                <span className="shrink-0 font-mono text-lg text-lime">{isOpen ? '×' : '+'}</span>
              </button>

              {isOpen && (
                <div className="grid grid-cols-1 gap-6 pb-8 pl-0 sm:grid-cols-[1fr_auto_auto] sm:pl-20">
                  {ev.description && (
                    <p className="max-w-xl text-sm leading-relaxed text-dim">{ev.description}</p>
                  )}
                  {ev.prize && (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-dim">Prize</p>
                      <p className="mt-1 font-mono text-lg text-lime">{ev.prize}</p>
                    </div>
                  )}
                  {ev.capacity && (
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-dim">Capacity</p>
                      <p className="mt-1 font-mono text-lg text-white">{ev.capacity}</p>
                    </div>
                  )}
                  <p className="text-sm text-dim sm:hidden">{ev.tag}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
