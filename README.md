# Serenova Resort & Retreat

A production-ready luxury resort website for **Serenova Resort & Retreat** — a coastal escape on the
shores of Cox's Bazar, Bangladesh.

## Stack

- **React 18** (Vite)
- **Tailwind CSS 3**
- **Framer Motion** — scroll reveals, drawer & filter animation
- **Lucide React** — icon set

## Aesthetic

Modern, high-end luxury hospitality — warm sand beige, deep ocean navy, slate and off-white,
with subtle borders, soft shadows and backdrop blur.

## Getting Started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── App.jsx                  # page assembly
├── main.jsx                 # entry point
├── index.css                # Tailwind layers + design-system classes
├── data/
│   └── content.js           # centralized resort content & imagery
└── components/
    ├── Navbar.jsx           # sticky blurred header + mobile drawer
    ├── Hero.jsx             # full-bleed hero + booking bar
    ├── Accommodations.jsx   # suites & villas grid
    ├── DiningWellness.jsx   # split dining / wellness showcase
    ├── Experiences.jsx      # filterable experience cards
    ├── Testimonials.jsx     # guest reviews with star ratings
    ├── BookingCTA.jsx       # contact info + reservation inquiry form
    └── Footer.jsx           # quick links, newsletter, socials
```

## Sections

| Anchor | Component | Purpose |
| ------ | --------- | ------- |
| `#top` | Hero | Headline, booking bar (check-in/out, guests, suite) |
| `#suites` | Accommodations | Beachfront Villa, Sunset Executive Suite, Ocean Breeze Penthouse |
| `#dining` / `#wellness` | DiningWellness | Oceanfront dining and spa/wellness |
| `#experiences` | Experiences | Ayurvedic Spa, Oceanfront Dining, Sunset Yacht Tour, Infinity Pool |
| `#testimonials` | Testimonials | 5-star guest reviews with stay badges |
| `#booking` | BookingCTA | Cox's Bazar contact details + inquiry form |

## Notes

- All imagery uses royalty-free **Unsplash** coastal/resort placeholders.
- Fully responsive (mobile, tablet, desktop), semantic HTML and accessible form controls.
- Forms are client-side demonstrations (no backend); they surface a success state on submit.