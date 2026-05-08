# Kolbenfresser - Foodtruck Website

A modern, dynamic one-page website for the German foodtruck brand **Kolbenfresser**.

## Project Overview

This is a premium, cinematic website for a street-food business serving currywurst, burgers, hotdogs, and fries. The site is built with a bold industrial/garage aesthetic, strong visual hierarchy, and smooth scroll-triggered animations.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Accessible UI primitives |
| Framer Motion | Scroll & entrance animations |
| React Router | Client-side routing |
| Lucide React | Icon library |
| Google Fonts | Bebas Neue (headings) + Inter (body) |

## Project Structure

src/
  components/
    Navbar.tsx                # Fixed navigation with mobile menu
    HeroSection.tsx           # Fullscreen hero with CTA buttons
    AboutSection.tsx          # Foodtruck story & values
    ProductsSection.tsx       # Product highlights grid
    MenuSection.tsx           # Menu with high-res image modal
    GallerySection.tsx        # Photo gallery grid
    TestimonialsSection.tsx   # Customer reviews
    CateringSection.tsx       # Catering services CTA
    ContactSection.tsx        # Contact info & social links
    Footer.tsx                # Footer with legal links
  pages/
    Index.tsx                 # Main one-page landing
    Impressum.tsx             # Legal imprint page
    Datenschutz.tsx           # Privacy policy page
    NotFound.tsx              # 404 catch-all
  assets/
    foodtruck.jpg             # Hero background
    burger.jpg                # Product image
    fries.jpg                 # Product image
    hotdog.jpg                # Product image
    currywurst.jpg            # Product image
    drinks.jpg                # Product image
    catering.jpg              # Catering image
    menu1.jpg, menu2.jpg      # Menu images
  App.tsx                     # Router setup
  main.tsx                    # Entry point
  index.css                   # Tailwind + custom CSS variables
```

## Features

- **One-page design** with smooth-scroll navigation
- **Responsive layout** — mobile, tablet, and desktop
- **Scroll-triggered animations** via Framer Motion (`useInView`)
- **Menu modal** — high-resolution menu images in a lightbox
- **Catering CTA** — links to an external Google Form
- **Customer testimonials** — review cards with star ratings
- **Legal pages** — Impressum & Datenschutz with German legal content
- **SEO-ready** — semantic HTML, alt texts, proper headings

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+

### Install dependencies

```bash
bun install
```

### Start development server

```bash
bun run dev
```

The dev server runs on `http://localhost:8080` by default.

### Build for production

```bash
bun run build
```

Output goes to the `dist/` folder.

### Run tests

```bash
bun test
```

## Design System

### Colors

| Token | HSL | Usage |
|-------|-----|-------|
| Background | `0 0% 8%` | Dark charcoal page bg |
| Primary | `22 85% 45%` | Burnt orange — CTAs, accents |
| Foreground | `30 10% 90%` | Main text color |
| Muted | `0 0% 15%` | Cards, secondary surfaces |
| Border | `0 0% 18%` | Dividers, outlines |

### Typography

- **Headings**: Bebas Neue — bold, condensed, industrial feel
- **Body**: Inter — clean, readable, modern

## License

&copy; Kolbenfresser. All rights reserved.

---

Built with Vite + React + Tailwind CSS.
