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
- Dedicated overview, privacy, terms, support, data-collection, data-deletion,
  and app-contact routes
- Isolated standalone routes for every app document
- One shared Markdown source rendered in each portal/standalone route pair
- Accessible copy buttons for every standalone URL, including a manual fallback
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
     icon: '/apps/new-app/icon.png',
     playStoreUrl: 'https://play.google.com/store/apps/details?id=...',
     githubUrl: 'https://github.com/...',
     documents: createDocuments('new-app')
   }
   ```

   Omit `icon` until the image exists. The UI displays the first letter of the
   app name when no icon is configured or when the configured image cannot be
   loaded.

2. Create shared Markdown in `docs/content/new-app/`:

   - `privacy.md`
   - `terms.md`
   - `support.md`
   - `data-collection.md`
   - `data-deletion.md`
   - `contact.md`

3. Create portal pages in `docs/apps/new-app/`:

   - `index.md` using `<AppOverview app-id="new-app" />`
   - `privacy.md`
   - `terms.md`
   - `support.md`
   - `data-collection.md`
   - `data-deletion.md`
   - `contact.md`

4. In each portal document, include the matching shared source. For example,
   `docs/apps/new-app/privacy.md` uses:

   ```md
   <!--@include: ../../content/new-app/privacy.md-->
   ```

5. Create the standalone wrappers and apply the isolated frontmatter used by
   the existing apps:

   ```text
   docs/privacy/new-app.md
   docs/terms/new-app.md
   docs/support/new-app.md
   docs/data-collection/new-app.md
   docs/data-deletion/new-app.md
   docs/contact/new-app.md
   ```

   Each wrapper includes the corresponding shared source. For example:

   ```md
   <!--@include: ../content/new-app/privacy.md-->
   ```

6. Add a copy component to every portal document:

   ```md
   <CopyStandaloneUrl
     path="/terms/new-app"
     label="Copy standalone terms URL"
     copied-label="Terms URL copied"
     document-name="New App terms and conditions"
   />
   ```

   The privacy page can retain the Google Play-specific label:

   ```md
   <CopyStandaloneUrl
     path="/privacy/new-app"
     label="Copy Play Store URL"
     copied-label="Play Store URL copied"
     document-name="New App privacy policy"
   />
   ```

7. Run the type check and production build, then test direct navigation and a
   browser refresh for every portal and standalone route.

8. Submit only `/privacy/new-app` to the Google Play privacy-policy field. Use
   the other standalone URLs wherever a direct document URL is required.

## App icons

Use this folder and filename convention:

```text
docs/public/apps/<app-id>/icon.png
```

For example:

```text
docs/public/apps/spendzo/icon.png
docs/public/apps/stillora/icon.png
```

Then configure the public path in `docs/.vitepress/data/apps.ts`:

```ts
{
  id: 'spendzo',
  name: 'Spendzo',
  shortDescription: 'A personal expense and budget-tracking application.',
  icon: '/apps/spendzo/icon.png',
  documents: createDocuments('spendzo')
}
```

Recommendations:

- Use the exact filename `icon.png` for consistency.
- Use a square image, preferably `512 x 512` pixels.
- PNG or WebP works well. If using WebP, name it `icon.webp` and update the
  configured path.
- Keep the file reasonably small because it appears in app cards and overview
  pages.
- Do not configure `icon` when no file exists. If the field is omitted, or if
  the image fails to load, the app's initial is displayed automatically.

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

Every portal document has a matching standalone route:

```text
/apps/spendzo/privacy        -> /privacy/spendzo
/apps/spendzo/terms          -> /terms/spendzo
/apps/spendzo/support        -> /support/spendzo
/apps/spendzo/data-collection -> /data-collection/spendzo
/apps/spendzo/data-deletion  -> /data-deletion/spendzo
/apps/spendzo/contact        -> /contact/spendzo
```

Each standalone page contains only its shared document. Its per-page
frontmatter disables the navbar, sidebar, outline, footer,
previous/next links, edit link, and updated timestamp. The page is static HTML,
public, mobile responsive, readable without JavaScript, and print friendly.

## Copy standalone URLs

`CopyStandaloneUrl.vue` builds each URL at interaction time using:

- `window.location.origin`
- VitePress `withBase`
- The configured standalone document path

This supports a root custom domain and a GitHub Pages repository base. The
component uses the Clipboard API first, then a legacy copy fallback. If both are
unavailable, it reveals a read-only URL field, focuses it, and selects it for
manual copying. Labels are configurable, and status changes are announced
through an ARIA live region.

## Configurable base path

The base defaults to `/` for local development. The GitHub Pages workflow pins
the deployed project base to `/policy-hub/`:

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
   set `VITEPRESS_PRODUCTION_DOMAIN` to the deployed origin. Do not create a
   `VITEPRESS_BASE` variable for this deployment; the workflow explicitly uses
   `/policy-hub/`.

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

## Google Play Store descriptions

Each app has a page such as `/apps/spendzo/store-listings` showing its copy-ready
short and full descriptions. Edit the matching Markdown file, such as
`docs/content/spendzo/store-listing.md`. Put the short description in its
frontmatter and the full description in the Markdown body. The build rejects
missing app entries, short descriptions over 80 characters, and full
descriptions over 4,000 characters.

Write the Markdown body as Play Store-ready plain text. Use unformatted section
labels, paragraphs, and `•` bullets; avoid Markdown headings, emphasis markers,
and emojis. The listing page displays and copies the exact same text.

When adding an app to `docs/.vitepress/data/apps.ts`, add its matching
`docs/content/<app-id>/store-listing.md` file and import it in
`docs/.vitepress/data/store-listings.ts`. Each description has its own Copy
button and can be pasted directly into Google Play Console.

Each app also has a release-notes route, such as
`/apps/spendzo/release-notes`. The reusable formatter stores no release content:
select a supported locale, enter up to 500 Unicode characters, and copy the
generated `<locale>` block into Play Console. Only use locales that have been
added to that app's store listing. English generic-note templates can populate
the editor with the app name inserted automatically; review and edit the result
before publishing.

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
