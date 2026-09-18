import { motion } from 'framer-motion'
import { BedDouble, Maximize, Users, ArrowUpRight, Check } from 'lucide-react'
import { ACCOMMODATIONS } from '../data/content.js'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Accommodations() {
  return (
    <section id="suites" className="section bg-sand-50">
      <div className="container-lux">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-sand-500/60" aria-hidden="true" />
            Suites & Villas
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ocean-950 text-balance sm:text-4xl lg:text-5xl">
            Spaces designed around the sea
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ocean-700/90 text-pretty">
            Each residence at Serenova frames the Bay of Bengal with quiet luxury — natural textures,
            generous light and a private terrace for every stay.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ACCOMMODATIONS.map((room, i) => (
            <motion.article
              key={room.id}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              className="card group flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent" />

                {room.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-sand-400/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ocean-950 shadow-soft">
                    Guest Favourite
                  </span>
                )}

                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-serif text-2xl font-semibold">${room.price}</span>
                  <span className="ml-1 text-xs uppercase tracking-widest text-white/80">
                    / {room.unit}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-medium text-ocean-950">{room.name}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-ocean-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {room.capacity}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-3.5 w-3.5" aria-hidden="true" />
                    {room.size}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
                    Ensuite
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ocean-700/90 text-pretty">
                  {room.description}
                </p>

                {/* Amenity tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="inline-flex items-center gap-1 rounded-full border border-ocean-900/10 bg-sand-100/70 px-3 py-1 text-[0.7rem] font-medium text-ocean-700"
                    >
                      <Check className="h-3 w-3 text-sand-600" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-ocean-900/10 pt-5">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-900 transition hover:text-sand-600"
                  >
                    Reserve this suite
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                  <span className="text-xs uppercase tracking-[0.16em] text-ocean-500">
                    Incl. breakfast
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}