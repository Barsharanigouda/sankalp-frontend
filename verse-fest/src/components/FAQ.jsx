import { useState } from 'react'
import Section from './Section.jsx'
import { faq } from '../data.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" index="07" label="Questions">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
        <p className="text-sm text-dim">
          Still stuck? Write to{' '}
          <a
            href="mailto:verse@nist.edu"
            className="text-lime underline decoration-lime underline-offset-4 hover:text-white"
          >
            verse@nist.edu
          </a>
        </p>

        <div className="border-t border-line">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            const num = String(index + 1).padStart(2, '0')
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-dim">{num}</span>
                    <span className="font-medium text-white">{item.q}</span>
                  </span>
                  <span className="shrink-0 font-mono text-lg text-lime">{isOpen ? '×' : '+'}</span>
                </button>

                {isOpen && (
                  <p className="max-w-2xl pb-6 pl-10 text-sm leading-relaxed text-dim">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}