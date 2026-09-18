import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Accommodations from './components/Accommodations.jsx'
import DiningWellness from './components/DiningWellness.jsx'
import Experiences from './components/Experiences.jsx'
import Testimonials from './components/Testimonials.jsx'
import BookingCTA from './components/BookingCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Accessibility: skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ocean-900 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-sand-50"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Accommodations />
        <DiningWellness />
        <Experiences />
        <Testimonials />
        <BookingCTA />
      </main>

      <Footer />
    </div>
  )
}