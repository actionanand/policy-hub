# Privacy Policy for LocalTell

**Effective Date:** September 24, 2026  
**Last Updated:** September 24, 2026

## Overview

LocalTell is an offline-first Android app developed by **Anand Raja**. It uses serving cellular network identifiers to estimate an approximate locality from an offline data pack installed on your device. It has no account, advertising, analytics, tracking, or developer-operated cloud service.

## Information processed on your device

After you grant Android's location permission, LocalTell can read registered serving-cell information supplied by Android: radio technology, mobile country code, mobile network code, area code, cell identifier, and signal strength. It uses this information locally to match an approximate area in a downloaded offline SQLite pack.

LocalTell does not request or read GPS coordinates. Android treats access to cell identifiers as location-sensitive, which is why Android requires location permission before it exposes this information.

If you use Journey mode, LocalTell stores a local history of approximate-area matches. An entry includes its timestamp, approximate area, optional district and state, radio technology, network code, cell identifier, and confidence. Offline pack preferences and installed-pack metadata are also kept in app-private storage.

## Network use and offline packs

Internet access is used only to retrieve the published offline-pack manifest, download a pack you choose, and periodically check for pack updates. Pack URLs use HTTPS and downloaded packs are checked before use. Serving-cell data, Journey history, and approximate-area results are not sent to the developer as part of these requests.

## Permissions

LocalTell may use the following Android permissions:

- Precise and approximate location permission, only so Android can provide serving cellular identifiers; LocalTell does not obtain GPS coordinates.
- Internet permission for optional offline-pack downloads and update checks.
- Foreground-service and foreground-service-location permissions for optional Journey mode, which periodically checks the serving cellular network while you have started the service.
- Notification permission on Android versions that require it, only to show the ongoing Journey foreground-service notification.

You can deny or revoke permissions in Android settings. Without location permission, LocalTell cannot read cell identifiers or resolve an approximate area. Journey mode requires cell access and, where applicable, notification permission.

## Sharing and external services

When you choose Share, LocalTell places a sentence containing the approximate area result into the Android share sheet. The app or service you select handles that text under its own privacy policy. LocalTell does not automatically share results.

## Retention and deletion

Data remains on your device until you remove it. You can remove an installed offline pack in the Offline data screen and clear Journey history in the Journey screen. Clearing LocalTell's storage in Android settings or uninstalling LocalTell removes its app-private data, including downloaded packs and Journey history. Android backup and device-transfer rules exclude LocalTell app data.

The developer does not hold an account or cloud copy of this data, so there is no developer-held app data to delete by email. Support email contains only the information you choose to send.

## Children's privacy and policy changes

LocalTell is not designed to collect children's personal information through a developer-operated service. This policy may change if the app's features or data practices change; the dates above will be updated when a revised policy is published.

## Contact

- **Developer:** Anand Raja
- **Email:** anand.official.in@gmail.com

