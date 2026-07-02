# Hossein Khoshhal — Portfolio

Personal portfolio site for Hossein Khoshhal, a data analytics consultant. Built with Next.js 14
(App Router), TypeScript (strict), Tailwind CSS, and Framer Motion, and shipped as a fully static
export for GitHub Pages.

## Stack

- **Next.js 14** — App Router, static export (`output: "export"`)
- **TypeScript** — strict mode
- **Tailwind CSS**
- **Framer Motion** — entrance/scroll-reveal animation
- All copy and structured data lives in a single typed file: [`src/content.ts`](src/content.ts).
  Update that file to change any text, add a project, or add a research entry — components read
  from it and don't hard-code content.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build + static export to /out
npm run start   # serve the last `next build` output (non-export mode; dev convenience only)
npm run lint    # ESLint
```

## Project structure

```
src/
  content.ts              # single source of truth for all site content
  app/
    layout.tsx             # root layout: fonts, theme script, nav, footer
    page.tsx                # home page (assembles all sections)
    sitemap.ts, robots.ts   # generated at build time
    not-found.tsx           # 404 page
    projects/[slug]/page.tsx  # project case-study template
    research/[slug]/page.tsx  # research case-study template
  components/               # design system + section components
  lib/utils.ts               # cn() class helper, withBasePath() helper
```

## Configuring the contact form

The contact form posts to [Formspree](https://formspree.io). To enable it:

1. Create a Formspree form and copy its form ID.
2. Set the `NEXT_PUBLIC_FORMSPREE_ID` environment variable (a `.env.local` file works for local
   dev; a repo secret of the same name is read by the deploy workflow for production).

Without a form ID configured, the contact section falls back to a direct `mailto:` link instead of
rendering the form, so nothing is ever silently broken.

## Adding a real résumé

The nav's "Résumé" link points to `/resume.pdf`. Drop your résumé PDF at `public/resume.pdf` to
wire it up — no code changes needed.

## Deploying to GitHub Pages

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static
export and deploys it to GitHub Pages on every push to `main`.

One-time setup:

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. If deploying as a **project site** (`https://<user>.github.io/<repo>`), the workflow already
   passes `NEXT_PUBLIC_BASE_PATH=/<repo-name>` at build time automatically — no changes needed.
3. If deploying as a **user/org site** (`https://<user>.github.io`, repo named
   `<user>.github.io`), edit the workflow's `NEXT_PUBLIC_BASE_PATH` to an empty string, since the
   site is served from the domain root.
4. Update `site.url` in `src/content.ts` to match your actual GitHub Pages URL — it's used for
   Open Graph tags, the sitemap, and robots.txt, and defaults to a placeholder.
5. (Optional) Add a `NEXT_PUBLIC_FORMSPREE_ID` repository secret if you want the contact form live
   in production.

To deploy manually instead of via CI:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
# upload the contents of /out to your host of choice
```

## Notes

- Next.js 14 does not support a TypeScript `next.config.ts` file (that landed in Next 15) — config
  lives in `next.config.mjs` with JSDoc typing instead.
- `output: "export"` means there is no Node.js server at runtime — the contact form, theme toggle,
  and all interactivity run client-side against a static HTML/JS bundle.
