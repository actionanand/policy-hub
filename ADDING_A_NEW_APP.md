# Adding a New App to Policy Hub

This guide explains how to register a new Android or web app, add its legal
documents, publish Play Store descriptions, and expose standalone policy URLs.

Use a lowercase, URL-safe app ID throughout the project. For example, use
`my-new-app` for an app named **My New App**.

## 1. Collect accurate app information

Before writing policies, review the app's source and confirm:

- What information users can enter or import
- Where information is stored: device, browser, developer server, or a
  third-party service
- Network requests, analytics, advertising, authentication, and cloud services
- Android permissions and when each permission is requested
- Export, backup, restore, retention, and deletion behavior
- Optional security features such as a PIN or biometric unlock
- External services and their privacy implications
- Whether the app is an Android app or web app
- Whether the Android app is released on Google Play
- The Google Play, browser, and GitHub URLs, when available

Document only features and data practices that actually exist. Do not infer a
permission merely because an unused dependency or model is present.

## 2. Register the app

Add an entry to `docs/.vitepress/data/apps.ts`:

```ts
{
  id: 'my-new-app',
  name: 'My New App',
  shortDescription: 'A concise description shown on Policy Hub app cards.',
  icon: '/apps/my-new-app/icon.png',
  platform: 'android',
  releasedToPlayStore: true,
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.example.mynewapp',
  webLinks: [
    {
      label: 'Open My New App in browser',
      url: 'https://example.com/my-new-app/'
    }
  ],
  githubUrl: 'https://github.com/example/my-new-app',
  documents: createDocuments('my-new-app')
}
```

Field rules:

- `platform` must be either `'android'` or `'web'`.
- `releasedToPlayStore` must be `true` only after the app is released.
- `playStoreUrl` is optional, but it must not be set when
  `releasedToPlayStore` is `false`.
- `webLinks` is optional and supports a maximum of three links.
- `githubUrl` is optional.
- `icon` is optional. When omitted or when the image fails to load, Policy Hub
  displays the first letter of the app name.
- Always use `createDocuments('<app-id>')` to create the standard legal routes.

The Apps dropdown shows only Android apps marked as released on Google Play.
The home page uses the platform and release fields for its filters.

## 3. Add the app icon

When an icon is available, place it at:

```text
docs/public/apps/my-new-app/icon.png
```

Then set this value in the app entry:

```ts
icon: '/apps/my-new-app/icon.png'
```

The path must begin with `/apps/`. Do not include the GitHub Pages
`/policy-hub/` base prefix; VitePress adds the configured base automatically.

## 4. Write the editable content

Create this directory:

```text
docs/content/my-new-app/
```

Add all seven content files:

```text
contact.md
data-collection.md
data-deletion.md
privacy.md
store-listing.md
support.md
terms.md
```

These files are the canonical, editable sources. Portal pages and standalone
pages include them, so legal text should not be duplicated elsewhere.

Use the closest existing app under `docs/content/` as a structural reference,
but rewrite the text to match the new app's actual behavior. Use **Anand Raja**
as the developer name and `anand.official.in@gmail.com` as the contact email
unless the app requires different details.

### Store-listing format

`docs/content/my-new-app/store-listing.md` must use this exact structure:

```md
---
shortDescription: A Google Play short description of no more than 80 characters.
---

The full description starts here and must not exceed 4000 characters.

Use plain Play Store-pastable text for section names and bullet points.
```

Google Play descriptions do not support Markdown headings or Markdown bold
formatting. Keep the listing readable as plain text. The Policy Hub copy control
copies the prepared description.

## 5. Register the store-listing Markdown

This step is required. A missing registration causes the production build to
fail with `Missing store listing for app: <app-id>`.

In `docs/.vitepress/data/store-listings.ts`, import the Markdown source:

```ts
import myNewAppSource from '../../content/my-new-app/store-listing.md?raw'
```

Then add it to `listingSources`:

```ts
const listingSources: Record<string, string> = {
  // Existing entries...
  'my-new-app': myNewAppSource
}
```

The key must exactly match the ID in `apps.ts`.

## 6. Add Policy Hub portal pages

Create this directory:

```text
docs/apps/my-new-app/
```

For every app, add:

```text
index.md
contact.md
data-collection.md
data-deletion.md
privacy.md
store-listings.md
support.md
terms.md
```

For Android apps, also add:

```text
release-notes.md
```

The overview file is minimal:

```md
---
title: My New App
description: Privacy, terms, support, and app information for My New App.
aside: false
---

<AppOverview app-id="my-new-app" />
```

Each legal portal page must include `AppBreadcrumbs`, `AppSubnav`, a
`CopyStandaloneUrl`, and its matching source from `docs/content/my-new-app/`.
Copy a corresponding page from an existing app and replace every app ID, name,
title, description, include path, and standalone path.

The store-listing page must render:

```md
<StoreListings app-id="my-new-app" />
```

For an Android app, the release-notes page must render the shared formatter:

```md
<ReleaseNotesFormatter app-name="My New App" />
```

Release notes are entered at runtime; no app-specific release-note data file is
required.

## 7. Add standalone legal pages

Create one wrapper in each standard standalone directory:

```text
docs/privacy/my-new-app.md
docs/terms/my-new-app.md
docs/support/my-new-app.md
docs/data-collection/my-new-app.md
docs/data-deletion/my-new-app.md
docs/contact/my-new-app.md
```

Standalone pages are intended for Google Play and direct public links. They
must disable the Policy Hub navigation, sidebar, footer, page navigation, edit
link, and last-updated UI. Example:

```md
---
title: My New App Privacy Policy
description: Official Privacy Policy for My New App.
navbar: false
sidebar: false
aside: false
outline: false
footer: false
prev: false
next: false
editLink: false
lastUpdated: false
pageClass: standalone-policy
---

<!--@include: ../content/my-new-app/privacy.md-->
```

Change the title, description, and include filename for the other document
types.

## 8. Verify every route and limit

Expected portal routes include:

```text
/apps/my-new-app/
/apps/my-new-app/store-listings
/apps/my-new-app/privacy
/apps/my-new-app/terms
/apps/my-new-app/support
/apps/my-new-app/data-collection
/apps/my-new-app/data-deletion
/apps/my-new-app/contact
```

Android apps also have:

```text
/apps/my-new-app/release-notes
```

Expected standalone routes include:

```text
/privacy/my-new-app
/terms/my-new-app
/support/my-new-app
/data-collection/my-new-app
/data-deletion/my-new-app
/contact/my-new-app
```

Before committing, verify:

- The app ID is identical in every path, component prop, registry key, and
  `createDocuments()` call.
- The short Play Store description contains 1–80 characters.
- The full Play Store description contains 1–4000 characters.
- There are no more than three web links.
- A Play Store URL is present only for a released Android app.
- The icon loads locally and through the configured GitHub Pages base.
- Every legal portal page opens its matching standalone URL.
- Policy statements agree with the released app's actual permissions and data
  behavior.

Run:

```bash
npm run typecheck
npm run docs:build
```

Optionally inspect the production build locally:

```bash
npm run docs:preview
```

The build validates that every registered app has exactly one valid store
listing. Do not publish when the build reports a missing or unknown app ID.

## File checklist

For an Android app with an icon, the complete addition normally contains:

```text
docs/.vitepress/data/apps.ts                         # edit
docs/.vitepress/data/store-listings.ts               # edit
docs/public/apps/my-new-app/icon.png                 # add
docs/content/my-new-app/contact.md                   # add
docs/content/my-new-app/data-collection.md           # add
docs/content/my-new-app/data-deletion.md             # add
docs/content/my-new-app/privacy.md                   # add
docs/content/my-new-app/store-listing.md             # add
docs/content/my-new-app/support.md                   # add
docs/content/my-new-app/terms.md                     # add
docs/apps/my-new-app/index.md                        # add
docs/apps/my-new-app/contact.md                      # add
docs/apps/my-new-app/data-collection.md              # add
docs/apps/my-new-app/data-deletion.md                # add
docs/apps/my-new-app/privacy.md                      # add
docs/apps/my-new-app/release-notes.md                # add for Android
docs/apps/my-new-app/store-listings.md               # add
docs/apps/my-new-app/support.md                      # add
docs/apps/my-new-app/terms.md                        # add
docs/contact/my-new-app.md                           # add
docs/data-collection/my-new-app.md                   # add
docs/data-deletion/my-new-app.md                     # add
docs/privacy/my-new-app.md                           # add
docs/support/my-new-app.md                           # add
docs/terms/my-new-app.md                             # add
```

No new npm package is normally required to add an app.
