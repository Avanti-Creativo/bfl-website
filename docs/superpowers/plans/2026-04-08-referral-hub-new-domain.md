# Referral Hub on `www.bflreferralhub.com` Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the BFL referral hub reachable at `https://www.bflreferralhub.com` (mirroring the existing `bflagency.com/referral-hub`) without splitting the codebase or moving content off the main site.

**Architecture:** A single Next.js app, two domains. A new `src/middleware.ts` reads the incoming `Host` header and rewrites/redirects URLs so that on `bflreferralhub.com`, root `/` serves the referral hub index, partner-slug paths serve partner detail pages, and any non-referral-hub path bounces back to `bflagency.com`. The main `bflagency.com` site is untouched. A small refactor on the referral hub index page adds a canonical link tag pointing to the new domain. The footer's CTA-hiding logic is patched so it stays hidden on the new domain.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Vercel hosting. No test framework currently in this repo — verification is done via `curl` (local) and a live smoke-test checklist (post-deploy).

**Spec:** `docs/superpowers/specs/2026-04-08-referral-hub-new-domain-design.md`

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `src/middleware.ts` | Create | Host-aware routing: rewrites/redirects on `bflreferralhub.com`, no-op on the main site. |
| `src/app/referral-hub/ReferralHubClient.tsx` | Create | Client-side JSX for the referral hub index (`ReferralHubHero`, `IntroSection`, `PartnersSection`, `FinalCTA`), extracted from the existing `page.tsx`. Marked `"use client"`. |
| `src/app/referral-hub/page.tsx` | Modify | Becomes a thin server-component shell that exports `metadata` (with `alternates.canonical`) and renders `<ReferralHubClient />`. |
| `src/components/common/Footer.tsx` | Modify | Adds a hostname check so the CTA stays hidden when the user is on `bflreferralhub.com`. |
| `src/app/referral-hub/partners-data.ts` | Read-only consumer | Imported by `middleware.ts` to derive the set of valid partner slugs. |

**Operational (non-code) work:**
- Vercel: attach `www.bflreferralhub.com` and `bflreferralhub.com` to the existing project.
- DNS: add records at the registrar.
- Live smoke test: 8-item checklist post-deploy.

---

## Task 1: Add the host-aware middleware

**Files:**
- Create: `src/middleware.ts`

This is the core piece. The middleware runs on every request (except static assets and API routes), reads the `Host` header, and routes based on which domain the user came in on. On the main BFL site it does nothing.

- [ ] **Step 1: Create `src/middleware.ts`**

Create the file with the following exact contents:

```ts
import { NextResponse, type NextRequest } from "next/server";
import { partners } from "@/app/referral-hub/partners-data";

const REFERRAL_HUB_HOST_FRAGMENT = "bflreferralhub";
const MAIN_SITE_ORIGIN = "https://www.bflagency.com";

// Built once at module load time. New partners added to partners-data.ts
// are picked up automatically on the next deploy.
const partnerSlugs = new Set(partners.map((p) => p.slug));

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // On the main BFL site (or previews/localhost), do nothing.
  if (!host.includes(REFERRAL_HUB_HOST_FRAGMENT)) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;

  // Root → rewrite (internally) to /referral-hub. URL bar stays at "/".
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/referral-hub";
    return NextResponse.rewrite(url);
  }

  // /referral-hub → 301 redirect to "/" (clean URL on the new domain).
  if (pathname === "/referral-hub") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // /referral-hub/{slug} → 301 redirect to "/{slug}".
  if (pathname.startsWith("/referral-hub/")) {
    const slug = pathname.slice("/referral-hub/".length);
    const url = request.nextUrl.clone();
    url.pathname = `/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  // /{slug} where slug is a real partner → rewrite to /referral-hub/{slug}.
  // Only single-segment paths (no nested slashes) are eligible.
  const maybeSlug = pathname.slice(1);
  if (maybeSlug && !maybeSlug.includes("/") && partnerSlugs.has(maybeSlug)) {
    const url = request.nextUrl.clone();
    url.pathname = `/referral-hub/${maybeSlug}`;
    return NextResponse.rewrite(url);
  }

  // Anything else → 301 redirect to bflagency.com{path}.
  return NextResponse.redirect(`${MAIN_SITE_ORIGIN}${pathname}${search}`, 301);
}

export const config = {
  // Run on all paths except _next assets, /api routes, favicon, and common
  // static asset extensions.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|txt|xml|woff|woff2)).*)",
  ],
};
```

- [ ] **Step 2: Verify the build still compiles**

Run: `npm run build`
Expected: Build succeeds. Look for a line in the output indicating middleware was compiled (Next.js prints something like `ƒ Middleware                              ...`). No TypeScript errors.

- [ ] **Step 3: Start the dev server in the background**

Run: `npm run dev`
Expected: Dev server starts on `http://localhost:3000`. Leave it running for the next steps.

- [ ] **Step 4: Verify the main site is unaffected (no host header rewrite)**

In another terminal, run:
```bash
curl -sI http://localhost:3000/ | head -1
curl -sI http://localhost:3000/referral-hub | head -1
```
Expected:
- `/` → `HTTP/1.1 200 OK` (renders main BFL homepage as before)
- `/referral-hub` → `HTTP/1.1 200 OK` (renders referral hub at its current path)

- [ ] **Step 5: Verify the new-domain rewrite for `/`**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/ | head -1
```
Expected: `HTTP/1.1 200 OK` (the middleware rewrote `/` to `/referral-hub` internally and Next.js rendered the referral hub index).

- [ ] **Step 6: Verify the new-domain rewrite for a real partner slug**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/financial-legacy-builders | head -1
```
Expected: `HTTP/1.1 200 OK` (the middleware recognized `financial-legacy-builders` as a real partner slug and rewrote to `/referral-hub/financial-legacy-builders`).

- [ ] **Step 7: Verify the new-domain redirect for `/referral-hub`**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/referral-hub
```
Expected: status `301`, `Location:` header pointing at `http://localhost:3000/`. This is the "Back to Referral Hub" link redirect.

- [ ] **Step 8: Verify the new-domain redirect for `/referral-hub/{slug}`**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/referral-hub/financial-legacy-builders
```
Expected: status `301`, `Location:` header pointing at `http://localhost:3000/financial-legacy-builders`.

- [ ] **Step 9: Verify the new-domain redirect for non-referral-hub paths**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/services
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/about
```
Expected: both return status `301` with `Location: https://www.bflagency.com/services` and `https://www.bflagency.com/about` respectively.

- [ ] **Step 10: Verify a non-existent slug also redirects to bflagency.com**

Run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/not-a-real-partner
```
Expected: status `301`, `Location: https://www.bflagency.com/not-a-real-partner`. (The fallback case — if it's not a known partner, treat it as a main-site path.)

- [ ] **Step 11: Stop the dev server**

Press `Ctrl+C` in the terminal running `npm run dev`.

- [ ] **Step 12: Commit**

```bash
git add src/middleware.ts
git commit -m "Add host-aware middleware for bflreferralhub.com routing"
```

---

## Task 2: Refactor referral hub index to add canonical metadata

**Files:**
- Create: `src/app/referral-hub/ReferralHubClient.tsx`
- Modify: `src/app/referral-hub/page.tsx`

The current `referral-hub/page.tsx` is `"use client"`, which means it cannot export Next.js `metadata`. To add a canonical link tag, we split the file: a thin server-component shell exports `metadata`, and the existing JSX moves into a sibling client component. Behavior of the page is unchanged.

- [ ] **Step 1: Create `src/app/referral-hub/ReferralHubClient.tsx` with the existing JSX**

Create the file with the following exact contents (this is the entire body of the current `page.tsx` minus the `export default` at the bottom — exported as a named function instead):

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { partners } from "./partners-data";
import Link from "next/link";
import Image from "next/image";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const gradients = [
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-emerald-700",
  "from-purple-500 to-purple-700",
  "from-amber-500 to-amber-700",
  "from-cyan-500 to-cyan-700",
  "from-rose-500 to-rose-700",
  "from-indigo-500 to-indigo-700",
  "from-teal-500 to-teal-700",
  "from-orange-500 to-orange-700",
];

// Hero Section
function ReferralHubHero() {
  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-blue/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-6">
            Your Network Is Your Net Worth.
            <span className="block text-primary-green mt-2">
              Start Earning From Both.
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            As a Built For Life agent, your value doesn&apos;t stop at the
            financial strategies you offer &mdash; it extends to every
            conversation, every client need, and every gap in their plan that
            you&apos;re positioned to fill.
          </p>
          <Button href="#partners" size="lg" pulse>
            Browse Our Partners
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Intro Section
function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeadline
              title="Expand What You Offer Without Expanding Your Workload"
              centered
            />
            <p className="text-lg text-warm-gray leading-relaxed">
              The BFL Referral Hub exists to expand what you can offer without
              expanding your workload. Every partner inside this hub has been
              vetted for quality, integrity, and agent-friendly compensation
              structures.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              These are companies that serve your clients well and reward you for
              the introduction. Browse our trusted partners below, learn what
              they offer, and start turning referrals into residual income.
            </p>

            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-2xl p-8 mt-8">
              <p className="text-2xl font-logo font-bold text-dark-navy">
                Vetted for quality. Built for agents.
                <span className="block text-primary-blue mt-1">
                  Designed for residual income.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partner Card Component
function PartnerCard({
  partner,
  index,
}: {
  partner: { name: string; slug: string; logo?: string };
  index: number;
}) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover flex flex-col items-center text-center"
    >
      {/* Partner Logo */}
      {partner.logo ? (
        <div className="w-20 h-20 rounded-2xl overflow-hidden mb-5 relative bg-white flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      ) : (
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
        >
          <span className="text-2xl font-logo font-bold text-white">
            {getInitials(partner.name)}
          </span>
        </div>
      )}

      <h3 className="text-xl font-logo font-bold text-dark-navy mb-4">
        {partner.name}
      </h3>

      <div className="mt-auto pt-2">
        <Link
          href={`/referral-hub/${partner.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-green text-white font-semibold rounded-lg hover:bg-primary-green-dark transition-colors duration-200"
        >
          Learn More & Refer
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

// Partners Grid Section
function PartnersSection() {
  return (
    <section className="py-20 bg-light-gray" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Our Trusted Partners"
          subtitle="Browse our vetted partners and start turning referrals into residual income."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.slug} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-white mb-6">
            Ready to Grow Your Network
            <span className="block text-primary-green">
              and Your Income?
            </span>
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Every referral is an opportunity to serve your clients better while
            building residual income. Start exploring our partners today.
          </p>

          <Button href="#partners" size="lg" pulse>
            Explore Partners
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Referral Hub Client Component
export function ReferralHubClient() {
  return (
    <>
      <ReferralHubHero />
      <IntroSection />
      <PartnersSection />
      <FinalCTA />
    </>
  );
}
```

- [ ] **Step 2: Replace `src/app/referral-hub/page.tsx` with a server-component shell**

Overwrite `src/app/referral-hub/page.tsx` with the following exact contents:

```tsx
import type { Metadata } from "next";
import { ReferralHubClient } from "./ReferralHubClient";

export const metadata: Metadata = {
  title: "Referral Hub | Built For Life Financial Agency",
  description:
    "Vetted referral partners for Built For Life agents. Browse our trusted partners and start turning referrals into residual income.",
  alternates: {
    canonical: "https://www.bflreferralhub.com/",
  },
};

export default function ReferralHubPage() {
  return <ReferralHubClient />;
}
```

Note: there is no `"use client"` directive at the top — this file is a server component, which is what allows the `metadata` export to work.

- [ ] **Step 3: Verify the build still compiles**

Run: `npm run build`
Expected: Build succeeds with no TypeScript errors. The route `/referral-hub` should still appear in the build output.

- [ ] **Step 4: Start the dev server and visually verify the page renders**

Run: `npm run dev`
Open `http://localhost:3000/referral-hub` in a browser.
Expected: The referral hub page renders identically to before — same hero, same intro, same partner grid, same CTA. Animations work. Partner cards link correctly to `/referral-hub/{slug}`.

- [ ] **Step 5: Verify the canonical link tag is in the rendered HTML**

In another terminal, run:
```bash
curl -s http://localhost:3000/referral-hub | grep -o '<link rel="canonical"[^>]*>'
```
Expected: prints `<link rel="canonical" href="https://www.bflreferralhub.com/"/>`.

- [ ] **Step 6: Verify the canonical also appears when accessed via the new-domain rewrite**

Run:
```bash
curl -s -H "Host: www.bflreferralhub.com" http://localhost:3000/ | grep -o '<link rel="canonical"[^>]*>'
```
Expected: same output — `<link rel="canonical" href="https://www.bflreferralhub.com/"/>`. (The middleware rewrote `/` to `/referral-hub` internally, and the same metadata applies.)

- [ ] **Step 7: Stop the dev server**

Press `Ctrl+C`.

- [ ] **Step 8: Commit**

```bash
git add src/app/referral-hub/page.tsx src/app/referral-hub/ReferralHubClient.tsx
git commit -m "Refactor referral hub index to server component with canonical metadata"
```

---

## Task 3: Fix Footer CTA visibility on the new domain

**Files:**
- Modify: `src/components/common/Footer.tsx`

The footer currently hides its CTA via `pathname.startsWith("/referral-hub")`. After the middleware rewrite, the user-visible URL on the new domain is `/`, so `usePathname()` returns `/` and the existing check fails — meaning the CTA would incorrectly appear on the referral hub when accessed via `bflreferralhub.com`. We patch the check to also hide the CTA whenever the user is on the new-domain hostname.

- [ ] **Step 1: Add `useState` and `useEffect` imports to `Footer.tsx`**

In `src/components/common/Footer.tsx`, find the existing import line:

```tsx
"use client";

import { Logo } from "@/components/ui/Logo";
```

Replace it with:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
```

- [ ] **Step 2: Add the hostname check inside the `Footer` component**

In `src/components/common/Footer.tsx`, find the existing block (around line 36–37):

```tsx
export function Footer() {
  const pathname = usePathname();
  const hideCta = pathname.startsWith("/referral-hub") || pathname.startsWith("/careers");
```

Replace it with:

```tsx
export function Footer() {
  const pathname = usePathname();
  const [isReferralHubDomain, setIsReferralHubDomain] = useState(false);

  useEffect(() => {
    setIsReferralHubDomain(
      window.location.hostname.includes("bflreferralhub")
    );
  }, []);

  const hideCta =
    pathname.startsWith("/referral-hub") ||
    pathname.startsWith("/careers") ||
    isReferralHubDomain;
```

The rest of the file is unchanged.

- [ ] **Step 3: Verify the build still compiles**

Run: `npm run build`
Expected: Build succeeds. No TypeScript errors.

- [ ] **Step 4: Start the dev server and visually verify the existing CTA-hiding behavior is intact**

Run: `npm run dev`

Open the following pages in a browser and confirm the footer CTA ("Ready to Build Your Financial Future?") behaves correctly:

- `http://localhost:3000/` → CTA **shows** (homepage, no rule hides it)
- `http://localhost:3000/about` → CTA **shows**
- `http://localhost:3000/referral-hub` → CTA **hidden** (existing rule)
- `http://localhost:3000/careers` → CTA **hidden** (existing rule)

Expected: behavior matches — no regression on the main site.

- [ ] **Step 5: Verify the CTA is hidden on the new domain**

Note: this check requires viewing the rendered HTML *after* hydration, since the hostname check happens client-side via `useEffect`. The simplest verification is to use `curl` to check that the page still renders successfully on the new domain — the footer hide will then occur in the browser at runtime. We'll do the full visual check during the live smoke test (Task 5).

For now, run:
```bash
curl -sI -H "Host: www.bflreferralhub.com" http://localhost:3000/ | head -1
```
Expected: `HTTP/1.1 200 OK` (page renders, footer is present in the HTML, hide-on-hydration will kick in client-side).

- [ ] **Step 6: Stop the dev server**

Press `Ctrl+C`.

- [ ] **Step 7: Commit**

```bash
git add src/components/common/Footer.tsx
git commit -m "Hide footer CTA on bflreferralhub.com domain"
```

---

## Task 4: Push to main and deploy

All three code tasks are safe to merge — the middleware does nothing on the main site, the index page refactor renders identically to before, and the Footer fix is purely additive. After this push, the code is live on Vercel; the new domain still needs to be attached (Task 5) before users can reach the referral hub via `bflreferralhub.com`.

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

Expected: Vercel automatically picks up the push and starts a production deployment.

- [ ] **Step 2: Wait for the Vercel deployment to finish**

Open the Vercel dashboard for the `bfl-website` project. Wait for the production deploy triggered by the latest commit to reach **Ready** state.

- [ ] **Step 3: Sanity-check that nothing on the main site regressed**

Open the following pages on the live `bflagency.com` deploy and confirm they render correctly:
- `https://www.bflagency.com/` → homepage, footer CTA visible
- `https://www.bflagency.com/referral-hub` → referral hub index, footer CTA hidden
- `https://www.bflagency.com/referral-hub/financial-legacy-builders` → partner detail page renders, "Back to Referral Hub" link works

Expected: all behave exactly as they did before this change.

- [ ] **Step 4: Verify the canonical tag is present on the live site**

Run:
```bash
curl -s https://www.bflagency.com/referral-hub | grep -o '<link rel="canonical"[^>]*>'
```
Expected: prints `<link rel="canonical" href="https://www.bflreferralhub.com/"/>`.

---

## Task 5: Attach the new domain to Vercel and configure DNS (operational)

This task is operational, not code — no commits. The engineer needs access to (a) the Vercel project and (b) the DNS registrar where `bflreferralhub.com` is registered.

- [ ] **Step 1: Add the domain in Vercel**

In the Vercel dashboard:
1. Open the `bfl-website` project.
2. Go to **Settings → Domains**.
3. Click **Add Domain**.
4. Enter `www.bflreferralhub.com` and confirm.
5. Vercel will display a `CNAME` record to add at the registrar (typically `cname.vercel-dns.com`). Note this value.
6. Click **Add Domain** again.
7. Enter `bflreferralhub.com` (the apex) and confirm.
8. Vercel will display an `A` record to add (typically `76.76.21.21` or similar). Note this value.
9. Vercel may automatically suggest setting the apex to redirect to `www`. If so, accept it. If not, set `www.bflreferralhub.com` as the primary domain manually so the apex redirects to `www`.

- [ ] **Step 2: Add the DNS records at the registrar**

In the DNS registrar's control panel for `bflreferralhub.com`:
1. Add a `CNAME` record: name = `www`, value = `cname.vercel-dns.com` (or whatever Vercel showed).
2. Add an `A` record: name = `@` (apex), value = the IP Vercel showed.
3. Save changes.

- [ ] **Step 3: Wait for DNS propagation and SSL provisioning**

Back in Vercel's Domains page, wait until both `www.bflreferralhub.com` and `bflreferralhub.com` show **Valid Configuration** and a **green checkmark** indicating the SSL certificate has been issued. This usually takes a few minutes; in rare cases up to a couple hours depending on the registrar.

You can also verify externally:
```bash
dig www.bflreferralhub.com +short
```
Expected: returns Vercel's IP (or a CNAME to a Vercel hostname).

---

## Task 6: Live smoke test

Once DNS has propagated and Vercel shows both domains as valid, walk through the smoke-test checklist below in a real browser. Each item should pass before considering the rollout complete.

- [ ] **Step 1: New domain root renders the referral hub index with a clean URL**

Open `https://www.bflreferralhub.com/` in a browser.
Expected: page renders the BFL referral hub (hero "Your Network Is Your Net Worth", partner grid, CTAs). URL bar still shows `https://www.bflreferralhub.com/` — no `/referral-hub` segment.

- [ ] **Step 2: New domain partner-slug URL renders the partner detail with a clean URL**

Open `https://www.bflreferralhub.com/financial-legacy-builders` (or any other real partner slug from `partners-data.ts`).
Expected: renders the partner detail page (Who They Are, Who to Refer, How to Refer, Benefits, Referral Fee, Contact). URL bar stays at `https://www.bflreferralhub.com/financial-legacy-builders`.

- [ ] **Step 3: "Back to Referral Hub" link works**

On the partner detail page from Step 2, click the "Back to Referral Hub" link in the hero.
Expected: lands on `https://www.bflreferralhub.com/` (one transparent redirect hop). The URL bar ends up at `/`, not `/referral-hub`.

- [ ] **Step 4: Nav links bounce to bflagency.com**

On `https://www.bflreferralhub.com/`, click "Services" in the top navigation.
Expected: lands on `https://www.bflagency.com/services`.

Repeat with "About", "Agents", "Contact". All should land on the corresponding `bflagency.com` page.

- [ ] **Step 5: Footer CTA is hidden on the new domain**

On `https://www.bflreferralhub.com/`, scroll to the footer.
Expected: the "Ready to Build Your Financial Future? — Get My COMPLIMENTARY Wealth Plan" CTA section is **not visible**. The footer goes straight to the brand column, company links, etc.

- [ ] **Step 6: Main BFL site is unaffected**

Open `https://www.bflagency.com/referral-hub`.
Expected: still works exactly as before. Footer CTA is hidden (existing behavior). All partner links still go to `/referral-hub/{slug}`.

Open `https://www.bflagency.com/`. Expected: homepage renders, footer CTA visible, navigation works.

- [ ] **Step 7: Canonical tag is present on the new domain**

Run:
```bash
curl -s https://www.bflreferralhub.com/ | grep -o '<link rel="canonical"[^>]*>'
```
Expected: prints `<link rel="canonical" href="https://www.bflreferralhub.com/"/>`.

- [ ] **Step 8: Apex domain redirects to www**

In a fresh browser tab, open `https://bflreferralhub.com/` (no `www`).
Expected: redirects to `https://www.bflreferralhub.com/` and renders the referral hub.

If all 8 items pass, the rollout is complete.

---

## Rollback

If anything goes wrong after Task 4 (deploy) or Task 5 (DNS), rollback options:

**Code rollback (if the deployment broke something on the main site):**
```bash
git revert HEAD~3..HEAD
git push origin main
```
This reverts the last three commits (middleware, refactor, footer fix) and triggers a fresh Vercel deploy. The main site returns to its pre-change state. The new domain (if attached) will start serving the main BFL site at its root until the domain is unattached or DNS is reverted.

**Domain detach (if the new domain is misbehaving but the main site is fine):**
In Vercel → Settings → Domains, remove `www.bflreferralhub.com` and `bflreferralhub.com`. The main site is unaffected. The new domain stops resolving until reattached.
