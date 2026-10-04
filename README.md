# L-JIST Homestay — The Meghalaya Escape

Editorial-style landing page for L-JIST Homestay (Markasa, Meghalaya), built with Next.js 14 (App Router) and Tailwind CSS.

## Stack

- Next.js 14 / React 18
- Tailwind CSS
- `next/font` (Newsreader, Inter, IBM Plex Mono)
- `next/image` for all photography (real files in `public/images`, no external hosting)

## Project structure

```
app/            Root layout, global styles, the single page route
components/     One component per section (Nav, Hero, Story, Stay, Amenities,
                Gallery, Notes, Location, BookForm, Footer, FloatingWhatsApp)
lib/            content.js — all site copy/data in one place (edit this to
                change phone number, address, gallery captions, reviews, etc.)
public/images/  The 10 property photos used across the site
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Configuration

Copy `.env.example` to `.env.local` and adjust if the phone number ever changes:

```
NEXT_PUBLIC_PHONE_E164=916009762101
NEXT_PUBLIC_PHONE_DISPLAY=+91 60097 62101
```

## Deploy to Vercel

**Option A — CLI**
```bash
npm i -g vercel
vercel --prod
```

**Option B — GitHub import**
1. Push this folder to a new GitHub repo
2. On vercel.com → Add New → Project → Import the repo
3. Vercel auto-detects Next.js, builds and deploys automatically

No environment variables are required to deploy — the defaults in `lib/content.js` are used if `.env.local` isn't set.

## Editing content

Everything text-based (phone number, address, room features, amenities,
gallery captions, guest reviews) lives in `lib/content.js`. Swap photos by
replacing the files in `public/images/` (keep the same filenames, or update
the paths in `lib/content.js`).
