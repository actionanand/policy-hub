# MetroPocket Data Collection

**Last reviewed:** October 13, 2026

## On-device data

MetroPocket stores installed metro and TV data packs, pack metadata, and a theme preference in local browser/WebView storage. Route planning, station searches, and TV channel lookups are processed on the device. The web app may cache its files for offline use. It does not request GPS/location, contacts, camera, microphone, phone-state, notifications, or broad storage access.

## Network requests

When you open **Offline Data**, the app requests a public manifest to check pack availability and updates. It downloads a pack only after you choose to install one. The web app also loads its files from its hosting service. The developer does not receive your selected route, station, search, or channel lookup as part of these requests. Hosting providers can process ordinary network connection data under their own policies.

## Data received by the developer

MetroPocket has no account, ads, developer-operated analytics, tracking SDK, or developer-operated cloud database. The developer does not receive locally stored packs, route choices, or channel lookups. If you contact support, the developer receives only the information you send in your email.

## Google Play Data safety context

This describes the current app behavior, not a permanent Play Console declaration. Review the actual shipped app and every release before submitting or updating Google Play Data safety answers.
