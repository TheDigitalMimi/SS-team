create extension if not exists "uuid-ossp";

create table if not exists businesses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  type text not null check (type in ('online', 'physical', 'both')),
  location text,
  description text not null,
  results text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table businesses enable row level security;

create policy "Users can view their own businesses"
  on businesses for select
  using (auth.uid() = user_id);

create policy "Users can create their own businesses"
  on businesses for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own businesses"
  on businesses for update
  using (auth.uid() = user_id);

create policy "Users can delete their own businesses"
  on businesses for delete
  using (auth.uid() = user_id);

create index businesses_user_id_idx on businesses(user_id);
