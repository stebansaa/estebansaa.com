# estebansaa.com

Personal site of Esteban Saa. It has two jobs:

1. **Showcase:** a creative, memorable way to show Esteban's skills to people who might hire him.
2. **Consulting front:** the main entry point for his consulting services, with a clear path from "impressed" to "get in touch".

Repo: https://github.com/stebansaa/estebansaa.com (public: never commit secrets).
Hosting: Cloudflare Pages, deploying from `main`. Domain: `https://estebansaa.com`.

## Priorities

Speed, SEO and creativity, in balance. When they conflict:

- **Content is HTML first.** Every word that matters (name, headline, skills, projects, services, contact) is real, server-rendered text, never only inside a canvas or added by JavaScript.
- **3D is a progressive enhancement.** Three.js never blocks first paint. It is lazy-loaded after idle, and skipped for `prefers-reduced-motion`, Save-Data or no WebGL, with a static CSS fallback in its place.
- **Performance budgets:** Lighthouse 95+ in every category on mobile, LCP under ~1.5s, CLS ~0, under ~15 KB of gzipped JS before the 3D layer loads. Check `npm run build` output when adding dependencies.
- **Creative but purposeful:** effects should support the story (who Esteban is, what he can do, why hire him), not distract from the call to action.
- **Accessible:** semantic landmarks and headings, keyboard navigable, sufficient contrast, decorative canvases get `aria-hidden="true"`.

## Stack

- **Astro** (static output, zero JS by default, `ClientRouter` view transitions, prefetch on hover).
- **Three.js** imported only from lazy-loaded modules (dynamic `import()`), never from a top-level page script.
- **GSAP** is the planned choice for scroll-driven animation (not installed yet).
- **Plain CSS** with design tokens in `src/styles/global.css` (`--bg`, `--fg`, `--accent`, ...). No CSS framework.
- **@astrojs/sitemap** for the sitemap; SEO meta and JSON-LD `Person` schema live in the base layout.

## Structure

- `src/layouts/Base.astro`: HTML shell, SEO and Open Graph meta, JSON-LD, view transitions. Pages pass `title`, `description` and optionally `image`.
- `src/pages/`: routes. `index.astro` holds the hero and the Work, Consulting and Contact sections (placeholder copy for now).
- `src/components/HeroScene.astro`: canvas plus the boot script that decides whether to load 3D.
- `src/scripts/hero-scene.ts`: the Three.js scene (point-cloud sphere reacting to the pointer). Renders only while visible, caps device pixel ratio, and disposes on `astro:before-swap`.
- `public/`: static files, including `robots.txt` and `_headers` (immutable caching for `/_astro/*`).

## Conventions

- Scripts that touch the DOM should run on `astro:page-load` (not just at module load) so they work after view-transition navigation, and should clean up on `astro:before-swap`.
- Any new WebGL scene follows the same pattern as the hero: lazy import, capability checks, pause when offscreen, dispose on navigation.
- Don't invent biographical facts, clients or project details. Use clearly marked placeholders until Esteban provides the real content.
- Every page needs a unique `title` and `description`.

## Status

- Done: Astro scaffold, SEO base, lazy Three.js hero, pushed to GitHub.
- To do: connect Cloudflare Pages and the domain; real copy (headline, skills, projects, services, contact); Open Graph image (1200×630); further creative work (e.g. a scroll-driven scene that morphs across sections).

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
