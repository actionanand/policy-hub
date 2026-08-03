# Personix Data Collection

**Last reviewed:** August 3, 2026

## Data stored locally

Personix stores text-based saved-content records, family and health references, vehicle details, notes, checklists, and settings locally in SQLite on Android or IndexedDB in a browser. The developer does not automatically receive these records.

## Network processing

Android can contact saved websites directly to retrieve preview metadata. Browser metadata fetching is optional, disabled by default, and uses `api.microlink.io` when enabled. Opening or embedding third-party content connects to the applicable content provider.

## Device access

Personix does not access the camera or collect photo, video, or audio attachments. A system file flow is used only when you choose to import or export an encrypted backup. Optional biometric unlock is handled by Android without providing biometric templates to Personix.

## Advertising and analytics

Personix has no advertising, developer-operated analytics, or tracking service.

## Contact

Questions can be sent to **anand.official.in@gmail.com**.
