-- Run this in Supabase SQL Editor.
-- Safe to re-run.

create table if not exists public.billing_sessions (
  id bigint generated always as identity primary key,
  date date not null,
  time text not null,
  tutee text not null,
  sessions integer not null default 1 check (sessions > 0),
  hours numeric(4,1) not null default 1.0 check (hours > 0),
  topic text,
  status text not null,
  sort_order integer not null default 0,
  payment_batch_id text,
  payment_method text,
  payment_amount numeric(10,2),
  payment_account_name text,
  payment_account_number text,
  proof_path text,
  proof_uploaded_at timestamptz,
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.billing_sessions
  add column if not exists hours numeric(4,1) not null default 1.0,
  add column if not exists topic text,
  add column if not exists payment_batch_id text,
  add column if not exists payment_method text,
  add column if not exists payment_amount numeric(10,2),
  add column if not exists payment_account_name text,
  add column if not exists payment_account_number text,
  add column if not exists proof_path text,
  add column if not exists proof_uploaded_at timestamptz,
  add column if not exists approved_at timestamptz;

alter table public.billing_sessions
  drop constraint if exists billing_sessions_status_check;

alter table public.billing_sessions
  add constraint billing_sessions_status_check
  check (status in ('paid', 'unpaid', 'pending'));

update public.billing_sessions
set hours = 1.0
where hours is null;

create index if not exists billing_sessions_date_time_idx
  on public.billing_sessions (date, time, sort_order);

alter table public.billing_sessions enable row level security;

drop policy if exists "billing read anon" on public.billing_sessions;
create policy "billing read anon"
on public.billing_sessions
for select
using (true);

drop policy if exists "billing insert anon" on public.billing_sessions;
create policy "billing insert anon"
on public.billing_sessions
for insert
with check (true);

drop policy if exists "billing update anon" on public.billing_sessions;
create policy "billing update anon"
on public.billing_sessions
for update
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('payment-proofs', 'payment-proofs', false)
on conflict (id) do nothing;

-- storage.objects is managed by Supabase Storage; do not ALTER TABLE here.

drop policy if exists "proof read anon" on storage.objects;
create policy "proof read anon"
on storage.objects
for select
using (bucket_id = 'payment-proofs');

drop policy if exists "proof insert anon" on storage.objects;
create policy "proof insert anon"
on storage.objects
for insert
with check (bucket_id = 'payment-proofs');

drop policy if exists "proof update anon" on storage.objects;
create policy "proof update anon"
on storage.objects
for update
using (bucket_id = 'payment-proofs')
with check (bucket_id = 'payment-proofs');

drop policy if exists "proof delete anon" on storage.objects;
create policy "proof delete anon"
on storage.objects
for delete
using (bucket_id = 'payment-proofs');
