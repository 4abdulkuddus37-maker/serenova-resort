// Centralized content for Serenova Resort & Retreat.
// Imagery uses royalty-free Unsplash coastal/resort placeholders.

export const NAV_LINKS = [
  { label: 'Suites', href: '#suites' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Dining', href: '#dining' },
  { label: 'Wellness', href: '#wellness' },
]

export const RESORT = {
  name: 'Serenova Resort & Retreat',
  shortName: 'Serenova',
  tagline: 'Where Coastal Serenity Meets Unmatched Luxury',
  location: "Marine Drive, Kolatoli, Cox's Bazar 4700, Bangladesh",
  phone: '+880 1800 000 000',
  email: 'reservations@serenova.com',
  hours: 'Concierge available 24 / 7',
}

export const ACCOMMODATIONS = [
  {
    id: 'beachfront-villa',
    name: 'Beachfront Villa',
    price: 420,
    unit: 'night',
    capacity: '2 Guests',
    size: '85 m²',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    description:
      'A private sanctuary opening directly onto the sand, with a plunge pool and uninterrupted Bay of Bengal views.',
    amenities: ['Private Plunge Pool', 'Ocean Terrace', 'King Bed', 'Butler Service'],
    featured: true,
  },
  {
    id: 'sunset-executive-suite',
    name: 'Sunset Executive Suite',
    price: 310,
    unit: 'night',
    capacity: '3 Guests',
    size: '62 m²',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    description:
      'Floor-to-ceiling glass frames the evening horizon, paired with a lounge and a deep soaking tub.',
    amenities: ['Sunset Lounge', 'Soaking Tub', 'Espresso Bar', 'Smart Climate'],
    featured: false,
  },
  {
    id: 'ocean-breeze-penthouse',
    name: 'Ocean Breeze Penthouse',
    price: 560,
    unit: 'night',
    capacity: '4 Guests',
    size: '120 m²',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description:
      'The resort’s crowning residence — a wraparound sky terrace, private dining and panoramic coastal views.',
    amenities: ['Sky Terrace', 'Private Dining', 'Two Bedrooms', 'Panoramic Views'],
    featured: false,
  },
]

export const EXPERIENCE_CATEGORIES = ['All', 'Wellness', 'Dining', 'Adventure', 'Leisure']

export const EXPERIENCES = [
  {
    id: 'ayurvedic-spa',
    title: 'Ayurvedic Spa',
    category: 'Wellness',
    icon: 'Flower2',
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80',
    description:
      'Signature therapies drawn from ancient coastal traditions, delivered in open-air pavilions above the sea.',
    meta: 'Open 9:00 – 21:00',
  },
  {
    id: 'oceanfront-dining',
    title: 'Oceanfront Dining',
    category: 'Dining',
    icon: 'UtensilsCrossed',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    description:
      'A chef-led tasting journey of the Bay — fresh catch, heirloom spices and a curated cellar.',
    meta: 'Reservations recommended',
  },
  {
    id: 'sunset-yacht-tour',
    title: 'Sunset Yacht Tour',
    category: 'Adventure',
    icon: 'Sailboat',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Glide along the world’s longest natural beach as the sky turns to gold, with champagne on deck.',
    meta: 'Daily · 5:00 PM',
  },
  {
    id: 'infinity-pool',
    title: 'Infinity Pool',
    category: 'Leisure',
    icon: 'Waves',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    description:
      'A horizon-edge pool that melts into the ocean, framed by cabanas and a swim-up bar.',
    meta: 'Open sunrise – sunset',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Ayesha Rahman',
    origin: 'Dhaka, Bangladesh',
    rating: 5,
    stay: 'Beachfront Villa · 4 nights',
    quote:
      'From the moment we arrived, every detail felt considered. Waking up to the ocean from our villa was pure magic — the most restorative trip we have ever taken.',
  },
  {
    id: 't2',
    name: 'Daniel Whitmore',
    origin: 'London, United Kingdom',
    rating: 5,
    stay: 'Ocean Breeze Penthouse · 6 nights',
    quote:
      'Serenova rivals the finest resorts I have visited across Asia. The service is warm and intuitive, and the sunset yacht tour is simply unforgettable.',
  },
  {
    id: 't3',
    name: 'Nadia Karim',
    origin: 'Chattogram, Bangladesh',
    rating: 5,
    stay: 'Sunset Executive Suite · 3 nights',
    quote:
      'The Ayurvedic spa and the oceanfront dining were extraordinary. A serene, elegant escape that felt worlds away from the everyday.',
  },
]

export const FOOTER_LINKS = {
  Explore: [
    { label: 'Suites & Villas', href: '#suites' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Dining', href: '#dining' },
    { label: 'Wellness', href: '#wellness' },
  ],
  Resort: [
    { label: 'About Serenova', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Offers & Packages', href: '#offers' },
    { label: 'Careers', href: '#careers' },
  ],
  Support: [
    { label: 'Contact Us', href: '#booking' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Stay', href: '#terms' },
  ],
}