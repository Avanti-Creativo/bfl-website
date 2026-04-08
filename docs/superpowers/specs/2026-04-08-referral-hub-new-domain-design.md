# Referral Hub on `www.bflreferralhub.com` — Design

**Date:** 2026-04-08
**Status:** Draft

## Goal

Make the referral hub reachable at `https://www.bflreferralhub.com` while continuing to serve it at `https://www.bflagency.com/referral-hub`. Both URLs should serve the same content from the same Next.js deployment. No content split, no separate codebase.

## Non-goals

- Splitting the referral hub into a separate Next.js project or repo.
- Removing the referral hub from `bflagency.com` or 301-redirecting the old URLs (this is a *mirror*, not a *move*).
- Customizing the referral hub's look on the new domain. Same nav, same footer, same branding.
- Restructuring the existing `referral-hub` route or `partners-data.ts` schema.

## Architecture

Single Next.js app, two domains, both pointing at the same Vercel deployment. A new `src/middleware.ts` reads the `Host` header on every request and decides what to do based on which domain the user came in on.

```
                    ┌──────────────────────────┐
   bflagency.com ──▶│                          │
                    │   bfl-website (Next.js)  │
bflreferralhub.com ▶│   single Vercel project  │
                    │                          │
                    └──────────────────────────┘
                                │
                                ▼
                        src/middleware.ts
                  (host-aware routing decisions)
```

## Routing rules

**When the host is `bflagency.com` (or any preview/dev URL):** middleware does nothing. The site behaves exactly as it does today. `/referral-hub` and `/referral-hub/{slug}` keep working at their current URLs.

**When the host contains `bflreferralhub`:**

| Incoming URL | Action | Result |
|---|---|---|
| `/` | Internal **rewrite** to `/referral-hub` | URL bar still says `/`, user sees referral hub index |
| `/{slug}` where slug matches a real partner | Internal **rewrite** to `/referral-hub/{slug}` | URL bar stays clean, user sees partner detail |
| `/referral-hub` | **301 redirect** to `/` | Catches the existing "Back to Referral Hub" link without code changes |
| `/referral-hub/{slug}` | **301 redirect** to `/{slug}` | Catches any existing partner links |
| Anything else (`/services`, `/about`, etc.) | **301 redirect** to `https://www.bflagency.com{path}` | Nav links on the new domain cleanly bounce users to the main BFL site |

The "is this slug a real partner?" check imports the `partners` array from `src/app/referral-hub/partners-data.ts` and builds a `Set<string>` of slugs at module load time. Single source of truth — when a partner is added to `partners-data.ts`, the middleware automatically recognizes the new slug.

The middleware is scoped via Next.js's `config.matcher` to skip `_next/*`, `/api/*`, and static asset extensions, so it doesn't run on every JS chunk and image.

**Note on API routes:** because `/api/*` is excluded from the middleware matcher, API endpoints remain accessible from both domains (e.g. `bflreferralhub.com/api/contact` would hit the same handler as `bflagency.com/api/contact`). This is intentional and consistent with the "single deployment, two domains" architecture — API responses don't depend on host, and the referral hub doesn't need its own API surface.

## Files to change

### New: `src/middleware.ts`

~50 lines. Imports `partners` from `src/app/referral-hub/partners-data.ts` to build the slug set. Implements the routing rules above. Exports a `config` object with a `matcher` that excludes `_next/*`, `/api/*`, and static asset extensions.

Host detection uses `host.includes("bflreferralhub")` so it matches `www.bflreferralhub.com`, the apex `bflreferralhub.com`, and any future subdomain. Localhost and Vercel preview URLs won't match.

### New: `src/app/referral-hub/ReferralHubClient.tsx`

Holds the existing client-side JSX from `src/app/referral-hub/page.tsx` — `ReferralHubHero`, `IntroSection`, `PartnersSection`, `FinalCTA`, and the body that composes them. Marked `"use client"`. Exported as a named or default component for the server-component shell to render. No behavioral changes — pure code move.

### Modified: `src/components/common/Footer.tsx`

The footer currently hides its CTA when `pathname.startsWith("/referral-hub")`. After we add the rewrite, on `bflreferralhub.com` the user-visible URL is `/`, so `usePathname()` returns `/`, so the existing check fails, so the CTA *would incorrectly show up* on the referral hub when accessed via the new domain.

Fix: also hide the CTA whenever the user is on the `bflreferralhub.com` host. Implementation is a small `useEffect` that reads `window.location.hostname` after mount (hydration-safe), and ORs that into the existing `hideCta` check.

```tsx
const [isReferralHubDomain, setIsReferralHubDomain] = useState(false);
useEffect(() => {
  setIsReferralHubDomain(window.location.hostname.includes("bflreferralhub"));
}, []);
const hideCta =
  pathname.startsWith("/referral-hub") ||
  pathname.startsWith("/careers") ||
  isReferralHubDomain;
```

### Modified: `src/app/referral-hub/page.tsx`

Refactor to add a `<link rel="canonical" href="https://www.bflreferralhub.com/">` tag via Next.js `metadata`. Because the existing file is a `"use client"` component (Next.js does not allow client components to export `metadata`), the file becomes a thin server component shell that exports `metadata` (with `alternates.canonical`) and renders the new `ReferralHubClient` component described above.

The partner detail page (`src/app/referral-hub/[slug]/page.tsx`) is **not** refactored. It stays a client component with no canonical tag. Acceptable trade-off — partial canonical coverage is better than no coverage, and the slug page refactor is more invasive than the index refactor.

### Files NOT changed (deliberately)

- `src/app/referral-hub/[slug]/page.tsx` — existing "Back to Referral Hub" links stay as `<Link href="/referral-hub">`. On the new domain, the middleware redirects them to `/` automatically. One extra HTTP hop, invisible to users.
- `src/components/common/Navigation.tsx` — already has no referral-hub link. The existing nav links on the new domain will be redirected to `bflagency.com` by the middleware.
- All other pages (`/about`, `/services`, etc.) — completely untouched.
- `src/app/referral-hub/partners-data.ts` — read-only consumer in the middleware.

## Vercel & DNS setup

**On Vercel:**

1. Open the existing `bfl-website` project → **Settings → Domains**.
2. Add `www.bflreferralhub.com` and `bflreferralhub.com`.
3. Vercel will show the DNS records to configure (typically a `CNAME` for `www` pointing at `cname.vercel-dns.com`, and an `A` record for the apex pointing at Vercel's IP).
4. Mark `www.bflreferralhub.com` as the primary. Vercel will automatically set up an apex → www redirect.
5. SSL certificates are issued automatically by Vercel via Let's Encrypt — no action needed.

**At the DNS registrar:**

1. Add the `CNAME` and `A` records Vercel shows.
2. DNS propagation: usually a few minutes, occasionally up to a couple hours.

**Prerequisite:** access to the registrar where `bflreferralhub.com` is registered. Domain is already owned by the client. Whoever has registrar access (client or developer) needs to be available during go-live.

## Testing

### Local

`npm run dev`, then in another terminal use `curl` to spoof the `Host` header:

```bash
curl -I -H "Host: www.bflreferralhub.com" http://localhost:3000/
curl -I -H "Host: www.bflreferralhub.com" http://localhost:3000/rok-financial
curl -I -H "Host: www.bflreferralhub.com" http://localhost:3000/services
curl -I -H "Host: www.bflreferralhub.com" http://localhost:3000/referral-hub
```

Expected:
- `/` → 200, content is the referral hub index
- `/{partner-slug}` → 200, content is the partner detail
- `/services` → 301, `Location: https://www.bflagency.com/services`
- `/referral-hub` → 301, `Location: /`

Browsers don't easily allow `Host` header spoofing, so `curl` is the right tool for local verification.

### Vercel preview

Pushing to a feature branch creates a preview URL like `bfl-website-git-<branch>.vercel.app`. The middleware will not intercept this hostname (it doesn't contain `bflreferralhub`), so the preview behaves exactly like the main site — referral hub still at `/referral-hub`. Use the preview to confirm nothing on the main site regressed.

There is no clean way to test cross-domain routing on a Vercel preview without temporarily attaching the production domain. The host-detection behavior is verified locally with `curl` and on the live domain after go-live.

### Live smoke test (after merge + DNS)

1. `https://www.bflreferralhub.com/` → renders referral hub index, URL stays clean
2. `https://www.bflreferralhub.com/rok-financial` (or any real partner slug) → renders partner detail, URL stays clean
3. Click "Back to Referral Hub" on a partner page → lands on `https://www.bflreferralhub.com/` (one redirect hop, transparent to user)
4. Click any nav link (e.g. "Services") on the new domain → lands on `https://www.bflagency.com/services`
5. Footer CTA ("Get My COMPLIMENTARY Wealth Plan") is **hidden** on the new domain
6. `https://www.bflagency.com/referral-hub` → still works exactly as before (sanity check the main site didn't regress)
7. View source on the new domain's index → `<link rel="canonical" href="https://www.bflreferralhub.com/">` is present
8. `https://bflreferralhub.com/` (apex, no www) → redirects to `https://www.bflreferralhub.com/`

## Rollback plan

If anything goes wrong after deploy, the middleware can be disabled in seconds by deleting the `bflreferralhub` host check (or the whole `src/middleware.ts` file) and redeploying. The new domain would briefly serve the main BFL site at its root until DNS is reverted or the domain is unattached in Vercel, but nothing on `bflagency.com` would be affected.

## Open questions

None. Ready for implementation planning.
