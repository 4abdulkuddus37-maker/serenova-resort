import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Flower2,
  UtensilsCrossed,
  Sailboat,
  Waves,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { EXPERIENCES, EXPERIENCE_CATEGORIES } from '../data/content.js'

// Map string identifiers from content data to Lucide icon components.
const ICONS = {
  Flower2,
  UtensilsCrossed,
  Sailboat,
  Waves,
}

export default function Experiences() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === active)),
    [active],
  )

  return (
    <section id="experiences" className="section bg-ocean-950 text-sand-50">
      <div className="container-lux">
        {/* Heading + filters */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-sand-300">
              <span className="h-px w-8 bg-sand-400/60" aria-hidden="true" />
              The Serenova Experience
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-balance sm:text-4xl lg:text-5xl">
              Days shaped by the rhythm of the ocean
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand-100/70 text-pretty">
              From restorative wellness rituals to golden-hour voyages, every experience is curated to
              slow time and deepen your connection to the coast.
            </p>
          </div>

          {/* Category filters */}
          <div
            className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
            role="tablist"
            aria-label="Experience categories"
          >
            {EXPERIENCE_CATEGORIES.map((cat) => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={[
                    'whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300',
                    isActive
                      ? 'border-sand-400 bg-sand-400 text-ocean-950'
                      : 'border-sand-100/25 text-sand-100/75 hover:border-sand-100/50 hover:text-sand-50',
                  ].join(' ')}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const Icon = ICONS[item.icon] ?? Waves
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand-100/15 bg-ocean-900/60 backdrop-blur transition-colors duration-500 hover:border-sand-400/40"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-100/25 bg-ocean-950/50 text-sand-200 backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-sand-100/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sand-100/90 backdrop-blur">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-medium text-sand-50">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sand-100/65 text-pretty">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-sand-100/10 pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-sand-200/70">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.meta}
                      </span>
                      <a
                        href="#booking"
                        aria-label={`Enquire about ${item.title}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-100/25 text-sand-100 transition group-hover:border-sand-400 group-hover:bg-sand-400 group-hover:text-ocean-950"
                      >
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}