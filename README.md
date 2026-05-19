# to4to.dev

Personal site built with Next.js (App Router) and exported as static HTML.

## Commands

```bash
# local dev
npm run dev

# lint + audit + build
npm run check

# just lint / typecheck
npm run lint
npm run typecheck
```

## Static export

- The site is built as a static export (`output: "export"`).
- Build output is written to `out/`.

## CSP + security headers

After `next build`, the build script runs `scripts/apply-csp.mjs` which:

- Rewrites each exported HTML file to inject a hash-based `Content-Security-Policy` meta tag.
- Generates an `out/_headers` file (Cloudflare Pages compatible) with CSP + security headers.

Notes:

- 404 routes are explicitly marked `noindex` via `X-Robots-Tag`.
- Static assets under `/_next/static/*` are sent with long-term caching headers.
