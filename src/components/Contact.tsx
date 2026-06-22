import { useState } from 'react'

const services = [
  'Video editing',
  'End-to-end production',
  'Personal brand growth',
  'Not sure yet',
]

export default function Contact() {
  const [pick, setPick] = useState(services[0])
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '')
    const email = String(f.get('email') || '')
    const details = String(f.get('details') || '')
    const subject = encodeURIComponent(`New project: ${pick} — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLooking for: ${pick}\n\n${details}`,
    )
    window.location.href = `mailto:contact@earnedmediaproductions.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-panel via-ink-soft to-ink p-7 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(46,197,255,0.3),transparent)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(193,46,255,0.3),transparent)] blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-bright">
                Tell us about your project
              </p>
              <h2 className="font-display mt-4 text-4xl font-black leading-[1.0] tracking-[-0.03em] text-white sm:text-5xl">
                Let's make something
                <br />
                worth <span className="grad-text">watching</span>.
              </h2>
              <p className="mt-5 max-w-md text-lg text-haze">
                Fill out the quick brief and we'll get back within a day. It takes
                about five minutes, and there's no pitch deck to sit through.
              </p>

              <a
                href="mailto:contact@earnedmediaproductions.com"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-cyan-bright"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full grad-bg text-ink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6.5l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                contact@earnedmediaproductions.com
              </a>
            </div>

            <form onSubmit={onSubmit} className="reveal glass rounded-3xl p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name" name="name" placeholder="Alex Rivera" />
                <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
              </div>

              <p className="mb-2 mt-5 text-sm font-medium text-white/85">What do you need?</p>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setPick(s)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      pick === s
                        ? 'grad-bg border-transparent text-ink'
                        : 'border-white/12 text-haze hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-white/85">
                  A few details
                </label>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="What are you making, and when do you need it?"
                  className="w-full resize-none rounded-2xl border border-white/12 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-haze/60 outline-none transition-colors focus:border-cyan/60"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full grad-bg px-6 py-3.5 text-base font-semibold text-ink transition-transform duration-300 hover:scale-[1.02]"
              >
                {sent ? 'Opening your email…' : 'Send project brief'}
              </button>
              <p className="mt-3 text-center text-xs text-haze/70">
                Opens your mail app, prefilled. No accounts, no spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/85">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/12 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-haze/60 outline-none transition-colors focus:border-cyan/60"
      />
    </label>
  )
}
