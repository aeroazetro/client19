# Supabase Iteration (GitHub Pages + Shared Billing Data)

This folder is the Supabase-backed version of your site.

## What changed
- Billing data now syncs through Supabase table `billing_sessions`.
- If `supabase-config.js` is not configured, app falls back to local browser storage.
- Billing access is role-based on open:
  - `Client` (can submit proof for selected payment count)
  - `Tutor` (can add sessions, approve pending proofs, and mark paid)
- Payment status flow is now: `unpaid -> pending -> paid`.
- Client can view approved payment history with proof photos and details.
- Tutor add-session now supports `hours` (0.5 steps) and optional `topic`.
- Payment proof upload supports JPG/PNG only with 2MB max file size.
- Proof files are auto-deleted after 6 months.

## Setup
1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase-schema.sql`.
3. Edit `supabase-config.js` with your project URL + anon key:
   - `url`: `https://YOUR-PROJECT.supabase.co`
   - `anonKey`: your `anon` public key
4. Deploy this folder to GitHub Pages.

## Notes
- First load seeds Supabase from `billing-logs.csv` if the table is empty.
- Client proof submission marks earliest unpaid sessions as `pending` in FIFO order.
- Tutor approval changes pending batch to `paid`.
- Passwords are managed in `script.js`:
  - `BILLING_CLIENT_PASSWORD` (default `climb123`)
  - `BILLING_TUTOR_PASSWORD` (default `teach123`)
