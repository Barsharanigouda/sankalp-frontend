import Section from './Section.jsx'
import { schedule } from '../data.js'

export default function Schedule() {
  return (
    <Section id="schedule" index="03" label="Three-day schedule">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {schedule.map((day) => (
          <div key={day.day}>
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-lg font-semibold text-lime">{day.day}</h2>
              <span className="font-mono text-xs text-dim">{day.date}</span>
            </div>
            <div className="mt-6 divide-y divide-line border-t border-line">
              {day.items.map((item) => (
                <div key={item.time + item.title} className="py-4">
                  <p className="font-mono text-xs text-dim">{item.time}</p>
                  <p className="mt-1 font-medium text-white">{item.title}</p>
                  <p className="text-xs text-dim">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}