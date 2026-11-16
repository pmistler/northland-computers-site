# Northland website security release — November 2026

## Changes
- Next.js 14.2.16 -> 16.4.5; React 18 -> 19.2.4; aligned ESLint/TypeScript/type packages.
- Converted three dynamic App Router pages and metadata handlers to async `params` required by newer Next.js.
- Hardened `/api/contact` with strict field types, lengths, allowlisted services, byte limit, basic Origin check, HTML escaping, no-store responses, and reduced error logging.
- Added conservative HTTP security headers; retained Resend and all existing environment variable names.
- Preserved all visual content and marketing pages.

## REQUIRED before merging to main
1. Upload to a GitHub branch / pull request (not directly to main). Do not overwrite production until preview succeeds.
2. Vercel preview: check build output, all routes (especially `/industries/schools-education`, `/solutions/...`, `/projects/...`), layout, mobile navigation, sitemap and metadata.
3. Submit a test contact form on Preview; confirm the email arrives at the configured inbox, and reply-to is correct. Preview environment has the Resend variables configured according to earlier Vercel screenshots.
4. Merge only after passing tests. Test production contact form immediately after deployment.
5. Review Dependabot alerts after GitHub dependency scanning refreshes; investigate remaining advisories individually.
6. Check Vercel Firewall logs, then move Bot Protection from Log to Challenge if legitimate traffic is not affected.

## Known limitations
- This environment could not download npm dependencies; a full `npm install`, TypeScript check, and Next.js production build were NOT verified here. Vercel preview build is mandatory.
- No persistent distributed per-IP rate limit is included. Add a targeted Vercel WAF rate limit for `/api/contact` or an appropriate shared rate limiter; do not assume bot logging is blocking attacks.
- The repository has no lockfile. Generate a clean npm package-lock.json from the public npm registry in a trusted local/CI environment when feasible; never upload a lockfile pointing to an internal package registry.
- Upgrading to a patched release is not proof that every vulnerability is inapplicable or resolved. Verify advisories and deployment.
