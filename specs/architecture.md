# 🏗️ Tech Stack: Rhythm Game Task Board

## Core Framework
- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org)
  - *Role*: Handles both Frontend (React Server Components) and Backend (Server Actions).
- **Language**: TypeScript
- **Hosting**: [Vercel](https://vercel.com) (Free Tier)

## Backend-as-a-Service (BaaS)
- **Platform**: [Supabase](https://supabase.com) (Free Tier)
- **Database**: PostgreSQL
- **Auth**: Supabase Auth (Google OAuth2 / Email)
- **Storage**: Supabase Storage (S3-compatible bucket for screenshots)

## UI & Styling
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: Lucide React
- **UI Components**: shadcn/ui (Recommended for quick, accessible components)

## The Flow
- **Frontend** (Client): Never talks to the DB directly. It only calls your Next.js Server Actions (API).
- **Backend** (Next.js):
  - Receives the request.
  - Checks Auth: "Is this user logged in?" (using the session cookie).
  - Checks Permission: "Is this user the owner of this submission?" (Your business logic code).
  - Executes DB Query: Uses a Service Role Key (Admin Access) to write to the DB, bypassing RLS.
- **Database** (Supabase): Just a dumb storage engine. No RLS policies required (or just "Deny All Public" to be safe).