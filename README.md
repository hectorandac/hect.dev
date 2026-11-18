# hect.dev

Personal site and resume. Static Astro build, deployed on Netlify.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
```

Content lives in `src/data/profile.ts`; the home page, `/resume` and the JSON-LD all read from it.
After changing it, regenerate `public/resume.pdf` and `public/og.png` with a preview server running:

```bash
npm run build && npx astro preview &
npx playwright install chromium && npm run render
```

Security headers, caching and redirects are in `netlify.toml`.
