import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react'
import { RESORT } from '../data/content.js'

const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80'

const EMPTY = { name: '', email: '', checkIn: '', guests: '2 Adults', message: '' }

export default function BookingCTA() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (sent) setSent(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(EMPTY)
  }

  const contactItems = [
    { icon: MapPin, label: 'Location', value: RESORT.location },
    {
      icon: Phone,
      label: 'Reservations',
      value: RESORT.phone,
      href: `tel:${RESORT.phone.replace(/\s/g, '')}`,
    },
    { icon: Mail, label: 'Email', value: RESORT.email, href: `mailto:${RESORT.email}` },
    { icon: Clock, label: 'Concierge', value: RESORT.hours },
  ]

  return (
    <section id="booking" className="section bg-sand-50">
      <div className="container-lux">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — Contact & location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-ocean-900/10 bg-ocean-950 text-sand-50 shadow-card"
          >
            <div className="relative h-56 shrink-0 overflow-hidden sm:h-64">
              <img
                src={CONTACT_IMAGE}
                alt="Aerial view of the Cox's Bazar coastline"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/30 to-transparent" />
              <span className="eyebrow absolute bottom-5 left-6 text-sand-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Plan Your Escape
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <h2 className="font-serif text-3xl font-medium leading-tight text-balance sm:text-4xl">
                Reserve your Serenova stay
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-sand-100/70 text-pretty">
                Tell us when you would like to arrive and our concierge will craft a personalised
                itinerary around your stay.
              </p>

              <ul className="mt-8 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-100/20 bg-sand-100/5 text-sand-200">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand-300/80">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm text-sand-100/90">{item.value}</span>
                      </span>
                    </span>
                  )

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block rounded-xl transition hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-400/70"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>

          {/* Right — Inquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card flex flex-col p-7 sm:p-9"
          >
            <span className="eyebrow">
              <span className="h-px w-8 bg-sand-500/60" aria-hidden="true" />
              Reservation Inquiry
            </span>
            <h3 className="mt-4 font-serif text-2xl font-medium text-ocean-950">
              Send a private request
            </h3>

            <form
              onSubmit={onSubmit}
              className="mt-7 flex flex-1 flex-col gap-5"
              aria-label="Reservation inquiry"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inq-name" className="field-label">
                    Full Name
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Ayesha Rahman"
                    className="field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inq-email" className="field-label">
                    Email Address
                  </label>
                  <input
                    id="inq-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    className="field"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="inq-date" className="field-label">
                    Preferred Arrival
                  </label>
                  <input
                    id="inq-date"
                    type="date"
                    min={today}
                    value={form.checkIn}
                    onChange={update('checkIn')}
                    className="field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="inq-guests" className="field-label">
                    Guests
                  </label>
                  <select
                    id="inq-guests"
                    value={form.guests}
                    onChange={update('guests')}
                    className="field"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults · 1 Child</option>
                    <option>2 Adults · 2 Children</option>
                    <option>4 Adults</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="inq-message" className="field-label">
                  Special Requests
                </label>
                <textarea
                  id="inq-message"
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="Tell us about your stay — celebrations, dietary preferences, suite requests…"
                  className="field min-h-[7rem] flex-1 resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Reservation Request
              </button>

              {sent && (
                <p
                  role="status"
                  className="flex items-center gap-2 rounded-xl bg-ocean-900/5 px-4 py-3 text-sm font-medium text-ocean-800"
                >
                  <CheckCircle2 className="h-4 w-4 text-sand-600" aria-hidden="true" />
                  Thank you — your request has been received. Our concierge will reply within 24 hours.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}