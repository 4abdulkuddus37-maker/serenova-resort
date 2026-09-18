import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Users, ChevronDown, Star } from 'lucide-react'
import { RESORT } from '../data/content.js'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    suite: 'Any Suite',
  })
  const [confirmed, setConfirmed] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setConfirmed(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setConfirmed(true)
  }

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Golden-hour view over the Bay of Bengal, Cox's Bazar"
          className="h-full w-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/80 via-ocean-950/45 to-ocean-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/60 via-transparent to-transparent" />
      </div>

      <div className="container-lux flex min-h-[100svh] flex-col justify-center pb-40 pt-32 sm:pb-44">
        <motion.span
          className="eyebrow text-sand-200"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="h-px w-8 bg-sand-300/70" aria-hidden="true" />
          Cox's Bazar &middot; Bangladesh
        </motion.span>

        <motion.h1
          className="mt-6 max-w-4xl font-serif text-4xl font-medium leading-[1.08] text-white text-balance sm:text-5xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          {RESORT.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 text-pretty sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          A horizon-edge retreat on the world's longest natural beach — private villas, oceanfront
          dining and restorative wellness, curated for the discerning traveller.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <div className="flex items-center gap-2 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-sand-400 text-sand-400" aria-hidden="true" />
            ))}
            <span className="ml-1 text-sm text-white/80">4.9 · 1,240+ guest reviews</span>
          </div>
          <a
            href="#experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/90 underline-offset-4 transition hover:text-white hover:underline"
          >
            Explore the resort
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Booking bar */}
      <motion.div
        className="container-lux absolute inset-x-0 bottom-6 z-10 sm:bottom-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-3 rounded-2xl border border-white/20 bg-white/85 p-4 shadow-card backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:gap-4 lg:p-5"
          aria-label="Availability search"
        >
          <div className="lg:col-span-1">
            <label className="field-label" htmlFor="check-in">
              <CalendarDays className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              min={today}
              value={form.checkIn}
              onChange={update('checkIn')}
              className="field"
              required
            />
          </div>

          <div className="lg:col-span-1">
            <label className="field-label" htmlFor="check-out">
              <CalendarDays className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              min={form.checkIn || today}
              value={form.checkOut}
              onChange={update('checkOut')}
              className="field"
              required
            />
          </div>

          <div className="lg:col-span-1">
            <label className="field-label" htmlFor="guests">
              <Users className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
              Guests
            </label>
            <select id="guests" value={form.guests} onChange={update('guests')} className="field">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults · 1 Child</option>
              <option>4 Adults</option>
            </select>
          </div>

          <div className="lg:col-span-1">
            <label className="field-label" htmlFor="suite">
              Suite Type
            </label>
            <select id="suite" value={form.suite} onChange={update('suite')} className="field">
              <option>Any Suite</option>
              <option>Beachfront Villa</option>
              <option>Sunset Executive Suite</option>
              <option>Ocean Breeze Penthouse</option>
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <button type="submit" className="btn-primary w-full">
              Check Availability
            </button>
          </div>

          {confirmed && (
            <p
              role="status"
              className="sm:col-span-2 lg:col-span-5 rounded-xl bg-ocean-900/5 px-4 py-3 text-sm text-ocean-800"
            >
              Thank you — our reservations team will confirm availability for your selected dates shortly.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  )
}