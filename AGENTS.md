# estebansaa.com

Personal site of **Esteban Saá** (also spelled **Esteban Saa**). It has two jobs:

1. **Consulting front (primary):** the main entry point for his AI and systems consulting. Every page leads toward getting in touch.
2. **Showcase (secondary):** a creative, memorable way to show his skills. Openness to employment is deliberately **subtle** (see Positioning).

Repo: https://github.com/stebansaa/estebansaa.com (**public**: never commit secrets, private repo code or personal contact details beyond what is listed here).
Hosting: Cloudflare Pages, deploying from `main`. Domain: `https://estebansaa.com`. Language: **English only**.

---

## Positioning

- **Headline:** Senior AI Engineer & Systems Architect.
- **Supporting line:** 20+ years building software, from Linux infrastructure to AI agents.
- **Core idea ("down the stack"):** most AI engineers come from the application layer; Esteban understands the whole system underneath it (servers, networks, databases, protocols) and uses that to make AI work reliably in production.
- **Three pillars:**
  1. *Engineering depth:* 20+ years across software, servers, networks and infrastructure.
  2. *Modern specialization:* applied AI, agents, LLM integrations, AI media pipelines, software architecture.
  3. *Product building:* independent products taken from idea to public launch (blockchain, gaming, AI).
- **Tone:** practical, confident, no hype. He values simplicity, clear abstractions, maintainability and understanding tradeoffs over technology fashion.
- **Employment:** never "looking for a job". Only one quiet line on About and Contact, e.g. *"I'm also open to conversations about select senior engineering roles."*
- **Location line (About and Contact only):** *EU citizen · Based in Italy · Working remotely worldwide.*

## Contact and profiles

- **Email (the only contact method):** `work@estebansaa.com`. All call-to-action buttons are `mailto:` links with a prefilled subject (e.g. "Consulting inquiry"). No contact form, no booking link. No other email address may appear on the site. The address is forwarded via Cloudflare Email Routing.
- **GitHub:** https://github.com/stebansaa
- **X:** https://x.com/estebs (handle `@estebs`)
- **Medium:** https://medium.com/@estebs
- No LinkedIn.
- **Photo:** `src/assets/esteban-saa.png` (720×720). Always render it with Astro's `<Image>` (AVIF/WebP, explicit width and height) with alt text "Esteban Saá".

## Biography facts (approved for publication)

- 20+ years in software development and systems engineering, starting in the early 2000s.
- Languages: Spanish (native), English (fluent, professional), Italian (beginner).
- International experience including Ecuador and Switzerland; now based in Italy. German/EU citizen.
- Early career: PHP, MySQL, JavaScript, HTML/CSS, jQuery, AJAX, CodeIgniter; Linux servers, networking, security, databases, operations. Roles blurred development, system administration and infrastructure.
- Long blockchain history: experimenting with Bitcoin tooling as early as 2013, Ethereum smart contracts from 2017, Uniswap-style deployments and EVM ecosystems through 2019–2023.
- **Current role: Senior AI Engineer at Bitcoin.com (June 2026–present).** Use only this approved description:
  > Working at the intersection of artificial intelligence, backend engineering, and blockchain infrastructure. My focus includes AI-powered applications, intelligent workflows, service integrations, data-processing systems, and the architecture required to operate these capabilities reliably.

  General themes that may be mentioned: AI model integration, AI-assisted media workflows (summaries, voice, dubbing), AI cost awareness, blockchain explorers and indexing. **Never** publish internal architectures, repositories, project names, budgets, vendors, metrics, customers or unreleased work.

## Projects

Each featured project gets a case study page at `/work/<slug>`. Facts below are the only ones to use; do not embellish.

### Featured

- **GameMint.fun** (2025–, founder). https://gamemint.fun
  AI-powered game creation: describe a game and AI pipelines generate concept, narrative, characters, visuals, music, voice, sound and playable web content. **Selected as the first project in the Bitcoin.com Accelerator** (announced October 1, 2025). Engineering themes: task decomposition, multi-model orchestration, asset coordination, generation pipelines, cost management. Explored tokenized game economies, but present the technical integration, not token marketing. Keep the **product vision separate from what shipped in the beta**; don't claim every capability was fully implemented.

- **Zentinl** (2024–, his product). https://zentinl.com
  AI video dubbing and creation: dubbing videos into other languages while keeping natural voice characteristics, AI virtual influencers, on-demand ("just on time") video generation, API and Zapier integration, enterprise plans.

- **AI news video pipeline** (2025, private repo `videogen`; describe in general terms only, no code or client details).
  Turns news articles into finished portrait videos: LLM-planned segments, ElevenLabs text-to-speech, word-level alignment for karaoke-style captions, lip-synced AI anchor video using models such as Veo 2, Kling, SeedDance and Luma, canvas-rendered article scroll segments, and FFmpeg assembly into 4K ProRes. Runs on Ubuntu with Docker, with a web dashboard for job monitoring. Good engineering story: diagnosing audio/video timing drift down to sub-second gaps between LLM-planned durations and real padded audio.

- **H3 video starter** (2026). https://github.com/stebansaa/h3-video-starter
  Agent-guided AI video production: a coding agent follows a runbook (`AGENTS.md`) to produce short videos with MiniMax H3 on remote RunPod GPUs. Includes a completed 97-second scene made from 14 generated shots (script, character references, raw takes, reviewed cuts, transcripts, final export) and a separate test in which a fresh agent produced a new clip using only the repository's instructions. Python standard library, FFmpeg and ffprobe, offline CI checks.

- **TrustSwap** (2022–, project leader and developer). Historical site: https://trustswap.finance
  A decentralized exchange (Uniswap-style AMM) first built for Trust EVM, an effort to bring Ethereum compatibility to EOS. Went from testing Solidity contracts to a full exchange. **Supported by the EOS Network Foundation grant program**; Esteban took part in a public Trust EVM technical discussion in June 2022. When Trust EVM's launch was delayed, the community voted to deploy on **Telos**, and TrustSwap **launched on Telos mainnet in November 2022**. Themes: smart contracts, EVM compatibility, wallet integration, RPC infrastructure, network-specific deployment, testnet to mainnet, adapting to external delays.
  **Always state it is unrelated to the TrustSwap organization at trustswap.org.**
  Sources: https://www.eosnetwork.com/resources/everything-eos-weekly-report-june-20th-2/ and https://medium.com/@estebs/our-first-mainnet-702d4f27d952
  Don't claim authorship of the `@trustevm` npm packages (not verified).

- **Tessera** (2026). https://github.com/stebansaa/tessera
  A local-first desktop developer workspace: persistent local and SSH terminal sessions, AI chat sessions and embedded web panels organized by project, stored in SQLite. Its spec describes it as *"ChatGPT Projects, but for servers, terminals, and AI."* Includes an AI "Brief" that summarizes terminal activity through OpenRouter and **redacts secrets (private keys, tokens, API keys) before anything is sent to a model**. Electron, React, TypeScript, xterm.js (WebGL), node-pty, better-sqlite3, ssh2, OS keychain encryption for stored passwords.

- **Frogge.Finance** (2023, **historical: the protocol is now deprecated**; never describe it as active). https://frogge.finance
  A DeFi platform on EOS EVM combining an AMM exchange with liquidity pools, yield farming, staking and GameFi/NFT ideas. Listed by the EOS Network Foundation as an early DEX on EOS EVM and tracked by DefiLlama. Related work: a Phaser 3 browser game prototype with tile maps, documentation in English, Chinese and Korean, and a multilingual Telegram community bot.
  Sources: https://www.eosnetwork.com/ecosystem/frogge-finance/, https://www.eosnetwork.com/resources/exploring-the-eos-evm-defi-landscape-2/, https://defillama.com/protocol/frogge.finance

### Lab (smaller items, listed on `/work` without full case studies)

- **The Agentic Web** (2025): a white paper proposing a directory where AI agents register their capabilities and find each other to collaborate. https://agenticweb.net
- **TokenID** (2023): white paper and service design for digitally signed off-chain token metadata across chains.
- **Car sticker scanner** (2025): an API that reads a car window sticker with GPT-4 Vision, decodes the VIN through NHTSA and scores the deal. Bun, Hono, TypeScript, Zod. https://github.com/stebansaa/carscanner
- **EasyMultisig** (2023): a multisignature wallet and interface based on the first Gnosis multisig. https://github.com/stebansaa/multisig
- **Prediction market contract** (2023): a Solidity binary-outcome prediction market. https://github.com/stebansaa/prediction-market
- **EVM and web3 training** (2022): a curriculum for developing on EVM chains. https://github.com/stebansaa/evm-web3-training
- **Hacker News readability** (2025): a userscript that improves HN typography and accessibility. https://github.com/stebansaa/hackernews-violentmonkey

### Research interest

Defining distributed protocols through canonical specification documents that independent implementations (including ones built by AI coding agents) can treat as a shared source of truth. Present it as **experimental**; don't claim specs guarantee correct implementations. Several of his recent projects start from a detailed spec that an AI agent builds from, which is a practical version of this idea.

### Do not publish

- Earlier employer names, dates, team sizes or results (not provided).
- Private repositories other than the general `videogen` description above.
- Fork repositories as his own work.
- Trading or speculative financial claims.

## Consulting

Page: `/consulting`. No prices are published.

**Service areas:**

1. **AI agents and LLM applications** (lead offer)
   - Agent workflows, tool use and model integrations, from prototype to production.
   - **AI media and content pipelines:** video, voice, dubbing, captions, summaries (backed by Zentinl, the news video pipeline, H3 video starter, GameMint).
   - Cost and performance: model choice, token and API spend, caching, limits and fallbacks.
2. **Architecture and technical advisory**
   - Reviews of existing AI systems: reliability, security, failure handling, maintainability.
   - Fractional CTO-style help with architecture decisions and technology choices.
3. **Backend, infrastructure and blockchain engineering**
   - Node.js/TypeScript services, Linux infrastructure, databases, scaling and troubleshooting.
   - Smart contract integration, EVM deployments, indexing and RPC infrastructure.

**Ideal clients:** startups and scale-ups adding AI to their product; teams whose AI prototype works in a demo but not reliably in production (the strongest pitch); crypto and Web3 companies.

**Ways to work together:** Assessment (short, fixed-scope review with written recommendations), Build (project-based delivery), Ongoing (monthly advisory or fractional arrangement).

## Site structure

| Route | Purpose |
|---|---|
| `/` | Headline, proof points (20+ years, Bitcoin.com, accelerator selection, ENF grant), "down the stack" scroll story, featured work, consulting call to action |
| `/consulting` | Services, ideal clients, ways to work together, contact call to action. Main page for consulting searches |
| `/work` | All featured projects plus the Lab list |
| `/work/<slug>` | Case studies: `gamemint`, `zentinl`, `ai-news-video-pipeline`, `h3-video-starter`, `trustswap`, `tessera`, `frogge-finance` |
| `/about` | Long-form story, timeline, languages, location line, subtle employment line, photo |
| `/contact` | Email call to action, location line, profiles |
| `/404` | Custom not-found page |

A `/writing` section is planned for later (first article candidate: The Agentic Web).

## SEO

- **Name searches:** use both "Esteban Saá" and "Esteban Saa" in titles, body copy and structured data.
- **Target searches** (one page per intent): "AI agent development consultant", "LLM integration consultant Europe", "AI video pipeline / AI dubbing engineer", "freelance AI engineer Italy", "production AI agents backend architecture", "EOS EVM / Telos smart contract developer".
- **Structured data:** `Person` (name variants, jobTitle, `worksFor` Bitcoin.com, address country Italy, `knowsAbout`, `knowsLanguage`, `sameAs` GitHub, X and Medium, image) on every page; `ProfessionalService` on `/consulting`; `CreativeWork` or `SoftwareSourceCode` on case studies; `BreadcrumbList` on nested pages.
- Every page has a unique `title` and `description`, a canonical URL and an Open Graph image (1200×630).
- Internal links: each case study links to the matching consulting service and vice versa.
- Once live, the GitHub profile should point to estebansaa.com (currently points to zentinl.com and says Switzerland).

## Creative concept: "Down the stack"

On the home page, a single Three.js point cloud reshapes itself as the visitor scrolls through the layers he works in:

**AI agents → backend and APIs → distributed and blockchain systems → databases → networks → Linux**

Each layer is a real HTML section with searchable text and a project that proves it. It ends with a call to action: *"I understand the whole thing. Let's build yours."* One scene, loaded late, following the performance rules below.

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
- **GSAP** is an option for scroll-driven animation if needed (not installed yet).
- **Plain CSS** with design tokens in `src/styles/global.css` (`--bg`, `--fg`, `--accent`, ...). No CSS framework.
- **@astrojs/sitemap** for the sitemap; SEO meta and JSON-LD live in the base layout.

## Code structure

- `src/layouts/Base.astro`: HTML shell, SEO and Open Graph meta, JSON-LD, view transitions. Pages pass `title`, `description` and optionally `image`.
- `src/pages/`: routes.
- `src/components/HeroScene.astro`: canvas plus the boot script that decides whether to load 3D.
- `src/scripts/hero-scene.ts`: the Three.js scene. Renders only while visible, caps device pixel ratio, and disposes on `astro:before-swap`.
- `src/assets/`: images processed by Astro (portrait).
- `public/`: static files, including `robots.txt` and `_headers` (immutable caching for `/_astro/*`).

## Conventions

- Scripts that touch the DOM should run on `astro:page-load` (not just at module load) so they work after view-transition navigation, and should clean up on `astro:before-swap`.
- Any new WebGL scene follows the same pattern as the hero: lazy import, capability checks, pause when offscreen, dispose on navigation.
- Only use the facts in this file. Don't invent biographical details, clients, metrics or project capabilities; ask Esteban when something is missing.

## Status

- Done: Astro scaffold, SEO base, lazy Three.js hero placeholder, content and positioning decisions (this file).
- To do: write all pages and case studies from this file; "down the stack" scroll scene; Open Graph image; connect Cloudflare Pages, the domain and email routing for `work@estebansaa.com`; update the GitHub profile; later, `/writing`.

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
