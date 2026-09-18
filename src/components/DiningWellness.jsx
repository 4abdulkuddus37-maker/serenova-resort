import { motion } from 'framer-motion'
import { UtensilsCrossed, Flower2, ArrowUpRight } from 'lucide-react'

const PANELS = [
  {
    id: 'dining',
    icon: UtensilsCrossed,
    eyebrow: 'Dining',
    title: 'A table set at the water’s edge',
    description:
      'Coastal harvest menus, wood-fired specialities and a curated cellar — served beneath the stars with the tide as your soundtrack.',
    points: ['Signature seafood tasting', 'Private beach dining', 'Sunrise breakfast terrace'],
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
    cta: 'Explore dining',
  },
  {
    id: 'wellness',
    icon: Flower2,
    eyebrow: 'Wellness',
    title: 'Restore, unwind, and exhale',
    description:
      'Open-air spa pavilions, a horizon-edge infinity pool and daily sunrise yoga — designed to return you to balance.',
    points: ['Ayurvedic signature spa', 'Sunrise yoga deck', 'Infinity pool & cabanas'],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    cta: 'Discover wellness',
  },
]

export default function DiningWellness() {
  return (
    <section id="dining-wellness" className="bg-sand-50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {PANELS.map((panel, i) => {
          const Icon = panel.icon
          return (
            <motion.article
              key={panel.id}
              id={panel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden p-8 sm:p-12 lg:min-h-[38rem] lg:p-16"
            >
              <img
                src={panel.image}
                alt={panel.title}
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-950/90 via-ocean-950/55 to-ocean-950/20" />

              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sand-100/25 bg-white/10 text-sand-100 backdrop-blur">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>

              <span className="eyebrow mt-6 text-sand-200">
                <span className="h-px w-8 bg-sand-300/70" aria-hidden="true" />
                {panel.eyebrow}
              </span>

              <h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight text-white text-balance sm:text-4xl">
                {panel.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 text-pretty">
                {panel.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {panel.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-white/85 backdrop-blur"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ocean-950"
              >
                {panel.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}