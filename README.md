# Shshank Kumar — Portfolio (Next.js)

A production-ready Next.js port of the original single-file HTML portfolio. Same look,
same animations (matrix rain, scroll reveals, infinite tech strip, light/dark toggle),
rebuilt as a typed, componentized, App Router project.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (compiled at build time, not the browser CDN)
- **next-themes** for the light/dark toggle (persists to `localStorage`, respects system preference, no flash of wrong theme)
- **next/font** for self-hosted, optimized `Inter` and `Space Mono` fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata, ThemeProvider, matrix background
  page.tsx           Assembles all sections in order
  globals.css         Tailwind directives + ported component-level CSS
components/
  Navbar.tsx          Sticky nav with active-link highlighting on scroll
  FloatingNav.tsx     Bottom-right floating quick links
  Hero.tsx            Headline, intro, terminal-style "whoami" card
  TechStrip.tsx        Infinite-scrolling tech marquee
  Services.tsx        "What I do" cards
  Projects.tsx         Project cards grid
  Achievements.tsx     Hackathon / award cards
  Contact.tsx          Contact form + social links
  Footer.tsx
  ThemeProvider.tsx     Wraps next-themes
  ThemeToggle.tsx       Sun/moon toggle button
  MatrixBackground.tsx  Canvas rain effect (theme-aware)
lib/
  data.ts               All copy/content — projects, awards, tech stack, links, etc.
  useScrollReveal.ts     IntersectionObserver hook for the fade/slide-in sections
  useActiveSection.ts    IntersectionObserver hook for nav active-state
```

## Editing content

Everything text-based — your name, bio, projects, awards, tech stack, social links,
email — lives in **`lib/data.ts`**. You shouldn't need to touch any component file to
update copy, add a project, or add an award.

## Contact form

The form currently builds a `mailto:` link client-side (same as the original site) —
no backend required. To wire it to a real inbox instead, add a Next.js API route
(`app/api/contact/route.ts`) that sends mail via a provider like Resend or SendGrid,
and `POST` to it from `components/Contact.tsx`'s `handleSubmit` instead of setting
`window.location.href`.

## Deploying

Push to GitHub and import the repo on [vercel.com/new](https://vercel.com/new), or run:

```bash
npx vercel
```

No environment variables are required for the current feature set.

## Notes

- The site is fully static-renderable; no server-only data fetching is used.
- Dark mode uses the `class` strategy (`darkMode: "class"` in `tailwind.config.js`) and
  `suppressHydrationWarning` on `<html>`, which is the standard `next-themes` setup —
  it avoids a flash of the wrong theme on load.
- The footer year is baked in at build time (`new Date().getFullYear()` runs on the
  server); redeploy around New Year's if it matters to you, or convert it to a client
  component if you'd rather it stay live.
