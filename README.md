# Policy Hub

Policy Hub is a production-ready, Markdown-powered VitePress website for
publishing privacy policies, terms, support pages, data-deletion instructions,
developer contact details, Google Play links, and GitHub links for multiple
Android applications.

> A centralized hub for privacy policies, terms, support, and legal information
> for all my Android applications.

The project is a static site. It has no backend, database, authentication,
analytics, cookies, or tracking by default.

## Features

- Responsive portal with light and dark themes
- Centralized TypeScript configuration for apps and developer details
- Local full-text search across app and legal pages
- App filtering on the home page and application directory
- Dedicated overview, privacy, terms, support, and data-deletion routes
- Standalone privacy-policy routes suitable for Google Play Console
- One shared Markdown policy source rendered in both privacy routes
- Accessible copy button that copies the standalone URL, including a manual
  fallback
- Clean URLs, optional canonical metadata, Open Graph metadata, robots.txt, and
  optional sitemap generation
- GitHub Pages workflow and Cloudflare Pages-compatible output
- Responsive, print-friendly legal-document styling

## Requirements

- Node.js 24.16.0, pinned in `.nvmrc`
- npm included with that Node.js release

VitePress 1.6.4 is the latest stable release line. Pre-release VitePress 2
versions are intentionally not used.

## Local development

```bash
npm install
npm run docs:dev
```

Open the local URL printed by VitePress.

## Validate and build

```bash
npm run typecheck
npm run docs:build
npm run docs:preview
```

The production output is written to `docs/.vitepress/dist`.

## Folder structure

```text
.
├── .github/workflows/deploy.yml
├── docs
│   ├── .vitepress
│   │   ├── config.ts
│   │   ├── data
│   │   │   ├── apps.ts
│   │   │   └── site.ts
│   │   └── theme
│   │       ├── components
│   │       ├── custom.css
│   │       └── index.ts
│   ├── apps
│   │   ├── spendzo
│   │   └── stillora
│   ├── content
│   │   ├── spendzo
│   │   └── stillora
│   ├── privacy
│   └── public
├── package.json
└── tsconfig.json
```

Files in `docs/content` are shared Markdown partials. They are excluded as
standalone routes by `srcExclude` in the VitePress configuration.

## Central configuration

Edit `docs/.vitepress/data/site.ts` to replace:

- Production domain
- Developer name
- General support email
- Privacy email
- GitHub profile
- Google Play developer profile

Edit `docs/.vitepress/data/apps.ts` to manage apps and their optional Google
Play, GitHub, legal, and support links. Optional links appear only after a URL
is configured.

## Add a new app

1. Add the app to `docs/.vitepress/data/apps.ts`.

   ```ts
   {
     id: 'new-app',
     name: 'New App',
     shortDescription: 'A short, factual description.',
     playStoreUrl: 'https://play.google.com/store/apps/details?id=...',
     githubUrl: 'https://github.com/...',
     privacyUrl: '/apps/new-app/privacy',
     standalonePrivacyUrl: '/privacy/new-app',
     termsUrl: '/apps/new-app/terms',
     supportUrl: '/apps/new-app/support',
     dataDeletionUrl: '/apps/new-app/data-deletion'
   }
   ```

2. Create shared Markdown in `docs/content/new-app/`:

   - `privacy.md`
   - `terms.md`
   - `support.md`
   - `data-deletion.md`

3. Create portal pages in `docs/apps/new-app/`:

   - `index.md` using `<AppOverview app-id="new-app" />`
   - `privacy.md`
   - `terms.md`
   - `support.md`
   - `data-deletion.md`

4. In each portal document, include the matching shared source. For example,
   `docs/apps/new-app/privacy.md` uses:

   ```md
   <!--@include: ../../content/new-app/privacy.md-->
   ```

5. Create `docs/privacy/new-app.md`, apply the standalone frontmatter used by
   the existing apps, and include the same source:

   ```md
   <!--@include: ../content/new-app/privacy.md-->
   ```

6. Add `<CopyPolicyUrl path="/privacy/new-app" />` to the portal privacy page.
   Run the development site and confirm that the copied URL points to
   `/privacy/new-app`, not `/apps/new-app/privacy`.

7. Run the type check and production build, then test direct navigation and a
   browser refresh on both privacy routes.

8. Submit only the standalone URL to Google Play Console.

## How shared Markdown includes work

The actual policy text exists once:

```text
docs/content/spendzo/privacy.md
```

The portal page and standalone page contain VitePress include directives that
render that source during the static build:

```text
docs/apps/spendzo/privacy.md ─┐
                              ├─ includes docs/content/spendzo/privacy.md
docs/privacy/spendzo.md ──────┘
```

Update the shared file and both routes change together. Do not copy policy text
into either route wrapper.

## Portal and standalone routes

The portal route includes the Policy Hub navigation, app navigation,
breadcrumbs, related resources, and copy control:

```text
/apps/spendzo/privacy
```

The Google Play route contains only the policy document:

```text
/privacy/spendzo
```

Its per-page frontmatter disables the navbar, sidebar, outline, footer,
previous/next links, edit link, and updated timestamp. The page is static HTML,
public, mobile responsive, readable without JavaScript, and print friendly.

## Copy Play Store URL

`CopyPolicyUrl.vue` builds the URL at interaction time using:

- `window.location.origin`
- VitePress `withBase`
- The configured standalone policy path

This supports a root custom domain and a GitHub Pages repository base. The
component uses the Clipboard API first, then a legacy copy fallback. If both are
unavailable, it reveals a read-only URL field, focuses it, and selects it for
manual copying. Status changes are announced through an ARIA live region.

## Configurable base path

The base defaults to `/`. Set `VITEPRESS_BASE` for a repository site:

```bash
VITEPRESS_BASE=/policy-hub/ npm run docs:build
```

For a root custom domain:

```bash
VITEPRESS_BASE=/ npm run docs:build
```

Always include leading and trailing slashes when setting the environment
variable. The config also normalizes values that omit them.

## Production domain, canonical URLs, and sitemap

Set `VITEPRESS_PRODUCTION_DOMAIN` to the origin only:

```bash
VITEPRESS_PRODUCTION_DOMAIN=https://policies.example.com npm run docs:build
```

When configured, the build adds canonical and Open Graph URLs and generates a
sitemap. Leave the value empty during local development. After deployment, add
the generated sitemap URL to `docs/public/robots.txt` if desired.

## GitHub Pages deployment

The workflow runs when the `master` branch is pushed and publishes the generated
site to an orphan `gh-pages` branch.

1. Push the repository to GitHub on the `master` branch. The first workflow run
   creates the `gh-pages` branch.
2. After that first run, open **Settings → Pages** and select:

   ```text
   Source: Deploy from a branch
   Branch: gh-pages
   Folder: / (root)
   ```

3. In **Settings → Secrets and variables → Actions → Variables**, optionally
   set:

   - `VITEPRESS_BASE` to `/policy-hub/` for a project site. The workflow already
     derives this value from the repository name when it is not set.
   - `VITEPRESS_PRODUCTION_DOMAIN` to the deployed origin.

4. Push to `master` again or run the workflow manually whenever a deployment is
   needed.

The workflow reads Node.js `24.16.0` directly from `.nvmrc`, installs the locked
dependencies with `npm ci`, type-checks, and builds with:

```text
npm run docs:build
```

It publishes:

```text
docs/.vitepress/dist
```

Keep `package-lock.json` committed so `npm ci` and dependency caching work.

### GitHub Pages refresh behaviour

VitePress generates a physical HTML file for every route. GitHub Pages can
serve direct requests and browser refreshes without SPA fallback rules.

## Cloudflare Pages deployment

Create a Cloudflare Pages project connected to the repository and use:

```text
Framework preset: None
Build command: npm run docs:build
Output directory: docs/.vitepress/dist
Node version: 24.16.0 (from .nvmrc)
```

Environment variables:

```text
VITEPRESS_BASE=/
VITEPRESS_PRODUCTION_DOMAIN=https://policies.example.com
```

Cloudflare Pages serves the generated route HTML directly. Do not enable HTML
minification that removes Vue hydration comments.

## Custom domains

For GitHub Pages, configure the domain in repository Pages settings and set
`VITEPRESS_BASE=/`. Add the DNS records requested by GitHub. If you want the
domain stored in the repository, add `docs/public/CNAME` containing only the
domain name.

For Cloudflare Pages, attach the custom domain in the Pages dashboard and use
`VITEPRESS_BASE=/`.

For either platform, set `VITEPRESS_PRODUCTION_DOMAIN` to the final HTTPS origin
so canonical URLs, Open Graph URLs, and the sitemap are correct.

## Google Play privacy-policy checklist

Before submitting a standalone route:

- Replace all bracketed placeholders and remove the sample-content warning.
- Confirm the policy matches the current production app.
- Confirm the Play Console Data Safety form matches the policy.
- Disclose every collected, shared, accessed, and locally stored data type.
- Disclose every third-party service and SDK and its real behaviour.
- List requested permissions accurately and explain each purpose.
- Provide working app-specific privacy contact information.
- Verify the URL is public in a signed-out browser.
- Verify there is no login, PIN, query parameter, or URL fragment.
- Verify the page is readable on mobile and with JavaScript disabled.
- Verify data-deletion instructions match the released app.
- Submit the standalone route, such as `/privacy/spendzo`, not the portal route.

This project provides structure and sample content, not legal advice. Have the
final policies reviewed for the applications and jurisdictions involved.
