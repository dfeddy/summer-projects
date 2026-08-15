# HANDOFF — Pre-Travel Snapshot

Date written: 2026-08-15
Date I expect to come back: **[FILL IN]**
Days away: **[FILL IN]**

> Fields marked **[FILL IN]** are the ones only I can answer. Everything else
> below was verified on 2026-08-15, not guessed.

---

## Where I am in the guide

- Spring Training (Phases 1–3) complete.
- Next up: Phase 4 — Project Planning & Architecture (starts at Day 24).
- I am NOT picking up mid-feature. Phase 3 is fully shipped and deployed.

---

## What currently works (live, deployed, visible)

| Thing | Status |
| --- | --- |
| Guestbook | **Live** at https://guestbook-tnhb.vercel.app (verified 200 OK) |
| Guestbook messages in Supabase | **6 rows**, including one from a real outside visitor |
| Character counter | Working live — counts as you type, turns red past 280 |
| Content filter | Working live — rejects profanity, including leetspeak evasion (`sh1t`) |
| index.html (first webpage) | On Vercel — **[FILL IN URL]** |
| Dashboard tutorial app | On Vercel — **[FILL IN URL]** |

---

## Tools installed on this Mac (verified 2026-08-15)

```
git  --version  -> 2.39.5 (Apple Git-154)
node --version  -> v26.0.0
npm  --version  -> 12.0.2
brew --version  -> Homebrew 6.0.15
```

- Cursor — installed at `/Applications/Cursor.app` ✓
- Claude Pro — logged in (https://claude.ai)
- GitHub SSH auth — working (`ssh -T git@github.com` returns "Hi dfeddy!")

---

## Where things live

- Code: `~/Documents/summer-projects/`
- GitHub username: **dfeddy**
  - `github.com/dfeddy/summer-projects` — the parent folder
  - `github.com/dfeddy/guestbook` — the guestbook, its own separate repo

### Folder inventory (what's actually there)

```
~/Documents/summer-projects/
├── index.html          first webpage
├── day6index.html
├── guestbook/          ← Phase 3 micro-project (its own git repo)
├── nextjs-dashboard/   the Next.js Dashboard tutorial
├── learning_log.md
├── typescript-notes.md
└── HANDOFF.md          (this file)
```

**Note:** the guide's Day 21 template mentions a `counter-test` project.
It does **not** exist on this machine — nothing is missing, the template just
assumed it. Don't go hunting for it.

### Important: guestbook is a separate repo

`guestbook/` has its own `.git` and its own GitHub remote. The parent repo
deliberately does **not** track it (see `.gitignore`). So:

- To commit guestbook work: `cd ~/Documents/summer-projects/guestbook` first.
- `git status` in the parent will never show guestbook changes. That's correct.

---

## How to start the dev server

**Guestbook:**
```bash
cd ~/Documents/summer-projects/guestbook
npm run dev
```
Then visit http://localhost:3000

**Dashboard tutorial:**
```bash
cd ~/Documents/summer-projects/nextjs-dashboard
npm run dev
```

---

## Supabase state

- Project ref: `lqfclsqvmdevgtqklglr` (URL `https://lqfclsqvmdevgtqklglr.supabase.co`)
- Table: `public.messages` — columns `id`, `created_at`, `name`, `message`
- RLS: **on**, with public read + public insert policies (correct for a public
  guestbook; would be wrong for private data)
- Paused before trip? **[FILL IN — yes/no]**
  - If paused: supabase.com → project → Restore
  - If left active: free tier allows 2 projects, so this leaves room for 1 more
- Anon key & URL: in `guestbook/.env.local` (git-ignored) **and** in Vercel's
  project env vars. Database password is in my password manager only.

⚠️ Supabase free-tier projects auto-pause after ~1 week of inactivity. After a
trip of more than a few days, **expect the guestbook to show a database error
until you resume the project.** This is normal, not a broken app.

---

## Accounts/services

- GitHub Pro: active
- GitHub Education: approved
- Vercel: hobby tier, guestbook deployed and auto-deploying from `main`
- Supabase: free tier
- Cursor Pro: paid through **[FILL IN]**
- Claude Pro: paid through **[FILL IN]**
- Resend: NOT signed up yet (Phase 7)

---

## Things I know are NOT done but are OK for now

- The 280-character limit is a **soft** warning only — it turns the counter red
  but doesn't actually block a longer message from being submitted. Deliberate.
- The content filter only checks the `message` field, not the `name` field.
  Someone could put profanity in their name. Known gap, fine for now.
- No way to delete or edit a message. There's no `update`/`delete` RLS policy,
  so the only way to remove one is through the Supabase dashboard directly.
- `nextjs-dashboard` uses the tutorial's auth, not the pattern I'll use for the
  real project.
- The learning log file is `learning_log.md` (lowercase) while the guide says
  `LEARNING_LOG.md`. macOS doesn't care; not worth renaming.

---

## Things I was confused about and want to revisit

**[FILL IN — 3–5 concepts still fuzzy. Some candidates from this phase, but
write it in my own words based on what actually felt shaky:]**

- Server vs Client Components — when does something need `'use client'`?
- Why does Next.js need both `.env.local` AND Vercel env vars?
- What `revalidatePath()` actually does, and why `force-dynamic` was needed
- Controlled vs uncontrolled form inputs in React

---

## The exact next step when I come back (THE MOST IMPORTANT FIELD)

1. Open this file. Read it.
2. Run:
   ```bash
   cd ~/Documents/summer-projects/guestbook && npm run dev
   ```
   Verify http://localhost:3000 loads. (If not, see Troubleshooting.)
3. Open the live site: https://guestbook-tnhb.vercel.app — if messages don't
   load, the Supabase project auto-paused. Resume it from the dashboard.
4. Open Cursor. Open the `summer-projects` folder.
5. Open the v9 guide. Go to the start of Phase 4 (Day 24).
6. Day 24 starts with "Business Process Review" — schedule the EPC walkthrough
   with Dad for that morning. Don't try to do it cold from notes.
7. **Do not write any code on the day you return.** Just re-orient. Real work
   starts the next day.

---

## Troubleshooting

**iCloud has eaten my git repo** — `git status` says
`fatal: not a git repository` even though `.git` clearly exists.
`~/Documents` is iCloud-synced, and macOS "Optimize Mac Storage" evicts
old files to the cloud, leaving zero-byte placeholders. This *actually
happened* on 2026-08-15 and cost an hour.
→ Fix: open Finder, go to `~/Documents/summer-projects`, press `Cmd+Shift+.`
to show hidden files, right-click `.git` → **Download Now**. Wait for the
cloud icon to clear. Downloading just `.git` is much faster than the whole
folder (which would pull down every `node_modules`).
→ Permanent fix worth considering: move `summer-projects` out of iCloud
entirely, e.g. to `~/dev/`.

**Empty folders named `app 2`, `node_modules 2`** — iCloud sync-conflict
artifacts. Harmless, safe to delete. The parent `.gitignore` now ignores them.

**`npm run dev` — "command not found"** → Terminal lost its PATH. Run:
`eval "$(/opt/homebrew/bin/brew shellenv)"`

**`npm run dev` — module errors** → `node_modules` is stale. Run `npm install`.

**Guestbook loads but shows a database error or no messages** → Supabase
project auto-paused from inactivity. Resume it at supabase.com.

**Cursor won't sign in** → Cursor → Settings → Account.

**Anything else** → Start with `learning_log.md`. Worst case, fresh Claude
thread: "I'm picking up a Next.js + Supabase project after a break. Here's
the error..."

---

## Phone numbers / emails I might need

- Dad: **[FILL IN]**
- School contact: **[FILL IN]**

---

## A note to myself

**[FILL IN — two sentences, in my own words. What am I feeling right now?
Excited about anything? Anxious about anything? Future me will want to know
what present me was thinking.]**
