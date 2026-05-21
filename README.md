# Andrew Li — Portfolio

Personal portfolio site for Andrew Li (CS @ Georgia Tech, robotics). Editorial
dark/light theme, served as a single-page React app.

## Run

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # produces dist/
npm run preview
```

## Pages

- **Home** — landing video, name, one-line bio, CTAs into Projects / About.
- **Projects** — featured John-Stockbot spread + Long-term / Short-term grids.
  Clicking a card opens a full-page detail writeup.
- **Experience** — paid + competition roles (Sandia, Invention Studio,
  GT RoboWrestling, Vex Robotics).
- **Research** — lab + research-team affiliations (Humanoid Robotics @ GT,
  Lunar Lab, BU Morphable Biorobotics).
- **About** — personal bio, photos, and an index pointing into the other pages.
- **Contact** — GitHub / LinkedIn / YouTube / email.

## Tech stack

- Vite + React 18 + TypeScript
- Single stylesheet (`src/styles.css`) — design tokens (colors, spacing,
  typography) as CSS custom properties, with a `.site.light` modifier for
  the light theme.
- No router, no UI library, no state library. Top-level tab state lives in
  `App.tsx`.

## Project layout

```
src/
├── App.tsx                       Top-level tab router
├── main.tsx
├── styles.css                    Single stylesheet + design tokens
├── types.ts                      Tab, Theme, ProjectCard
│
├── hooks/
│   └── useTheme.ts               Dark/light + localStorage persistence
│
├── layout/
│   ├── Layout.tsx                Shell wrapper (owns theme)
│   ├── Nav.tsx
│   └── Footer.tsx
│
├── components/                   Page-agnostic, reusable UI
│   ├── Icons.tsx
│   ├── TocItem.tsx
│   ├── StackCard.tsx
│   ├── ImgPlaceholder.tsx
│   ├── Embed.tsx
│   └── DownloadList.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx              Master grid (routes to ProjectDetail)
│   ├── Experience.tsx
│   ├── Research.tsx
│   ├── About.tsx
│   └── Contact.tsx
│
├── projects/                     The only feature with enough depth for its own folder
│   ├── FeaturedJohnStockbot.tsx
│   ├── ProjectDetail.tsx         Record<id, Component> dispatcher
│   └── details/
│       ├── JohnStockbotDetail.tsx
│       ├── StairBotDetail.tsx
│       ├── PrinterUpgradesDetail.tsx
│       ├── BedframeHolderDetail.tsx
│       └── VexGuiDetail.tsx
│
└── data/
    ├── projects.ts               LONG_TERM, SHORT_TERM, ALL_PROJECTS
    ├── contacts.ts
    └── media.ts                  Cloudinary base URL + img() helper
```

## Adding a new project

1. Append a `ProjectCard` to `LONG_TERM` or `SHORT_TERM` in
   `src/data/projects.ts`.
2. Create the detail body in `src/projects/details/MyProjectDetail.tsx`
   (return a `<>...</>` of `<section>` blocks).
3. Register it in the `DETAILS` map in `src/projects/ProjectDetail.tsx`.

## Adding a new role to Experience or Research

Edit `src/pages/Experience.tsx` or `src/pages/Research.tsx` directly — drop a
new `<section className="subsection [reverse]">` block, add a matching
`<TocItem>` to the sidebar nav.

## Theme

Dark by default with an OS-preference fallback on first visit. Toggle is in
the top nav; preference is persisted under `localStorage["portfolio-theme"]`.

## Assets

- Images live on Cloudinary (`res.cloudinary.com/dxshkhibs`). Reference them
  via `img('public_id')` from `src/data/media.ts`.
- Videos live in `public/videos/`.
- Downloadable files (STLs, ZIPs) live in `public/downloadables/`.
