import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Waves } from 'lucide-react'
import { NAV_LINKS, RESORT } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-ocean-900/10 bg-sand-50/80 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="container-lux flex h-20 items-center justify-between" aria-label="Primary">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3" onClick={close}>
          <span
            className={[
              'flex h-11 w-11 items-center justify-center rounded-full border transition',
              scrolled
                ? 'border-ocean-900/15 bg-ocean-900 text-sand-50'
                : 'border-white/40 bg-white/15 text-white backdrop-blur',
            ].join(' ')}
          >
            <Waves className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span
              className={[
                'block font-serif text-xl font-semibold tracking-wide transition',
                scrolled ? 'text-ocean-900' : 'text-white',
              ].join(' ')}
            >
              {RESORT.shortName}
            </span>
            <span
              className={[
                'block text-[0.62rem] font-semibold uppercase tracking-[0.32em] transition',
                scrolled ? 'text-sand-600' : 'text-white/70',
              ].join(' ')}
            >
              Resort & Retreat
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[
                  'relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full',
                  scrolled ? 'text-ocean-800 hover:text-ocean-950' : 'text-white/85 hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${RESORT.phone.replace(/\s/g, '')}`}
            className={[
              'text-sm font-medium tracking-wide transition',
              scrolled ? 'text-ocean-700 hover:text-ocean-950' : 'text-white/80 hover:text-white',
            ].join(' ')}
          >
            {RESORT.phone}
          </a>
          <a href="#booking" className="btn-sand">
            Book Stay
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className={[
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden',
            scrolled
              ? 'border-ocean-900/15 bg-white/70 text-ocean-900'
              : 'border-white/40 bg-white/15 text-white backdrop-blur',
          ].join(' ')}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-20 z-40 bg-ocean-950/40 backdrop-blur-sm lg:hidden"
              onClick={close}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-drawer"
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-20 z-50 h-[calc(100vh-5rem)] w-[82%] max-w-sm border-l border-ocean-900/10 bg-sand-50/95 px-7 py-8 shadow-card backdrop-blur-xl lg:hidden"
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="flex items-center justify-between rounded-xl px-3 py-4 font-serif text-2xl font-medium text-ocean-900 transition hover:bg-white/70"
                    >
                      {link.label}
                      <span className="text-sand-500" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4 border-t border-ocean-900/10 pt-6">
                <a href={`tel:${RESORT.phone.replace(/\s/g, '')}`} className="block text-sm text-ocean-700">
                  {RESORT.phone}
                </a>
                <a href={`mailto:${RESORT.email}`} className="block text-sm text-ocean-700">
                  {RESORT.email}
                </a>
                <a href="#booking" onClick={close} className="btn-primary w-full">
                  Book Stay
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}