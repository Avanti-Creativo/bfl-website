import { NextResponse, type NextRequest } from "next/server";
import { partners } from "@/app/referral-hub/partners-data";

// Matches www., apex, and any future subdomain of bflreferralhub.com.
// Vercel only routes traffic for attached domains, so no untrusted host
// can trigger this branch in production.
const REFERRAL_HUB_HOST_FRAGMENT = "bflreferralhub";
const MAIN_SITE_ORIGIN = "https://www.bflagency.com";

// Built once at module load time. New partners added to partners-data.ts
// are picked up automatically on the next deploy.
const partnerSlugs = new Set(partners.map((p) => p.slug));

export function proxy(request: NextRequest) {
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

  // Anything else → cross-origin redirect to bflagency.com.
  //
  // Next.js <Link> prefetches and soft navigations send RSC requests with an
  // "rsc" header (and sometimes an _rsc query param). A 301 across origins
  // triggers a CORS preflight on the target that bflagency.com doesn't
  // allowlist, so the prefetch/navigation fails in the browser. Returning 204
  // for RSC requests lets Next.js fall back to a hard navigation, which the
  // browser handles natively (no preflight) and ends up on bflagency.com.
  const isRscRequest =
    request.headers.get("rsc") === "1" ||
    request.nextUrl.searchParams.has("_rsc");
  if (isRscRequest) {
    return new NextResponse(null, { status: 204 });
  }
  return NextResponse.redirect(`${MAIN_SITE_ORIGIN}${pathname}${search}`, 301);
}

export const config = {
  // Run on all paths except _next assets, /api routes, favicon, and common
  // static asset extensions.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|txt|xml|woff|woff2)).*)",
  ],
};
