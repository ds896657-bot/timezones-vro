# Enable Google sign-in and cloud sync

The app continues to work with browser-only storage until Supabase is configured. To enable account sign-in and sync:

1. Create a Supabase project and open **SQL Editor**. Run:

   ```sql
   create table public.worldtime_data (
     user_id uuid primary key references auth.users (id) on delete cascade,
     data jsonb not null default '{}'::jsonb,
     updated_at timestamptz not null default now()
   );

   alter table public.worldtime_data enable row level security;
   grant select, insert, update, delete on public.worldtime_data to authenticated;

   create policy "Users can manage their own dashboard"
     on public.worldtime_data
     for all
     to authenticated
     using ((select auth.uid()) = user_id)
     with check ((select auth.uid()) = user_id);
   ```

2. In **Authentication → Providers → Google**, enable Google and note the callback URL shown there. In Google Cloud Console, set that callback URL as an authorized redirect URI for the OAuth client, then enter the client ID and secret in Supabase.
3. In **Authentication → URL Configuration**, set the app’s deployed URL as the Site URL and add it to the Redirect URLs list. For local testing, add the local server URL, such as `http://localhost:8000`.
4. Open **Project Settings → API** and copy the Project URL and the publishable key (or legacy `anon` key) into `sync-config.js`:

   ```js
   window.WORLDTIME_CONFIG = {
     supabaseUrl: "https://your-project.supabase.co",
     supabaseAnonKey: "your-publishable-or-anon-key",
   };
   ```

   These client-side values are public. Never put a `service_role` key or other secret in this file. The row-level security policy above is required to keep each account’s data private.
5. Serve the app from an HTTP(S) URL rather than opening `index.html` directly. For local testing, run `python -m http.server 8000` in the project folder and open `http://localhost:8000`.

On the first sign-in in a browser, its saved time zones and friend profiles are merged with the account’s cloud data; cloud settings take precedence when both sides have a value. Afterward, changes save automatically and are loaded when that account opens the app on another device. Signing out clears that browser’s locally cached dashboard data after a successful sync; if sync is unavailable, the app asks before clearing it.
