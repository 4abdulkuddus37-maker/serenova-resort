import { useState } from 'react'
import {
  Waves,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { FOOTER_LINKS, RESORT } from '../data/content.js'

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: '#instagram' },
  { label: 'Facebook', icon: Facebook, href: '#facebook' },
  { label: 'Twitter', icon: Twitter, href: '#twitter' },
  { label: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-ocean-950 text-sand-100/70">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-100/20 bg-sand-100/5 text-sand-200">
                <Waves className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-xl font-semibold tracking-wide text-sand-50">
                  {RESORT.shortName}
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-sand-300/70">
                  Resort & Retreat
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-sand-100/60 text-pretty">
              A luxury coastal retreat on the world's longest natural beach, where considered design
              meets the calm of the Bay of Bengal.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-200">
                Join the Serenova Circle
              </h3>
              <p className="mt-2 text-sm text-sand-100/55">
                Private offers, seasonal escapes and early access to new suites.
              </p>

              <form onSubmit={onSubscribe} className="mt-4 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (subscribed) setSubscribed(false)
                  }}
                  placeholder="Your email address"
                  className="w-full rounded-full border border-sand-100/20 bg-sand-100/5 px-5 py-3 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none transition focus:border-sand-400 focus:ring-2 focus:ring-sand-400/40"
                />
                <button
                  type="submit"
                  className="btn-sand shrink-0 px-5 py-3"
                  aria-label="Subscribe to the newsletter"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p
                  role="status"
                  className="mt-3 flex items-center gap-2 text-sm font-medium text-sand-300"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  You're on the list — welcome to Serenova.
                </p>
              )}
            </div>
          </div>

          {/* Link columns */}
          <nav
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
            aria-label="Footer"
          >
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-200">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-sand-100/60 transition-colors hover:text-sand-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Contact strip */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-sand-100/10 pt-8 sm:grid-cols-3">
          <p className="flex items-start gap-3 text-sm text-sand-100/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
            {RESORT.location}
          </p>
          <a
            href={`tel:${RESORT.phone.replace(/\s/g, '')}`}
            className="flex items-start gap-3 text-sm text-sand-100/60 transition-colors hover:text-sand-50"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
            {RESORT.phone}
          </a>
          <a
            href={`mailto:${RESORT.email}`}
            className="flex items-start gap-3 text-sm text-sand-100/60 transition-colors hover:text-sand-50"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" aria-hidden="true" />
            {RESORT.email}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-6 border-t border-sand-100/10 pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-sand-100/45">
            &copy; {year} {RESORT.name}. All rights reserved.
          </p>

          <ul className="flex items-center gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/20 text-sand-100/70 transition-all duration-300 hover:border-sand-400 hover:bg-sand-400 hover:text-ocean-950"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}