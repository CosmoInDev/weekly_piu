# Weekly PIU — Rhythm Game Task Board

Next.js 14+ (App Router) + TypeScript + Tailwind + Supabase. See [specs/architecture.md](specs/architecture.md) and [specs/erd.sql](specs/erd.sql).

## Setup

```bash
npm install
cp .env.example .env   # then fill Supabase keys
```

## Scripts

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Stack

- **Framework**: Next.js 14+ (App Router), TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **UI**: Tailwind CSS, Lucide React, shadcn/ui (optional)
- **Hosting**: Vercel
