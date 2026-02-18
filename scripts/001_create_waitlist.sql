-- Create the waitlist table
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (public signup form)
create policy "Allow public insert" on public.waitlist
  for insert
  with check (true);
