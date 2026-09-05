import { useState } from 'react'
import Section from './Section.jsx'
import { registrationTracks } from '../data.js'

const initialForm = { name: '', email: '', mobile: '', college: '', tracks: [] }

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const toggleTrack = (track) => {
    setForm((f) => ({
      ...f,
      tracks: f.tracks.includes(track) ? f.tracks.filter((t) => t !== track) : [...f.tracks, track],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.name,
          email: form.email,
          mobile: form.mobile,
          college: form.college,
          tracks: form.tracks,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch (err) {
      setError('Could not reach the server. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="register" index="05" label="Registration">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Entries close <span className="text-lime">soon — date TBA</span>.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-dim">
            One form covers every track. General fest access is free; competitive tracks carry a
            per-team fee you'll pay after confirmation. Outstation participants can request hostel
            accommodation in the same email thread.
          </p>
        </div>

        {submitted ? (
          <div className="border border-line p-8">
            <p className="font-mono text-sm text-lime">Registration received.</p>
            <p className="mt-2 text-sm text-dim">
              We've got your details. Updates will be shared closer to the date.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {error && (
              <div className="sm:col-span-2 border border-red-500 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <Field label="Full name">
              <input
                required
                type="text"
                placeholder="Ananya Mohapatra"
                value={form.name}
                onChange={update('name')}
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                placeholder="you@college.edu"
                value={form.email}
                onChange={update('email')}
                className="input"
              />
            </Field>
            <Field label="Mobile">
              <input
                required
                type="tel"
                placeholder="9876543210"
                value={form.mobile}
                onChange={update('mobile')}
                className="input"
              />
            </Field>
            <Field label="College / department">
              <input
                required
                type="text"
                placeholder="NIST — CSE, 3rd year"
                value={form.college}
                onChange={update('college')}
                className="input"
              />
            </Field>

            <div className="sm:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-dim">Tracks</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {registrationTracks.map((track) => {
                  const active = form.tracks.includes(track)
                  return (
                    <button
                      type="button"
                      key={track}
                      onClick={() => toggleTrack(track)}
                      className={`rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                        active
                          ? 'border-lime bg-lime text-ink'
                          : 'border-line text-dim hover:border-white hover:text-white'
                      }`}
                    >
                      {track}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="sm:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-sm bg-lime px-6 py-4 text-center font-mono text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
              >
                {submitting ? 'Submitting...' : 'Submit registration →'}
              </button>

              <button
                type="button"
                onClick={() => { setForm(initialForm); setError('') }}
                className="font-mono text-xs uppercase tracking-widest text-dim hover:text-white transition-colors"
              >
                Clear form
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-widest text-dim">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}