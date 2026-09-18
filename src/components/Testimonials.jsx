import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/content.js'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            'h-4 w-4',
            i < value ? 'fill-sand-500 text-sand-500' : 'text-ocean-300',
          ].join(' ')}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-sand-100">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-sand-500/60" aria-hidden="true" />
            Guest Stories
            <span className="h-px w-8 bg-sand-500/60" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ocean-950 text-balance sm:text-4xl lg:text-5xl">
            Loved by travellers from around the world
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ocean-700/90 text-pretty">
            A 4.9 average across more than 1,240 verified stays — here is what our guests remember most.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.id}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              className="card relative flex flex-col p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote
                className="absolute right-6 top-6 h-9 w-9 text-sand-300/70"
                aria-hidden="true"
              />

              <Rating value={t.rating} />

              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ocean-800 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 border-t border-ocean-900/10 pt-5">
                <span className="block font-serif text-lg font-medium text-ocean-950">{t.name}</span>
                <span className="mt-0.5 block text-xs uppercase tracking-[0.14em] text-ocean-500">
                  {t.origin}
                </span>
                <span className="mt-3 inline-flex rounded-full bg-ocean-900/5 px-3 py-1 text-[0.7rem] font-medium text-ocean-700">
                  {t.stay}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}